const productData = [
  {
    title: "战略赢",
    category: "strategy",
    label: "战略咨询",
    icon: "S",
    summary: "构建企业持续经营“赢”的底层逻辑，明确增长引擎与长期路径。",
    tags: ["增长战略", "第二曲线", "全球化"],
    pains: ["增长方向分散，战略共识不足", "主航道与新业务资源配置失衡", "机会窗判断慢，错失产业风口"],
    deliverables: ["总体战略规划与业务竞争战略", "第二曲线设计与全球化路径图", "战略解码、里程碑与落地复盘机制"]
  },
  {
    title: "细分冠军",
    category: "strategy",
    label: "战略咨询",
    icon: "C",
    summary: "围绕细分赛道重做定位、能力和增长飞轮，打造行业高势能品牌。",
    tags: ["赛道定位", "增长飞轮", "标杆打造"],
    pains: ["行业竞争同质化，缺少细分优势", "产品、渠道、品牌没有形成合力", "标杆案例不足，客户信任建立慢"],
    deliverables: ["细分市场机会窗与竞争地图", "冠军业务模型与增长飞轮设计", "标杆客户打法与传播资产体系"]
  },
  {
    title: "企业文化",
    category: "organization",
    label: "组织机制",
    icon: "V",
    summary: "以文化基本法统一事业共识，把价值观嵌入战略、制度与人才动作。",
    tags: ["文化基本法", "价值共识", "制度嵌入"],
    pains: ["使命愿景停留在墙面，未进入经营动作", "跨部门协同内耗高，价值判断不统一", "新老团队融合慢，文化传承断层"],
    deliverables: ["文化基本法纲要与核心理念体系", "文化落地手册与宣贯机制", "文化与战略、机制、人才匹配方案"]
  },
  {
    title: "事业合伙人",
    category: "organization",
    label: "组织机制",
    icon: "P",
    summary: "用共识、共担、共创、共享机制激活核心人才与产业链伙伴。",
    tags: ["合伙机制", "价值分配", "人才激励"],
    pains: ["核心人才动力不足，老板单点驱动", "权责利不清，激励无法绑定长期贡献", "产业链伙伴只交易不共创"],
    deliverables: ["多层次合伙人体系与选拔标准", "价值评价、增量分配与动态进退机制", "合伙文化与试点推广路径"]
  },
  {
    title: "强中台",
    category: "organization",
    label: "组织机制",
    icon: "M",
    summary: "搭建强中台 + 分布式经营体，让前端敏捷、中后台集约复用。",
    tags: ["平台组织", "经营体", "效能提升"],
    pains: ["部门墙严重，资源重复建设", "前端响应慢，规模化裂变困难", "经营核算不清，责任无法下沉"],
    deliverables: ["业务/数据/技术中台建设方案", "分布式经营体核算与权责体系", "流程拉通、协同机制与组织效能评估"]
  },
  {
    title: "AI + 组织",
    category: "ai",
    label: "AI 变革",
    icon: "AI",
    summary: "把 AI 嵌入管理全流程，驱动组织数智化进化与治理升级。",
    tags: ["智能治理", "流程智能", "组织变革"],
    pains: ["AI 只停留在工具试用，未进入组织系统", "决策链条长，数据无法支撑管理动作", "员工对 AI 变革认知不一致"],
    deliverables: ["AI 变革指数组织诊断报告", "领导者“智脑”与战略智能决策系统", "流程智能化方案与治理模式升级辅导"]
  },
  {
    title: "AI 新领导力",
    category: "ai",
    label: "AI 变革",
    icon: "L",
    summary: "打造数智时代准企业家核心人才梯队，支撑全球化扩张与组织裂变。",
    tags: ["干部梯队", "训战结合", "准企业家"],
    pains: ["干部能力模型仍停留在传统管理阶段", "组织扩张后指挥体系与人才梯队断层", "AI 工具使用与业务判断脱节"],
    deliverables: ["数智领导力模型与人才梯队规划", "准企业家赋能计划与干部培养体系", "测评、晋升、淘汰与岗位历练机制"]
  },
  {
    title: "跨境企业",
    category: "global",
    label: "跨境品牌",
    icon: "G",
    summary: "服务跨境出海企业，从业务路径、组织能力到全球化品牌一体设计。",
    tags: ["出海路径", "跨境电商", "全球布局"],
    pains: ["海外渠道增长快但组织能力跟不上", "国内打法难以直接适配海外市场", "品牌、供应链与本地化运营割裂"],
    deliverables: ["全球化路径图与市场进入策略", "出海组织与跨境经营机制设计", "品牌本地化与渠道增长方案"]
  },
  {
    title: "新经济品牌",
    category: "global",
    label: "跨境品牌",
    icon: "B",
    summary: "融合产品、雇主、产业与信用品牌，提升中国品牌全球溢价。",
    tags: ["品牌升级", "信用背书", "爆品打造"],
    pains: ["品牌只做传播，没有沉淀长期价值", "产品爆发后缺少信用背书体系", "出海品牌表达与产业价值不匹配"],
    deliverables: ["品牌战略定位与全维品牌体系", "信用背书体系与价值传播规划", "出海品牌适配与全球化落地方案"]
  },
  {
    title: "国资国企",
    category: "state",
    label: "国企服务",
    icon: "R",
    summary: "围绕五年规划、组织优化、人力落地与三项制度改革推进高质量发展。",
    tags: ["五年规划", "三项制度", "组织优化"],
    pains: ["改革政策要求清晰，但落地路径不够细", "干部队伍与经营目标衔接不足", "组织、人力、绩效改革难以闭环"],
    deliverables: ["五年战略规划与组织架构优化", "三项制度改革与干部队伍建设", "人力资源体系与改革督导闭环"]
  },
  {
    title: "对标华为",
    category: "organization",
    label: "组织机制",
    icon: "H",
    summary: "借鉴标杆企业干部、流程、组织与文化体系，形成适配自身的管理升级工程。",
    tags: ["标杆学习", "流程体系", "干部管理"],
    pains: ["学标杆容易照搬，无法转化成自身机制", "流程、干部、文化之间缺少系统衔接", "管理升级没有里程碑和责任人"],
    deliverables: ["标杆实践拆解与差距诊断", "适配型干部/流程/文化建设方案", "管理升级路线图与试点机制"]
  },
  {
    title: "长期顾问",
    category: "advisor",
    label: "长期顾问",
    icon: "A",
    summary: "以长期主义陪伴经营增长，按季度复盘关键议题并推动方案持续进化。",
    tags: ["常年顾问", "经营复盘", "长期陪跑"],
    pains: ["咨询项目结束后缺少持续推进机制", "关键经营议题变化快，需要外部智库陪伴", "高管团队需要稳定的战略与组织复盘节奏"],
    deliverables: ["年度经营顾问计划与季度议题池", "高层共创会、专题工作坊与落地督导", "数据复盘、人才机制与战略迭代建议"]
  }
];

