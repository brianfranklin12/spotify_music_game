import FetchPlaylistTracks from './FetchPlaylistTracks'

export default function Playlist({accessToken, playlist}) {

  return (
    <div>
      <img src={playlist.images[0].url} alt={playlist.name} onClick={() => FetchPlaylistTracks(accessToken, playlist.id)} />
    </div>
  )
}