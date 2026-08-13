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

// ====== 产品详情弹窗 ======
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTag = document.getElementById('modalTag');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const modalFeatures = document.getElementById('modalFeatures');
const modalContact = document.getElementById('modalContact');

// ★ 产品详细数据 — 可在此修改每个产品的完整介绍 ★
const productData = {
  1: {
    tag: 'Endoscopy Training',
    title: 'Gastroscopy & ESD Training Model',
    img: '胃镜ESD模型.png',
    desc: '智能终端 Pro 是我们最新一代的旗舰产品，搭载自主研发的高性能芯片，配合先进的 AI 算法，为用户带来前所未有的智能交互体验。采用航空级铝合金机身，轻薄坚固；内置大容量电池，续航可达 72 小时。无论是商务办公还是日常生活，都是您的理想之选。',
    features: ['1.Designed with adult-scale anatomical dimensions and structures.
                2.Realistically simulates the color, mucosal folds, and anatomical features of the gastrointestinal tract, including the epiglottis, trachea, esophagus, cardia, pylorus, and duodenum.
                3.Compatible with gastroscopes, duodenoscopes, transnasal endoscopes, and other endoscopic equipment for examination and training.
                4.Features simulated lesions, including polyps and ulcers, in both the stomach and colon.
                5.Helps trainees develop hand–eye coordination and essential endoscopic examination skills.
                6.Supports hands-on Endoscopic Submucosal Dissection (ESD) training under endoscopic visualization.
                7.Each model includes 10 replaceable ESD training consumables.']
  },
  2: {
    tag: '软件平台',
    title: '云端协作平台',
    img: 'images/product-2.jpg',
    desc: '云端协作平台是专为企业打造的一站式协作解决方案。支持多人实时文档编辑、可视化项目管理、智能工作流自动化。无论团队分布在全球何处，都能像面对面一样高效协作。已服务超过 5000 家企业客户，累计提升团队效率 200%。',
    features: ['实时多人协作编辑，支持 100+ 并发', '可视化看板 + 甘特图项目管理', '智能工作流自动化，减少 60% 重复工作', '企业级数据加密，SOC 2 安全认证', '与 Slack/钉钉/飞书等 50+ 工具无缝集成']
  },
  3: {
    tag: '智能硬件',
    title: '智能传感器 X1',
    img: 'images/product-3.jpg',
    desc: '智能传感器 X1 是工业级高精度数据采集设备，采用先进的微机电系统技术，可实时监测温度、湿度、压力、振动等多种环境参数。毫秒级响应速度，精准度达 0.01%，广泛应用于智能制造、农业物联网、环境监测等领域。',
    features: ['0.01% 高精度数据采集', '毫秒级响应，实时监控无延迟', '支持温度/湿度/压力/振动多参数监测', 'IP67 工业级防护，-40°C 至 85°C 工作范围', '低功耗设计，电池续航可达 2 年']
  },
  4: {
    tag: '云服务',
    title: 'AI 数据分析引擎',
    img: 'images/product-4.jpg',
    desc: 'AI 数据分析引擎基于先进的深度学习技术，能够自动识别海量数据中的模式和趋势，生成直观的可视化报告。无需数据科学背景，业务人员也能轻松完成复杂的数据分析，助力企业实现真正的数据驱动决策。',
    features: ['自然语言查询，像聊天一样分析数据', '智能异常检测，实时预警业务风险', '50+ 可视化图表模板，一键生成报告', '支持对接 MySQL/PostgreSQL/Excel 等数据源', '预测分析模型，准确率达 95%+']
  },
  5: {
    tag: '软件平台',
    title: '安全防护套件',
    img: 'images/product-5.jpg',
    desc: '安全防护套件为企业提供全方位的网络安全保护。从端点防护到网络流量分析，从数据加密到合规管理，一套解决方案全部覆盖。已保护超过 3000 家企业免受网络攻击，平均威胁响应时间小于 5 秒。',
    features: ['实时威胁检测，响应时间 < 5 秒', '端点 + 网络 + 云端三层防护体系', 'AES-256 数据加密，满足等保 2.0 要求', '智能漏洞扫描，自动修复安全风险', '7×24 安全运营中心，专家即时响应']
  },
  6: {
    tag: '云服务',
    title: '弹性云计算服务',
    price: '按量计费',
    img: 'images/product-6.jpg',
    desc: '弹性云计算服务提供高性能、高可用的云计算基础设施。支持按需弹性扩缩容，轻松应对业务流量波动。全球 20+ 数据中心节点，99.99% 可用性 SLA 保障，为您的业务提供坚实的数字底座。',
    features: ['秒级弹性扩缩容，按需付费零浪费', '全球 20+ 数据中心，CDN 加速覆盖', '99.99% SLA 可用性保障', '多副本数据备份，容灾切换 < 30 秒', '一键部署容器/虚拟机/Serverless 多种架构']
  }
};

function openModal(productId) {
  const data = productData[productId];
  if (!data) return;

  modalImg.src = data.img;
  modalImg.alt = data.title;
  modalTag.textContent = data.tag;
  modalTitle.textContent = data.title;
  modalPrice.textContent = data.price;
  modalDesc.textContent = data.desc;

  // 生成特性列表
  modalFeatures.innerHTML = `
    <h4>核心特性</h4>
    <ul>${data.features.map(f => `<li>${f}</li>`).join('')}</ul>
  `;

  productModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  productModal.classList.remove('active');
  document.body.style.overflow = '';
}

// 绑定“了解详情”按钮点击事件
document.querySelectorAll('.product-link[data-product-id]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    openModal(link.dataset.productId);
  });
});

// 关闭弹窗
if (modalClose) modalClose.addEventListener('click', closeModal);
if (productModal) {
  productModal.addEventListener('click', (e) => {
    if (e.target === productModal) closeModal();
  });
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && productModal.classList.contains('active')) closeModal();
});

// “立即咨询”按钮点击后关闭弹窗并滚动到联系表单
if (modalContact) {
  modalContact.addEventListener('click', () => {
    closeModal();
  });
}

// ====== 初始化 ======
document.addEventListener('DOMContentLoaded', () => {
  setupScrollAnimations();
  handleScroll();
});
