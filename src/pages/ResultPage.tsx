import { useLocation, useNavigate } from 'react-router-dom'
import { CheckCircle, XCircle, RotateCcw, Home } from 'lucide-react'
import { motion } from 'framer-motion'

interface ResultData {
  score: number
  total: number
  results: {
    question: {
      id: number
      content: string
      type: string
      options: { key: string; content: string }[]
      answer: string[]
    }
    userAnswer: string[]
    isCorrect: boolean
  }[]
}

export default function ResultPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const result = location.state as ResultData

  if (!result) {
    navigate('/')
    return null
  }

  const { score, total, results } = result
  const percentage = Math.round((score / total) * 100)

  const getGrade = () => {
    if (percentage >= 90) return { text: '优秀', color: 'text-green-600', bg: 'bg-green-100' }
    if (percentage >= 80) return { text: '良好', color: 'text-blue-600', bg: 'bg-blue-100' }
    if (percentage >= 60) return { text: '及格', color: 'text-amber-600', bg: 'bg-amber-100' }
    return { text: '不及格', color: 'text-red-600', bg: 'bg-red-100' }
  }

  const grade = getGrade()

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部得分卡片 */}
      <header className="bg-gradient-to-br from-primary to-primary/80 text-white px-6 py-8 rounded-b-[2rem]">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className="relative w-36 h-36 mx-auto mb-4"
          >
            <svg className="w-full h-full transform -rotate-90">
              <circle
                cx="72"
                cy="72"
                r="66"
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="12"
              />
              <motion.circle
                cx="72"
                cy="72"
                r="66"
                fill="none"
                stroke="white"
                strokeWidth="12"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 66}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 66 }}
                animate={{ strokeDashoffset: 2 * Math.PI * 66 * (1 - percentage / 100) }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold">{score}</span>
              <span className="text-white/70">/ {total}</span>
            </div>
          </motion.div>

          <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-2 ${grade.bg} ${grade.color}`}>
            {grade.text}
          </div>
          <p className="text-white/80 text-sm">
            正确率 {percentage}% · 用时 {Math.round((Date.now() - (history.state?.startTime || Date.now())) / 1000)}秒
          </p>
        </div>
      </header>

      {/* 答题结果列表 */}
      <div className="px-4 py-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">答题详情</h3>
        <div className="space-y-4">
          {results.map((item, index) => (
            <motion.div
              key={item.question.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`p-4 rounded-xl ${
                item.isCorrect ? 'bg-success/5 border border-success/20' : 'bg-danger/5 border border-danger/20'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  item.isCorrect ? 'bg-success text-white' : 'bg-danger text-white'
                }`}>
                  {item.isCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-800 mb-2">
                    {index + 1}. {item.question.content.slice(0, 50)}
                    {item.question.content.length > 50 && '...'}
                  </p>
                  <div className="text-xs text-gray-500">
                    <span>你的答案：{item.userAnswer.join('、') || '未作答'}</span>
                    {!item.isCorrect && (
                      <span className="text-success ml-2">
                        正确答案：{item.question.answer.join('、')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 底部操作按钮 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-4 safe-area-bottom">
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/')}
            className="flex-1 py-4 rounded-xl font-medium bg-gray-100 text-gray-700 flex items-center justify-center gap-2 active:bg-gray-200"
          >
            <Home className="w-5 h-5" />
            返回首页
          </button>
          <button
            onClick={() => navigate('/quiz/safety')}
            className="flex-1 py-4 rounded-xl font-medium bg-gradient-to-r from-primary to-primary/90 text-white flex items-center justify-center gap-2 active:opacity-90"
          >
            <RotateCcw className="w-5 h-5" />
            再次答题
          </button>
        </div>
      </div>
    </div>
  )
}
