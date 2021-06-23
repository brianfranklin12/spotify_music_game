import { createSlice } from '@reduxjs/toolkit';
import { FetchUserInfo } from '../services/FetchUserInfo';
import { SubmitPoints } from '../services/SubmitPoints';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: null,
    avatar: null,
    name: null,
    accessToken: null,
    points: null
  },
  extraReducers: {
    [FetchUserInfo.fulfilled]: (state, action) => {
      if (!action.payload) return
      state.id = action.payload.user.id
      state.avatar = action.payload.user.avatar
      state.name = action.payload.user.name
      state.points = action.payload.user.points
      localStorage.setItem('jwt', action.payload.jwt)
    },
    [SubmitPoints.fulfilled]: (state, action) => {
      state.points = action.payload.points
    }
  }
})

export default userSlice.reducer;