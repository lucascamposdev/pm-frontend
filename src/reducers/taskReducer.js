import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "../services/taskService";
import userService from '../services/userService'
import projectService from "../services/projectService";

export const allProjectTasks = createAsyncThunk(
    "task/allProjectTasks",
    async(projectId, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await taskService.allProjectTasks(projectId, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const getResponsable = createAsyncThunk(
    "task/getResponsable",
    async(userId, thunkAPI) =>{

        if(!userId){
            return null
        }

        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await userService.getprofile(userId, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }
        return data.name
    }
)

export const applyTask = createAsyncThunk(
    "task/applyTask",
    async(taskId, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await taskService.applyTask(taskId, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const finalize = createAsyncThunk(
    "task/finalize",
    async(taskId, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await taskService.finalize(taskId, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const getTask = createAsyncThunk(
    "task/getTask",
    async(taskId, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await taskService.getTask(taskId, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const taskBelongsTo = createAsyncThunk(
    "task/taskBelongsTo",
    async(projectId, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await projectService.getProject(projectId, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data.name
    }
)

export const deleteTask = createAsyncThunk(
    "task/deleteTask",
    async(taskId, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await taskService.deleteTask(taskId, token)

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
        const data = await taskService.createTask(payload, id, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }
        return data
    }
)

const initialState = {
    tasks: [],
    task: {},
    projectName: null,
    responsable: null,
    error: false,
    loading: false,
    minorLoading: false,
    minorSuccess: false,
    success: false
}

export const taskReducer = createSlice({
    name: 'responsables',
    initialState,
    reducers:{
        resetStates: (state) =>{
            state.loading = false,
            state.error = false,
            state.success = false,
            state.minorLoading = false,
            state.minorSuccess = false
        },
        setTask: (state, action) =>{
            state.task = action.payload
        }
    },
    extraReducers: builder =>{
        builder
        .addCase(allProjectTasks.pending, (state) =>{
            state.loading = true,
            state.error = false,
            state.success = false
        })
        .addCase(allProjectTasks.fulfilled, (state, action) =>{
            state.loading = false,
            state.success = true,
            state.error = false,
            state.tasks = action.payload
        })
        .addCase(allProjectTasks.rejected, (state, action) =>{
            state.loading = false,
            state.success = false,
            state.error = action.payload
        })
        .addCase(createTask.pending, (state) =>{
            state.minorLoading = true,
            state.error = false,
            state.minorSuccess = false
        })
        .addCase(createTask.fulfilled, (state, action) =>{
            state.minorLoading = false,
            state.minorSuccess = true,
            state.error = false,
            state.tasks.push(action.payload)
        })
        .addCase(createTask.rejected, (state, action) =>{
            state.minorLoading = false,
            state.minorSuccess = false,
            state.error = action.payload
        })
        .addCase(getResponsable.pending, (state) =>{
            state.minorLoading = true,
            state.error = false,
            state.success = false
        })
        .addCase(getResponsable.fulfilled, (state, action) =>{
            state.minorLoading = false,
            state.success = true,
            state.error = false,
            state.responsable = action.payload
        })
        .addCase(getResponsable.rejected, (state, action) =>{
            state.minorLoading = false,
            state.success = false,
            state.responsable = null
        })
        .addCase(applyTask.pending, (state) =>{
            state.error = false,
            state.success = false
        })
        .addCase(applyTask.fulfilled, (state, action) =>{
            state.loading = false,
            state.success = true,
            state.error = false,
            state.tasks = state.tasks.map(task =>{
                if(task.id == action.payload.id){
                    task = action.payload
                }
                return task
            })
            state.task = action.payload
        })
        .addCase(finalize.pending, (state) =>{
            state.minorLoading = true,
            state.error = false,
            state.success = false
        })
        .addCase(finalize.fulfilled, (state, action) =>{
            state.minorLoading = false,
            state.success = true,
            state.error = false,
            state.tasks = state.tasks.map(task =>{
                if(task.id == action.payload.id){
                    task = action.payload
                }
                return task
            })
            state.task.status = action.payload.status
        })
        .addCase(finalize.rejected, (state, action) =>{
            state.minorLoading = false,
            state.success = false
        })
        .addCase(deleteTask.fulfilled, (state, action) =>{
            state.tasks = state.tasks.filter(task => task.id != action.payload),
            state.task = {}
        })
        .addCase(taskBelongsTo.pending, (state) =>{
            state.error = false,
            state.success = false
        })
        .addCase(taskBelongsTo.fulfilled, (state, action) =>{
            state.loading = false,
            state.success = true,
            state.error = false,
            state.projectName = action.payload
        })
    }
})

export const { resetStates, setTask } = taskReducer.actions
export default taskReducer.reducer