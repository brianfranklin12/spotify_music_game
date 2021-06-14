import SpotifyPlayer from 'react-spotify-web-playback';

function Player({accessToken, uri}) {

  return (
    <div>
      <SpotifyPlayer
        token={accessToken}
        uris={uri}
        callback={(state) => console.log(state)}
        autoPlay={true}
        play={true}
        styles={{
          bgColor: '#212121',
          color: 'white',
          trackArtistColor: '#212121',
          trackNameColor: '#212121',
          sliderColor: '#535353',
          sliderHandleColor: '#1db954',
          sliderTrackColor: "#535353",
        }}
      />
    </div>
  )
}

export default Player