const courseData = [
  {
    title: "战略顶层设计与增长导航",
    category: "strategy",
    image: "./assets/hero-workshop.jpg",
    teacher: "智基时代战略顾问组",
    price: "¥28,999",
    summary: "从机会窗、业务组合到战略解码，搭建持续增长底层逻辑。"
  },
  {
    title: "事业合伙人机制落地工作坊",
    category: "organization",
    image: "./assets/banquet-training.jpg",
    teacher: "组织机制专家",
    price: "¥25,999",
    summary: "设计权责利、价值评价、增量分配与动态进退机制。"
  },
  {
    title: "AI 新领导力与组织变革",
    category: "ai",
    image: "./assets/keynote-close.jpg",
    teacher: "AI 组织变革顾问",
    price: "¥18,999",
    summary: "让管理者掌握 AI 决策、流程智能与组织进化的关键方法。"
  },
  {
    title: "企业文化基本法构建",
    category: "organization",
    image: "./assets/culture-classroom.jpg",
    teacher: "文化治理顾问",
    price: "¥15,999",
    summary: "从理念提炼到制度嵌入，把文化从口号推进到经营场景。"
  },
  {
    title: "国资国企改革落地工程",
    category: "state",
    image: "./assets/gov-classroom.jpg",
    teacher: "国企改革顾问组",
    price: "¥29,999",
    summary: "围绕五年规划、三项制度改革和干部队伍建设做系统落地。"
  },
  {
    title: "准企业家领导力训战营",
    category: "leadership",
    image: "./assets/forum-audience.jpg",
    teacher: "干部培养顾问",
    price: "¥21,999",
    summary: "以训战结合、岗位历练和动态评价打造核心人才梯队。"
  }
];

