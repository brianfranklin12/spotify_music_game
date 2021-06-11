import FetchPlaylistTracks from './FetchPlaylistTracks'
import { useState } from 'react';

export default function Playlist({accessToken, playlist}) {
  const [tracks, setTracks] = useState('');

  const handleClick = () => {
    FetchPlaylistTracks(accessToken, playlist.id)
    .then(data => setTracks(data.items))
  }

  console.log(tracks)
  return (
    <div className="playlist_item" onClick={handleClick} >
      <h3>{playlist.name}</h3>
      <img src={playlist.images[0].url} alt={playlist.name} />
    </div>
  )
}