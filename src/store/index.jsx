/* eslint-disable prettier/prettier */
import {configureStore} from '@reduxjs/toolkit';
import authReducer from "./auth";
import userReducer from "./user";

const store = configureStore({
      reducer: {
            authReducerRedux: authReducer,
            userReducerRedux: userReducer

      },
      middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}),
});

export default store;