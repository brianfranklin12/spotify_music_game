import { useEffect, useState } from 'react';
import FetchUserInfo from '../services/FetchUserInfo';
import FetchPlaylists from '../services/FetchPlaylists';
import Playlist from '../components/Playlist';
import { useHistory } from 'react-router-dom';

export default function Dashboard({accessToken}) {

  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();
  const [playlists, setPlaylists] = useState();
  const [filter, setFilter] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (!accessToken) return
    FetchUserInfo(accessToken)
    .then(res => res.json())
    .then(data => {
      setName(data.display_name)
      if (data.images[0]) {
        setAvatar(data.images[0].url)
      }
    }, [accessToken])

    FetchPlaylists(accessToken)
    .then(res => res.json())
    .then(data => setPlaylists(data.items))
  }, [accessToken])

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  }

  return (
    <div>
      <div className="flex">
        <div className="inline">
          <h1>Welcome, {name}</h1>
          <img className="avatar" src={avatar} alt={name} />
        </div>
        <form>
          <input className="search_bar" onChange={(e) => setFilter(e.target.value)} value={filter} placeholder="Search for Playlist" />
        </form>
        <button onClick={handleLogout}className="logout-btn">Log Out</button>
      </div>
      <p>Click on one of your playlists below to start a game!</p>
      
        <div className="playlist_grid">
          {playlists && playlists.filter(playlist => playlist.name.toLowerCase().includes(filter.toLowerCase())).map(playlist => <Playlist key={playlist.id} accessToken={accessToken} playlist={playlist} />)}
        </div>
    </div>
  )
}