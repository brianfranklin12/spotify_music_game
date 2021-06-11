export default function FetchUserInfo(accessToken) {
 
  return fetch('https://api.spotify.com/v1/me', {
    headers: {
      "Authorization": `Bearer ${accessToken}`
    }
    })
}