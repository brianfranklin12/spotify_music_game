import { useState, useEffect } from 'react';
import FetchPlaylistTracks from './FetchPlaylistTracks'
import { useParams } from 'react-router-dom';


function Game({accessToken}) {
  const [tracks, setTracks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    FetchPlaylistTracks(accessToken, id)
    .then(data => setTracks(data.items))
  }, [accessToken, id])

  return (
    <div>
    <h1>Game</h1>
    {tracks && 
    <ul>
      {tracks.map(track => <li>{track.track.name}</li>)}
    </ul>}
    </div>
  )
}

export default Game;