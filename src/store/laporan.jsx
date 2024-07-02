import {createSlice} from '@reduxjs/toolkit';

const initialState = {
      laporanSearch: '',
      laporanFilter: [],
};

export const laporanSlice = createSlice({
      name: 'laporanReducerRedux',
      initialState,
      reducers: {
            setLaporanSearch: (state, action) => {
                  state.laporanSearch = action.payload;
            },
            setLaporanFilter: (state, action) => {
                  state.laporanFilter = action.payload;
            }
      },
});

export const {setLaporanSearch,setLaporanFilter} = laporanSlice.actions;

export default laporanSlice.reducer;
