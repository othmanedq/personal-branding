/* === GSAP === */
if (typeof gsap !== 'undefined') {
  if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);
  if (typeof ScrambleTextPlugin !== 'undefined') gsap.registerPlugin(ScrambleTextPlugin);
}

/* === CURSOR === */
const cursor = document.getElementById('cursor');
const follower = document.getElementById('cursor-follower');

if (cursor && follower && window.matchMedia('(hover: hover)').matches && typeof gsap !== 'undefined') {
  gsap.set(cursor,   { xPercent: -50, yPercent: -50 });
  gsap.set(follower, { xPercent: -50, yPercent: -50 });

  const xTo = gsap.quickTo(follower, 'x', { duration: 0.5, ease: 'power3' });
  const yTo = gsap.quickTo(follower, 'y', { duration: 0.5, ease: 'power3' });

  document.addEventListener('mousemove', e => {
    gsap.set(cursor, { x: e.clientX, y: e.clientY });
    xTo(e.clientX);
    yTo(e.clientY);
  });

  document.querySelectorAll('button, a').forEach(el => {
    el.addEventListener('mouseenter', () => { gsap.to(cursor, { scale: 2, duration: 0.2 }); gsap.to(follower, { scale: 1.5, duration: 0.2 }); });
    el.addEventListener('mouseleave', () => { gsap.to(cursor, { scale: 1, duration: 0.2 }); gsap.to(follower, { scale: 1, duration: 0.2 }); });
  });
} else if (cursor && follower) {
  cursor.style.display = 'none';
  follower.style.display = 'none';
}

/* === NAV (appears after hero leaves viewport) === */
const nav  = document.getElementById('main-nav');
const hero = document.getElementById('hero');
if (hero && nav) {
  const heroObs = new IntersectionObserver(([entry]) => {
    nav.classList.toggle('visible', !entry.isIntersecting);
  }, { threshold: 0 });
  heroObs.observe(hero);
}

/* === SOUNDS & MUTE CONTROLS === */
let isMuted = localStorage.getItem('portfolio-muted') === 'true';

function updateMuteButtonsUI() {
  const btns = document.querySelectorAll('.audio-mute-btn');
  btns.forEach(btn => {
    const wave = btn.querySelector('.sound-wave');
    if (isMuted) {
      btn.classList.add('muted');
      btn.setAttribute('aria-label', 'Unmute sound');
      if (wave) wave.style.opacity = '0';
    } else {
      btn.classList.remove('muted');
      btn.setAttribute('aria-label', 'Mute sound');
      if (wave) wave.style.opacity = '1';
    }
  });
}

function toggleMute() {
  isMuted = !isMuted;
  localStorage.setItem('portfolio-muted', isMuted ? 'true' : 'false');
  updateMuteButtonsUI();
  
  if (isMuted) {
    if (typeof stopStadiumAmbiance === 'function') stopStadiumAmbiance();
  } else {
    if (typeof startStadiumAmbiance === 'function') startStadiumAmbiance();
  }
}

// Initialise mute on run
document.addEventListener('DOMContentLoaded', updateMuteButtonsUI);

