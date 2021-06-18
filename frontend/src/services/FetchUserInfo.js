import { createAsyncThunk } from '@reduxjs/toolkit';

export const FetchUserInfo = createAsyncThunk('user/FetchUserInfo', async ({accessToken}) => {

  return fetch('http://localhost:3001/users', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      accessToken
    })
  })
  .then(res => res.json())
})