function StatusIcon({ type }) {
  if (type === 'correct') return <span aria-hidden="true">✓</span>
  if (type === 'incorrect') return <span aria-hidden="true">×</span>
  return <span className="answer__radio" aria-hidden="true" />
}

export function AnswerList({
  question,
  selectedOptionId,
  isSubmitted,
  onSelect,
}) {
  return (
    <fieldset className="answers">
      <legend>{question.prompt}</legend>
      <p className="answers__hint" id="answer-hint">
        Choose the best answer.
      </p>

      <div className="answers__list" aria-describedby="answer-hint">
        {question.options.map((option, index) => {
          const isSelected = selectedOptionId === option.id
          const isCorrectOption = option.id === question.correctOptionId
          const status = isSubmitted
            ? isCorrectOption
              ? 'correct'
              : isSelected
                ? 'incorrect'
                : 'muted'
            : isSelected
              ? 'selected'
              : 'idle'

          return (
            <label className={`answer answer--${status}`} key={option.id}>
              <input
                type="radio"
                name="answer"
                value={option.id}
                checked={isSelected}
                disabled={isSubmitted}
                onChange={() => onSelect(option.id)}
              />
              <span className="answer__indicator">
                <StatusIcon type={status} />
              </span>
              <span className="answer__key" aria-hidden="true">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="answer__text">{option.text}</span>
              {isSubmitted && isCorrectOption && (
                <span className="answer__label">Correct</span>
              )}
              {isSubmitted && isSelected && !isCorrectOption && (
                <span className="answer__label">Your answer</span>
              )}
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
