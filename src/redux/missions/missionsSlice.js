import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  status: 'idle',
  error: null,
};

export const fetchMissions = createAsyncThunk('missions/fetchMissions', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');
  const data = await response.json();
  const selectedProperties = data.map((mission) => ({
    id: mission.mission_id,
    name: mission.mission_name,
    description: mission.description,
  }));
  return selectedProperties;
});

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
  extraReducers: {
    [fetchMissions.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [fetchMissions.fulfilled]: (state, action) => {
      const newMissions = action.payload;
      return { ...state, missions: newMissions, status: 'succeeded' };
    },
  },
});

export const { Numcheck } = missionsSlice.actions;

export default missionsSlice.reducer;
