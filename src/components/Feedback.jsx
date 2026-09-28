export function Feedback({ isCorrect, explanation, takeaway }) {
  return (
    <section
      className={`feedback feedback--${isCorrect ? 'correct' : 'incorrect'}`}
      aria-live="polite"
      tabIndex="-1"
    >
      <div className="feedback__icon" aria-hidden="true">
        {isCorrect ? '✓' : '!'}
      </div>
      <div>
        <p className="feedback__result">
          {isCorrect ? 'That’s right' : 'Not quite'}
        </p>
        <p>{explanation}</p>
        <p className="feedback__takeaway">
          <span aria-hidden="true">◆</span> {takeaway}
        </p>
      </div>
    </section>
  )
}
