import { createSlice } from '@reduxjs/toolkit';
import { NewGame } from '../services/NewGame';

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    uri: null,
    questions: [],
    points: null
  },
  extraReducers: {
    [NewGame.fulfilled] : (state, action) => {
      state.questions = action.payload.questions
      state.uri = action.payload.game.playlist_uri
      state.points = action.payload.game.points
    }
  }
})

export default gameSlice.reducer;