let _audioCtx = null;
function _ctx() {
  if (isMuted) return null;
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

function playAfconYes() {
  if (isMuted) return;
  try {
    const ctx = _ctx();
    if (!ctx) return;
    // Triumphant arpeggio: C5 E5 G5 C6
    [523, 659, 784, 1047].forEach((freq, i) => {
      const osc = ctx.createOscillator(), gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine';
      osc.frequency.value = freq;
      const t = ctx.currentTime + i * 0.1;
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.28, t + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
      osc.start(t); osc.stop(t + 0.45);
    });
  } catch(e) {}
}

function playAfconNo() {
  if (isMuted) return;
  try {
    const ctx = _ctx();
    if (!ctx) return;
    // Harsh buzzer — descending sawtooth
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(280, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(60, ctx.currentTime + 0.6);
    gain.gain.setValueAtTime(0.35, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.7);
    osc.start(); osc.stop(ctx.currentTime + 0.7);
  } catch(e) {}
}

function playModalSelect() {
  if (isMuted) return;
  try {
    const ctx = _ctx();
    if (!ctx) return;
    const osc = ctx.createOscillator(), gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(900, ctx.currentTime + 0.1);
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.2);
    osc.start(); osc.stop(ctx.currentTime + 0.2);
  } catch(e) {}
}

/* === SCREEN FLASH === */
function flash(type) {
  const el = document.getElementById('screen-flash');
  el.className = 'screen-flash flash-' + type;
  setTimeout(() => el.className = 'screen-flash', 500);
}

/* === VIDEO OVERLAY === */
let _pendingAgree = null;
let _autoplayFallback = null;

function playVideoThen(src, agree) {
  const overlay = document.getElementById('video-overlay');
  const player  = document.getElementById('video-player');
  const source  = document.getElementById('video-source');

  _pendingAgree = agree;
  source.src = src;
  player.load();

  overlay.classList.add('active');
  overlay.removeAttribute('aria-hidden');

  // Fallback: if video doesn't start within 2.5s, skip it automatically
  _autoplayFallback = setTimeout(skipVideo, 2500);
  player.onplay = () => { clearTimeout(_autoplayFallback); _autoplayFallback = null; };

  player.play().catch(() => {});
  player.onended = skipVideo;
}

function skipVideo() {
  clearTimeout(_autoplayFallback);
  _autoplayFallback = null;

  const overlay = document.getElementById('video-overlay');
  const player  = document.getElementById('video-player');
  player.pause();
  overlay.classList.remove('active');
  overlay.setAttribute('aria-hidden', 'true');
  openChoiceModal(_pendingAgree);
}

/* === AFCON MODAL === */
function canResponse(agree) {
  document.querySelectorAll('.can-btn').forEach(b => b.disabled = true);
  flash(agree ? 'gold' : 'red');

  if (!agree) {
    const canBox = document.querySelector('.can-box');
    if (canBox) { canBox.style.animation = 'shake 0.5s ease'; setTimeout(() => canBox.style.animation = '', 500); }
  }

  setTimeout(() => {
    playVideoThen(agree ? 'assets/brahim.mp4' : 'assets/senegal.mp4', agree);
  }, 300);
}

function openChoiceModal(agree) {
  const modal   = document.getElementById('choice-modal');
  const verdict = document.getElementById('choice-verdict');
  const prompt  = document.getElementById('choice-prompt');
  const faceImg = document.getElementById('choice-face-img');

  if (agree) {
    verdict.style.color = 'var(--success)';
    verdict.textContent = 'My brother. The rules are the rules.';
    prompt.textContent  = 'Now choose.';
    faceImg.src         = 'assets/images/face-smirk.webp';
    modal.classList.remove('trash');
  } else {
    verdict.style.color = 'var(--red)';
    verdict.textContent = 'Senegal. SENEGAL. The audacity.';
    prompt.textContent  = 'Redemption or exit?';
    faceImg.src         = 'assets/images/face-angry.webp';
    modal.classList.add('trash');
  }

  modal.classList.add('active');
  modal.removeAttribute('aria-hidden');
}

function goTo(sectionId) {
  playModalSelect();
  closeModal();
  setTimeout(() => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  }, 320);
}

function closeModal() {
  const modal = document.getElementById('choice-modal');
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.querySelectorAll('.can-btn').forEach(b => b.disabled = false);
}

const _choiceModal = document.getElementById('choice-modal');
if (_choiceModal) _choiceModal.addEventListener('click', function(e) {
  if (e.target === this) closeModal();
});

