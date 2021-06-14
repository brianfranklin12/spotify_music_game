import { useState, useEffect } from 'react';
import FetchPlaylistTracks from './FetchPlaylistTracks'
import { useParams } from 'react-router-dom';
import Player from './Player'


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
      <Player accessToken={accessToken} />
      {tracks.map (track => <h4 key={track.track.id}>{track.track.name} by {track.track.artists[0].name}</h4>)}
    </div>
  )
}

export default Game;