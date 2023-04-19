import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    Numcheck: (state) => {
      if (state.missions.length === 0) {
        return 'Five';
      }
      return 'Ten';
    },
  },
});

export const { Numcheck } = missionsSlice.actions;

export default missionsSlice.reducer;
