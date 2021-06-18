import { Link } from "react-router-dom"
import { SubmitPoints } from '../services/SubmitPoints';
import { leaveGame } from "../redux/gameSlice"
import { useDispatch } from 'react-redux';

export default function GameOver({points}) {
  const dispatch = useDispatch();
  const id = 1;

  const handleClick = () => {
    dispatch(SubmitPoints({id, points}))
    dispatch(leaveGame)
  }

  return (
    <div className="game-over-container">
      <h3>You scored {points} points!</h3>
      <h1 className="big-text">Game Over</h1>
      <Link onClick={handleClick} className="back-btn" to={"/dashboard"}>Back to dashboard</Link>
    </div>
  )
}