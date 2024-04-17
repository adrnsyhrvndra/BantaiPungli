/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./auth";

const store = configureStore({
      reducer: {
            authReducerRedux: authReducer

      },
      middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
});

export default store;