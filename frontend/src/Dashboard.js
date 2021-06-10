import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import FetchUserInfo from './FetchUserInfo';
import FetchPlaylists from './FetchPlaylists';
import Playlist from './Playlist';

export default function Dashboard({code}) {
  const accessToken = useAuth(code)

  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  const [playlists, setPlaylists] = useState();

  useEffect(() => {
    if (!accessToken) return
    FetchUserInfo(accessToken)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setName(data.display_name)
      if (data.images[0]) {
        setAvatar(data.images[0].url)
      }
    })

    FetchPlaylists(accessToken)
    .then(res => res.json())
    .then(data => setPlaylists(data.items))
  }, [accessToken])

  return (
    <div>
      <img src={avatar} alt={name} />
      <h1>Welcome, {name}</h1>
        {playlists && playlists.map(playlist => <Playlist key={playlist.id} accessToken={accessToken} playlist={playlist} />)}
    </div>
  )
}