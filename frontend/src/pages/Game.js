import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/Player'
import {ReactComponent as LeftIcon} from '../icons/chevron-left.svg';
import { Link } from 'react-router-dom';
import { NewGame } from '../services/NewGame';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../components/Question';


function Game({accessToken}) {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState();
  const [num, setNum] = useState(0);
  const dispatch = useDispatch();
  const { questions } = useSelector(state => state.game)


  useEffect(() => {
    dispatch(NewGame({id, accessToken}))
  }, [id])

  useEffect(() => {
    setCurrentQuestion(questions[num])
  }, [questions, num])

  const nextQuestion = () => {
   setNum(num + 1)
  }

  return (
    <div>
      <Link className="back-link" to={"/dashboard"}> <LeftIcon className="icon" fill="#212121" /> </Link>
      <div className="game-container">
        <h1>Name the Artist</h1>
        {currentQuestion && <Player accessToken={accessToken} uri={currentQuestion.track_uri} />}
        {currentQuestion && <Question key={currentQuestion.id} nextQuestion={nextQuestion} question={currentQuestion} />}
      </div>
    </div>
  )
}

export default Game;