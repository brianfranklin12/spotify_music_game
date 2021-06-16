import { createSlice } from '@reduxjs/toolkit';
import { NewGame } from '../services/NewGame';

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    uri: null,
    tracks: [],
    points: null
  },
  extraReducers: {
    [NewGame.fulfilled] : (state, action) => {
      state.uri = action.payload.playlist_uri
      state.points = action.payload.points
    }
  }
})

export default gameSlice.reducer;