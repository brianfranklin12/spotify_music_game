import { useEffect } from "react"
import { Link } from "react-router-dom"
import { SubmitPoints } from "../services/SubmitPoints"
import { useSelector } from "react-redux"

export default function GameOver({points}) {
  const {id} = useSelector(state => state.user)

  useEffect(() => {
    SubmitPoints(1, points)
  }, [id, points])

  return (
    <div className="game-over-container">
      <h3>You scored {points} points!</h3>
      <h1 className="big-text">Game Over</h1>
      <Link className="back-btn" to={"/dashboard"}>Back to dashboard</Link>
    </div>
  )
}