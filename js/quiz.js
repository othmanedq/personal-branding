/* === QUIZ DATA === */
const questions = [
  { q: "Who scored the winning goal in the 2010 World Cup final?",
    opts: ["Xavi", "David Villa", "Andres Iniesta", "Fernando Torres"],
    correct: 2, fact: "Iniesta. 116th minute. South Africa. Immortal." },
  { q: "Which club has won the most UEFA Champions League titles?",
    opts: ["Bayern Munich", "AC Milan", "Real Madrid", "Barcelona"],
    correct: 2, fact: "Real Madrid. 15 titles. Nobody comes close." },
  { q: "How many Ballon d'Or awards has Messi won?",
    opts: ["6", "7", "8", "9"],
    correct: 2, fact: "8. The GOAT debate is officially closed." },
  { q: "Who scored Morocco's winning goal vs Portugal in the 2022 WC quarter-final?",
    opts: ["Hakimi", "En-Nesyri", "Boufal", "Amrabat"],
    correct: 1, fact: "En-Nesyri. A header at the 42nd minute. The night I lost my voice for three days." },
  { q: "Who was the top scorer at the 2006 World Cup?",
    opts: ["Ronaldo", "Zidane", "Miroslav Klose", "Thierry Henry"],
    correct: 2, fact: "Klose with 5 goals. He'd finish his WC career with 16. all-time record." },
  { q: "Which Italian club has won the most Serie A titles?",
    opts: ["AC Milan", "Inter Milan", "Juventus", "Roma"],
    correct: 2, fact: "Juventus. 36 Scudetti. Even after their point deductions." },
  { q: "What was the score when Morocco knocked out Spain in the 2022 WC round of 16?",
    opts: ["1-0", "0-0 (3-0 pens)", "2-1 AET", "1-0 AET"],
    correct: 1, fact: "0-0 after 120 minutes. 3-0 on pens. Bono barely had to move." },
  { q: "In what year did Barca win their first treble under Guardiola?",
    opts: ["2008", "2009", "2010", "2011"],
    correct: 1, fact: "2009. La Liga, Copa del Rey, Champions League. The greatest team ever assembled." },
  { q: "How many times has Morocco won the Africa Cup of Nations?",
    opts: ["Once", "Twice", "Three times", "Never"],
    correct: 1, fact: "Twice. 1976 as hosts. Then 2025. The second one was complicated. But we're champions." },
  { q: "Who is La Liga's all-time top scorer?",
    opts: ["Cristiano Ronaldo", "Raul", "Telmo Zarra", "Lionel Messi"],
    correct: 3, fact: "Messi. 474 goals in La Liga. In a different league from everyone else." }
];

const FACE = {
  smirk:    'assets/images/face-smirk.png',
  neutral:  'assets/images/face-neutral.png',
  crossed:  'assets/images/face-crossed.png',
  angry:    'assets/images/face-angry.png',
  shocked:  'assets/images/face-shocked.png',
  sad:      'assets/images/face-sad.png',
  laughing: 'assets/images/face-laughing.png',
  cool:     'assets/images/face-cool.png',
};

const reactions = [
  { face: FACE.smirk,   text: '"Go ahead. I dare you."' },
  { face: FACE.neutral, text: '"Lucky. Don\'t get comfortable."' },
  { face: FACE.crossed, text: '"Okay... you know a thing or two."' },
  { face: FACE.crossed, text: '"This is getting annoying."' },
  { face: FACE.angry,   text: '"Fine. You\'re decent."' },
  { face: FACE.angry,   text: '"This cannot be happening."' },
  { face: FACE.shocked, text: '"Who ARE you?!"' },
  { face: FACE.sad,     text: '"I hate this. Respect."' },
  { face: FACE.sad,     text: '"You\'re embarrassing me."' },
  { face: FACE.shocked, text: '"You\'re on my level. Barely."' }
];

const badReactions = [
  { face: FACE.laughing, text: '"I expected this from you."' },
  { face: FACE.cool,     text: '"This is too easy."' },
  { face: FACE.cool,     text: '"You\'re proving my point."' },
  { face: FACE.neutral,  text: '"Keep going... please."' },
  { face: FACE.laughing, text: '"Basic football knowledge. Come on."' }
];

let currentQ = 0, score = 0, answered = [], userAnswers = [];

/* === AUDIO === */
let _quizCtx = null;
function _qctx() {
  if (!_quizCtx) _quizCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (_quizCtx.state === 'suspended') _quizCtx.resume();
  return _quizCtx;
}

function playCorrect() {
  try {
    const ctx = _qctx();
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(880, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1320, ctx.currentTime + 0.12);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.start(); osc.stop(ctx.currentTime + 0.35);
  } catch (e) {}
}

