import { Shield, BookOpen, History, ChevronRight, Building2, Cog, Layers, BookText } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'
import { categories } from '@/data/questions'
import { useQuizStore } from '@/store/quizStore'

export default function HomePage() {
  const navigate = useNavigate()
  const { questionCount, setQuestionCount, startQuiz, getHistory } = useQuizStore()
  const history = getHistory()

  const handleStartQuiz = (categoryId: string) => {
    startQuiz(categoryId)
    navigate(`/quiz/${categoryId}`)
  }

  // 分类图标映射
  const iconMap = {
    shield: Shield,
    book: BookText,
    building: Building2,
    cog: Cog,
    layers: Layers
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background pb-20">
      {/* 头部 */}
      <header className="bg-primary text-white px-6 py-8 rounded-b-[2rem] shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
            <Shield className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-xl font-bold">安全生产答题系统</h1>
            <p className="text-white/80 text-sm">知识竞赛参考题库</p>
          </div>
        </div>
      </header>

      {/* 题量选择 */}
      <div className="px-6 -mt-4">
        <div className="bg-white rounded-2xl shadow-md p-5">
          <label className="text-sm text-gray-500 mb-3 block">每次答题数量</label>
          <div className="flex gap-2">
            {([30, 50, 100, 'all'] as const).map(count => (
              <button
                key={count}
                onClick={() => setQuestionCount(count)}
                className={`flex-1 py-3 rounded-xl text-sm font-medium transition-all ${
                  questionCount === count
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {count === 'all' ? '全部' : `${count}题`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 题库分类 */}
      <div className="px-6 mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">选择题库类型</h2>
        <div className="space-y-4">
          {categories.map(category => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap] || BookOpen
            return (
              <div
                key={category.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="p-5">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800">{category.name}</h3>
                      <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                          {category.questionCount} 道题目
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleStartQuiz(category.id)}
                  className="w-full py-4 bg-gradient-to-r from-primary to-primary/90 text-white font-medium flex items-center justify-center gap-2 active:opacity-90 transition-opacity"
                >
                  开始答题
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )
          })}
        </div>
      </div>

      {/* 历史记录入口 */}
      {history.length > 0 && (
        <div className="px-6 mt-6">
          <Link
            to="/history"
            className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4 active:bg-gray-50 transition-colors"
          >
            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
              <History className="w-6 h-6 text-amber-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">答题记录</h3>
              <p className="text-sm text-gray-500">查看最近 {history.length} 次答题记录</p>
            </div>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </Link>
        </div>
      )}

      {/* 底部装饰 */}
      <div className="px-6 mt-8 text-center">
        <p className="text-xs text-gray-400">安全生产，人人有责</p>
      </div>
    </div>
  )
}