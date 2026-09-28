export function CompletionScreen({ score, total, bestStreak, responses, questions, onRestart }) {
  const percent = Math.round((score / total) * 100)
  const result =
    percent === 100
      ? { title: 'Sharp instincts.', copy: 'You caught every signal. Keep that same thoughtful pause when a real message feels off.' }
      : percent >= 75
        ? { title: 'Nicely spotted.', copy: 'You have a strong eye for warning signs. A quick review will make those habits even stronger.' }
        : { title: 'Good first pass.', copy: 'Phishing is designed to feel routine. Review the signals and try once more to build the habit.' }

  return (
    <main className="completion">
      <div className="completion__burst" aria-hidden="true">
        <span>✦</span><span>✦</span><span>✦</span>
      </div>
      <p className="completion__eyebrow">Activity complete</p>
      <h1>{result.title}</h1>
      <p className="completion__copy">{result.copy}</p>

      <div className="score-card" aria-label={`You scored ${score} out of ${total}`}>
        <div className="score-ring" style={{ '--score': `${percent * 3.6}deg` }}>
          <div>
            <strong>{score}</strong>
            <span>out of {total}</span>
          </div>
        </div>
        <div className="score-card__text">
          <span>Your score</span>
          <strong>{percent}%</strong>
          <p>{score === total ? 'Perfect score' : `${total - score} to review`}</p>
        </div>
      </div>

      <div className="result-highlights" aria-label="Activity highlights">
        <div>
          <span aria-hidden="true">✦</span>
          <strong>{bestStreak}</strong>
          <small>Best streak</small>
        </div>
        <div>
          <span aria-hidden="true">◎</span>
          <strong>{total}</strong>
          <small>Scenarios</small>
        </div>
      </div>

      <section className="review">
        <div className="review__heading">
          <div>
            <p>Answer review</p>
            <h2>See what you learned</h2>
          </div>
          <span>{score}/{total} correct</span>
        </div>
        <div className="review__list">
          {questions.map((question, index) => {
            const response = responses.find((item) => item.questionId === question.id)
            const chosenOption = question.options.find(
              (option) => option.id === response?.selectedOptionId,
            )

            return (
              <details className={`review-item review-item--${response?.isCorrect ? 'correct' : 'incorrect'}`} key={question.id}>
                <summary>
                  <span className="review-item__status" aria-hidden="true">
                    {response?.isCorrect ? '✓' : '!'}
                  </span>
                  <span>
                    <small>Question {index + 1}</small>
                    <strong>{question.prompt}</strong>
                  </span>
                  <span className="review-item__chevron" aria-hidden="true">⌄</span>
                </summary>
                <div className="review-item__body">
                  <p><strong>Your answer:</strong> {chosenOption?.text}</p>
                  {!response?.isCorrect && (
                    <p><strong>Best answer:</strong> {question.options.find((option) => option.id === question.correctOptionId)?.text}</p>
                  )}
                  <p>{question.explanation}</p>
                </div>
              </details>
            )
          })}
        </div>
      </section>

      <button className="button button--primary button--restart" onClick={onRestart}>
        <span aria-hidden="true">↻</span> Try again
      </button>
      <p className="completion__note">Seven scenarios · About 5 minutes</p>
    </main>
  )
}
