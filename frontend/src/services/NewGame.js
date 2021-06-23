import { createAsyncThunk } from '@reduxjs/toolkit';

export const NewGame = createAsyncThunk('game/NewGame', async ({id, accessToken}) => {
  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/games`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({id, accessToken})
  })
  .then(res => res.json())
})