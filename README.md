# aptx1284861554.github.io

/* ========== 视频区 ========== */
.video-section { padding: 120px 0; background: var(--gradient-2); }
.video-main { margin-bottom: 48px; position: relative; }
.video-wrapper { position: relative; border-radius: var(--radius-lg); overflow: hidden; cursor: pointer; aspect-ratio: 16/9; background: var(--dark-2); }
.video-wrapper video { width: 100%; height: 100%; object-fit: cover; }
.video-wrapper img { width: 100%; height: 100%; object-fit: cover; }
.video-play-btn { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; background: rgba(15,23,42,0.5); color: var(--white); transition: var(--transition); }
.video-play-btn:hover { background: rgba(15,23,42,0.3); }
.video-play-btn svg { opacity: 0.9; transition: var(--transition); }
.video-play-btn:hover svg { transform: scale(1.1); opacity: 1; }
.video-play-btn span { font-size: 0.9rem; font-weight: 500; }
.video-info { padding: 24px 0; }
.video-info h3 { font-size: 1.3rem; font-weight: 700; color: var(--white); margin-bottom: 8px; }
.video-info p { color: var(--gray-3); font-size: 0.95rem; }
.video-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 28px; }
.video-card { border-radius: var(--radius-md); overflow: hidden; background: rgba(255,255,255,0.05); transition: var(--transition); }
.video-card:hover { background: rgba(255,255,255,0.08); transform: translateY(-4px); }
.video-thumb { position: relative; aspect-ratio: 16/9; overflow: hidden; cursor: pointer; }
.video-thumb img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.video-card:hover .video-thumb img { transform: scale(1.05); }
.video-thumb-overlay { position: absolute; inset: 0; background: rgba(15,23,42,0.4); display: flex; align-items: center; justify-content: center; color: var(--white); opacity: 0; transition: var(--transition); }
.video-thumb:hover .video-thumb-overlay { opacity: 1; }
.video-duration { position: absolute; bottom: 8px; right: 8px; padding: 2px 8px; background: rgba(0,0,0,0.7); color: var(--white); font-size: 0.75rem; border-radius: 4px; }
.video-card-info { padding: 20px; }
.video-card-info h4 { font-size: 1rem; font-weight: 600; color: var(--white); margin-bottom: 8px; }
.video-card-info p { font-size: 0.85rem; color: var(--gray-3); line-height: 1.6; }

/* ========== 关于我们 ========== */
.about { padding: 120px 0; background: var(--white); }
.about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
.about-visual { position: relative; }
.about-visual img { border-radius: var(--radius-lg); box-shadow: var(--shadow-lg); }
.about-exp-badge { position: absolute; bottom: -20px; right: -20px; width: 130px; height: 130px; background: var(--gradient-1); border-radius: 50%; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: var(--shadow-lg); }
.exp-number { font-size: 2.5rem; font-weight: 900; color: var(--white); line-height: 1; }
.exp-text { font-size: 0.75rem; color: rgba(255,255,255,0.8); }
.about-content p { color: var(--gray-2); margin-bottom: 16px; line-height: 1.8; }
.about-highlights { display: flex; flex-direction: column; gap: 20px; margin-top: 32px; }
.highlight { display: flex; gap: 16px; align-items: flex-start; }
.highlight-icon { font-size: 1.5rem; flex-shrink: 0; width: 48px; height: 48px; background: rgba(37,99,235,0.06); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; }
.highlight h4 { font-size: 1rem; font-weight: 600; color: var(--dark); margin-bottom: 2px; }
.highlight p { font-size: 0.85rem; color: var(--gray-2); margin: 0; }

