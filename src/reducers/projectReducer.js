import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "../services/projectService";
import userService from "../services/userService";

import { toast } from "react-toastify";

export const getProjects = createAsyncThunk(
    "projects/getprojects",
    async(_, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await projectService.getProjects(token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }
        return data
    }
)

export const getProjectById = createAsyncThunk(
    "projects/getprojectbyid",
    async(id, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await projectService.getProjectById(id, token)


        // Check Errors
        if(data.error){

            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const create = createAsyncThunk(
    "projects/create",
    async(payload, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await projectService.create(payload, token)

        // Check Errors
        if(data.error){
            toast.error(data.message[0])
            return thunkAPI.rejectWithValue(data.message)
        }
        toast.success('Projeto criado com sucesso!')
        return data
    }
)

export const update = createAsyncThunk(
    "projects/update",
    async(payloadWithId, thunkAPI) =>{
        const { id, ...payload } = payloadWithId;

        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await projectService.update(payload, id, token)

        // Check Errors
        if(data.error){
            toast.error(data.message[0])
            return thunkAPI.rejectWithValue(data.message)
        }
        toast.success('Alterações Salvas!', { autoClose: 750 })
        return data
    }
)

export const deleteProject = createAsyncThunk(
    "projects/deleteProject",
    async(id, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await projectService.deleteProject(id, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const finalize = createAsyncThunk(
    "projects/finalize",
    async(id, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await projectService.finalize(id, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }
        return data
    }
)

export const getProjectAdmin = createAsyncThunk(
    "projects/getProjectAdmin",
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

const initialState = {
    projects: [],
    project: null,
    isAdmin: false,
    admin: null,
    error: false,
    loading: false,
    minorLoading: false,
    success: false,
}

export const projectReducer = createSlice({
    name: 'projects',
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
        .addCase(getProjects.pending, (state) =>{
            state.loading = true,
            state.error = false,
            state.success = false
        })
        .addCase(getProjects.fulfilled, (state, action) =>{
            state.loading = false,
            state.error = false,
            state.projects = action.payload
        })
        .addCase(getProjects.rejected, (state, action) =>{
            state.loading = false,
            state.success = false,
            state.error = action.payload,
            state.projects = []
        })
        .addCase(getProjectById.pending, (state) =>{
            state.project = null,
            state.success = false,
            state.loading = true,
            state.error = false
        })
        .addCase(getProjectById.fulfilled, (state, action) =>{
            state.loading = false,
            state.error = false,
            state.success = true,
            state.project = action.payload
        })
        .addCase(getProjectById.rejected, (state, action) =>{
            state.loading = false,
            state.success = false,
            state.error = true,
            state.project = null
        })
        .addCase(create.pending, (state) =>{
            state.minorLoading = true,
            state.error = false,
            state.success = false
        })
        .addCase(create.fulfilled, (state, action) =>{
            state.minorLoading = false,
            state.success = true,
            state.error = false,
            state.projects.push(action.payload)
        })
        .addCase(create.rejected, (state, action) =>{
            state.minorLoading = false,
            state.success = false,
            state.error = action.payload
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
            state.project = action.payload
        })
        .addCase(update.rejected, (state, action) =>{
            state.loading = false
        })
        .addCase(deleteProject.fulfilled, (state, action) =>{
            state.loading = false,
            state.project = null
        })
        .addCase(finalize.fulfilled, (state, action) =>{
            state.loading = false,
            state.error = false,
            state.project.status = action.payload.status
        })

        .addCase(getProjectAdmin.fulfilled, (state, action) =>{
            state.loading = false,
            state.error = false,
            state.admin = action.payload
        })
    }
})

export const { resetStates } = projectReducer.actions
export default projectReducer.reducer