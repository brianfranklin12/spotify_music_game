import SpotifyPlayer from 'react-spotify-web-playback';

function Player({accessToken, uri}) {

  return (
    <div>
      <SpotifyPlayer
        token={accessToken}
        uris={uri}
        callback={(state) => console.log(state)}
        autoPlay
      />
    </div>
  )
}

export default Player