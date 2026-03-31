const team = [
  {
    name: '陈建国',
    role: '创始人 & 首席导师',
    intro: '20年家族企业咨询经验，曾任麦肯锡高级顾问，服务超过100个家族企业传承项目。',
    img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: '林雅琴',
    role: '特训营总监',
    intro: '前长江商学院高管教育负责人，专注企二代领导力培养，学员满意度连续5年超95%。',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: '王明远',
    role: '家族传承顾问',
    intro: '法律与财务复合背景，擅长家族宪章设计、股权传承规划，服务客户遍布珠三角与长三角。',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
]

const values = [
  { title: '专业为本', desc: '不做表面功夫，每一项服务都基于深厚的专业积累与实战验证。' },
  { title: '陪伴成长', desc: '传承是一场长跑，我们不是一次性顾问，而是陪伴家族共同成长的伙伴。' },
  { title: '尊重个体', desc: '每一个企二代都是独特的个体，我们帮助他们找到自己的路，而非复制别人的模板。' },
  { title: '实战落地', desc: '只讲能落地的，只做能改变行为的，真正产生可衡量成果的服务。' },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-24 bg-nx-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 border border-white/20 rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="text-nx-gold text-sm tracking-[0.3em] uppercase mb-4">ABOUT US</div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-6">关于念信</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            我们相信，传承是一种能力，需要被学习和培养。
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-nx-gold text-sm tracking-[0.3em] uppercase mb-3">OUR STORY</div>
            <h2 className="section-title mb-6">从痛点出发，因热爱坚持</h2>
            <div className="space-y-4 text-gray-500 leading-relaxed">
              <p>
                2018年，念信创始人陈建国在服务某大型民营企业传承项目时发现：企业家们愿意花几百万做咨询，却没有人真正关心那个要接班的年轻人。
              </p>
              <p>
                「他们被当作'继承人'，而不是'未来的领导者'来培养。」
              </p>
              <p>
                那一刻，陈建国决定创办念信——一个真正以「人」为中心的家族传承与二代培养机构。
              </p>
              <p>
                八年来，念信从最初单一的咨询业务，发展成为涵盖家族传承规划、二代特训营、变形记三大业务的综合性服务机构。我们服务过超过200个家族企业，帮助500多位企二代找到了自己的成长路径。
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
              alt="念信团队"
              className="w-full h-96 object-cover rounded-sm"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-nx-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-nx-gold text-sm tracking-[0.3em] uppercase mb-3">VALUES</div>
            <h2 className="section-title">我们的价值观</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-sm p-8 card-hover border border-gray-100">
                <div className="text-nx-gold font-serif text-4xl font-bold mb-4">0{i + 1}</div>
                <h3 className="font-serif text-xl font-semibold text-nx-green mb-3">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-nx-gold text-sm tracking-[0.3em] uppercase mb-3">OUR TEAM</div>
            <h2 className="section-title">核心团队</h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              兼具学术背景与实战经验，兼具专业能力与人文关怀
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((t, i) => (
              <div key={i} className="group text-center">
                <div className="relative mb-6 overflow-hidden rounded-sm">
                  <img src={t.img} alt={t.name} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-nx-green/0 group-hover:bg-nx-green/20 transition-all duration-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-nx-green mb-1">{t.name}</h3>
                <div className="text-nx-gold text-sm mb-3">{t.role}</div>
                <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">{t.intro}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="bg-nx-green py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { num: '2018', label: '念信成立' },
              { num: '200+', label: '服务家族企业' },
              { num: '500+', label: '培养学员人次' },
              { num: '30+', label: '核心导师团队' },
            ].map((item, i) => (
              <div key={i}>
                <div className="font-serif text-4xl md:text-5xl font-bold text-nx-gold mb-2">{item.num}</div>
                <div className="text-white/60 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
