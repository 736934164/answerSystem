import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Trash2, Clock, Target } from 'lucide-react'
import { useQuizStore } from '@/store/quizStore'

export default function HistoryPage() {
  const navigate = useNavigate()
  const { getHistory, clearHistory } = useQuizStore()
  const history = getHistory()

  const handleClearHistory = () => {
    if (confirm('确定要清空所有答题记录吗？')) {
      clearHistory()
    }
  }

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp)
    return `${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`
  }

  const getTimeSpent = (startTime: number, endTime?: number) => {
    if (!endTime) return '-'
    const seconds = Math.round((endTime - startTime) / 1000)
    if (seconds < 60) return `${seconds}秒`
    const minutes = Math.floor(seconds / 60)
    return `${minutes}分${seconds % 60}秒`
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部 */}
      <header className="bg-white sticky top-0 z-10 border-b border-gray-100">
        <div className="flex items-center px-4 py-4">
          <button
            onClick={() => navigate('/')}
            className="p-2 -ml-2 text-gray-600"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="flex-1 text-center font-semibold text-gray-800">答题记录</h1>
          {history.length > 0 && (
            <button
              onClick={handleClearHistory}
              className="p-2 -mr-2 text-gray-400"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          )}
        </div>
      </header>

      {/* 记录列表 */}
      <div className="px-4 py-6">
        {history.length === 0 ? (
          <div className="text-center py-16">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-10 h-10 text-gray-300" />
            </div>
            <p className="text-gray-500">暂无答题记录</p>
            <button
              onClick={() => navigate('/')}
              className="mt-4 text-primary font-medium"
            >
              去答题 →
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {history.map(session => {
              const percentage = session.score !== undefined
                ? Math.round((session.score / session.questions.length) * 100)
                : 0

              return (
                <div
                  key={session.id}
                  className="bg-white rounded-xl p-4 shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500">
                      {formatDate(session.startTime)}
                    </span>
                    <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      percentage >= 60
                        ? 'bg-success/10 text-success'
                        : 'bg-danger/10 text-danger'
                    }`}>
                      {percentage}%
                    </span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {session.score || 0}/{session.questions.length} 题
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-600">
                        {getTimeSpent(session.startTime, session.endTime)}
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
