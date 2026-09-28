import { useEffect, useRef } from 'react'
import { questions } from './data/questions.js'
import { useQuiz } from './hooks/useQuiz.js'
import { AnswerList } from './components/AnswerList.jsx'
import { CompletionScreen } from './components/CompletionScreen.jsx'
import { Feedback } from './components/Feedback.jsx'
import { Logo } from './components/Logo.jsx'
import { Progress } from './components/Progress.jsx'
import { ScenarioCard } from './components/ScenarioCard.jsx'

function App() {
  const quiz = useQuiz(questions)
  const feedbackRef = useRef(null)
  const questionRef = useRef(null)

  useEffect(() => {
    if (quiz.isSubmitted) feedbackRef.current?.focus()
  }, [quiz.isSubmitted])

  useEffect(() => {
    if (!quiz.isSubmitted && quiz.currentIndex > 0) questionRef.current?.focus()
  }, [quiz.currentIndex, quiz.isSubmitted])

  if (quiz.isComplete) {
    return (
      <div className="app-shell app-shell--complete">
        <header className="site-header"><Logo /></header>
        <CompletionScreen
          score={quiz.score}
          total={questions.length}
          bestStreak={quiz.bestStreak}
          responses={quiz.responses}
          questions={questions}
          onRestart={quiz.restart}
        />
      </div>
    )
  }

  const isLastQuestion = quiz.currentIndex === questions.length - 1

  return (
    <div className="app-shell">
      <header className="site-header">
        <Logo />
        <span className="site-header__topic">Security essentials</span>
      </header>

      <main className="activity" ref={questionRef} tabIndex="-1">
        <Progress
          current={quiz.currentIndex}
          total={questions.length}
          streak={quiz.streak}
        />

        <div className="lesson-heading">
          <p>{quiz.currentQuestion.eyebrow}</p>
          <h1>Spot the signal</h1>
          <span>Review the message, then choose the safest response.</span>
        </div>

        <ScenarioCard scenario={quiz.currentQuestion.scenario} />

        <form
          onSubmit={(event) => {
            event.preventDefault()
            quiz.submitAnswer()
          }}
        >
          <AnswerList
            question={quiz.currentQuestion}
            selectedOptionId={quiz.selectedOptionId}
            isSubmitted={quiz.isSubmitted}
            onSelect={quiz.selectAnswer}
          />

          {quiz.isSubmitted && (
            <div ref={feedbackRef} tabIndex="-1">
              <Feedback
                isCorrect={quiz.isCorrect}
                explanation={quiz.currentQuestion.explanation}
                takeaway={quiz.currentQuestion.takeaway}
              />
            </div>
          )}

          <div className="activity__actions">
            {!quiz.isSubmitted ? (
              <button
                className="button button--primary"
                type="submit"
                disabled={!quiz.selectedOptionId}
              >
                Check answer <span aria-hidden="true">→</span>
              </button>
            ) : (
              <button
                className="button button--primary"
                type="button"
                onClick={quiz.nextQuestion}
              >
                {isLastQuestion ? 'See my results' : 'Next question'}
                <span aria-hidden="true">→</span>
              </button>
            )}
          </div>
        </form>
      </main>

      <footer>
        <span>Think before you click.</span>
        <span aria-hidden="true">Northstar Learning · 2026</span>
      </footer>
    </div>
  )
}

export default App