function playWrong() {
  try {
    const ctx = _qctx();
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(240, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(90, ctx.currentTime + 0.25);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
    osc.start(); osc.stop(ctx.currentTime + 0.35);
  } catch (e) {}
}

/* === RENDER ONE QUESTION === */
function renderQuestion(idx) {
  const q    = questions[idx];
  const area = document.getElementById('questions-list');
  const isLast = idx === questions.length - 1;

  const card = document.createElement('div');
  card.className = 'question-card';
  card.id = 'current-card';
  card.innerHTML = `
    <div class="q-number">Question ${idx + 1} <span style="color:var(--muted)">/ ${questions.length}</span></div>
    <div class="q-text">${q.q}</div>
    <div class="q-options" id="current-opts">
      ${q.opts.map((o, j) => `<button class="q-option" onclick="answer(${j})">${o}</button>`).join('')}
    </div>
    <div class="q-feedback" id="current-feedback"></div>
    <button class="next-btn" id="next-btn" onclick="nextQuestion()">
      ${isLast ? 'See Results' : 'Next Question'} &rarr;
    </button>
  `;

  area.innerHTML = '';
  area.appendChild(card);
  if (typeof gsap !== 'undefined') {
    gsap.fromTo(card, { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 0.38, ease: 'power3.out' });
  }
}

/* === ANSWER === */
function answer(optIdx) {
  if (answered.includes(currentQ)) return;
  answered.push(currentQ);
  userAnswers[currentQ] = optIdx;

  const q    = questions[currentQ];
  const card = document.getElementById('current-card');
  const opts = card.querySelectorAll('.q-option');
  const fb   = document.getElementById('current-feedback');
  const btn  = document.getElementById('next-btn');

  opts.forEach(o => o.disabled = true);

  const isCorrect = optIdx === q.correct;
  if (isCorrect) score++;

  opts[q.correct].classList.add('correct');
  if (!isCorrect) opts[optIdx].classList.add('wrong');

  fb.textContent = q.fact;
  fb.style.color = isCorrect ? 'var(--success)' : 'var(--red)';
  fb.classList.add('fb-visible');

  card.classList.add(isCorrect ? 'flash-correct' : 'flash-wrong');
  setTimeout(() => card.classList.remove('flash-correct', 'flash-wrong'), 600);
  isCorrect ? playCorrect() : playWrong();

  const step = document.getElementById('ps-' + currentQ);
  if (step) step.classList.add(isCorrect ? 'correct' : 'wrong');

  updateReaction();
  updateScore();

  btn.classList.add('btn-visible');
}

/* === NEXT === */
function nextQuestion() {
  const card = document.getElementById('current-card');
  if (typeof gsap !== 'undefined') {
    card.classList.add('card-exit');
    gsap.to(card, {
      x: -80, opacity: 0, duration: 0.28, ease: 'power2.in',
      onComplete: () => { currentQ++; currentQ >= questions.length ? showFinal() : renderQuestion(currentQ); }
    });
  } else {
    card.classList.add('card-exit');
    setTimeout(() => { currentQ++; currentQ >= questions.length ? showFinal() : renderQuestion(currentQ); }, 280);
  }
}

/* === REACTION === */
function updateReaction() {
  const pct  = score / Math.max(answered.length, 1);
  const faceEl = document.getElementById('reaction-emoji');
  const text   = document.getElementById('reaction-text');

  let r = pct >= 0.7
    ? reactions[Math.min(Math.floor(score), reactions.length - 1)]
    : badReactions[Math.min(answered.length - score, badReactions.length - 1)];

  faceEl.style.transform = 'scale(1.08)';
  setTimeout(() => faceEl.style.transform = '', 300);

  const img = faceEl.querySelector('img');
  if (img) img.src = r.face;
  text.textContent = r.text;
}

function updateScore() {
  document.getElementById('score-display').textContent = score + ' / ' + answered.length;
}

/* === FINAL === */
function showFinal() {
  document.getElementById('quiz-container').style.display = 'none';
  const fs  = document.getElementById('final-screen');
  fs.style.display = 'block';
  const pct = score / questions.length;

  let title, sub;
  if (pct === 1)      { title = 'Perfect. Who sent you?';         sub = "You're on Othmane's level. Officially."; }
  else if (pct >= 0.8){ title = 'Impressive. Barely.';            sub = score + '/10. Solid. Now go away.'; }
  else if (pct >= 0.6){ title = 'Not bad. Not great.';            sub = score + '/10. Watch more Serie A.'; }
  else if (pct >= 0.4){ title = 'Bro...';                         sub = score + '/10. Highlights-only viewer.'; }
  else                { title = 'This was painful to watch.';     sub = score + '/10. Delete your football opinions.'; }

  document.getElementById('final-score-num').innerHTML  = score + '<span>/' + questions.length + '</span>';
  document.getElementById('final-title').textContent    = title;
  document.getElementById('final-subtitle').textContent = sub;

  const list = document.getElementById('breakdown-list');
  list.innerHTML = '';
  questions.forEach((q, i) => {
    const isCorrect = userAnswers[i] === q.correct;
    const item = document.createElement('div');
    item.className = 'breakdown-item ' + (isCorrect ? 'correct' : 'wrong');
    item.innerHTML = `
      <span class="breakdown-mark">${isCorrect ? 'OK' : 'X'}</span>
      <span class="breakdown-qnum">Q${i + 1}</span>
      <span class="breakdown-qlabel">${q.q}</span>
    `;
    list.appendChild(item);
  });
}

/* === RESTART === */
function restartQuiz() {
  score = 0; answered = []; userAnswers = []; currentQ = 0;
  document.querySelectorAll('.progress-step').forEach(s => { s.className = 'progress-step'; });
  document.getElementById('final-screen').style.display   = 'none';
  document.getElementById('quiz-container').style.display = 'block';
  document.querySelector('#reaction-emoji img').src = FACE.smirk;
  document.getElementById('reaction-text').textContent   = '"Go ahead. I dare you."';
  document.getElementById('score-display').textContent    = '0 / 0';
  renderQuestion(0);
}

/* === INIT === */
(function buildProgressSteps() {
  const steps = document.getElementById('progress-steps');
  questions.forEach((_, i) => {
    const s = document.createElement('div');
    s.className = 'progress-step'; s.id = 'ps-' + i;
    s.textContent = i + 1;
    steps.appendChild(s);
  });
})();

renderQuestion(0);
