export default function Question({ question, nextQuestion }) {

  console.log(question)

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
      alert("woooooooooo")
    } else {
      alert('nooooo')
    }
    nextQuestion()
  }
  
  
  return (
    <div className="question-card">
      {shuffledArray.map((answer, index) => (
        <button className="answer" onClick={selectAnswer}>{answer}</button>
      ))}
    </div>
  )
}