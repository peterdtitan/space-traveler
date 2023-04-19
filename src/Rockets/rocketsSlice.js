import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    Numcheck: (state) => {
      if (state.rockets.length === 0) {
        return 'Five';
      }
      return 'Ten';
    },
  },
});

export const { Numcheck } = rocketsSlice.actions;

export default rocketsSlice.reducer;