/* === HERO NAME SCRAMBLE === */
const nameLine1 = document.getElementById('name-line-1');
const nameLine2 = document.getElementById('name-line-2');
if (nameLine1 && nameLine2 && typeof gsap !== 'undefined') {
  gsap.set('.hero-name', { opacity: 1 });
  if (typeof ScrambleTextPlugin !== 'undefined') {
    gsap.to(nameLine1, { duration: 1.4, scrambleText: { text: 'OTHMANE',  chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', speed: 0.45 }, delay: 0.35, ease: 'none' });
    gsap.to(nameLine2, { duration: 1.4, scrambleText: { text: 'EDDAQQAQ', chars: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', speed: 0.45 }, delay: 0.55, ease: 'none' });
  } else {
    gsap.to('.hero-name', { opacity: 1, y: 0, duration: 0.8, delay: 0.4, ease: 'power3.out' });
  }
}

/* === SCROLL REVEAL === */
if (typeof ScrollTrigger !== 'undefined') {
  const delays = { 'reveal-delay-1': 0.1, 'reveal-delay-2': 0.22, 'reveal-delay-3': 0.38, 'reveal-delay-4': 0.5 };
  document.querySelectorAll('.reveal').forEach(el => {
    const delay = Object.entries(delays).find(([cls]) => el.classList.contains(cls))?.[1] ?? 0;
    gsap.fromTo(el,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true }
      }
    );
  });
} else {
  document.querySelectorAll('.reveal').forEach(el => { el.style.opacity = 1; el.style.transform = 'none'; });
}

/* === STATS COUNTER === */
function animateCounter(el, target, suffix) {
  const duration = 1600;
  const start = performance.now();
  const update = now => {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(update);
}

if (typeof ScrollTrigger !== 'undefined') {
  /* Single stat counter — 827 */
  const singleStatEl = document.querySelector('.single-stat-num');
  if (singleStatEl) {
    ScrollTrigger.create({
      trigger: singleStatEl, start: 'top 70%', once: true,
      onEnter: () => {
        const block = singleStatEl.closest('.single-stat-block');
        if (block && !block.classList.contains('counted')) {
          block.classList.add('counted');
          const plusEl = singleStatEl.querySelector('.single-stat-plus');
          const textNode = singleStatEl.childNodes[0];
          const duration = 2000;
          const start = performance.now();
          const update = now => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 2);
            if (textNode) textNode.textContent = Math.floor(eased * 827);
            if (progress < 1) requestAnimationFrame(update);
            else if (textNode) textNode.textContent = '827';
          };
          requestAnimationFrame(update);
        }
      }
    });
  }

  /* Moment cards auto-scroll */
  const momentsTrack = document.querySelector('.moments-track');
  if (momentsTrack) {
    momentsTrack.innerHTML += momentsTrack.innerHTML;
    const totalWidth = momentsTrack.scrollWidth / 2;
    const ticker = gsap.to(momentsTrack, {
      x: -totalWidth,
      duration: totalWidth / 80,
      ease: 'none',
      repeat: -1,
      paused: true
    });
    ScrollTrigger.create({
      trigger: '.moments-timeline',
      start: 'top 85%',
      once: true,
      onEnter: () => ticker.play()
    });
    const timeline = document.querySelector('.moments-timeline');
    timeline.addEventListener('mouseenter', () => ticker.pause());
    timeline.addEventListener('mouseleave', () => ticker.play());
  }
}

/* === ODDS SIMULATOR === */
let awayBiasActive = true;

function updateOddsSim() {
  const homeSlider = document.getElementById('home-form');
  const awaySlider = document.getElementById('away-form');
  if (!homeSlider || !awaySlider) return;

  const homeVal = parseFloat(homeSlider.value);
  const awayVal = parseFloat(awaySlider.value);

  // Update slider value text labels
  const homeValEl = document.getElementById('val-home-form');
  const awayValEl = document.getElementById('val-away-form');
  if (homeValEl) homeValEl.textContent = homeVal;
  if (awayValEl) awayValEl.textContent = awayVal;

  // Calculate Model Probability: Away win as a percentage of total forms
  const pModel = (awayVal / (homeVal + awayVal)) * 100;
  
  // Bookmaker Implied Probability with systematic p = 0.028 bias correction
  const pBookie = awayBiasActive ? Math.max(5, pModel - 2.8) : pModel;

  // Animate the text values beautifully using GSAP count-ups
  const modelDisp = document.getElementById('model-prob-display');
  const bookieDisp = document.getElementById('bookie-prob-display');
  
  if (modelDisp && bookieDisp) {
    const currentModelVal = parseFloat(modelDisp.textContent) || 0;
    const currentBookieVal = parseFloat(bookieDisp.textContent) || 0;

    const animObj = { mVal: currentModelVal, bVal: currentBookieVal };
    gsap.to(animObj, {
      mVal: pModel,
      bVal: pBookie,
      duration: 0.45,
      ease: 'power2.out',
      onUpdate: () => {
        modelDisp.textContent = animObj.mVal.toFixed(1) + '%';
        bookieDisp.textContent = animObj.bVal.toFixed(1) + '%';
      }
    });
  }

  // Animate gauges: Circumference is 251.2
  const circ = 251.2;
  const offsetModel = circ * (1 - pModel / 100);
  const offsetBookie = circ * (1 - pBookie / 100);

  gsap.to('#model-gauge', { strokeDashoffset: offsetModel, duration: 0.45, ease: 'power2.out' });
  gsap.to('#bookie-gauge', { strokeDashoffset: offsetBookie, duration: 0.45, ease: 'power2.out' });

  // Verdict update
  const verdictEl = document.getElementById('odds-sim-verdict');
  if (verdictEl) {
    if (awayBiasActive) {
      verdictEl.textContent = "Away win is underpriced by Bookmakers (Value Bet! Discrepancy: +2.8%)";
      verdictEl.style.color = 'var(--success)';
    } else {
      verdictEl.textContent = "Market in equilibrium (No discrepancy).";
      verdictEl.style.color = 'var(--white)';
    }
  }

  // Update step-by-step mathematical logic breakdown
  const formulaEl = document.getElementById('odds-sim-formula-text');
  if (formulaEl) {
    formulaEl.innerHTML = `My Predicted Chance = ${awayVal.toFixed(1)}% / (${homeVal.toFixed(1)}% + ${awayVal.toFixed(1)}%) = ${pModel.toFixed(1)}%<br>` +
                          `Bookmaker's Chance = ${pModel.toFixed(1)}% ${awayBiasActive ? '- 2.8% (betting edge adjustment)' : ' (no adjustment)'} = ${pBookie.toFixed(1)}%<br>` +
                          `<span style="color: var(--gold); font-weight: 700; font-family: 'Barlow Condensed', sans-serif; text-transform: uppercase; font-size: 0.85rem; display: block; margin-top: 0.8rem; margin-bottom: 0.2rem;">Simple Explanation:</span>` +
                          `<span style="font-family: 'Barlow', sans-serif; font-size: 0.82rem; color: var(--muted); font-weight: 300; line-height: 1.4; display: block;">` +
                          `Our math predicts the away team has a <strong>${pModel.toFixed(1)}%</strong> chance of winning. ` +
                          `But bookmakers only price them at a <strong>${pBookie.toFixed(1)}%</strong> chance. ` +
                          `${awayBiasActive ? `Because the bookmaker underestimates the away team, they are paying out <strong>more money than they should</strong>. This represents a <strong>Value Bet</strong> with a clear winning edge for you!` : 'Without our smart adjustment, the prediction matches standard bookmaker expectations.'}</span>`;
  }
}

function toggleAwayBias() {
  awayBiasActive = !awayBiasActive;
  const btn = document.getElementById('away-bias-btn');
  const statusLabel = document.getElementById('val-away-bias');
  
  if (btn && statusLabel) {
    if (awayBiasActive) {
      btn.classList.add('active');
      btn.textContent = 'Applied (p = 0.028)';
      statusLabel.textContent = 'Active';
    } else {
      btn.classList.remove('active');
      btn.textContent = 'Inactive (No Adjustment)';
      statusLabel.textContent = 'Inactive';
    }
  }
  updateOddsSim();
}

/* === TACTICAI VISUALIZER === */
let tacticAutoplayInterval = null;
let currentTacticScenario = 1;
let tacticUserInteracted = false;
let tacticUserInteractionTimeout = null;

function playCornerScenario(id, isAutoplay = false) {
  // If this is a manual user interaction, flag it and start inactivity countdown to resume autoplay
  if (!isAutoplay) {
    tacticUserInteracted = true;
    if (tacticUserInteractionTimeout) clearTimeout(tacticUserInteractionTimeout);
    tacticUserInteractionTimeout = setTimeout(() => {
      tacticUserInteracted = false;
    }, 12000); // 12 seconds of manual inactivity
  }

  currentTacticScenario = id;

  // Update button active states
  [1, 2, 3].forEach(i => {
    const btn = document.getElementById('tactic-btn-' + i);
    if (btn) btn.classList.toggle('active', i === id);
  });

  // Activate/Reset active GNN neural pathways (scrolling dash effect)
  const gnnPath = document.getElementById('gnn-path-' + id);
  [1, 2, 3].forEach(i => {
    const p = document.getElementById('gnn-path-' + i);
    if (p) {
      gsap.killTweensOf(p);
      p.setAttribute('stroke', 'rgba(212,160,23,0)');
    }
  });
  
  if (gnnPath) {
    gsap.set(gnnPath, { stroke: 'var(--gold)', strokeWidth: id === 2 ? 1.8 : 1.2 });
    gsap.fromTo(gnnPath,
      { strokeDashoffset: 16 },
      { strokeDashoffset: 0, duration: 0.6, repeat: -1, ease: 'none' }
    );
  }

  // Animation parameters
  let dStr = "";
  let targetPlayerId = "";
  let explanation = "";

  if (id === 1) {
    dStr = "M 2 2 Q 35 40 60 110";
    targetPlayerId = "player-a1";
    explanation = "AI predicts the defense will leave the near-post open. Attacker A1 makes a quick run to the front post to flick the ball in, catching 2 defenders off guard.";
  } else if (id === 2) {
    dStr = "M 2 2 Q 100 50 80 150";
    targetPlayerId = "player-a2";
    explanation = "AI calculates the optimal spot to cross is near the penalty spot. Attacker A2 runs from deep with maximum power to out-jump defenders and score a header.";
  } else if (id === 3) {
    dStr = "M 2 2 Q 60 90 120 150 L 50 190";
    targetPlayerId = "player-a3";
    explanation = "AI spots an opening for a short corner. Attacker A4 draws a defender away, passing to Attacker A3 who crashes in late to shoot from a high-scoring angle.";
  }

  // Update explanation text with GSAP scramble if available, otherwise just text
  const explEl = document.getElementById('tactic-explanation');
  if (explEl) {
    if (typeof ScrambleTextPlugin !== 'undefined') {
      gsap.to(explEl, { duration: 1.0, scrambleText: { text: explanation, chars: '01', speed: 0.8 }, ease: 'none' });
    } else {
      explEl.textContent = explanation;
    }
  }

  // Animate soccer ball along the path
  const trajPath = document.getElementById('ball-trajectory');
  const ball = document.getElementById('soccer-ball');
  
  if (trajPath && ball) {
    trajPath.setAttribute('d', dStr);
    const length = trajPath.getTotalLength();
    
    // Animate trajectory path drawing
    trajPath.style.strokeDasharray = length;
    trajPath.style.strokeDashoffset = length;
    trajPath.style.opacity = 0.55;
    
    gsap.killTweensOf(trajPath);
    gsap.to(trajPath, { strokeDashoffset: 0, duration: 1.0, ease: 'power1.inOut' });

    // Reset ball position
    gsap.killTweensOf(ball);
    gsap.set(ball, { opacity: 1, cx: 2, cy: 2 });

    // Animate ball movement along the path length
    const ballAnim = { progress: 0 };
    gsap.to(ballAnim, {
      progress: 1,
      duration: 1.2,
      ease: 'power1.inOut',
      onUpdate: () => {
        const pt = trajPath.getPointAtLength(ballAnim.progress * length);
        ball.setAttribute('cx', pt.x);
        ball.setAttribute('cy', pt.y);
      },
      onComplete: () => {
        // Highlight player
        const player = document.getElementById(targetPlayerId);
        if (player) {
          gsap.to(player, {
            attr: { r: 10 },
            opacity: 1,
            duration: 0.18,
            yoyo: true,
            repeat: 1,
            ease: 'power2.out',
            onComplete: () => {
              gsap.to(player, { attr: { r: 5 }, opacity: 0.6, duration: 0.15 });
            }
          });
        }
        // Softly fade ball and trajectory
        gsap.to(ball, { opacity: 0.4, duration: 0.5 });
        gsap.to(trajPath, { opacity: 0.25, duration: 0.5 });
      }
    });
  }
}

function startTacticAutoplay() {
  if (tacticAutoplayInterval) clearInterval(tacticAutoplayInterval);
  tacticAutoplayInterval = setInterval(() => {
    if (!tacticUserInteracted) {
      currentTacticScenario = (currentTacticScenario % 3) + 1;
      playCornerScenario(currentTacticScenario, true);
    }
  }, 6000);
}

function stopTacticAutoplay() {
  if (tacticAutoplayInterval) {
    clearInterval(tacticAutoplayInterval);
    tacticAutoplayInterval = null;
  }
}

// Initialize components on load
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('home-form')) {
    updateOddsSim();
  }
  if (document.getElementById('ball-trajectory')) {
    playCornerScenario(1, true); // Initial play marked as autoplay
    
    // Set up viewport-aware scroll trigger for TacticAI corner visualizer
    if (typeof ScrollTrigger !== 'undefined' && document.querySelector('.tacticai-container')) {
      ScrollTrigger.create({
        trigger: '.tacticai-container',
        start: 'top 85%',
        end: 'bottom 15%',
        onEnter: () => startTacticAutoplay(),
        onEnterBack: () => startTacticAutoplay(),
        onLeave: () => stopTacticAutoplay(),
        onLeaveBack: () => stopTacticAutoplay()
      });
    } else {
      startTacticAutoplay();
    }
  }
});



