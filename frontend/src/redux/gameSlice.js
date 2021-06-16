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
      state.tracks = action.payload.tracks
      state.uri = action.payload.game.playlist_uri
      state.points = action.payload.game.points
    }
  }
})

export default gameSlice.reducer;