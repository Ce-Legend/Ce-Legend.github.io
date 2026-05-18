import type { CSSProperties } from 'react'
import './App.css'

type UpdateItem = {
  time: string
  text: string
}

type NoteItem = {
  title: string
  meta: string
}

type SystemStep = {
  title: string
  items: string[]
}

type OrchardItem = {
  title: string
  subtitle: string
  stage: 'fruit' | 'growing' | 'seed'
  x: number
  y: number
  href: string
  detail: string
}

type WorkItem = {
  title: string
  note: string
  href: string
}

const updates: UpdateItem[] = [
  { time: '本周', text: '更新了个人网站果园原型' },
  { time: '最近', text: '整理作品集与 GitHub 证据层' },
  { time: '最近', text: '记录 AI Agent 实验与知识库迭代' },
]

const notes: NoteItem[] = [
  { title: 'AI 产品的冷启动：从最小价值到增长飞轮', meta: '05-19' },
  { title: '用 RAG 搭建个人知识库的实践记录', meta: '05-12' },
  { title: '出海工具站的 SEO 内容策略拆解', meta: '05-07' },
]

const systemSteps: SystemStep[] = [
  { title: 'AI 能力', items: ['LLM', 'RAG', 'Agent', '工具链'] },
  { title: '产品系统', items: ['需求洞察', '产品设计', '数据驱动', '增长迭代'] },
  { title: '交付系统', items: ['内容生产', '自动化流程', '数据分析', '复盘沉淀'] },
]

const orchardItems: OrchardItem[] = [
  {
    title: '数据交付体系',
    subtitle: '已结果的树',
    stage: 'fruit',
    x: 20,
    y: 33,
    href: '#work',
    detail: '字段、异常、样例、验收和交接文档，沉淀成可复用交付方法。',
  },
  {
    title: '短视频评论采集',
    subtitle: '已结果的树',
    stage: 'fruit',
    x: 38,
    y: 28,
    href: '#work',
    detail: '从样例确认到全量交付，保留过程证据和客户可核对结果。',
  },
  {
    title: '光网络可视化平台',
    subtitle: '已结果的树',
    stage: 'fruit',
    x: 33,
    y: 55,
    href: '#work',
    detail: '把客户反馈、报表口径和视觉验收拆成可运行 demo。',
  },
  {
    title: '英文小工具站实验',
    subtitle: '正在生长',
    stage: 'growing',
    x: 66,
    y: 31,
    href: '#work',
    detail: '围绕低难度英文需求做可上线、可收录、可复盘的小工具。',
  },
  {
    title: '个人知识库 2.0',
    subtitle: '正在生长',
    stage: 'growing',
    x: 82,
    y: 42,
    href: '#manual',
    detail: '把 Obsidian、Miaotty 和项目复盘连接成长期行动系统。',
  },
  {
    title: 'AI Agent 实验室',
    subtitle: '未来树苗',
    stage: 'seed',
    x: 21,
    y: 77,
    href: '#system',
    detail: '围绕 Codex、浏览器、知识库和自动化工作流做真实实验。',
  },
  {
    title: '自动化工作流',
    subtitle: '未来树苗',
    stage: 'seed',
    x: 38,
    y: 79,
    href: '#system',
    detail: '把重复操作做成低摩擦工具链，减少人工接力损耗。',
  },
  {
    title: '预测系统',
    subtitle: '未来树苗',
    stage: 'seed',
    x: 55,
    y: 76,
    href: '#system',
    detail: '用参考类、校准和复盘记录，训练长期判断力。',
  },
  {
    title: '输出栏目',
    subtitle: '未来树苗',
    stage: 'seed',
    x: 72,
    y: 79,
    href: '#notes',
    detail: '把项目复盘、读书收获和失败记录变成可持续表达。',
  },
]

const works: WorkItem[] = [
  { title: '数据交付体系', note: '把混乱需求变成可验收交付。', href: '#work' },
  { title: '短视频评论采集', note: '复杂采集、样例确认、补采和交付闭环。', href: '#work' },
  { title: '企业信息采集', note: '长跑采集、异常留证、官方导出优先。', href: '#work' },
  { title: '光网络可视化平台', note: '客户 demo、问题修复和视觉验收。', href: '#work' },
  { title: 'AI 思维工具站', note: '真实需求、产品取舍和可运行 Demo。', href: '#work' },
]

function nodeStyle(item: OrchardItem): CSSProperties {
  return {
    '--x': `${item.x}%`,
    '--y': `${item.y}%`,
  } as CSSProperties
}

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.77.6-3.35-1.18-3.35-1.18-.46-1.15-1.12-1.46-1.12-1.46-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.52 2.36 1.08 2.93.83.09-.65.35-1.08.63-1.33-2.21-.25-4.54-1.1-4.54-4.91 0-1.08.39-1.97 1.03-2.66-.1-.25-.45-1.26.1-2.63 0 0 .84-.27 2.75 1.02A9.44 9.44 0 0 1 12 6.09c.85 0 1.7.11 2.5.33 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.38.1 2.63.64.69 1.02 1.58 1.02 2.66 0 3.82-2.33 4.66-4.55 4.9.36.31.68.92.68 1.86v2.76c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6.5h16v11H4v-11Zm1.6 1.4 6.4 4.55 6.4-4.55H5.6Zm12.8 8.2v-6.3l-6.4 4.55L5.6 9.8v6.3h12.8Z" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M11 2h2v4h-2V2Zm0 16h2v4h-2v-4ZM2 11h4v2H2v-2Zm16 0h4v2h-4v-2ZM4.22 5.64l1.42-1.42 2.82 2.83-1.41 1.41-2.83-2.82Zm11.32 11.31 1.41-1.41 2.83 2.82-1.42 1.42-2.82-2.83Zm2.82-12.73 1.42 1.42-2.83 2.82-1.41-1.41 2.82-2.83ZM7.05 15.54l1.41 1.41-2.82 2.83-1.42-1.42 2.83-2.82ZM12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />
    </svg>
  )
}

