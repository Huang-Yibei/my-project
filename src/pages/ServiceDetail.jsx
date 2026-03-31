import { useParams, Link } from 'react-router-dom'

const serviceData = {
  family: {
    title: '家族传承',
    subtitle: 'Family Legacy Planning',
    color: 'text-nx-green',
    bg: 'bg-nx-green',
    lightBg: 'bg-nx-green/5',
    heroText: '构建百年家族的制度根基',
    overview: '家族传承不是简单地把资产和股权交给下一代。它是一项涉及家族治理、文化价值观、领导力培养和财富规划的复杂系统工程。念信从「家族宪章」入手，帮助您的家族建立代际传承的制度基础与文化根基。',
    modules: [
      {
        title: '家族宪章制定',
        desc: '明确家族的愿景、价值观、行为准则，确立家族与企业的边界，制定争议解决机制。',
        icon: '📜',
      },
      {
        title: '家族治理结构设计',
        desc: '搭建家族委员会、家族理事会，设立明确的决策机制与责任分工。',
        icon: '🏛',
      },
      {
        title: '财富传承规划',
        desc: '股权架构优化、税务筹划、信托工具运用，确保财富安全、有效地传承。',
        icon: '💎',
      },
      {
        title: '家族文化梳理',
        desc: '挖掘家族精神内核，提炼核心价值观，建立家族故事与共同记忆。',
        icon: '🌳',
      },
      {
        title: '接班人培养路径',
        desc: '为潜在接班人设计个性化成长路径，平衡家族期望与个人发展。',
        icon: '🎯',
      },
      {
        title: '跨代沟通机制',
        desc: '建立代际之间的有效沟通渠道，减少传承中的摩擦与误解。',
        icon: '🗣',
      },
    ],
    process: [
      { step: '01', name: '深度访谈', desc: '与家族核心成员进行一对一深度沟通' },
      { step: '02', name: '现状诊断', desc: '梳理家族结构、企业状况、传承障碍' },
      { step: '03', name: '方案设计', desc: '量身定制家族传承整体解决方案' },
      { step: '04', name: '推行辅导', desc: '协助落地实施，跟踪调整' },
      { step: '05', name: '持续迭代', desc: '定期复盘，伴随家族共同成长' },
    ],
    cases: [
      '某珠三角制造家族 — 建立家族宪章，三代传承有序',
      '某浙江服装企业 — 设计家族治理结构，化解兄弟分歧',
      '某华南贸易集团 — 完成股权重组，平稳交接班',
    ],
  },
  training: {
    title: '企业二代特训营',
    subtitle: 'Next-Gen Training Camp',
    color: 'text-nx-gold',
    bg: 'bg-nx-gold',
    lightBg: 'bg-nx-gold/5',
    heroText: '12周，系统化锻造企业接班人',
    overview: '「企业二代特训营」是念信最核心的旗舰产品。12周封闭式训练，从领导力到战略思维，从财务管理到团队管理，系统化锻造真正的企业接班人。不同于传统培训，我们强调实战、个性化和深度蜕变。',
    modules: [
      { title: '领导力觉醒', desc: '认知自我的领导风格，突破限制性信念，建立领袖气场。', icon: '👑' },
      { title: '战略思维', desc: '学会从创始人视角思考企业方向，掌握战略规划方法论。', icon: '🧭' },
      { title: '财务管控', desc: '读懂报表，建立成本意识，掌握资本运作的基本逻辑。', icon: '📊' },
      { title: '组织管理', desc: '从管事到管人，建立高效的团队文化和激励机制。', icon: '👥' },
      { title: '家族企业特殊命题', desc: '处理家族与企业边界、与职业经理人合作等独特挑战。', icon: '⚖' },
      { title: '商业实战', desc: '真实商业任务路演，与导师团直接对话，获取资源对接。', icon: '🚀' },
      { title: '一对一辅导', desc: '企业家导师全程陪伴，针对性解决个人发展瓶颈。', icon: '🎓' },
      { title: '名企参访', desc: '走进优秀家族企业与标杆公司，与创始人直接对话。', icon: '🏢' },
    ],
    process: [
      { step: '01', name: '入学评估', desc: '全面评估个人能力、性格特质与成长需求' },
      { step: '02', name: '模块学习', desc: '8周核心课程，涵盖领导力/战略/财务/管理' },
      { step: '03', name: '实战项目', desc: '真实商业任务，在实战中历练成长' },
      { step: '04', name: '路演答辩', desc: '商业计划书路演，导师团评审' },
      { step: '05', name: '结业跟踪', desc: '6个月持续跟踪，解答实战中的困惑' },
    ],
    cases: [
      '某广东家具企业少东家 — 从抗拒接班到主动变革',
      '某上海科技公司继承人 — 找到自己的管理风格',
      '某浙江民企企二代 — 带领团队实现业绩翻番',
    ],
  },
  transformation: {
    title: '企业二代变形记',
    subtitle: 'Next-Gen Transformation',
    color: 'text-gray-800',
    bg: 'bg-gray-800',
    lightBg: 'bg-gray-800/5',
    heroText: '从认知到行为，完成真正的蜕变',
    overview: '「变形记」不是培训，是一场真实的蜕变。通过极限挑战、心理教练、真实项目，打破旧有的思维模式和行为习惯，建立新的自我。不是改变您的身份，而是让您成为更好的自己。',
    modules: [
      { title: '自我认知革命', desc: '通过专业测评与深度对话，彻底看清自己。', icon: '🔍' },
      { title: '心智模式重塑', desc: '打破「富二代」标签，建立真正的自信与使命感。', icon: '🧠' },
      { title: '极限领导挑战', desc: '在极端环境中激发领导潜质，突破舒适区。', icon: '⛰' },
      { title: '商业实战沙盘', desc: '真实商业情境模拟，在压力下做出决策。', icon: '🎮' },
      { title: '一对一心理教练', desc: '专业教练全程陪伴，深度陪伴成长。', icon: '💪' },
      { title: '变形成果发布', desc: '向家族、导师、伙伴公开展示成长与改变。', icon: '🏆' },
    ],
    process: [
      { step: '01', name: '深度访谈', desc: '了解个人诉求与变形目标' },
      { step: '02', name: '蜕变启动', desc: '极限挑战与自我突破' },
      { step: '03', name: '能力锻造', desc: '实战任务与行为改变训练' },
      { step: '04', name: '成果整合', desc: '总结提炼，固化新的行为模式' },
      { step: '05', name: '持续支持', desc: '变形后的持续跟踪与支持' },
    ],
    cases: [
      '某企二代 — 从游戏沉迷到带领企业数字化转型',
      '某家族独子 — 从社恐到能够独立主持董事会',
      '某企二代 — 找到自己的人生使命与事业方向',
    ],
  },
}

