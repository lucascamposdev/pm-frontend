import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import userService from "../services/userService";

export const getuser = createAsyncThunk(
    "user/getuser",
    async(payload, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await userService.getuser(payload, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const getprofile = createAsyncThunk(
    "user/getprofile",
    async(id, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await userService.getprofile(id, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const update = createAsyncThunk(
    "user/update",
    async(payload, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await userService.update(payload, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

const initialState = {
    user: null,
    loading: false,
    error: false,
    success: false,
    profile: null,
    loadingProfile: false,
    manager: ''
}

export const userReducer = createSlice({
    name: 'user',
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
        .addCase(getuser.pending, (state) =>{
            state.loading = true,
            state.user = null,
            state.error = false,
            state.success = false
        })
        .addCase(getuser.fulfilled, (state, action) =>{
            state.loading = false,
            state.error = false,
            state.user = action.payload
        })
        .addCase(getuser.rejected, (state, action) =>{
            state.loading = false,
            state.success = false,
            state.error = action.payload
            state.user = null
        })
        .addCase(getprofile.pending, (state) =>{
            state.loadingProfile = true
        })
        .addCase(getprofile.fulfilled, (state, action) =>{
            state.loadingProfile = false,
            state.profile = action.payload
        })
        .addCase(update.pending, (state) =>{
            state.loading = true,
            state.error = false,
            state.success = false
        })
        .addCase(update.fulfilled, (state, action) =>{
            state.loading = false,
            state.success = true,
            state.error = false,
            state.profile = action.payload
            if(state.user){
                state.user.name = action.payload.name
            }
        })
        .addCase(update.rejected, (state, action) =>{
            state.loading = false,
            state.success = false,
            state.error = action.payload
        })
    }
})

export const { resetStates } = userReducer.actions
export default userReducer.reducer