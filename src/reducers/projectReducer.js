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
        },
        setProject: (state, action) =>{
            state.project = action.payload
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
            state.projects = state.projects.map(project => {
                if(project.id == action.payload.id){
                    project = action.payload
                }

                return project
            })
        })
        .addCase(update.rejected, (state, action) =>{
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

export const { resetStates, setProject } = projectReducer.actions
export default projectReducer.reducer