export default function ServiceDetail() {
  const { id } = useParams()
  const service = serviceData[id]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-serif text-nx-green mb-4">服务不存在</h1>
          <Link to="/services" className="btn-primary">返回业务介绍</Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-nx-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-20 -right-20 w-96 h-96 border border-white/20 rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="mb-4">
            <Link to="/services" className="text-white/50 text-sm hover:text-white transition-colors">
              ← 业务介绍
            </Link>
          </div>
          <div className="text-nx-gold text-sm tracking-[0.2em] uppercase mb-4">{service.subtitle}</div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-4">{service.title}</h1>
          <p className="text-white/70 text-xl font-serif">{service.heroText}</p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-gray-500 leading-relaxed text-lg">{service.overview}</p>
        </div>
      </section>

      {/* Modules */}
      <section className={`py-20 ${service.lightBg}`}>
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title mb-12 text-center">核心内容</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.modules.map((m, i) => (
              <div key={i} className="bg-white rounded-sm p-6 border border-gray-100 card-hover">
                <div className="text-3xl mb-4">{m.icon}</div>
                <h3 className="font-serif font-semibold text-nx-green mb-2">{m.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title mb-4 text-center">服务流程</h2>
          <p className="text-gray-400 text-center mb-12 max-w-xl mx-auto">从深度沟通到落地执行，我们全程陪伴</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {service.process.map((p, i) => (
              <div key={i} className="text-center relative">
                {i < service.process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-px bg-gray-200" />
                )}
                <div className={`w-16 h-16 ${service.bg} rounded-full flex items-center justify-center mx-auto mb-4 relative z-10`}>
                  <span className="text-white font-serif font-bold">{p.step}</span>
                </div>
                <h4 className="font-serif font-semibold text-nx-green mb-2">{p.name}</h4>
                <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className={`py-20 ${service.lightBg}`}>
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="section-title mb-8">学员故事</h2>
          <div className="space-y-4">
            {service.cases.map((c, i) => (
              <div key={i} className="bg-white rounded-sm p-5 border border-gray-100 flex items-start gap-4">
                <div className={`w-2 h-2 ${service.bg} rounded-full flex-shrink-0 mt-2`} />
                <p className="text-gray-600 text-sm">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-nx-green py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-6">
            开始您的{service.title}之旅
          </h2>
          <p className="text-white/60 mb-8 text-lg">
            预约免费咨询，我们的顾问将在一工作日内与您联系。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="bg-nx-gold text-white px-8 py-4 font-medium hover:bg-nx-gold-light transition-colors tracking-wide">
              立即预约咨询
            </Link>
            <Link to="/services" className="border-2 border-white/40 text-white px-8 py-4 font-medium hover:bg-white/10 transition-colors tracking-wide">
              查看其他业务
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
