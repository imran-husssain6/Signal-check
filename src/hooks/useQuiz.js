import { useState } from 'react'

export function useQuiz(questions) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOptionId, setSelectedOptionId] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [score, setScore] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [responses, setResponses] = useState([])
  const [streak, setStreak] = useState(0)
  const [bestStreak, setBestStreak] = useState(0)

  const currentQuestion = questions[currentIndex]
  const isCorrect = isSubmitted
    ? selectedOptionId === currentQuestion.correctOptionId
    : null

  function selectAnswer(optionId) {
    if (!isSubmitted) setSelectedOptionId(optionId)
  }

  function submitAnswer() {
    if (!selectedOptionId || isSubmitted) return

    const answeredCorrectly = selectedOptionId === currentQuestion.correctOptionId

    if (answeredCorrectly) {
      setScore((currentScore) => currentScore + 1)
      const nextStreak = streak + 1
      setStreak(nextStreak)
      setBestStreak((currentBest) => Math.max(currentBest, nextStreak))
    } else {
      setStreak(0)
    }
    setResponses((currentResponses) => [
      ...currentResponses,
      {
        questionId: currentQuestion.id,
        selectedOptionId,
        isCorrect: answeredCorrectly,
      },
    ])
    setIsSubmitted(true)
  }

  function nextQuestion() {
    if (!isSubmitted) return

    if (currentIndex === questions.length - 1) {
      setIsComplete(true)
      return
    }

    setCurrentIndex((index) => index + 1)
    setSelectedOptionId(null)
    setIsSubmitted(false)
  }

  function restart() {
    setCurrentIndex(0)
    setSelectedOptionId(null)
    setIsSubmitted(false)
    setScore(0)
    setIsComplete(false)
    setResponses([])
    setStreak(0)
    setBestStreak(0)
  }

  return {
    currentIndex,
    currentQuestion,
    selectedOptionId,
    isSubmitted,
    isCorrect,
    score,
    responses,
    streak,
    bestStreak,
    isComplete,
    selectAnswer,
    submitAnswer,
    nextQuestion,
    restart,
  }
}
