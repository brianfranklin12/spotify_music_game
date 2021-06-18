import { useEffect, useState } from 'react';
import FetchPlaylists from '../services/FetchPlaylists';
import Playlist from '../components/Playlist';
import { useHistory } from 'react-router-dom';
import { FetchUserInfo } from '../services/FetchUserInfo';
import { useDispatch, useSelector } from 'react-redux';
import Filter from '../components/Filter';
import Counter from '../components/Counter';

export default function Dashboard({accessToken}) {

  const [playlists, setPlaylists] = useState();
  const [filter, setFilter] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();
  const { name, avatar, points } = useSelector(state => state.user)

  const handleLogout = () => {
    localStorage.clear();
    history.push('/login');
  }

  useEffect(() => {
    dispatch(FetchUserInfo({accessToken}))

    FetchPlaylists(accessToken)
    .then(res => res.json())
    .then(data => setPlaylists(data.items))
  }, [accessToken, dispatch])

  return (
    <div className="dashboard">
      <div className="flex">
        <div className="inline">
          <h1>Welcome, {name}</h1>
          {avatar && <img className="avatar" src={avatar} alt={name} />}
        </div>
       
        <button onClick={handleLogout}className="logout-btn">Log Out</button>
      </div>
      <Counter points={points} />
      <p className="instructions">Click on a playlist below to start a game!</p>
      <Filter filter={filter} setFilter={setFilter} />
        <div className="playlist_grid">
          {playlists && playlists.filter(playlist => playlist.name.toLowerCase().includes(filter.toLowerCase())).map(playlist => <Playlist key={playlist.id} accessToken={accessToken} playlist={playlist} />)}
        </div>
    </div>
  )
}