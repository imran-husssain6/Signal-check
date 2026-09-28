export function Progress({ current, total, streak }) {
  const percent = ((current + 1) / total) * 100

  return (
    <div className="progress" aria-label={`Question ${current + 1} of ${total}`}>
      <div className="progress__meta">
        <span>
          Question <strong>{current + 1}</strong> of {total}
        </span>
        <span className="progress__right">
          {streak > 1 && <span className="streak">✦ {streak} streak</span>}
          <span>{Math.round(percent)}% complete</span>
        </span>
      </div>
      <div
        className="progress__track"
        role="progressbar"
        aria-valuemin="1"
        aria-valuemax={total}
        aria-valuenow={current + 1}
      >
        <span style={{ width: `${percent}%` }} />
      </div>
    </div>
  )
}
