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
    isJoined: false,
  }));
  return selectedProperties;
});

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    joinMission: (state, action) => {
      const missionId = action.payload;
      const updatedMissions = state.missions.map((mission) => (mission.id === missionId
        ? { ...mission, isJoined: true } : mission));
      return { ...state, missions: updatedMissions };
    },
    leaveMission: (state, action) => {
      const missionId = action.payload;
      const updatedMissions = state.missions.map((mission) => (mission.id === missionId
        ? { ...mission, isJoined: false } : mission));
      return { ...state, missions: updatedMissions };
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

export const { joinMission, leaveMission } = missionsSlice.actions;

export default missionsSlice.reducer;
