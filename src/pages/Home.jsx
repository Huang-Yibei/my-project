import { Link } from 'react-router-dom'

const services = [
  {
    id: 'family',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>
      </svg>
    ),
    title: '家族传承',
    subtitle: 'Family Legacy',
    desc: '从家族宪章到财富规划，从文化传承到治理结构，构建百年家族的制度根基。',
    tags: ['家族宪章', '财富传承', '治理结构', '精神文化'],
  },
  {
    id: 'training',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
      </svg>
    ),
    title: '企业二代特训营',
    subtitle: 'Next-Gen Training Camp',
    desc: '系统化锻造企业接班人的领导力、战略思维与管理能力，12周蜕变式成长。',
    tags: ['领导力', '战略思维', '管理实战', '12周特训'],
  },
  {
    id: 'transformation',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    ),
    title: '企业二代变形记',
    subtitle: 'Next-Gen Transformation',
    desc: '沉浸式实战训练，从认知到行为，从心态到能力，完成真正的破茧成蝶。',
    tags: ['蜕变训练', '实战沙盘', '心态重塑', '能力突破'],
  },
]

const stats = [
  { num: '200+', label: '服务家族企业' },
  { num: '500+', label: '培养学员人次' },
  { num: '98%', label: '学员满意度' },
  { num: '8年', label: '行业深耕' },
]

const blogs = [
  {
    title: '家族传承的第一步：从建立家族宪章开始',
    date: '2026-03-15',
    tag: '家族传承',
    excerpt: '没有制度约束的家族传承，如同没有舵的船……',
  },
  {
    title: '为什么越来越多的企二代选择「变形」而不是「接班」？',
    date: '2026-03-08',
    tag: '变形记',
    excerpt: '时代变了，单纯的岗位交接已不足以应对复杂局面……',
  },
  {
    title: '特训营学员故事：从迷茫到笃定，一位95后接班的真实记录',
    date: '2026-02-28',
    tag: '特训营',
    excerpt: '从不知道自己能不能做到带领团队打下一场胜仗……',
  },
]

export default function Home() {
  return (
    <div>
      {/* ===== Hero ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80')`,
          }}
        />
        <div className="absolute inset-0 hero-overlay" />

        {/* Decorative shapes */}
        <div className="absolute top-20 right-10 w-72 h-72 border border-white/10 rounded-full opacity-20" />
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-nx-gold/30 rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 py-32">
          <div className="max-w-2xl">
            <div className="text-nx-gold text-sm tracking-[0.3em] uppercase mb-6 opacity-0 animate-fade-in-up">
              专注 · 传承 · 成长
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white leading-tight mb-6 opacity-0 animate-fade-in-up delay-100">
              念信
            </h1>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white/90 leading-tight mb-8 opacity-0 animate-fade-in-up delay-200">
              家族传承与<br/>企业二代培养专家
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-10 max-w-lg opacity-0 animate-fade-in-up delay-300">
              帮助中国家族企业完成代际传承，培养有使命感、有能力、有格局的新一代领导者。
            </p>
            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-400">
              <Link to="/services" className="btn-primary">
                了解业务
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white/40 text-white px-6 py-3 font-medium hover:bg-white/10 transition-all duration-300">
                预约咨询
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in-up delay-500">
          <span className="text-white/40 text-xs tracking-widest">向下</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ===== Stats ===== */}
      <section className="bg-nx-green py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-serif font-bold text-nx-gold mb-1">{s.num}</div>
              <div className="text-white/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== Services ===== */}
      <section className="py-24 bg-nx-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-nx-gold text-sm tracking-[0.3em] uppercase mb-3">OUR SERVICES</div>
            <h2 className="section-title mb-4">三大核心业务</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              从顶层设计到落地培养，从知识传递到行为改变，念信用专业陪伴家族成长。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <Link
                key={s.id}
                to={`/services/${s.id}`}
                className="group bg-white rounded-sm p-8 card-hover border border-gray-100"
              >
                <div className="w-14 h-14 rounded-sm bg-nx-green/5 flex items-center justify-center text-nx-green mb-6 group-hover:bg-nx-green group-hover:text-white transition-all duration-300">
                  {s.icon}
                </div>
                <div className="text-xs text-nx-gold tracking-widest uppercase mb-2">{s.subtitle}</div>
                <h3 className="font-serif text-2xl font-semibold text-nx-green mb-4">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map(tag => (
                    <span key={tag} className="text-xs bg-nx-cream text-gray-500 px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-nx-green text-sm font-medium group-hover:gap-3 transition-all">
                  了解更多
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== About teaser ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-nx-gold text-sm tracking-[0.3em] uppercase mb-3">ABOUT US</div>
            <h2 className="section-title mb-6">为什么选择念信？</h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              念信成立于2018年，汇聚了一批兼具学术背景与实战经验的导师团队。我们相信，传承不是简单的交接班，而是一场涉及文化、制度、能力与心态的系统工程。
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              8年来，我们陪伴超过200个家族企业走过传承的关键阶段，帮助500+企业二代找到自己的领导力风格与人生使命。
            </p>
            <Link to="/about" className="btn-outline">
              了解更多
            </Link>
          </div>
          <div classNameName="relative">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80"
              alt="念信团队"
              className="w-full h-80 object-cover rounded-sm"
            />
            <div className="absolute -bottom-6 -left-6 bg-nx-green text-white p-6 max-w-xs">
              <div className="text-3xl font-serif font-bold text-nx-gold mb-1">8年</div>
              <div className="text-sm text-white/80">专注家族传承与二代培养行业深耕</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Blog ===== */}
      <section className="py-24 bg-nx-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <div className="text-nx-gold text-sm tracking-[0.3em] uppercase mb-3">INSIGHTS</div>
              <h2 className="section-title">最新动态</h2>
            </div>
            <Link to="/blog" className="hidden md:flex items-center gap-2 text-nx-green text-sm font-medium hover:gap-3 transition-all">
              查看全部
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.map((b, i) => (
              <article key={i} className="bg-white card-hover border border-gray-100 overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-nx-green/20 to-nx-gold/20 flex items-center justify-center">
                  <span className="text-xs text-nx-gold tracking-widest uppercase bg-white/80 px-3 py-1">{b.tag}</span>
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-400 mb-2">{b.date}</div>
                  <h3 className="font-serif text-lg font-semibold text-nx-green mb-3 leading-snug">{b.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{b.excerpt}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/blog" className="btn-outline">查看全部文章</Link>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="bg-nx-green py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6">
            开启您的传承之旅
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-xl mx-auto">
            无论您是正在规划传承的企业家，还是准备接班的二代，我们都可以为您提供专业、定制化的支持。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-nx-gold text-white px-8 py-4 font-medium hover:bg-nx-gold-light transition-colors tracking-wide">
              立即预约咨询
            </Link>
            <Link to="/services" className="border-2 border-white/40 text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors tracking-wide">
              了解全部业务
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
