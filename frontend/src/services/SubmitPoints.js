import { createAsyncThunk } from '@reduxjs/toolkit';

export const SubmitPoints = createAsyncThunk('user/SubmitPoints', async ({id, gamePoints}) => {
  return fetch( `https://spotify-music-game-api.herokuapp.com/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({gamePoints})
  })
  .then(res => res.json())
})