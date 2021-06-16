import { createSlice } from '@reduxjs/toolkit';
import { NewGame } from '../services/NewGame';

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    uri: null,
    tracks: [],
    points: 0
  },
  extraReducers: {
    [NewGame.fulfilled] : (state, action) => {
      console.log('made it back from rails with:', action.payload)
    }
  }
})

export default gameSlice.reducer;