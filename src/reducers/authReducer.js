import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/authService";

const storageUser = await JSON.parse(localStorage.getItem("auth"))

export const register = createAsyncThunk(
    "auth/register",
    async(payload, thunkAPI) =>{
        const data = await authService.register(payload)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async(payload, thunkAPI) =>{
        const data = await authService.login(payload)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async() =>{
        authService.logout()
    }
)

const initialState = {
    auth: storageUser ? storageUser : null,
    error: false,
    loading: false,
    success: false
}

export const authReducer = createSlice({
    name: 'auth',
    initialState,
    reducers:{
        resetStates: (state) =>{
            state.loading = false,
            state.error = false,
            state.success = false
        }
    },
    extraReducers: builder =>{
        builder
        .addCase(register.pending, (state) =>{
            state.loading = true,
            state.error = false,
            state.success = false
        })
        .addCase(register.fulfilled, (state, action) =>{
            state.loading = false,
            state.success = true,
            state.error = false,
            state.auth = action.payload
        })
        .addCase(register.rejected, (state, action) =>{
            state.loading = false,
            state.success = false,
            state.error = action.payload
            state.auth = null
        })
        .addCase(login.pending, (state) =>{
            state.loading = true,
            state.error = false,
            state.success = false
        })
        .addCase(login.fulfilled, (state, action) =>{
            state.loading = false,
            state.success = true,
            state.error = false,
            state.auth = action.payload
        })
        .addCase(login.rejected, (state, action) =>{
            state.loading = false,
            state.success = false,
            state.error = action.payload
            state.auth = null
        })
        .addCase(logout.fulfilled, (state, action) =>{
            state.loading = false,
            state.success = true,
            state.error = false,
            state.auth = null
        })
    }
})

export const { resetStates } = authReducer.actions
export default authReducer.reducer