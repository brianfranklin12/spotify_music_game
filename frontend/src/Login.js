export default function Login() {

  const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=a8a77b46c3f14625ac119a475798086d&response_type=code&redirect_uri=http://localhost:3001/auth/spotify/callback&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
  return (
    <div>
      <a href={AUTH_URL}>Login with Spotify</a>
    </div>
  )
}
