import { useState, useEffect } from 'react';

export default function Auth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    if (!code) return
    fetch('https://spotify-music-game-api.herokuapp.com/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(code)
    })
    .then(res => res.json())
    .then(data => {
      setAccessToken(data.access_token)
      setRefreshToken(data.refresh_token)
      setExpiresIn(data.expires_in)
      window.history.pushState({}, null, '/')
      localStorage.setItem('accessToken', data.access_token)
    })
    .catch(err => {
      console.error(err);
      window.location = "/"
    })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return 
    const interval = setInterval(() => {
      fetch('https://spotify-music-game-api.herokuapp.com/refresh', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({refreshToken, accessToken})
      })
      .then(res => res.json())
      .then(data => {
        setAccessToken(data.access_token)
        setExpiresIn(data.expires_in)
        localStorage.setItem('accessToken', data.access_token)
      })
      .catch(err => {
        console.error(err)
        window.location = "/"
      })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn, accessToken])

  return accessToken
}