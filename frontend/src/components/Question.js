export default function Question({ question }) {
  return (
    <div className="question-card">
      <p>{question.a1}</p>
      <p>{question.a2}</p>
      <p>{question.a3}</p>
      <p><strong>{question.correct_artist}</strong></p>
    </div>
  )
}