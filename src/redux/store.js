import { configureStore } from '@reduxjs/toolkit';
import missionsReducers from './missions/missionsSlice';
import rocketsReducers from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducers,
    missions: missionsReducers,
  },
});

export default store;
