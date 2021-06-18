import { Link } from "react-router-dom"
import { SubmitPoints } from '../services/SubmitPoints';
import { leaveGame } from "../redux/gameSlice"
import { useDispatch, useSelector } from 'react-redux';

export default function GameOver({gamePoints}) {
  const dispatch = useDispatch();
  const { id } = useSelector(state => state.user);

  const handleClick = () => {
    dispatch(SubmitPoints({id, gamePoints}))
    dispatch(leaveGame)
  }

  return (
    <div className="game-over-container">
      <h3>You scored {gamePoints} {gamePoints === 1 ? "point!" : "points!"}</h3>
      <h1 className="big-text">Game Over</h1>
      <Link onClick={handleClick} className="back-btn" to={"/dashboard"}>Back to dashboard</Link>
    </div>
  )
}