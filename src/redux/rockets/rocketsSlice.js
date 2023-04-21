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
    Numcheck: (state) => {
      if (state.rockets.length !== 0) {
        return state.rockets.length;
      }
      return 'No rockets!';
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

export const { Numcheck } = rocketsSlice.actions;

export default rocketsSlice.reducer;
