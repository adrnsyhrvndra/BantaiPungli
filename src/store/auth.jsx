/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
      eyePassword: false,
};

export const authSlice = createSlice({
      name: 'userReducerRedux',
      initialState,
      reducers: {
            setEyePassword: (state, action) => {
                  state.eyePassword = action.payload;
            },
      },
});

export const {setEyePassword} = authSlice.actions;

export default authSlice.reducer;
