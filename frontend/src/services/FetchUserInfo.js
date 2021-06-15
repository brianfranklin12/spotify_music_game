export default function FetchUserInfo(accessToken) {
 
//   return fetch('https://api.spotify.com/v1/me', {
//     headers: {
//       "Authorization": `Bearer ${accessToken}`
//     }
//     })
// }

return fetch('http://localhost:3001/users', {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    accessToken
  })
})
}