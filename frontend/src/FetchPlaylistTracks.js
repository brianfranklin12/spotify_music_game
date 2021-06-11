export default function FetchPlaylistTracks(accessToken, id) {

  return fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  })
  .then(res => res.json())
}