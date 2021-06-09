import { useState, useEffect } from 'react';

export default function useAuth(code) {
  const [accessToken, setAccessToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    fetch('http://localhost:3001/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(code)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setAccessToken(data.access_token)
      setRefreshToken(data.refresh_token)
      setExpiresIn(data.expires_in)
      window.history.pushState({}, null, '/')
    })
    .catch(err => {
      console.error(err);
      window.location = "/"
    })
  }, [code])

  useEffect(() => {
    if (!refreshToken || !expiresIn) return 
    const interval = setInterval(() => {
      fetch('http://localhost:3001/refresh', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({refreshToken, accessToken})
      })
      .then(res => res.json())
      .then(data => {
        console.log('i feel freshed', data)
        setAccessToken(data.access_token)
        setExpiresIn(data.expires_in)
      })
      .catch(err => {
        console.error(err)
        window.location = "/"
      })
    }, (expiresIn - 60) * 1000)

    return () => clearInterval(interval)
  }, [refreshToken, expiresIn])

  return accessToken
}