import FetchPlaylistTracks from './FetchPlaylistTracks'

export default function Playlist({accessToken, playlist}) {

  return (
    <div className="playlist_item">
      <h3>{playlist.name}</h3>
      <img src={playlist.images[0].url} alt={playlist.name} onClick={() => FetchPlaylistTracks(accessToken, playlist.id)} />
    </div>
  )
}