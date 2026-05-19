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

/* === SOUNDS === */
let _audioCtx = null;
function _ctx() {
  if (!_audioCtx) _audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

function playAfconYes() {
  try {
    const ctx = _ctx();
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
  try {
    const ctx = _ctx();
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
  try {
    const ctx = _ctx();
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
    faceImg.src         = 'assets/images/face-smirk.png';
    modal.classList.remove('trash');
  } else {
    verdict.style.color = 'var(--red)';
    verdict.textContent = 'Senegal. SENEGAL. The audacity.';
    prompt.textContent  = 'Redemption or exit?';
    faceImg.src         = 'assets/images/face-angry.png';
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

