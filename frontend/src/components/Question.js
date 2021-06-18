export default function Question({ question, nextQuestion, addGamePoint, addWrong }) {

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const questionArray = [question.a1, question.a2, question.a3, question.correct_artist]

  const shuffledArray = shuffle(questionArray)

  const selectAnswer = e => {
    if (e.target.innerText === question.correct_artist) {
      e.target.className = "answer correct"
    } else {
      e.target.className = "answer wrong"
    }
    setTimeout(() => {
    if (e.target.innerText === question.correct_artist) {
      addGamePoint();
    } else {
      addWrong();
    }
    nextQuestion()
  }, 1000)
}
  
  
  return (
    <div className="question-card">
      {shuffledArray.map((answer, index) => (
        <button key={index} className="answer" onClick={selectAnswer}>{answer}</button>
      ))}
    </div>
  )
}