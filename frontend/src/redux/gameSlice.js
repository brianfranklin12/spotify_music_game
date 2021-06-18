import { createSlice } from '@reduxjs/toolkit';
import { NewGame } from '../services/NewGame';

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    uri: null,
    questions: [],
    status: null
  },
  reducers: {
    addGamePoint: (state,action) => {
      state.points = state.points + 1
    }
  },
  extraReducers: {
    [NewGame.pending]: (state, action) => {
      state.status = 'loading'
      state.questions = []
    },
    [NewGame.fulfilled] : (state, action) => {
      state.status = 'succeeded'
      state.questions = action.payload.questions
      state.uri = action.payload.game.playlist_uri
      state.points = action.payload.game.points
    }
  }
})

export const { addGamePoint } = gameSlice.actions;

export default gameSlice.reducer;