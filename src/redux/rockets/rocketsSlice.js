import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
  status: 'idle',
  error: null,
};

export const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  const selectedProperties = data.map((rocket) => ({
    rocketId: rocket.rocket_id,
    rocketName: rocket.rocket_name,
    rocketType: rocket.rocket_type,
    rocketImages: rocket.flickr_images,
    description: rocket.description,
    isBooked: false,
  }));
  return selectedProperties;
});

export const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    bookRocket: (state, action) => {
      const id = action.payload;
      const updatedRockets = state.rockets.map((rocket) => (
        rocket.rocketId === id ? { ...rocket, isBooked: true } : rocket));
      return { ...state, rockets: updatedRockets };
    },
    cancelRocket: (state, action) => {
      const id = action.payload;
      const updatedRockets = state.rockets.map((rocket) => (
        rocket.rocketId === id ? { ...rocket, isBooked: false } : rocket));
      return { ...state, rockets: updatedRockets };
    },
  },
  extraReducers: {
    [fetchRockets.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [fetchRockets.fulfilled]: (state, action) => {
      const newRockets = action.payload;
      return { ...state, rockets: newRockets, status: 'succeeded' };
    },
    [fetchRockets.rejected]: (state, action) => ({
      ...state,
      status: 'failed',
      error: action.error.message,
    }),
  },
});

export const { bookRocket, cancelRocket } = rocketsSlice.actions;
export default rocketsSlice.reducer;
