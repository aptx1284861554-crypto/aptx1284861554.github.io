// ====== 导航栏滚动效果 ======
const navbar = document.getElementById('navbar');
function handleScroll() {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}
window.addEventListener('scroll', handleScroll, { passive: true });

// ====== 移动端菜单 ======
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');

mobileToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// 点击链接后关闭菜单
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// 点击外部关闭菜单
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
    navLinks.classList.remove('open');
  }
});

// ====== 平滑滚动（兼容旧浏览器） ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = navbar.offsetHeight + 20;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ====== 产品筛选 ======
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    productCards.forEach((card, index) => {
      const category = card.dataset.category;
      const shouldShow = filter === 'all' || category === filter;

      if (shouldShow) {
        card.classList.remove('hidden');
        card.style.animation = `fadeIn 0.4s ease ${index * 0.08}s both`;
      } else {
        card.classList.add('hidden');
        card.style.animation = '';
      }
    });
  });
});

// ====== 图片灯箱 ======
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightboxContent');
const lightboxClose = document.getElementById('lightboxClose');

document.querySelectorAll('.product-zoom').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const card = btn.closest('.product-card');
   const img = card.querySelector('.product-img');
    if (img) {
      lightboxContent.innerHTML = `<img src="${img.src}" alt="${img.alt}" style="max-width:80vw;max-height:80vh;border-radius:16px;object-fit:contain;">`;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
  setTimeout(() => { lightboxContent.innerHTML = ''; }, 400);
}

lightboxClose.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
});

// ====== YouTube 视频播放 ======
const playBtn = document.getElementById('playBtn');
const videoPlaceholder = document.getElementById('videoPlaceholder');
const mainVideo = document.getElementById('mainVideo');

// 默认主视频 YouTube ID（替换为您的 YouTube 视频 ID）
const MAIN_YOUTUBE_ID = '3wfwvzSYNOU';

function loadYouTube(videoId) {
  if (!videoId || videoId.startsWith('YOUR_VIDEO_ID')) {
    showVideoNotice();
    return;
  }
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
  mainVideo.src = embedUrl;
  videoPlaceholder.style.display = 'none';
  mainVideo.style.display = 'block';
}

if (playBtn) {
  playBtn.addEventListener('click', () => {
    loadYouTube(MAIN_YOUTUBE_ID);
  });
}

// 点击占位区域也可以触发播放
if (videoPlaceholder) {
  videoPlaceholder.addEventListener('click', (e) => {
    if (e.target === playBtn || playBtn.contains(e.target)) return;
    loadYouTube(MAIN_YOUTUBE_ID);
  });
}

function showVideoNotice() {
  const existing = document.querySelector('.video-notice');
  if (existing) existing.remove();

  const notice = document.createElement('div');
  notice.className = 'video-notice';
  notice.innerHTML = `
    <div class="video-notice-inner">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <circle cx="12" cy="12" r="10"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
      <p>请在 <code>index.html</code> 或 <code>main.js</code> 中<br>配置您的 YouTube 视频 ID</p>
      <button class="video-notice-close">我知道了</button>
    </div>
  `;

  Object.assign(notice.style, {
    position: 'fixed', inset: '0', zIndex: '9998',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)'
  });

  const inner = notice.querySelector('.video-notice-inner');
  Object.assign(inner.style, {
    background: '#fff', padding: '40px', borderRadius: '16px',
    textAlign: 'center', maxWidth: '400px', color: '#1a1f36',
    boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
  });

  inner.querySelector('svg').style.cssText = 'color: #4f6ef7; margin: 0 auto 16px;';
  inner.querySelector('p').style.cssText = 'color: #5a607f; line-height: 1.8; margin-bottom: 20px;';
  inner.querySelector('code').style.cssText = 'background: #eef1ff; padding: 2px 8px; border-radius: 4px; font-size: 0.9em;';

  const closeBtn = inner.querySelector('.video-notice-close');
  Object.assign(closeBtn.style, {
    padding: '10px 28px', borderRadius: '50px', border: 'none',
    background: '#4f6ef7', color: '#fff', cursor: 'pointer',
    fontSize: '0.9rem', fontFamily: 'inherit'
  });

  document.body.appendChild(notice);
  closeBtn.addEventListener('click', () => notice.remove());
  notice.addEventListener('click', (e) => { if (e.target === notice) notice.remove(); });
}

// 视频缩略图点击 — 加载对应 YouTube 视频
document.querySelectorAll('.video-thumb').forEach(thumb => {
  thumb.addEventListener('click', () => {
    const youtubeId = thumb.dataset.youtube;
    if (youtubeId && !youtubeId.startsWith('YOUR_VIDEO_ID')) {
      loadYouTube(youtubeId);
      document.getElementById('video').scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      showVideoNotice();
    }
  });
});

// ====== 数字滚动动画 ======
function animateCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  counters.forEach(counter => {
    if (counter.dataset.animated) return;

    const target = parseInt(counter.dataset.target);
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      counter.textContent = Math.round(target * eased);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target;
        counter.dataset.animated = 'true';
      }
    }
    requestAnimationFrame(update);
  });
}

// ====== 滚动动画（Intersection Observer） ======
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

// 为需要动画的元素添加 fade-up 类
function setupScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.product-card, .feature-card, .video-thumb, .testimonial-card, .contact-wrapper, .section-header'
  );

  animatedElements.forEach((el, index) => {
    el.classList.add('fade-up');
    el.style.transitionDelay = `${(index % 4) * 0.1}s`;
    fadeObserver.observe(el);
  });
}

// Hero 数字动画
const heroObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounters();
      heroObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) heroObserver.observe(heroStats);

// ====== 表单提交 ======
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = '提交中...';
    btn.disabled = true;

    // 模拟提交
    setTimeout(() => {
      btn.textContent = '✓ 提交成功';
      btn.style.background = '#43e97b';
      btn.style.boxShadow = '0 4px 15px rgba(67,233,123,0.35)';

      setTimeout(() => {
        contactForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;
        btn.style.background = '';
        btn.style.boxShadow = '';
      }, 2500);
    }, 1200);
  });
}

// ====== 添加 fadeIn 关键帧动画 ======
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// ====== 初始化 ======
document.addEventListener('DOMContentLoaded', () => {
  setupScrollAnimations();
  handleScroll();
});
