import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import projectService from "../services/projectService";

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

export const getProject = createAsyncThunk(
    "projects/getproject",
    async(id, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await projectService.getProject(id, token)

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
            return thunkAPI.rejectWithValue(data.message)
        }
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
            return thunkAPI.rejectWithValue(data.message)
        }
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

export const createTask = createAsyncThunk(
    "projects/createTask",
    async(payloadWithId, thunkAPI) =>{
        const { id, ...payload } = payloadWithId;

        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await projectService.createTask(payload, id, token)

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

const initialState = {
    projects: [],
    project: {},
    error: false,
    loading: false,
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
            state.success = true,
            state.error = false,
            state.projects = action.payload
        })
        .addCase(getProjects.rejected, (state, action) =>{
            state.loading = false,
            state.success = false,
            state.error = action.payload
            state.projects = []
        })
        .addCase(create.pending, (state) =>{
            state.loading = true,
            state.error = false,
            state.success = false
        })
        .addCase(create.fulfilled, (state, action) =>{
            state.loading = false,
            state.success = true,
            state.error = false,
            state.projects.push(action.payload)
        })
        .addCase(create.rejected, (state, action) =>{
            state.loading = false,
            state.success = false,
            state.error = action.payload
        })
        .addCase(getProject.pending, (state) =>{
            state.project = {}
            state.loading = true,
            state.error = false,
            state.success = false
        })
        .addCase(getProject.fulfilled, (state, action) =>{
            state.loading = false,
            state.error = false,
            state.project = action.payload
        })
        .addCase(getProject.rejected, (state, action) =>{
            state.loading = false,
            state.success = false,
            state.error = action.payload
            state.project = {}
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
            state.loading = false,
            state.success = false,
            state.error = action.payload
        })
        .addCase(createTask.pending, (state) =>{
            state.loading = true,
            state.error = false,
            state.success = false
        })
        .addCase(createTask.fulfilled, (state, action) =>{
            state.loading = false,
            state.success = true,
            state.error = false,
            state.project.tasks.push(action.payload)
        })
        .addCase(createTask.rejected, (state, action) =>{
            state.loading = false,
            state.success = false,
            state.error = action.payload
        })
        .addCase(deleteProject.fulfilled, (state, action) =>{
            state.loading = false,
            state.error = false,
            state.project = []
            state.projects = state.projects.filter(project => project.id != action.payload)
        })
        .addCase(finalize.fulfilled, (state, action) =>{
            state.loading = false,
            state.error = false,
            state.project.status = action.payload.status
        })
    }
})

export const { resetStates } = projectReducer.actions
export default projectReducer.reducer