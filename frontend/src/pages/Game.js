import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/Player'
import {ReactComponent as LeftIcon} from '../icons/chevron-left.svg';
import { Link } from 'react-router-dom';
import { NewGame } from '../services/NewGame';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../components/Question';
import GameOver from '../components/GameOver';


function Game({accessToken}) {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState();
  const [num, setNum] = useState(0);
  const [points, setPoints] = useState(0);
  const dispatch = useDispatch();
  const { questions } = useSelector(state => state.game)


  useEffect(() => {
    dispatch(NewGame({id, accessToken}))
  }, [id, accessToken, dispatch])

  useEffect(() => {
    if (num <= questions.length) {
      return setCurrentQuestion(questions[num])
    } else {
      return null;
    }
    
  }, [questions, num])

  const nextQuestion = () => {
    setNum(num + 1)
  }

  const addPoint = () => {
    setPoints(points + 1)
  }


  return (
    <div>
      {currentQuestion ? (
      <>
        <Link className="back-link" to={"/dashboard"}> <LeftIcon className="icon" fill="#212121" /> </Link>
        <div className="game-container">
          <h1>Name the Artist</h1>
          <h3>Current Points: {points}</h3>
          {currentQuestion && <Player accessToken={accessToken} uri={currentQuestion.track_uri} />}
          {currentQuestion && <Question key={currentQuestion.id} nextQuestion={nextQuestion} addPoint={addPoint} question={currentQuestion} />} 
        </div>
      </>
        ) : <GameOver points={points} /> }
    </div>
  )
}

export default Game;