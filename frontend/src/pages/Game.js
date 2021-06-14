import { useState, useEffect } from 'react';
import FetchPlaylistTracks from '../services/FetchPlaylistTracks'
import { useParams } from 'react-router-dom';
import Player from '../components/Player'


function Game({accessToken}) {
  const [tracks, setTracks] = useState([]);
  const { id } = useParams();
  const [currentTrack, setCurrentTrack] = useState('');

  useEffect(() => {
    FetchPlaylistTracks(accessToken, id)
    .then(data => {
      setTracks(data.items)
      setCurrentTrack(data.items[0].track.uri)
    })
  }, [accessToken, id])
  
  return (
    <div>
      <h1>Game</h1>
      <Player accessToken={accessToken} uri={currentTrack} />
      {tracks.map (track => <h4 onClick={() => setCurrentTrack(track.track.uri)} key={track.track.id}>{track.track.name} by {track.track.artists[0].name}</h4>)}
    </div>
  )
}

export default Game;