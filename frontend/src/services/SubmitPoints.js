import { createAsyncThunk } from '@reduxjs/toolkit';

export const SubmitPoints = createAsyncThunk('user/SubmitPoints', async ({id, points}) => {
  return fetch( `http://localhost:3001/users/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem('jwt')}`
    },
    body: JSON.stringify({points})
  })
  .then(res => res.json())
})