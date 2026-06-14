import { create } from 'zustand'
import { questions, Question, QuizSession, getQuestionIdsByCategory } from '@/data/questions'

interface QuizStore {
  currentSession: QuizSession | null
  questionCount: number | 'all'
  setQuestionCount: (count: number | 'all') => void
  startQuiz: (categoryId: string) => void
  answerQuestion: (questionId: number, answer: string[]) => void
  finishQuiz: () => { score: number; total: number; results: { question: Question; userAnswer: string[]; isCorrect: boolean }[] }
  getHistory: () => QuizSession[]
  clearHistory: () => void
}

const STORAGE_KEY = 'quiz_history'

export const useQuizStore = create<QuizStore>((set, get) => ({
  currentSession: null,
  questionCount: 30,

  setQuestionCount: (count) => set({ questionCount: count }),

  startQuiz: (categoryId) => {
    // 获取该分类的题目ID列表
    const categoryQuestionIds = getQuestionIdsByCategory(categoryId)
    // 从分类题目中随机抽取
    const shuffledIds = [...categoryQuestionIds].sort(() => Math.random() - 0.5)
    const selectedCount = get().questionCount === 'all' ? categoryQuestionIds.length : get().questionCount as number
    const selectedIds = shuffledIds.slice(0, selectedCount)

    // 获取对应的题目
    const selectedQuestions = selectedIds.map(id => questions.find(q => q.id === id)!).filter(Boolean)

    const session: QuizSession = {
      id: Date.now().toString(),
      categoryId,
      questions: selectedQuestions.map(q => q.id),
      answers: {},
      startTime: Date.now()
    }

    set({ currentSession: session })
  },

  answerQuestion: (questionId, answer) => {
    const { currentSession } = get()
    if (!currentSession) return

    set({
      currentSession: {
        ...currentSession,
        answers: {
          ...currentSession.answers,
          [questionId]: answer
        }
      }
    })
  },

  finishQuiz: () => {
    const { currentSession } = get()
    if (!currentSession) return { score: 0, total: 0, results: [] }

    const results = currentSession.questions.map((qId: number) => {
      const question = questions.find(q => q.id === qId)!
      const userAnswer = currentSession.answers[qId] || []
      const isCorrect = JSON.stringify(userAnswer.sort()) === JSON.stringify(question.answer.sort())
      return { question, userAnswer, isCorrect }
    })

    const score = results.filter((r: { isCorrect: boolean }) => r.isCorrect).length
    const total = results.length

    const finishedSession: QuizSession = {
      ...currentSession,
      endTime: Date.now(),
      score
    }

    // 保存历史记录
    const history = get().getHistory()
    localStorage.setItem(STORAGE_KEY, JSON.stringify([finishedSession, ...history].slice(0, 20)))

    set({ currentSession: null })

    return { score, total, results }
  },

  getHistory: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY)
      return data ? JSON.parse(data) : []
    } catch {
      return []
    }
  },

  clearHistory: () => {
    localStorage.removeItem(STORAGE_KEY)
  }
}))
