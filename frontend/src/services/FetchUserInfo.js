import { createAsyncThunk } from '@reduxjs/toolkit';

export const FetchUserInfo = createAsyncThunk('user/FetchUserInfo', async ({accessToken}) => {

  return fetch(`${process.env.REACT_APP_API_ENDPOINT}/users`, {
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