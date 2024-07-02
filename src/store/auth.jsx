import {createSlice} from '@reduxjs/toolkit';

const initialState = {
      eyePassword: false,
      username: '',
      email: '',
      password: '',
      nama_lengkap: '',
      tanggal_lahir: '',
      jenis_kelamin: '',
      no_telp: '',
      alamat: '',
      foto_profile : '',
      usernameOrEmail : '',
      passwordLogin : '',
};

export const authSlice = createSlice({
      name: 'userReducerRedux',
      initialState,
      reducers: {
            setEyePassword: (state, action) => {
                  state.eyePassword = action.payload;
            },
            setUsername: (state, action) => {
                  state.username = action.payload;
            },
            setEmail: (state, action) => {
                  state.email = action.payload;
            },
            setPassword: (state, action) => {
                  state.password = action.payload;
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
            setNoTelp: (state, action) => {
                  state.no_telp = action.payload;
            },
            setAlamat: (state, action) => {
                  state.alamat = action.payload;
            },
            setFotoProfile: (state, action) => {
                  state.foto_profile = action.payload;
            },
            setUsernameOrEmail: (state, action) => {
                  state.usernameOrEmail = action.payload;
            },
            setPasswordLogin: (state, action) => {
                  state.passwordLogin = action.payload;
            },
      },
});

export const {setEyePassword, setUsername, setEmail, setPassword, setNamaLengkap, setTanggalLahir, setJenisKelamin, setNoTelp, setAlamat, setFotoProfile, setUsernameOrEmail, setPasswordLogin} = authSlice.actions;

export default authSlice.reducer;
