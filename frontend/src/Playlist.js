import { Link } from 'react-router-dom';

export default function Playlist({accessToken, playlist}) {

  return (
    <Link to={`/playlist/${playlist.id}`} className="playlist-links">
      <div className="playlist_item">
        <h3>{playlist.name}</h3>
        <img src={playlist.images[0].url} alt={playlist.name} />
      </div>
    </Link>
  )
}