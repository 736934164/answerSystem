import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Check, X, CheckCircle, XCircle } from 'lucide-react'
import { useQuizStore } from '@/store/quizStore'
import { questions } from '@/data/questions'

export default function QuizPage() {
  const navigate = useNavigate()
  const { currentSession, answerQuestion, finishQuiz } = useQuizStore()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    if (!currentSession) {
      navigate('/')
    }
  }, [currentSession, navigate])

  // 切换题目时重置显示答案状态
  useEffect(() => {
    setShowAnswer(false)
  }, [currentIndex])

  if (!currentSession) return null

  const currentQuestionId = currentSession.questions[currentIndex]
  const currentQuestion = questions.find(q => q.id === currentQuestionId)
  const currentAnswer = currentSession.answers[currentQuestionId] || []
  const isLastQuestion = currentIndex === currentSession.questions.length - 1
  const isFirstQuestion = currentIndex === 0
  const answeredCount = Object.keys(currentSession.answers).length

  // 判断答案是否正确
  const isCorrect = showAnswer && JSON.stringify(currentAnswer.sort()) === JSON.stringify(currentQuestion?.answer.sort())

  const handleSelectOption = (key: string) => {
    if (!currentQuestion || showAnswer) return // 已显示答案后不能再选择

    if (currentQuestion.type === 'single') {
      answerQuestion(currentQuestionId, [key])
      // 单选题选择后立即显示答案
      setShowAnswer(true)
    } else {
      const newAnswer = currentAnswer.includes(key)
        ? currentAnswer.filter(k => k !== key)
        : [...currentAnswer, key]
      answerQuestion(currentQuestionId, newAnswer)
    }
  }

  // 多选题确认答案
  const handleConfirmAnswer = () => {
    if (currentAnswer.length > 0) {
      setShowAnswer(true)
    }
  }

  const handleNext = () => {
    if (isLastQuestion) {
      const result = finishQuiz()
      navigate(`/result/${currentSession.id}`, { state: result })
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const handlePrev = () => {
    if (!isFirstQuestion) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleSubmit = () => {
    const result = finishQuiz()
    navigate(`/result/${currentSession.id}`, { state: result })
  }

  if (!currentQuestion) return null

  const typeLabel = {
    single: '单选题',
    multi: '多选题',
    judge: '判断题'
  }

  // 获取选项样式
  const getOptionStyle = (optionKey: string) => {
    const isSelected = currentAnswer.includes(optionKey)
    const isCorrectOption = currentQuestion.answer.includes(optionKey)

    if (showAnswer) {
      // 显示答案状态
      if (isCorrectOption) {
        return 'bg-success text-white shadow-md border-success'
      } else if (isSelected && !isCorrectOption) {
        return 'bg-danger text-white shadow-md border-danger'
      } else {
        return 'bg-white border border-gray-200 text-gray-500'
      }
    } else {
      // 选择状态
      if (isSelected) {
        return 'bg-primary text-white shadow-md border-primary'
      } else {
        return 'bg-white border border-gray-200 text-gray-700 hover:border-primary/50'
      }
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* 顶部进度 */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={() => navigate('/')}
              className="p-2 -ml-2 text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>
            <span className="text-sm text-gray-500">
              {currentIndex + 1} / {currentSession.questions.length}
            </span>
            <div className="text-sm text-primary font-medium">
              已答 {answeredCount} 题
            </div>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / currentSession.questions.length) * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* 题目内容 */}
      <div className="flex-1 px-4 py-6 pb-32">
        <div className="mb-6">
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 ${
            currentQuestion.type === 'single'
              ? 'bg-blue-100 text-blue-600'
              : currentQuestion.type === 'multi'
              ? 'bg-purple-100 text-purple-600'
              : 'bg-amber-100 text-amber-600'
          }`}>
            {typeLabel[currentQuestion.type]}
          </span>
          <h2 className="text-lg font-medium text-gray-800 leading-relaxed">
            {currentQuestion.content}
          </h2>
          {currentQuestion.type === 'multi' && !showAnswer && (
            <p className="text-sm text-gray-500 mt-2">多选题，可选多个答案，选完后点击"确认"</p>
          )}
        </div>

        {/* 答案结果提示 */}
        {showAnswer && (
          <div className={`mb-4 p-4 rounded-xl flex items-center gap-3 ${
            isCorrect ? 'bg-success/10 border border-success/30' : 'bg-danger/10 border border-danger/30'
          }`}>
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-success" />
            ) : (
              <XCircle className="w-6 h-6 text-danger" />
            )}
            <div>
              <span className={`font-medium ${isCorrect ? 'text-success' : 'text-danger'}`}>
                {isCorrect ? '回答正确！' : '回答错误'}
              </span>
              {!isCorrect && (
                <span className="text-gray-600 ml-2">
                  正确答案：{currentQuestion.answer.join('、')}
                </span>
              )}
            </div>
          </div>
        )}

        {/* 选项列表 */}
        <div className="space-y-3">
          {currentQuestion.options.map(option => {
            const isSelected = currentAnswer.includes(option.key)
            const isCorrectOption = currentQuestion.answer.includes(option.key)

            return (
              <button
                key={option.key}
                onClick={() => handleSelectOption(option.key)}
                disabled={showAnswer}
                className={`w-full p-4 rounded-xl text-left transition-all active:scale-[0.98] border ${getOptionStyle(option.key)} ${
                  showAnswer ? 'cursor-default' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 ${
                    showAnswer
                      ? isCorrectOption
                        ? 'bg-white/20 text-white'
                        : isSelected && !isCorrectOption
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-500'
                      : isSelected
                        ? 'bg-white/20 text-white'
                        : 'bg-gray-100 text-gray-600'
                  }`}>
                    {option.key}
                  </span>
                  <span className="flex-1">{option.content}</span>
                  {showAnswer && isCorrectOption && (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  {showAnswer && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  {!showAnswer && isSelected && (
                    <Check className="w-5 h-5 flex-shrink-0" />
                  )}
                </div>
              </button>
            )
          })}
        </div>
      </div>

      {/* 底部导航 */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-4 py-4 safe-area-bottom">
        <div className="flex gap-3">
          <button
            onClick={handlePrev}
            disabled={isFirstQuestion}
            className={`flex-1 py-4 rounded-xl font-medium flex items-center justify-center gap-2 ${
              isFirstQuestion
                ? 'bg-gray-100 text-gray-400'
                : 'bg-gray-100 text-gray-700 active:bg-gray-200'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            上一题
          </button>

          {/* 多选题确认按钮 */}
          {currentQuestion.type === 'multi' && !showAnswer && (
            <button
              onClick={handleConfirmAnswer}
              disabled={currentAnswer.length === 0}
              className={`flex-1 py-4 rounded-xl font-medium flex items-center justify-center gap-2 ${
                currentAnswer.length === 0
                  ? 'bg-gray-100 text-gray-400'
                  : 'bg-amber-500 text-white active:bg-amber-600'
              }`}
            >
              确认答案
            </button>
          )}

          {/* 下一题/提交按钮 */}
          {(showAnswer || currentQuestion.type === 'single') && (
            isLastQuestion ? (
              <button
                onClick={handleSubmit}
                className="flex-1 py-4 rounded-xl font-medium bg-gradient-to-r from-success to-success/90 text-white flex items-center justify-center gap-2"
              >
                查看结果
                <ChevronRight className="w-5 h-5" />
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="flex-1 py-4 rounded-xl font-medium bg-gradient-to-r from-primary to-primary/90 text-white flex items-center justify-center gap-2 active:opacity-90"
              >
                下一题
                <ChevronRight className="w-5 h-5" />
              </button>
            )
          )}
        </div>
      </div>
    </div>
  )
}