function App() {
  return (
    <main>
      <header className="site-header" aria-label="主导航">
        <a className="brand" href="#top" aria-label="Ce Legend 首页">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 42 24">
              <path d="M3 20 15 5l8 10 5-7 11 12H3Z" />
              <path d="M13 16h25" />
            </svg>
          </span>
          <span>Ce Legend</span>
        </a>
        <nav>
          <a className="active" href="#top">果园</a>
          <a href="#work">作品</a>
          <a href="#notes">札记</a>
          <a href="#system">和时间做朋友</a>
          <a href="#resume">简历</a>
        </nav>
        <div className="header-tools" aria-label="快捷入口">
          <a href="https://github.com/Ce-Legend" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href="mailto:hello@example.com" aria-label="邮箱">
            <MailIcon />
          </a>
          <button type="button" aria-label="切换主题">
            <SunIcon />
          </button>
        </div>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <h1>我的长期复利果园</h1>
          <p>
            这里记录我的探索、实践与思考。
            <br />
            好奇心是种子，AI 是工具，产品是载体，真实项目是土壤。
            <br />
            我在这里种植、迭代、复盘，让它们慢慢长成可运行的东西。
          </p>

          <div className="identity-list" aria-label="身份标签">
            <span>Indie Hacker</span>
            <span>Building Public</span>
            <span>时间的朋友</span>
            <span>长期主义</span>
          </div>

          <div className="hero-actions">
            <a className="button primary" href="#work">
              开始逛果园
              <span aria-hidden="true">→</span>
            </a>
            <a className="button secondary" href="#notes">
              查看最近更新
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="updates-panel">
            <h2>最近动态</h2>
            <ul>
              {updates.map((item) => (
                <li key={`${item.time}-${item.text}`}>
                  <span>{item.time}</span>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section className="orchard-map" aria-label="可交互果园地图">
          <div className="map-ground" aria-hidden="true">
            <span className="river" />
            <span className="bridge" />
            <span className="fence fence-front" />
            <span className="fence fence-back" />
          </div>

          <div className="wood-sign sign-fruit">
            <strong>已结果的树</strong>
            <span>可运行的成果</span>
          </div>
          <div className="wood-sign sign-growing">
            <strong>正在生长的树</strong>
            <span>迭代中的项目</span>
          </div>
          <div className="wood-sign sign-seed">
            <strong>未来树苗区</strong>
            <span>想法与排队中</span>
          </div>

          {orchardItems.map((item) => (
            <a
              className={`orchard-node ${item.stage}`}
              href={item.href}
              key={item.title}
              style={nodeStyle(item)}
            >
              <span className="tree-art" aria-hidden="true">
                <i />
              </span>
              <span className="node-label">
                <strong>{item.title}</strong>
                <small>{item.subtitle}</small>
              </span>
              <span className="node-popover">
                <b>{item.title}</b>
                <span>{item.detail}</span>
              </span>
            </a>
          ))}
        </section>
      </section>

      <section className="entry-grid" aria-label="核心入口">
        <article id="notes" className="entry-card notes-card">
          <a className="entry-title" href="#notes">
            <span className="entry-icon">▤</span>
            <h2>果园札记</h2>
            <small>更多 →</small>
          </a>
          <div className="notebook">
            {notes.map((note) => (
              <a href="#notes" key={note.title}>
                <span>{note.title}</span>
                <small>{note.meta}</small>
              </a>
            ))}
          </div>
          <p>灵感、方法、思考的记录本。</p>
        </article>

        <article id="system" className="entry-card system-card">
          <a className="entry-title" href="#system">
            <span className="entry-icon">♧</span>
            <h2>和时间做朋友</h2>
            <small>展开 →</small>
          </a>
          <div className="system-flow" aria-label="复利系统">
            {systemSteps.map((step, index) => (
              <div className="system-step" key={step.title}>
                <h3>{step.title}</h3>
                {step.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
                {index < systemSteps.length - 1 && <b aria-hidden="true">→</b>}
              </div>
            ))}
          </div>
          <p>把点连成网，把系统跑起来。</p>
        </article>

        <article id="manual" className="entry-card manual-card">
          <a className="entry-title" href="#manual">
            <span className="entry-icon">□</span>
            <h2>个人说明书</h2>
            <small>阅读 →</small>
          </a>
          <div className="manual-content">
            <img src="/assets/avatar.jpg" alt="Ce Legend 头像" />
            <ul>
              <li>我是谁</li>
              <li>我怎么学习</li>
              <li>我怎么工作</li>
              <li>适合怎么合作</li>
            </ul>
          </div>
          <p>真实状态、协作方式和长期方向。</p>
        </article>
      </section>

      <section id="work" className="section work-section">
        <div className="section-heading">
          <h2>已结果的树</h2>
          <p>作品与真实成果会逐步连接到 GitHub、截图、复盘和交付证据。</p>
        </div>
        <div className="work-list">
          {works.map((work) => (
            <a href={work.href} key={work.title}>
              <strong>{work.title}</strong>
              <span>{work.note}</span>
            </a>
          ))}
        </div>
      </section>

      <section id="resume" className="resume-strip">
        <div>
          <h2>正式简历</h2>
          <p>后续连接产品岗简历、作品集页面和可下载 PDF。</p>
        </div>
        <a className="button primary" href="mailto:hello@example.com">
          联系我
        </a>
      </section>
    </main>
  )
}

export default App