const stageData = [
  ["01", "深度诊断", "识别增长焦虑、组织内耗、人才断层、品牌出海与 AI 转型阻力。", [72, 68, 64, 66, 58, 62]],
  ["02", "战略共识", "用战略地图、三层次业务与机会窗研判形成高层共识。", [92, 76, 70, 78, 72, 68]],
  ["03", "系统设计", "输出机制、组织、文化、人才、品牌、AI 治理等闭环方案。", [88, 90, 84, 86, 82, 88]],
  ["04", "陪跑落地", "拆解里程碑、搭建试点、推动训战结合，沉淀可复制打法。", [80, 92, 90, 84, 78, 82]],
  ["05", "复盘迭代", "用数据复盘与动态调优，让方案持续适配组织进化。", [86, 84, 82, 80, 76, 90]]
];

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));

function initHeader() {
  const header = $("[data-header]");
  const navToggle = $(".nav-toggle");
  const navLinks = $$(".main-nav a");

  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  navToggle.addEventListener("click", () => {
    const isOpen = document.body.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      document.body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  const sections = navLinks
    .map((link) => $(link.getAttribute("href")))
    .filter(Boolean);

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.02 }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
  );

  $$(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index % 4, 3) * 70}ms`;
    observer.observe(element);
  });
}

function initTicker() {
  const ticker = $(".ticker");
  if (!ticker) return;
  ticker.innerHTML += ticker.innerHTML;
}

function renderProducts(filter = "all") {
  const grid = $("#product-grid");
  const filtered = productData.filter((product) => filter === "all" || product.category === filter);

  grid.innerHTML = filtered
    .map(
      (product) => `
        <article class="product-card reveal is-visible" data-tilt>
          <div class="product-icon" aria-hidden="true">${product.icon}</div>
          <div>
            <p>${product.label}</p>
            <h3>${product.title}</h3>
            <p>${product.summary}</p>
          </div>
          <div class="product-tags">
            ${product.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
          <button type="button" data-product="${product.title}">查看详情</button>
        </article>
      `
    )
    .join("");

  initTilt(grid);
}

function initProductFilters() {
  const buttons = $$(".filter-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      renderProducts(button.dataset.filter);
    });
  });

  $("#product-grid").addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-product]");
    if (!trigger) return;
    const product = productData.find((item) => item.title === trigger.dataset.product);
    if (product) openProductDialog(product);
  });
}

function openProductDialog(product) {
  const dialog = $("#product-dialog");
  $("#dialog-category").textContent = product.label;
  $("#dialog-title").textContent = product.title;
  $("#dialog-subtitle").textContent = product.summary;
  $("#dialog-pains").innerHTML = product.pains.map((item) => `<li>${item}</li>`).join("");
  $("#dialog-deliverables").innerHTML = product.deliverables.map((item) => `<li>${item}</li>`).join("");

  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function initDialog() {
  const dialog = $("#product-dialog");
  $(".dialog-close").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    const rect = dialog.getBoundingClientRect();
    const isBackdropClick =
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom;
    if (isBackdropClick) dialog.close();
  });
}

function renderCourses(filter = "all") {
  const grid = $("#course-grid");
  const filtered = courseData.filter((course) => filter === "all" || course.category === filter);

  grid.innerHTML = filtered
    .map(
      (course) => `
        <article class="course-card reveal is-visible" data-tilt>
          <div class="course-media">
            <img src="${course.image}" alt="${course.title}" loading="lazy" />
            <span>${course.teacher}</span>
          </div>
          <div class="course-body">
            <h3>${course.title}</h3>
            <p>${course.summary}</p>
            <div class="course-meta">
              <strong>${course.price}</strong>
              <button type="button" data-course="${course.title}">查看大纲</button>
            </div>
          </div>
        </article>
      `
    )
    .join("");

  initTilt(grid);
}

function initCourseTabs() {
  const tabs = $$(".course-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((item) => item.classList.remove("active"));
      tab.classList.add("active");
      renderCourses(tab.dataset.courseFilter);
    });
  });

  $("#course-grid").addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-course]");
    if (!trigger) return;
    const course = courseData.find((item) => item.title === trigger.dataset.course);
    if (!course) return;
    const matched = productData.find((item) => item.category === course.category) || productData[0];
    openProductDialog({
      title: course.title,
      label: "课程大纲",
      summary: `${course.teacher} · ${course.summary}`,
      pains: ["适合企业创始人、高管、组织与人力负责人", "以案例拆解、方法论讲解、课堂作业和落地清单推进", "可与咨询项目联动，沉淀企业内部共识"],
      deliverables: ["课程讲义与工具表单", "关键议题复盘清单", `推荐衔接咨询产品：${matched.title}`]
    });
  });
}

function initScrolly() {
  const stageNumber = $("#stage-number");
  const stageTitle = $("#stage-title");
  const stageCopy = $("#stage-copy");
  const stageProgress = $("#stage-progress");
  const signalCards = $$(".signal-card");

  const setStage = (index) => {
    const [number, title, copy, levels] = stageData[index];
    stageNumber.textContent = number;
    stageTitle.textContent = title;
    stageCopy.textContent = copy;
    stageProgress.style.width = `${((index + 1) / stageData.length) * 100}%`;
    signalCards.forEach((card, cardIndex) => {
      card.style.setProperty("--level", levels[cardIndex] || 60);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        setStage(Number(entry.target.dataset.stage));
      });
    },
    { threshold: 0.55, rootMargin: "-16% 0px -22% 0px" }
  );

  $$(".step").forEach((step) => observer.observe(step));
}

function drawRadar(values = [42, 44, 40, 36, 45, 43]) {
  const canvas = $("#radar");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const center = width / 2;
  const radius = 126;
  const labels = ["战略", "组织", "人才", "AI", "品牌", "落地"];
  ctx.clearRect(0, 0, width, height);

  ctx.strokeStyle = "rgba(44, 44, 44, 0.12)";
  ctx.fillStyle = "rgba(158, 43, 37, 0.04)";
  ctx.lineWidth = 1;

  for (let level = 1; level <= 5; level += 1) {
    ctx.beginPath();
    labels.forEach((_, index) => {
      const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2;
      const pointRadius = (radius * level) / 5;
      const x = center + Math.cos(angle) * pointRadius;
      const y = center + Math.sin(angle) * pointRadius;
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.closePath();
    ctx.stroke();
    if (level === 5) ctx.fill();
  }

  labels.forEach((label, index) => {
    const angle = (Math.PI * 2 * index) / labels.length - Math.PI / 2;
    const x = center + Math.cos(angle) * (radius + 28);
    const y = center + Math.sin(angle) * (radius + 28);
    ctx.beginPath();
    ctx.moveTo(center, center);
    ctx.lineTo(center + Math.cos(angle) * radius, center + Math.sin(angle) * radius);
    ctx.stroke();
    ctx.fillStyle = "#7a7672";
    ctx.font = "700 14px system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(label, x, y);
  });

  ctx.beginPath();
  values.forEach((value, index) => {
    const angle = (Math.PI * 2 * index) / values.length - Math.PI / 2;
    const pointRadius = (Math.max(0, Math.min(value, 100)) / 100) * radius;
    const x = center + Math.cos(angle) * pointRadius;
    const y = center + Math.sin(angle) * pointRadius;
    if (index === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(158, 43, 37, 0.2)";
  ctx.strokeStyle = "#9e2b25";
  ctx.lineWidth = 3;
  ctx.fill();
  ctx.stroke();

  values.forEach((value, index) => {
    const angle = (Math.PI * 2 * index) / values.length - Math.PI / 2;
    const pointRadius = (value / 100) * radius;
    ctx.beginPath();
    ctx.arc(center + Math.cos(angle) * pointRadius, center + Math.sin(angle) * pointRadius, 4, 0, Math.PI * 2);
    ctx.fillStyle = "#c8a97e";
    ctx.fill();
  });
}

function initDiagnosis() {
  drawRadar();
  const form = $("#diagnosis-form");
  if (!form) return;

  const score = $("#score");
  const recommendation = $("#recommendation");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const phone = String(data.get("phone") || "").trim();
    if (!/^1[3-9]\d{9}$/.test(phone)) {
      recommendation.textContent = "请填写有效的中国大陆手机号，便于接收诊断报告。";
      return;
    }

    const scale = Number(data.get("scale"));
    const pain = Number(data.get("pain"));
    const need = Number(data.get("need"));
    const average = Math.round((scale + pain + need) / 3);
    const finalScore = Math.min(94, Math.max(58, average + 4));

    const values = [
      Math.min(96, scale + 8),
      Math.min(94, pain + 5),
      Math.min(92, need + 2),
      Math.max(52, Math.round((pain + need) / 2)),
      Math.min(94, Math.round((scale + pain) / 2) + 6),
      Math.min(92, Math.round((scale + need) / 2) + 3)
    ];

    score.textContent = finalScore;
    drawRadar(values);

    const product =
      pain >= 80
        ? productData.find((item) => item.title === "AI + 组织")
        : pain >= 70
          ? productData.find((item) => item.title === "事业合伙人")
          : productData.find((item) => item.title === "战略赢");
    const course =
      need >= 84
        ? "AI 新领导力与组织变革"
        : need >= 76
          ? "事业合伙人机制落地工作坊"
          : "战略顶层设计与增长导航";

    recommendation.innerHTML = `推荐优先进入 <strong>${product.title}</strong> 咨询模块，并匹配 <strong>${course}</strong>。线索已暂存到本地浏览器，可接入后台导出。`;
    localStorage.setItem(
      "zhijiDiagnosisLead",
      JSON.stringify({ scale, pain, need, phone, finalScore, createdAt: new Date().toISOString() })
    );
  });
}

function initContactForm() {
  const form = $("#contact-form");
  const note = $("#form-note");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    if (!/^1[3-9]\d{9}$/.test(String(data.phone || "").trim())) {
      note.textContent = "请填写有效的中国大陆手机号。";
      return;
    }

    const leads = JSON.parse(localStorage.getItem("zhijiContactLeads") || "[]");
    leads.push({ ...data, createdAt: new Date().toISOString() });
    localStorage.setItem("zhijiContactLeads", JSON.stringify(leads));
    note.textContent = "预约信息已记录，后续可接入企微、短信或官网后台。";
    form.reset();
  });
}

function initTilt(root = document) {
  const cards = $$("[data-tilt]", root);
  cards.forEach((card) => {
    if (card.dataset.tiltReady) return;
    card.dataset.tiltReady = "true";
    card.addEventListener("pointermove", (event) => {
      if (window.matchMedia("(max-width: 920px)").matches) return;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `rotateX(${y * -5}deg) rotateY(${x * 6}deg) translateY(-3px)`;
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
}

function initCursor() {
  const cursor = $(".cursor");
  if (!cursor || window.matchMedia("(pointer: coarse)").matches) return;

  window.addEventListener("pointermove", (event) => {
    cursor.classList.add("is-active");
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
  });

  $$("a, button, input, select, textarea").forEach((item) => {
    item.addEventListener("pointerenter", () => cursor.classList.add("is-hovering"));
    item.addEventListener("pointerleave", () => cursor.classList.remove("is-hovering"));
  });
}

function initHeroCanvas() {
  const canvas = $("#hero-canvas");
  const ctx = canvas.getContext("2d");
  const pointer = { x: 0, y: 0, active: false };
  let nodes = [];
  let animationFrame;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    canvas.width = Math.floor(rect.width * ratio);
    canvas.height = Math.floor(rect.height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    const count = Math.max(48, Math.floor(rect.width / 28));
    nodes = Array.from({ length: count }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      z: Math.random() * 0.7 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25
    }));
  };

  const draw = () => {
    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);

    nodes.forEach((node) => {
      const pullX = pointer.active ? (pointer.x - node.x) * 0.0008 * node.z : 0;
      const pullY = pointer.active ? (pointer.y - node.y) * 0.0008 * node.z : 0;
      node.x += node.vx + pullX;
      node.y += node.vy + pullY;

      if (node.x < 0 || node.x > rect.width) node.vx *= -1;
      if (node.y < 0 || node.y > rect.height) node.vy *= -1;
    });

    for (let i = 0; i < nodes.length; i += 1) {
      for (let j = i + 1; j < nodes.length; j += 1) {
        const a = nodes[i];
        const b = nodes[j];
        const distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance < 118) {
          const opacity = (1 - distance / 118) * 0.24;
          ctx.strokeStyle = `rgba(200,169,126,${opacity})`;
          ctx.lineWidth = Math.max(0.6, (a.z + b.z) / 2);
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
    }

    nodes.forEach((node) => {
      ctx.beginPath();
      ctx.arc(node.x, node.y, 1.4 + node.z * 1.8, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,250,244,${0.32 + node.z * 0.36})`;
      ctx.fill();
    });

    animationFrame = requestAnimationFrame(draw);
  };

  resize();
  draw();
  window.addEventListener("resize", resize);
  window.addEventListener(
    "pointermove",
    (event) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = pointer.x > 0 && pointer.y > 0 && pointer.x < rect.width && pointer.y < rect.height;
    },
    { passive: true }
  );
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) cancelAnimationFrame(animationFrame);
    else draw();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initTicker();
  renderProducts();
  initProductFilters();
  initDialog();
  renderCourses();
  initCourseTabs();
  initScrolly();
  initDiagnosis();
  initContactForm();
  initTilt();
  initCursor();
  initHeroCanvas();
  initReveal();
});
