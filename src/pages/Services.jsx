import { Link } from 'react-router-dom'

const services = [
  {
    id: 'family',
    color: 'bg-nx-green',
    lightColor: 'bg-nx-green/5',
    title: '家族传承',
    subtitle: 'Family Legacy Planning',
    slogan: '构建百年家族的制度根基',
    desc: '我们帮助企业家从顶层设计入手，建立家族宪章、完善治理结构、规划财富传承路径，确保家族精神与物质财富的代际延续。',
    features: [
      '家族宪章制定与推行',
      '家族治理结构设计',
      '财富传承规划（股权、资产）',
      '家族文化与价值观梳理',
      '家族理事会搭建',
      '跨代沟通机制建立',
    ],
    audience: '子女即将成年的企业家 / 正在规划传承的企业家 / 希望建立家族制度的家族',
    duration: '定制化方案，周期3-18个月',
  },
  {
    id: 'training',
    color: 'bg-nx-gold',
    lightColor: 'bg-nx-gold/5',
    title: '企业二代特训营',
    subtitle: 'Next-Gen Training Camp',
    slogan: '12周，系统化锻造企业接班人',
    desc: '为期12周的封闭式特训，涵盖领导力、战略思维、财务管理、团队管理等核心能力模块，帮助企二代从"可能接班"到"胜任接班"。',
    features: [
      '领导力自我认知与突破',
      '企业战略规划与决策',
      '财务报表与管理会计',
      '组织建设与团队管理',
      '家族企业特殊命题（与职业经理人合作等）',
      '商业计划书实战路演',
      '企业家导师一对一辅导',
      '名企参访与实战对接',
    ],
    audience: '25-35岁、有志于接管家族企业的企二代 / 处于接班过渡期的年轻人',
    duration: '12周集中特训 + 6个月跟踪辅导',
  },
  {
    id: 'transformation',
    color: 'bg-gray-800',
    lightColor: 'bg-gray-800/5',
    title: '企业二代变形记',
    subtitle: 'Next-Gen Transformation',
    slogan: '从认知到行为，完成真正的蜕变',
    desc: '一场沉浸式的蜕变之旅。通过极限挑战、真实商业任务、深度反思，帮助企二代打破旧模式、建立新能力、找到自己的人生使命。',
    features: [
      '自我认知与心智模式重塑',
      '商业实战沙盘模拟',
      '极限领导力挑战',
      '真实项目实战',
      '一对一心理教练',
      '行动计划制定与跟踪',
      '变形成果发布会',
    ],
    audience: '希望突破自我、实现蜕变的企二代 / 感到迷茫、缺乏方向的年轻人',
    duration: '密集训练期 + 持续跟踪期，定制化安排',
  },
]

export default function Services() {
  return (
    <div>
      {/* Page Hero */}
      <section className="relative pt-40 pb-24 bg-nx-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 border border-white/20 rounded-full" />
          <div className="absolute bottom-10 left-10 w-64 h-64 border border-nx-gold/40 rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="text-nx-gold text-sm tracking-[0.3em] uppercase mb-4">OUR SERVICES</div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-6">核心业务</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            专注家族传承与二代培养，用专业、系统和实战，帮助家族企业完成代际升级。
          </p>
        </div>
      </section>

      {/* Services detail */}
      {services.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-24 ${i % 2 === 0 ? 'bg-white' : 'bg-nx-cream'}`}
        >
          <div className={`max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start ${
            i % 2 === 1 ? 'lg:grid-flow-dense' : ''
          }`}>
            <div className={i % 2 === 1 ? 'lg:col-start-2' : ''}>
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 ${s.color} rounded-sm flex items-center justify-center`}>
                  <span className="text-white font-serif font-bold">{i + 1}</span>
                </div>
                <div className="text-xs text-gray-400 tracking-widest uppercase">{s.subtitle}</div>
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-nx-green mb-2">{s.title}</h2>
              <div className="text-nx-gold font-serif text-lg mb-6">{s.slogan}</div>
              <p className="text-gray-500 leading-relaxed mb-8">{s.desc}</p>

              <div className="mb-8">
                <h4 className="text-sm font-medium text-gray-700 mb-4 tracking-wide">课程内容</h4>
                <ul className="space-y-3">
                  {s.features.map((f, fi) => (
                    <li key={fi} className="flex items-start gap-3">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${s.color.replace('bg-', 'text-')}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-5 rounded-sm mb-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-gray-400 mb-1">适合人群</div>
                    <div className="text-gray-600">{s.audience}</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 mb-1">服务周期</div>
                    <div className="text-gray-600">{s.duration}</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  预约咨询
                </Link>
                <Link to={`/services/${s.id}`} className="btn-outline">
                  详细了解
                </Link>
              </div>
            </div>

            <div className={`${i % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
              <div className={`${s.lightColor} rounded-sm p-8 h-full flex items-center justify-center min-h-80`}>
                <div className="text-center">
                  <div className={`text-8xl font-serif font-bold ${s.color.replace('bg-', 'text-')}/20 mb-4`}>
                    0{i + 1}
                  </div>
                  <div className="font-serif text-xl font-semibold text-nx-green">{s.title}</div>
                  <div className="text-sm text-gray-400 mt-1">{s.subtitle}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-nx-dark py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-white mb-4">
            不确定哪个服务适合您？
          </h2>
          <p className="text-gray-400 mb-8">
            我们的顾问会根据您的具体情况，推荐最适合的方案。
          </p>
          <Link to="/contact" className="btn-primary !px-8 !py-4">
            与顾问免费通话
          </Link>
        </div>
      </section>
    </div>
  )
}
