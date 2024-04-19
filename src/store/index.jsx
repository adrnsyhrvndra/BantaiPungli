/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./auth";
import laporanReducer from "./laporan";

const store = configureStore({
      reducer: {
            authReducerRedux: authReducer,
            laporanReducerRedux: laporanReducer

      },
      middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
});

export default store;