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

  return accessToken
}