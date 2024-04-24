import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  user: {},
  userAppointments: [],
};

const userSlice = createSlice({
  name: "actualUser",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    setUserAppointments: (state, action) => {
      state.userAppointments = action.payload;
    },
  },
});

export const { setUserData, setUserAppointments } = userSlice.actions;
export default userSlice.reducer;
