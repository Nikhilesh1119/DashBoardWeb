import {configureStore} from '@reduxjs/toolkit';
import appConfigSlice from './AppConfigSlice';

const store = configureStore ({
  reducer: {
    appConfig: appConfigSlice.reducer,
  },
});

export default store;
