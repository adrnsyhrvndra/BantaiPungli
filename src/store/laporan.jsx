/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
      laporanSearch: null,
};

export const laporanSlice = createSlice({
      name: 'laporanReducerRedux',
      initialState,
      reducers: {
            setLaporanSearch: (state, action) => {
                  state.laporanSearch = action.payload;
            }
      },
});

export const {setLaporanSearch} = laporanSlice.actions;

export default laporanSlice.reducer;
