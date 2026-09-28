export function ScenarioCard({ scenario }) {
  return (
    <section className="scenario-card" aria-labelledby="scenario-heading">
      <div className="scenario-card__topline">
        <span className="scenario-card__dot" aria-hidden="true" />
        <span id="scenario-heading">Message preview</span>
        <span className="scenario-card__more" aria-hidden="true">•••</span>
      </div>

      <div className="scenario-card__content">
        <div className="avatar" aria-hidden="true">
          {scenario.sender.charAt(0)}
        </div>
        <div className="message">
          <p className="message__sender">{scenario.sender}</p>
          <h2>{scenario.subject}</h2>
          <p className="message__body">{scenario.body}</p>
          {scenario.note && <p className="message__note">{scenario.note}</p>}
          <span className="message__action" aria-hidden="true">
            {scenario.action}
            <span>↗</span>
          </span>
        </div>
      </div>
    </section>
  )
}
