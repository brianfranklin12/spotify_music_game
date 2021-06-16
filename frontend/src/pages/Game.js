import { useState, useEffect } from 'react';
import FetchPlaylistTracks from '../services/FetchPlaylistTracks'
import { useParams } from 'react-router-dom';
import Player from '../components/Player'
import {ReactComponent as LeftIcon} from '../icons/chevron-left.svg';
import { Link } from 'react-router-dom';
import { NewGame } from '../services/NewGame';
import { useDispatch, useSelector } from 'react-redux';


function Game({accessToken}) {
  // const [tracks, setTracks] = useState([]);
  const { id } = useParams();
  const [currentTrack, setCurrentTrack] = useState('');
  const dispatch = useDispatch();
  const { tracks } = useSelector(state => state.game)

  // useEffect(() => {
  //   FetchPlaylistTracks(accessToken, id)
  //   .then(data => {
  //     setTracks(data.items)
  //     setCurrentTrack(data.items[0].track.uri)
  //   })
  // }, [accessToken, id])

  useEffect(() => {
    dispatch(NewGame({id, accessToken}))
  }, [id])

  
  return (
    <div>
      <Link className="back-link" to={"/dashboard"}> <LeftIcon className="icon" fill="#212121" /> </Link>
      <div className="game-container">
        <h1>Game</h1>
        <Player accessToken={accessToken} uri={currentTrack} />
        {tracks && tracks.map (track => {
          const isActive = track.uri === currentTrack ? 'active' : null;
          return (
          <h4 
            onClick={() => setCurrentTrack(track.uri)} 
            key={track.id}
            className={isActive}
          >
            {track.name} by {track.artist}
          </h4>
          )
        })}
      </div>
    </div>
  )
}

export default Game;