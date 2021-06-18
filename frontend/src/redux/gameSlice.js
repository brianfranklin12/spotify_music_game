import { createSlice } from '@reduxjs/toolkit';
import { NewGame } from '../services/NewGame';

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    uri: null,
    questions: [],
    points: 0
  },
  reducers: {
    addGamePoint: (state,action) => {
      state.points = state.points + 1
    }
  },
  extraReducers: {
    [NewGame.pending]: (state, action) => {
      state.questions = []
    },
    [NewGame.fulfilled] : (state, action) => {
      state.questions = action.payload.questions
      state.uri = action.payload.game.playlist_uri
      state.points = action.payload.game.points
    }
  }
})

export const { addGamePoint } = gameSlice.actions;

export default gameSlice.reducer;