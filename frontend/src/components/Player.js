import SpotifyPlayer from 'react-spotify-web-playback';

function Player({accessToken, uri, volume}) {

  return (
    <div className="hidden">
      <SpotifyPlayer
        token={accessToken}
        uris={uri}
        autoPlay={true}
        play={true}
        initialVolume={0.5}
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