/* ========== 联系我们 ========== */
.contact { padding: 120px 0; background: var(--light); }
.contact-wrapper { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: start; }
.contact-info h2 { font-size: 2rem; font-weight: 700; color: var(--dark); margin: 16px 0; }
.contact-info > p { color: var(--gray-2); line-height: 1.8; margin-bottom: 36px; }
.contact-details { display: flex; flex-direction: column; gap: 24px; }
.contact-item { display: flex; gap: 16px; align-items: center; }
.contact-icon { width: 48px; height: 48px; background: rgba(37,99,235,0.06); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
.contact-item span { font-size: 0.8rem; color: var(--gray-3); display: block; }
.contact-item strong { font-size: 0.95rem; color: var(--dark); font-weight: 500; }
.contact-form { background: var(--white); padding: 40px; border-radius: var(--radius-md); box-shadow: var(--shadow-md); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
.form-group { display: flex; flex-direction: column; }
.form-group.full { margin-bottom: 24px; }
.form-group label { font-size: 0.85rem; font-weight: 500; color: var(--gray-1); margin-bottom: 6px; }
.form-group input, .form-group textarea { padding: 12px 16px; border: 1px solid var(--gray-5); border-radius: var(--radius-sm); font-size: 0.9rem; font-family: inherit; color: var(--dark); transition: var(--transition); background: var(--light); }
.form-group input:focus, .form-group textarea:focus { outline: none; border-color: var(--primary); box-shadow: 0 0 0 3px rgba(37,99,235,0.1); background: var(--white); }
.form-group textarea { resize: vertical; }

/* ========== 页脚 ========== */
.footer { background: var(--dark); padding: 80px 0 0; }
.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; padding-bottom: 48px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.footer-brand .logo { margin-bottom: 16px; }
.footer-brand p { color: var(--gray-3); font-size: 0.9rem; line-height: 1.7; margin-bottom: 20px; }
.social-links { display: flex; gap: 12px; }
.social-links a { padding: 8px 16px; background: rgba(255,255,255,0.06); border-radius: var(--radius-sm); color: var(--gray-3); font-size: 0.8rem; transition: var(--transition); }
.social-links a:hover { background: rgba(255,255,255,0.12); color: var(--white); }
.footer-links h4 { font-size: 0.95rem; font-weight: 600; color: var(--white); margin-bottom: 20px; }
.footer-links li { margin-bottom: 12px; }
.footer-links a { font-size: 0.85rem; color: var(--gray-3); }
.footer-links a:hover { color: var(--white); }
.footer-bottom { padding: 24px 0; text-align: center; }
.footer-bottom p { font-size: 0.8rem; color: var(--gray-3); }

/* ========== 滚动动画 ========== */
.reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ========== 响应式 ========== */
@media (max-width: 1024px) {
    .product-grid { grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); }
    .video-grid { grid-template-columns: repeat(2, 1fr); }
    .about-grid { gap: 40px; }
    .footer-grid { grid-template-columns: 2fr 1fr 1fr; }
    .footer-grid > :last-child { grid-column: 1 / -1; }
}
@media (max-width: 768px) {
    .menu-toggle { display: flex; }
    .nav-links { position: fixed; top: 0; right: -100%; width: 280px; height: 100vh; background: var(--dark); flex-direction: column; padding: 80px 32px; gap: 24px; transition: var(--transition); box-shadow: var(--shadow-xl); }
    .nav-links.open { right: 0; }
    .nav-links a { color: var(--gray-3) !important; font-size: 1rem; }
    .nav-links a:hover { color: var(--white) !important; }
    .hero-title { font-size: clamp(1.8rem, 6vw, 2.8rem); }
    .hero-stats { gap: 32px; }
    .product-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
    .video-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
    .about-grid { grid-template-columns: 1fr; }
    .about-exp-badge { right: 20px; }
    .contact-wrapper { grid-template-columns: 1fr; }
    .modal-body { grid-template-columns: 1fr; }
    .modal-image { min-height: 200px; max-height: 250px; }
    .modal-image img { border-radius: var(--radius-lg) var(--radius-lg) 0 0; }
    .footer-grid { grid-template-columns: 1fr 1fr; }
    .footer-brand { grid-column: 1 / -1; }
    .form-row { grid-template-columns: 1fr; }
}
@media (max-width: 480px) {
    .hero-actions { flex-direction: column; align-items: center; }
    .hero-stats { flex-direction: column; gap: 24px; }
    .filter-tabs { gap: 8px; }
    .filter-btn { padding: 8px 16px; font-size: 0.8rem; }
    .footer-grid { grid-template-columns: 1fr; }
    .contact-form { padding: 24px; }
}
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

/* ========== 编辑模式 ========== */
.edit-toolbar { position: fixed; bottom: 24px; right: 24px; z-index: 9999; display: flex; gap: 10px; align-items: center; }
.edit-toolbar button { padding: 12px 24px; border: none; border-radius: 50px; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 20px rgba(0,0,0,0.2); font-family: inherit; }
.edit-toggle { background: linear-gradient(135deg, #2563eb, #06b6d4); color: #fff; }
.edit-toggle:hover { transform: translateY(-2px); box-shadow: 0 6px 24px rgba(37,99,235,0.4); }
.edit-toggle.active { background: linear-gradient(135deg, #ef4444, #f97316); }
.edit-save { background: #fff; color: #2563eb; }
.edit-save:hover { background: #f0f9ff; transform: translateY(-2px); }
.edit-reset { background: #fff; color: #ef4444; }
.edit-reset:hover { background: #fef2f2; transform: translateY(-2px); }
body.edit-mode [data-editable] { outline: 2px dashed rgba(37,99,235,0.4); outline-offset: 4px; cursor: text; border-radius: 4px; transition: outline-color 0.2s; }
body.edit-mode [data-editable]:hover { outline-color: var(--primary); background: rgba(37,99,235,0.03); }
body.edit-mode [data-editable]:focus { outline: 2px solid var(--primary); background: rgba(37,99,235,0.05); }
.video-upload-zone { position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 12px; background: rgba(15,23,42,0.85); border: 3px dashed rgba(6,182,212,0.5); border-radius: var(--radius-lg); color: #fff; font-size: 1rem; cursor: pointer; opacity: 0; pointer-events: none; transition: all 0.3s ease; z-index: 10; }
body.edit-mode .video-upload-zone { opacity: 1; pointer-events: auto; }
.video-upload-zone:hover, .video-upload-zone.dragover { border-color: var(--accent); background: rgba(6,182,212,0.15); }
.video-upload-zone svg { opacity: 0.7; }
.video-upload-zone .upload-hint { font-size: 0.8rem; color: var(--gray-3); }
.edit-badge { display: none; position: fixed; top: 12px; left: 50%; transform: translateX(-50%); padding: 6px 20px; background: linear-gradient(135deg, #f97316, #ef4444); color: #fff; font-size: 0.8rem; font-weight: 600; border-radius: 20px; z-index: 9999; box-shadow: 0 4px 16px rgba(239,68,68,0.3); letter-spacing: 1px; }
body.edit-mode .edit-badge { display: block; }
.img-upload-hint { display: none; position: absolute; bottom: 8px; right: 8px; padding: 4px 10px; background: rgba(0,0,0,0.7); color: #fff; font-size: 0.7rem; border-radius: 4px; z-index: 5; }
body.edit-mode .product-image:hover .img-upload-hint, body.edit-mode .about-visual:hover .img-upload-hint { display: block; }
    </style>
</head>
<body>

<!-- 编辑工具栏 -->
<div class="edit-badge">编辑模式已开启 - 点击文字即可修改</div>
<div class="edit-toolbar">
    <button class="edit-reset" onclick="resetContent()" title="重置为默认内容">重置</button>
    <button class="edit-save" onclick="saveContent()" title="保存所有修改">保存</button>
    <button class="edit-toggle" id="editToggle" onclick="toggleEditMode()">编辑</button>
</div>

<!-- 导航栏 -->
<nav class="navbar" id="navbar">
    <div class="nav-container">
        <a href="#" class="logo"><span class="logo-icon">◆</span><span class="logo-text">创新科技</span></a>
        <ul class="nav-links" id="navLinks">
            <li><a href="#hero">首页</a></li>
            <li><a href="#products">产品中心</a></li>
            <li><a href="#video">视频介绍</a></li>
            <li><a href="#about">关于我们</a></li>
            <li><a href="#contact" class="nav-cta">联系我们</a></li>
        </ul>
        <button class="menu-toggle" id="menuToggle" aria-label="菜单"><span></span><span></span><span></span></button>
    </div>
</nav>

<!-- 英雄区 -->
<section class="hero" id="hero">
    <div class="hero-bg"></div>
    <div class="hero-content">
        <h1 class="hero-title"><span class="hero-line">用科技力量</span><span class="hero-line accent">赋能企业未来</span></h1>
        <p class="hero-subtitle">我们致力于打造行业领先的创新产品，为全球企业提供智能化、数字化转型的全方位解决方案。</p>
        <div class="hero-actions">
            <a href="#products" class="btn btn-primary">探索产品</a>
            <a href="#video" class="btn btn-outline">观看视频 ▶</a>
        </div>
        <div class="hero-stats">
            <div class="stat"><span class="stat-number" data-target="500">0</span><span class="stat-suffix">+</span><span class="stat-label">企业客户</span></div>
            <div class="stat"><span class="stat-number" data-target="98">0</span><span class="stat-suffix">%</span><span class="stat-label">客户满意度</span></div>
            <div class="stat"><span class="stat-number" data-target="50">0</span><span class="stat-suffix">+</span><span class="stat-label">技术专利</span></div>
        </div>
    </div>
    <div class="scroll-indicator"><span>向下滚动</span><div class="scroll-arrow"></div></div>
</section>

<!-- 产品展示区 -->
<section class="products" id="products">
    <div class="container">
        <div class="section-header">
            <span class="section-tag">产品中心</span>
            <h2 class="section-title">我们的核心产品</h2>
            <p class="section-desc">每一款产品都经过精心打磨，旨在为您的企业带来卓越的体验与价值。</p>
        </div>
        <div class="filter-tabs">
            <button class="filter-btn active" data-filter="all">全部产品</button>
            <button class="filter-btn" data-filter="software">软件平台</button>
            <button class="filter-btn" data-filter="hardware">智能硬件</button>
            <button class="filter-btn" data-filter="service">专业服务</button>
        </div>
        <div class="product-grid">
            <div class="product-card" data-category="software">
                <div class="product-image">
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop" alt="智能数据分析平台" loading="lazy">
                    <div class="product-badge">热门</div>
                    <div class="product-overlay"><button class="btn-view" data-product="1">查看详情</button></div>
                </div>
                <div class="product-info">
                    <span class="product-category">软件平台</span>
                    <h3 class="product-title">智能数据分析平台</h3>
                    <p class="product-desc">基于 AI 驱动的新一代数据分析平台，帮助企业从海量数据中提取关键洞察，支持实时可视化看板、智能预测分析与自动化报告生成。</p>
                    <ul class="product-features"><li>✓ 实时数据分析</li><li>✓ AI 智能预测</li><li>✓ 自定义可视化看板</li></ul>
                </div>
            </div>
            <div class="product-card" data-category="hardware">
                <div class="product-image">
                    <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop" alt="边缘计算网关" loading="lazy">
                    <div class="product-badge new">新品</div>
                    <div class="product-overlay"><button class="btn-view" data-product="2">查看详情</button></div>
                </div>
                <div class="product-info">
                    <span class="product-category">智能硬件</span>
                    <h3 class="product-title">边缘计算网关 Pro</h3>
                    <p class="product-desc">高性能边缘计算网关设备，支持多协议接入，毫秒级数据处理延迟，为工业物联网场景提供可靠的边缘智能计算能力。</p>
                    <ul class="product-features"><li>✓ 毫秒级响应</li><li>✓ 多协议支持</li><li>✓ 工业级防护</li></ul>
                </div>
            </div>
            <div class="product-card" data-category="software">
                <div class="product-image">
                    <img src="https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop" alt="云协作办公套件" loading="lazy">
                    <div class="product-overlay"><button class="btn-view" data-product="3">查看详情</button></div>
                </div>
                <div class="product-info">
                    <span class="product-category">软件平台</span>
                    <h3 class="product-title">云协作办公套件</h3>
                    <p class="product-desc">一站式企业协作平台，集成文档协同编辑、项目管理、视频会议与智能日程安排，让团队沟通更加高效流畅。</p>
                    <ul class="product-features"><li>✓ 多人实时协作</li><li>✓ 项目全流程管理</li><li>✓ 高清视频会议</li></ul>
                </div>
            </div>
            <div class="product-card" data-category="hardware">
                <div class="product-image">
                    <img src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop" alt="智能安防系统" loading="lazy">
                    <div class="product-overlay"><button class="btn-view" data-product="4">查看详情</button></div>
                </div>
                <div class="product-info">
                    <span class="product-category">智能硬件</span>
                    <h3 class="product-title">AI 智能安防系统</h3>
                    <p class="product-desc">融合计算机视觉与深度学习的新一代安防系统，支持人脸识别、行为分析、异常检测，为企业安全保驾护航。</p>
                    <ul class="product-features"><li>✓ 人脸识别</li><li>✓ 行为智能分析</li><li>✓ 7×24 实时监控</li></ul>
                </div>
            </div>
            <div class="product-card" data-category="service">
                <div class="product-image">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop" alt="数字化转型咨询" loading="lazy">
                    <div class="product-overlay"><button class="btn-view" data-product="5">查看详情</button></div>
                </div>
                <div class="product-info">
                    <span class="product-category">专业服务</span>
                    <h3 class="product-title">数字化转型咨询</h3>
                    <p class="product-desc">资深专家团队为企业提供端到端的数字化转型战略规划、技术选型与实施落地服务，助力企业快速实现数字化升级。</p>
                    <ul class="product-features"><li>✓ 定制化方案</li><li>✓ 全程专家陪跑</li><li>✓ 快速落地实施</li></ul>
                </div>
            </div>
            <div class="product-card" data-category="service">
                <div class="product-image">
                    <img src="https://images.unsplash.com/photo-1516383277387-3150b6a6898c?w=600&h=400&fit=crop" alt="技术培训服务" loading="lazy">
                    <div class="product-overlay"><button class="btn-view" data-product="6">查看详情</button></div>
                </div>
                <div class="product-info">
                    <span class="product-category">专业服务</span>
                    <h3 class="product-title">企业技术培训</h3>
                    <p class="product-desc">量身定制的技术培训方案，涵盖人工智能、云计算、大数据等前沿技术领域，帮助企业团队快速提升技术能力与创新思维。</p>
                    <ul class="product-features"><li>✓ 定制化课程</li><li>✓ 实战演练</li><li>✓ 认证体系</li></ul>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 产品详情模态框 -->
<div class="modal" id="productModal">
    <div class="modal-backdrop"></div>
    <div class="modal-content">
        <button class="modal-close">&times;</button>
        <div class="modal-body">
            <div class="modal-image"><img id="modalImg" src="" alt=""></div>
            <div class="modal-info">
                <span class="modal-category" id="modalCategory"></span>
                <h2 id="modalTitle"></h2>
                <p id="modalDesc"></p>
                <ul id="modalFeatures"></ul>
                <a href="#contact" class="btn btn-primary modal-cta">立即咨询</a>
            </div>
        </div>
    </div>
</div>

<!-- 视频介绍区 -->
<section class="video-section" id="video">
    <div class="container">
        <div class="section-header light">
            <span class="section-tag">视频中心</span>
            <h2 class="section-title">直观了解我们的产品</h2>
            <p class="section-desc">通过精心制作的视频，深入了解产品功能、应用场景与技术优势。</p>
        </div>
        <div class="video-main">
            <div class="video-upload-zone" id="mainVideoUpload" onclick="document.getElementById('videoFileInput').click()">
                <svg viewBox="0 0 24 24" width="48" height="48" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
                <span>点击或拖拽上传视频</span>
                <span class="upload-hint">支持 MP4 / WebM 格式</span>
            </div>
            <input type="file" id="videoFileInput" accept="video/mp4,video/webm" style="display:none">
            <div class="video-wrapper" id="mainVideoWrapper">
                <video id="mainVideo" poster="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&h=675&fit=crop" preload="none">
                    <source src="videos/intro.mp4" type="video/mp4">
                    <source src="videos/intro.webm" type="video/webm">
                    您的浏览器不支持视频播放。
                </video>
                <div class="video-play-btn" id="videoPlayBtn">
                    <svg viewBox="0 0 24 24" width="64" height="64" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/></svg>
                    <span>播放产品介绍视频</span>
                </div>
            </div>
            <div class="video-info"><h3>公司旗舰产品全景介绍</h3><p>全方位展示我们的核心产品矩阵、技术实力与成功客户案例，时长约 5 分钟。</p></div>
        </div>
        <div class="video-grid">
            <div class="video-card">
                <div class="video-thumb" data-video="demo">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop" alt="产品演示" loading="lazy">
                    <div class="video-thumb-overlay"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/></svg></div>
                    <span class="video-duration">3:45</span>
                </div>
                <div class="video-card-info"><h4>智能分析平台实操演示</h4><p>从数据接入到报告生成，完整操作流程展示。</p></div>
            </div>
            <div class="video-card">
                <div class="video-thumb" data-video="case">
                    <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=225&fit=crop" alt="客户案例" loading="lazy">
                    <div class="video-thumb-overlay"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/></svg></div>
                    <span class="video-duration">6:20</span>
                </div>
                <div class="video-card-info"><h4>客户成功故事：数字化转型之旅</h4><p>看看我们的客户如何实现业务突破与增长。</p></div>
            </div>
            <div class="video-card">
                <div class="video-thumb" data-video="tech">
                    <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=225&fit=crop" alt="技术解析" loading="lazy">
                    <div class="video-thumb-overlay"><svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><polygon points="10,8 16,12 10,16" fill="currentColor" stroke="none"/></svg></div>
                    <span class="video-duration">8:15</span>
                </div>
                <div class="video-card-info"><h4>核心技术深度解析</h4><p>深入了解支撑我们产品的核心技术与架构。</p></div>
            </div>
        </div>
    </div>
</section>

<!-- 关于我们 -->
<section class="about" id="about">
    <div class="container">
        <div class="about-grid">
            <div class="about-visual">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop" alt="团队" loading="lazy">
                <div class="about-exp-badge"><span class="exp-number">12</span><span class="exp-text">年行业经验</span></div>
            </div>
            <div class="about-content">
                <span class="section-tag">关于我们</span>
                <h2 class="section-title left">值得信赖的科技伙伴</h2>
                <p>创新科技成立于 2014 年，是一家专注于企业级智能化解决方案的高新技术企业。我们拥有一支由行业顶尖专家组成的研发团队，致力于将前沿技术转化为切实可行的商业价值。</p>
                <p>多年来，我们已成功服务超过 500 家企业客户，覆盖金融、制造、零售、医疗等多个行业领域，积累了丰富的行业经验与技术实力。</p>
                <div class="about-highlights">
                    <div class="highlight"><div class="highlight-icon">🏆</div><div><h4>行业领先</h4><p>连续 5 年入选行业 Top 10</p></div></div>
                    <div class="highlight"><div class="highlight-icon">🌍</div><div><h4>全球布局</h4><p>业务覆盖 15 个国家和地区</p></div></div>
                    <div class="highlight"><div class="highlight-icon">🔬</div><div><h4>持续创新</h4><p>年研发投入超过营收 20%</p></div></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- 联系我们 -->
<section class="contact" id="contact">
    <div class="container">
        <div class="contact-wrapper">
            <div class="contact-info">
                <span class="section-tag light">联系我们</span>
                <h2>开启您的数字化之旅</h2>
                <p>无论您有任何产品咨询或合作意向，我们的专业团队都将在 24 小时内为您提供回复。</p>
                <div class="contact-details">
                    <div class="contact-item"><div class="contact-icon">📞</div><div><span>电话咨询</span><strong>400-888-8888</strong></div></div>
                    <div class="contact-item"><div class="contact-icon">✉️</div><div><span>邮件联系</span><strong>contact@example.com</strong></div></div>
                    <div class="contact-item"><div class="contact-icon">📍</div><div><span>公司地址</span><strong>北京市朝阳区科技大厦 A 座 20 层</strong></div></div>
                </div>
            </div>
            <form class="contact-form" id="contactForm">
                <div class="form-row">
                    <div class="form-group"><label for="name">姓名</label><input type="text" id="name" placeholder="请输入您的姓名" required></div>
                    <div class="form-group"><label for="company">公司名称</label><input type="text" id="company" placeholder="请输入公司名称"></div>
                </div>
                <div class="form-row">
                    <div class="form-group"><label for="email">邮箱</label><input type="email" id="email" placeholder="请输入邮箱地址" required></div>
                    <div class="form-group"><label for="phone">电话</label><input type="tel" id="phone" placeholder="请输入联系电话"></div>
                </div>
                <div class="form-group full"><label for="message">咨询内容</label><textarea id="message" rows="4" placeholder="请描述您的需求或问题..."></textarea></div>
                <button type="submit" class="btn btn-primary btn-full">提交咨询</button>
            </form>
        </div>
    </div>
</section>

<!-- 页脚 -->
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <a href="#" class="logo"><span class="logo-icon">◆</span><span class="logo-text">创新科技</span></a>
                <p>用科技力量赋能企业未来，为全球企业提供智能化解决方案。</p>
                <div class="social-links"><a href="#">微信</a><a href="#">微博</a><a href="#">LinkedIn</a></div>
            </div>
            <div class="footer-links"><h4>产品</h4><ul><li><a href="#">智能数据分析平台</a></li><li><a href="#">边缘计算网关</a></li><li><a href="#">云协作办公套件</a></li><li><a href="#">AI 智能安防系统</a></li></ul></div>
            <div class="footer-links"><h4>服务</h4><ul><li><a href="#">数字化转型咨询</a></li><li><a href="#">企业技术培训</a></li><li><a href="#">技术支持</a></li><li><a href="#">合作伙伴计划</a></li></ul></div>
            <div class="footer-links"><h4>公司</h4><ul><li><a href="#">关于我们</a></li><li><a href="#">新闻动态</a></li><li><a href="#">加入我们</a></li><li><a href="#">隐私政策</a></li></ul></div>
        </div>
        <div class="footer-bottom"><p>&copy; 2026 创新科技. 保留所有权利.</p></div>
    </div>
</footer>

<script>
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 60); }, { passive: true });
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    menuToggle.addEventListener('click', () => { navLinks.classList.toggle('open'); menuToggle.classList.toggle('active'); });
    navLinks.querySelectorAll('a').forEach(link => { link.addEventListener('click', () => { navLinks.classList.remove('open'); menuToggle.classList.remove('active'); }); });
    const animateCounters = () => {
        document.querySelectorAll('.stat-number').forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            const step = target / (2000 / 16); let current = 0;
            const update = () => { current += step; if (current < target) { counter.textContent = Math.floor(current); requestAnimationFrame(update); } else { counter.textContent = target; } };
            update();
        });
    };
    const heroStats = document.querySelector('.hero-stats');
    if (heroStats) { const obs = new IntersectionObserver(e => { if (e[0].isIntersecting) { animateCounters(); obs.disconnect(); } }, { threshold: 0.5 }); obs.observe(heroStats); }
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    filterBtns.forEach(btn => { btn.addEventListener('click', () => { const f = btn.getAttribute('data-filter'); filterBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); productCards.forEach(card => { if (f === 'all' || card.getAttribute('data-category') === f) { card.classList.remove('hidden'); card.style.animation = 'fadeIn 0.4s ease forwards'; } else { card.classList.add('hidden'); } }); }); });
    const modal = document.getElementById('productModal');
    const productData = {
        1: { title: '智能数据分析平台', category: '软件平台', desc: '基于 AI 驱动的新一代数据分析平台，帮助企业从海量数据中提取关键洞察。平台采用先进的机器学习算法，支持实时数据流处理、智能预测分析与自动化报告生成，让数据驱动决策变得更加简单高效。', features: ['✓ 实时数据分析与可视化','✓ AI 驱动的智能预测模型','✓ 自定义可视化看板','✓ 自动化报告生成','✓ 多数据源无缝接入','✓ 企业级安全合规'], img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop' },
        2: { title: '边缘计算网关 Pro', category: '智能硬件', desc: '高性能边缘计算网关设备，搭载最新 ARM 架构处理器，支持多协议接入，毫秒级数据处理延迟。为工业物联网、智能制造等场景提供可靠的边缘智能计算能力。', features: ['✓ 毫秒级响应延迟','✓ 支持 MQTT/OPC-UA/Modbus 等协议','✓ IP67 工业级防护','✓ 低功耗设计','✓ 远程管理运维','✓ 可扩展模块化架构'], img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop' },
        3: { title: '云协作办公套件', category: '软件平台', desc: '一站式企业协作平台，深度集成文档协同编辑、项目管理、视频会议与智能日程安排。采用端到端加密技术保障数据安全，支持私有化部署与 SaaS 两种模式。', features: ['✓ 多人实时文档协作','✓ 项目全生命周期管理','✓ 高清视频会议（最高500人）','✓ 智能日程与任务分配','✓ 端到端数据加密','✓ 丰富的第三方集成'], img: 'https://images.unsplash.com/photo-1563986768609-322da13575f2?w=800&h=600&fit=crop' },
        4: { title: 'AI 智能安防系统', category: '智能硬件', desc: '融合计算机视觉与深度学习的新一代安防系统。支持高精度人脸识别、行为轨迹分析、异常事件实时预警，为企业园区等场景提供全方位的智能安全防护。', features: ['✓ 99.9% 人脸识别准确率','✓ 行为智能分析与轨迹追踪','✓ 7×24 实时监控与告警','✓ 多区域联动管理','✓ 访客智能管理','✓ 历史数据回溯分析'], img: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=600&fit=crop' },
        5: { title: '数字化转型咨询', category: '专业服务', desc: '由资深行业专家和技术顾问组成的专业团队，为企业提供端到端的数字化转型服务。从战略规划、技术选型到实施落地，全程陪跑。', features: ['✓ 深度行业诊断与调研','✓ 定制化转型战略规划','✓ 技术架构设计与选型','✓ 敏捷实施与迭代交付','✓ 组织变革与人才培养','✓ 持续优化与效果评估'], img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop' },
        6: { title: '企业技术培训', category: '专业服务', desc: '量身定制的技术培训方案，覆盖人工智能、云计算、大数据、网络安全等前沿技术领域。由一线技术专家授课，结合实战项目演练。', features: ['✓ 定制化课程体系','✓ 一线技术专家授课','✓ 真实项目实战演练','✓ 权威认证体系','✓ 线上+线下混合教学','✓ 持续学习社区'], img: 'https://images.unsplash.com/photo-1516383277387-3150b6a6898c?w=800&h=600&fit=crop' }
    };
    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.addEventListener('click', () => {
            const d = productData[btn.getAttribute('data-product')]; if (!d) return;
            document.getElementById('modalImg').src = d.img; document.getElementById('modalImg').alt = d.title;
            document.getElementById('modalCategory').textContent = d.category; document.getElementById('modalTitle').textContent = d.title;
            document.getElementById('modalDesc').textContent = d.desc;
            document.getElementById('modalFeatures').innerHTML = d.features.map(f => '<li>' + f + '</li>').join('');
            modal.classList.add('active'); document.body.style.overflow = 'hidden';
        });
    });
    const closeModal = () => { modal.classList.remove('active'); document.body.style.overflow = ''; };
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-backdrop').addEventListener('click', closeModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
    const mainVideo = document.getElementById('mainVideo');
    const videoPlayBtn = document.getElementById('videoPlayBtn');
    if (videoPlayBtn && mainVideo) {
        videoPlayBtn.addEventListener('click', () => { if (mainVideo.paused) { mainVideo.play().then(() => { videoPlayBtn.style.opacity = '0'; videoPlayBtn.style.pointerEvents = 'none'; }).catch(() => { alert('请将视频文件放入 videos/ 目录后刷新页面。'); }); } });
        mainVideo.addEventListener('pause', () => { videoPlayBtn.style.opacity = '1'; videoPlayBtn.style.pointerEvents = 'auto'; });
        mainVideo.addEventListener('ended', () => { videoPlayBtn.style.opacity = '1'; videoPlayBtn.style.pointerEvents = 'auto'; });
        mainVideo.addEventListener('click', () => { if (!mainVideo.paused) mainVideo.pause(); });
    }
    document.querySelectorAll('.video-thumb').forEach(thumb => { thumb.addEventListener('click', () => { const t = thumb.getAttribute('data-video'); alert('即将播放「' + (t === 'demo' ? '产品演示' : t === 'case' ? '客户案例' : '技术解析') + '」视频。'); }); });
    const revealEls = document.querySelectorAll('.product-card, .video-card, .about-grid, .contact-wrapper, .section-header');
    revealEls.forEach(el => el.classList.add('reveal'));
    const revealObs = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); revealObs.unobserve(entry.target); } }); }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    revealEls.forEach(el => revealObs.observe(el));
    document.querySelectorAll('a[href^="#"]').forEach(a => { a.addEventListener('click', function(e) { e.preventDefault(); const t = document.querySelector(this.getAttribute('href')); if (t) { window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - navbar.offsetHeight - 20, behavior: 'smooth' }); } }); });
    const form = document.getElementById('contactForm');
    if (form) { form.addEventListener('submit', e => { e.preventDefault(); const n = document.getElementById('name').value, em = document.getElementById('email').value; if (!n || !em) { alert('请填写必填项（姓名和邮箱）。'); return; } const btn = form.querySelector('button[type="submit"]'); const txt = btn.textContent; btn.textContent = '提交中...'; btn.disabled = true; setTimeout(() => { alert('感谢您的咨询！我们的团队将在 24 小时内与您联系。'); form.reset(); btn.textContent = txt; btn.disabled = false; }, 1500); }); }
document.querySelectorAll('.product-image').forEach(pi => { const h = document.createElement('span'); h.className = 'img-upload-hint'; h.textContent = '编辑模式可更换图片'; pi.appendChild(h); });
document.querySelectorAll('.about-visual').forEach(av => { const h = document.createElement('span'); h.className = 'img-upload-hint'; h.textContent = '编辑模式可更换图片'; av.appendChild(h); });

// ========== 编辑模式功能 ==========
let editMode = false;
const STORAGE_KEY = 'company_page_content';
const VIDEO_STORAGE_KEY = 'company_page_video';

// 可编辑元素选择器与key映射
const editableSelectors = [
    { sel: '.logo-text', key: 'logo' },
    { sel: '.hero-line:first-child', key: 'heroLine1' },
    { sel: '.hero-line.accent', key: 'heroLine2' },
    { sel: '.hero-subtitle', key: 'heroSubtitle' },
    { sel: '.stat-label', key: 'statLabels' },
    { sel: '.product-title', key: 'productTitles' },
    { sel: '.product-desc', key: 'productDescs' },
    { sel: '.product-category', key: 'productCats' },
    { sel: '.video-info h3', key: 'videoMainTitle' },
    { sel: '.video-info p', key: 'videoMainDesc' },
    { sel: '.video-card-info h4', key: 'videoCardTitles' },
    { sel: '.video-card-info p', key: 'videoCardDescs' },
    { sel: '.about-content p', key: 'aboutPs' },
    { sel: '.highlight h4', key: 'highlightTitles' },
    { sel: '.highlight p', key: 'highlightDescs' },
    { sel: '.contact-info h2', key: 'contactH2' },
    { sel: '.contact-info > p', key: 'contactDesc' },
    { sel: '.contact-item strong', key: 'contactValues' },
    { sel: '.footer-brand > p', key: 'footerDesc' },
    { sel: '.footer-bottom p', key: 'footerCopy' },
    { sel: '.section-title', key: 'sectionTitles' },
    { sel: '.section-desc', key: 'sectionDescs' },
    { sel: '.section-tag', key: 'sectionTags' },
    { sel: '.exp-number', key: 'expNumber' },
    { sel: '.exp-text', key: 'expText' },
];

function toggleEditMode() {
    editMode = !editMode;
    document.body.classList.toggle('edit-mode', editMode);
    const btn = document.getElementById('editToggle');
    btn.textContent = editMode ? '退出编辑' : '编辑';
    btn.classList.toggle('active', editMode);
    applyEditable(editMode);
}

function applyEditable(on) {
    editableSelectors.forEach(({ sel }) => {
        document.querySelectorAll(sel).forEach(el => {
            if (on) {
                el.setAttribute('contenteditable', 'true');
                el.setAttribute('data-editable', 'true');
                el.setAttribute('spellcheck', 'false');
            } else {
                el.removeAttribute('contenteditable');
                el.removeAttribute('data-editable');
                el.removeAttribute('spellcheck');
            }
        });
    });
}

function saveContent() {
    const data = {};
    editableSelectors.forEach(({ sel, key }) => {
        const els = document.querySelectorAll(sel);
        if (els.length === 1) { data[key] = els[0].innerHTML; }
        else if (els.length > 1) { data[key] = Array.from(els).map(e => e.innerHTML); }
    });
    // 保存图片src
    const imgs = [];
    document.querySelectorAll('.product-image > img, .about-visual > img').forEach(img => { imgs.push(img.src); });
    data._imgs = imgs;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    showToast('内容已保存到浏览器');
}

function loadContent() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
        const data = JSON.parse(raw);
        editableSelectors.forEach(({ sel, key }) => {
            const els = document.querySelectorAll(sel);
            if (!data[key]) return;
            if (els.length === 1 && typeof data[key] === 'string') { els[0].innerHTML = data[key]; }
            else if (els.length > 1 && Array.isArray(data[key])) { els.forEach((e, i) => { if (data[key][i] !== undefined) e.innerHTML = data[key][i]; }); }
        });
        if (data._imgs) {
            const imgs = document.querySelectorAll('.product-image > img, .about-visual > img');
            imgs.forEach((img, i) => { if (data._imgs[i]) img.src = data._imgs[i]; });
        }
    } catch(e) {}
    // 加载视频
    const videoBlob = localStorage.getItem(VIDEO_STORAGE_KEY);
    if (videoBlob) {
        const video = document.getElementById('mainVideo');
        video.src = videoBlob;
        video.load();
    }
}

