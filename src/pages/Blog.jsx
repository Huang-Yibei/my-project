import { useState } from 'react'

const allPosts = [
  {
    title: '家族传承的第一步：从建立家族宪章开始',
    date: '2026-03-15',
    tag: '家族传承',
    tagColor: 'text-nx-green bg-nx-green/5',
    excerpt: '没有制度约束的家族传承，如同没有舵的船。本文探讨为什么家族宪章是传承规划的起点，以及如何制定一份真正有效的家族宪章。',
    content: '家族传承的第一步，不是股权交接，不是聘请职业经理人，而是建立一套家族成员共同认可的行为准则——家族宪章……',
    author: '陈建国',
    readTime: '8分钟',
    featured: true,
  },
  {
    title: '为什么越来越多的企二代选择「变形」而不是「接班」？',
    date: '2026-03-08',
    tag: '变形记',
    tagColor: 'text-gray-700 bg-gray-100',
    excerpt: '时代变了，单纯的岗位交接已不足以应对复杂局面。一批企二代开始寻求更深层次的改变——从心态到能力，从认知到行为。',
    content: '传统意义上的"接班"，意味着继承父辈的岗位、权力和责任。但越来越多的企二代发现，仅仅"接班"并不能解决他们内心深处的困惑……',
    author: '林雅琴',
    readTime: '6分钟',
    featured: false,
  },
  {
    title: '特训营学员故事：从迷茫到笃定，一位95后接班的真实记录',
    date: '2026-02-28',
    tag: '特训营',
    tagColor: 'text-nx-gold bg-nx-gold/5',
    excerpt: '从不知道自己能不能做到带领团队打下一场胜仗，小陈用12周完成了许多人几年都无法实现的转变。',
    content: '小陈（化名）第一次来念信的时候，整个人都很沉默。他的父亲是一家年营收超过5亿的制造企业负责人……',
    author: '林雅琴',
    readTime: '10分钟',
    featured: false,
  },
  {
    title: '家族企业传承的三大陷阱，踩一个就够呛',
    date: '2026-02-15',
    tag: '家族传承',
    tagColor: 'text-nx-green bg-nx-green/5',
    excerpt: '在服务了200+家族企业后，我们总结出传承失败的三个最常见原因。提前知道，才能有效规避。',
    content: '家族企业的传承失败率高达70%。这不是危言耸听，而是基于大量案例数据的事实。为什么失败率这么高？……',
    author: '王明远',
    readTime: '7分钟',
    featured: false,
  },
  {
    title: '企二代的自我怀疑：为什么「我不够好」的声音总是挥之不去？',
    date: '2026-01-20',
    tag: '变形记',
    tagColor: 'text-gray-700 bg-gray-100',
    excerpt: '「我爸那么成功，我能行吗？」这种自我怀疑几乎困扰着每一位企二代。理解它的来源，是战胜它的第一步。',
    content: '在念信，我们见过太多优秀的企二代，他们聪明、努力、有野心，却始终被一种深层的自我怀疑所困扰……',
    author: '陈建国',
    readTime: '9分钟',
    featured: false,
  },
  {
    title: '特训营第二期圆满结业：15位企二代的成长之旅',
    date: '2026-01-10',
    tag: '特训营',
    tagColor: 'text-nx-gold bg-nx-gold/5',
    excerpt: '第二期特训营圆满结束，15位来自全国各地的企二代在12周内完成了从认知自我到实战项目的全流程学习。',
    content: '2025年12月，第二期「企业二代特训营」在广州圆满结业……',
    author: '念信团队',
    readTime: '5分钟',
    featured: false,
  },
]

const tags = ['全部', '家族传承', '特训营', '变形记']

export default function Blog() {
  const [activeTag, setActiveTag] = useState('全部')

  const filtered = activeTag === '全部'
    ? allPosts
    : allPosts.filter(p => p.tag === activeTag)

  const featured = allPosts.find(p => p.featured)

  return (
    <div>
      {/* Hero */}
      <section className="relative pt-40 pb-20 bg-nx-green overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 border border-white/20 rounded-full" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="text-nx-gold text-sm tracking-[0.3em] uppercase mb-4">INSIGHTS</div>
          <h1 className="font-serif text-4xl md:text-6xl font-semibold text-white mb-6">动态博客</h1>
          <p className="text-white/60 text-lg max-w-xl mx-auto">
            关于家族传承、企业二代培养的最新思考与实践
          </p>
        </div>
      </section>

      {/* Featured */}
      {featured && activeTag === '全部' && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-xs text-nx-gold tracking-widest uppercase mb-6">置顶文章</div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-nx-cream rounded-sm overflow-hidden">
              <div className="p-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full ${featured.tagColor}`}>{featured.tag}</span>
                  <span className="text-xs text-gray-400">{featured.date}</span>
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-semibold text-nx-green mb-4 leading-snug">
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <span>作者：{featured.author}</span>
                  <span>·</span>
                  <span>{featured.readTime}</span>
                </div>
              </div>
              <div className="h-64 lg:h-full bg-gradient-to-br from-nx-green/20 to-nx-gold/20 flex items-center justify-center">
                <span className="text-nx-green/30 font-serif text-8xl font-bold">文</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Filter */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-0 z-40 backdrop-blur-md bg-white/90">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-2">
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`text-sm px-4 py-2 rounded-full transition-all ${
                  activeTag === tag
                    ? 'bg-nx-green text-white'
                    : 'text-gray-500 hover:text-nx-green hover:bg-nx-green/5'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 bg-nx-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <article
                key={i}
                className="bg-white card-hover border border-gray-100 overflow-hidden group"
              >
                <div className="h-44 bg-gradient-to-br from-nx-green/10 via-nx-gold/10 to-gray-100 flex items-center justify-center relative overflow-hidden">
                  <span className="font-serif text-5xl text-nx-green/10 font-bold">
                    {post.title.charAt(0)}
                  </span>
                  <div className="absolute inset-0 bg-nx-green/0 group-hover:bg-nx-green/5 transition-all duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs px-2.5 py-1 rounded-full ${post.tagColor}`}>{post.tag}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-nx-green mb-3 leading-snug group-hover:text-nx-gold transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-50">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
