/* eslint-disable prettier/prettier */
import {createSlice} from '@reduxjs/toolkit';

const initialState = {
      _id: '',
      username: '',
      email: '',
      no_telp: '',
      alamat: '',
      foto_profile: '',
      nama_lengkap: '',
      tanggal_lahir: '',
      jenis_kelamin: '',
};

export const userSlice = createSlice({
      name: 'userReducerRedux',
      initialState,
      reducers: {
            set_Id: (state, action) => {
                  state._id = action.payload;
            },
            setUsername: (state, action) => {
                  state.username = action.payload;
            },
            setEmail: (state, action) => {
                  state.email = action.payload;
            },
            setNoTelp: (state, action) => {
                  state.no_telp = action.payload;
            },
            setAlamat: (state, action) => {
                  state.alamat = action.payload;
            },
            setFotoProfile: (state, action) => {
                  state.foto_profile = action.payload;
            },
            setNamaLengkap: (state, action) => {
                  state.nama_lengkap = action.payload;
            },
            setTanggalLahir: (state, action) => {
                  state.tanggal_lahir = action.payload;
            },
            setJenisKelamin: (state, action) => {
                  state.jenis_kelamin = action.payload;
            },
      },
});

export const {set_Id, setUsername, setEmail, setNoTelp, setAlamat, setFotoProfile, setNamaLengkap, setJenisKelamin, setTanggalLahir} = userSlice.actions;

export default userSlice.reducer;