function resetContent() {
    if (!confirm('确定要重置所有内容吗？这将恢复为默认值。')) return;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(VIDEO_STORAGE_KEY);
    location.reload();
}

function showToast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);padding:10px 28px;background:#1e293b;color:#fff;border-radius:50px;font-size:0.9rem;z-index:99999;box-shadow:0 4px 20px rgba(0,0,0,0.2);transition:opacity 0.3s;';
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; setTimeout(() => t.remove(), 300); }, 2000);
}

// 视频上传处理
const videoFileInput = document.getElementById('videoFileInput');
const mainVideoUpload = document.getElementById('mainVideoUpload');
const mainVideo = document.getElementById('mainVideo');

videoFileInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) handleVideoFile(file);
});

['dragenter','dragover'].forEach(evt => {
    mainVideoUpload.addEventListener(evt, (e) => { e.preventDefault(); mainVideoUpload.classList.add('dragover'); });
});
['dragleave','drop'].forEach(evt => {
    mainVideoUpload.addEventListener(evt, (e) => { e.preventDefault(); mainVideoUpload.classList.remove('dragover'); });
});
mainVideoUpload.addEventListener('drop', (e) => {
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('video/')) handleVideoFile(file);
});

function handleVideoFile(file) {
    const url = URL.createObjectURL(file);
    mainVideo.src = url;
    mainVideo.load();
    // 保存到 localStorage（注意：大文件可能超出存储限制）
    try {
        const reader = new FileReader();
        reader.onload = () => {
            try { localStorage.setItem(VIDEO_STORAGE_KEY, reader.result); showToast('视频已保存'); }
            catch(e) { showToast('视频已加载（文件过大，无法持久化保存）'); }
        };
        reader.readAsDataURL(file);
    } catch(e) { showToast('视频已加载'); }
}

// 图片更换（编辑模式下点击产品图片）
document.querySelectorAll('.product-image, .about-visual').forEach(container => {
    container.addEventListener('click', (e) => {
        if (!editMode) return;
        if (e.target.closest('.product-overlay') || e.target.closest('.btn-view')) return;
        const input = document.createElement('input');
        input.type = 'file'; input.accept = 'image/*'; input.style.display = 'none';
        input.addEventListener('change', () => {
            const file = input.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                const img = container.querySelector('img');
                if (img) img.src = url;
                showToast('图片已更换');
            }
        });
        input.click();
    });
});

// 页面加载时恢复保存的内容
loadContent();

});
</script>
</body>
</html>
