import { useEffect, useState } from 'react';
import useAuth from './useAuth';
import FetchUserInfo from './FetchUserInfo';

export default function Dashboard({code}) {
  const accessToken = useAuth(code)

  const [name, setName] = useState();
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    if (!accessToken) return
    FetchUserInfo(accessToken)
    .then(res => res.json())
    .then(data => {
      setName(data.display_name)
      setAvatar(data.images[0].url)
    })
  }, [accessToken])
 

  return (
    <div>
      <img src={avatar} />
      <h1>Welcome, {name}</h1>
    </div>
  )
}