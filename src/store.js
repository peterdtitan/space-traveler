import { configureStore } from '@reduxjs/toolkit';
import missionsReducers from './Missions/missionsSlice';
import rocketsReducers from './Rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducers,
    missions: missionsReducers,
  },
});

export default store;
