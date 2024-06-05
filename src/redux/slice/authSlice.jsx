import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    user: {},
    isLoading: false,
    isError: false,
};

export const login = createAsyncThunk('login', async ({email, password}) => {
    const data = {username: email, password: password};
    const res = await axios.post(process.env.REACT_APP_API_AUTH_TOKEN, data);
    return res.data;
});

export const register = createAsyncThunk('auth/register', async (user) => {
    if (!user || !user?.username || !user?.email || !user?.password) return null;
    const res = await axios.post(`${process.env.REACT_APP_API_ROOT}/register`, user);
    /*const res = await new Promise((resolve) => setInterval(() => {
        resolve('done');
    }, 2000))
    */
    return res;
});

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        logout: (state) => {
            state.user = {};
        }
    },
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(login.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(login.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });

        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(register.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
            state.isError = false;
        });
        builder.addCase(register.rejected, (state) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;