import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Player from '../components/Player'
import {ReactComponent as LeftIcon} from '../icons/chevron-left.svg';
import { Link } from 'react-router-dom';
import { NewGame } from '../services/NewGame';
import { useDispatch, useSelector } from 'react-redux';
import Question from '../components/Question';


function Game({accessToken}) {
  // const [tracks, setTracks] = useState([]);
  const { id } = useParams();
  const [currentTrack, setCurrentTrack] = useState('');
  const dispatch = useDispatch();
  const { questions } = useSelector(state => state.game)



  console.log(questions)
  useEffect(() => {
    dispatch(NewGame({id, accessToken}))
  }, [id])

  return (
    <div>
      <Link className="back-link" to={"/dashboard"}> <LeftIcon className="icon" fill="#212121" /> </Link>
      <div className="game-container">
        <h1>Game</h1>
        <Player accessToken={accessToken} uri={currentTrack} />
        {questions && questions.map(question => <Question question={question} />)}
      </div>
    </div>
  )
}

export default Game;