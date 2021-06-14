export default function FetchPlaylists(accessToken) {
  return fetch('https://api.spotify.com/v1/me/playlists', {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
  })
}