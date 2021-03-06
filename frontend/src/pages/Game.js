import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/Player'
import {ReactComponent as LeftIcon} from '../icons/chevron-left.svg';
import { Link } from 'react-router-dom';
import { NewGame } from '../services/NewGame';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../components/Question';
import GameOver from '../components/GameOver';
import { leaveGame } from '../redux/gameSlice';

function Game({accessToken}) {
  const { id } = useParams();
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [num, setNum] = useState(0);
  const [gamePoints, setGamePoints] = useState(0);
  const [wrong, setWrong] = useState(0);
  const dispatch = useDispatch();
  const { questions } = useSelector(state => state.game)
  const gameStatus = useSelector(state => state.game.status)


  useEffect(() => {
    dispatch(NewGame({id, accessToken}))
  }, [id, accessToken, dispatch])

  useEffect(() => {
    if (num <= questions.length) {
      return setCurrentQuestion(questions[num])
    } else {
      return setCurrentQuestion(null);
    }
    
  }, [questions, num])

  const nextQuestion = () => {
    setNum(num + 1)
  }

  const addGamePoint = () => {
    setGamePoints(gamePoints + 1)
  }

  const addWrong = () => {
    setWrong(wrong + 1)
  }

  let gameContent;

  if (gameStatus === 'loading') {
    gameContent = <div className="loader">Loading...</div>
  } else if (gameStatus === 'succeeded') {
    gameContent = (
    <div className="game">
    <Link onClick={() => dispatch(leaveGame())} className="back-link" to={"/dashboard"}> <LeftIcon className="icon" fill="#212121" /> </Link>
    <div className="game-container">
      <h1>Name the Artist</h1>
      <h3>Current Points: {gamePoints}</h3>
      <h3>Wrong Guesses: {wrong}</h3>
      {currentQuestion && <Player accessToken={accessToken} uri={currentQuestion.track_uri} />}
      {currentQuestion && <Question key={currentQuestion.id} nextQuestion={nextQuestion} addGamePoint={addGamePoint} addWrong={addWrong} question={currentQuestion} />}
    </div>
    </div>
    )
  }

  if (!currentQuestion && gameStatus === 'succeeded') {
    gameContent = <GameOver gamePoints={gamePoints} />
  }

  if (wrong === 3) {
    gameContent = <GameOver gamePoints={gamePoints} />
  }

  return (
    <>
      {gameContent}
    </>
  )
}

export default Game;