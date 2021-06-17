export default function Question({ question }) {

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }

  const questionArray = [question.a1, question.a2, question.a3, question.correct_artist]

  const shuffledArray = shuffle(questionArray)
  
  
  return (
    <div className="question-card">
      <p>{shuffledArray[0]}</p>
      <p>{shuffledArray[1]}</p>
      <p>{shuffledArray[2]}</p>
      <p>{shuffledArray[3]}</p>
    </div>
  )
}