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
    leaveGame: (state,action) => {
      state.status = null
      state.questions = []
    }
  },
  extraReducers: {
    [NewGame.pending]: (state, action) => {
      state.status = 'loading'
    },
    [NewGame.fulfilled] : (state, action) => {
      state.status = 'succeeded'
      state.questions = action.payload.questions
      state.uri = action.payload.game.playlist_uri
      state.points = action.payload.game.points
    }
  }
})

export const { leaveGame } = gameSlice.actions;

export default gameSlice.reducer;