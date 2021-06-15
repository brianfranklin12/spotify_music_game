import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: "user",
  initialState: {
    accessToken: null,
    jwt: null
  },
})

export default userSlice.reducer;