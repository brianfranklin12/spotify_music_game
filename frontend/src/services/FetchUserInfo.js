import { createAsyncThunk } from '@reduxjs/toolkit';

export const FetchUserInfo = createAsyncThunk('user/FetchUserInfo', async ({accessToken}) => {

  return fetch('https://spotify-music-game-api.herokuapp.com/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      accessToken
    })
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    } else {
      localStorage.clear()
      window.location = "/login"
    }
  })
})