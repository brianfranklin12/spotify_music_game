import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: "game",
  initialState: {
    uri: null,
    tracks: [],
    points: 0
  },
})

export default gameSlice.reducer;