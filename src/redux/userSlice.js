import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState: {
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null
  },  
  reducers: {
    setUser: (state, action) => {
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.photoUrl = action.payload.photoUrl;
    },
    removeUser: (state) => {
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoUrl = null;
    }
  }
})

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;