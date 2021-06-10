import FetchPlaylistTracks from './FetchPlaylistTracks'

export default function Playlist({accessToken, playlist}) {

  return (
    <div>
      <button onClick={() => FetchPlaylistTracks(accessToken, playlist.id)}>{playlist.name}</button>
    </div>
  )
}