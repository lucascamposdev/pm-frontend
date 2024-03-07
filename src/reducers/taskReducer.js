import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Services
import taskService from "../services/taskService";
import userService from '../services/userService'
import projectService from "../services/projectService";

// Toast
import { toast } from "react-toastify";

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

export const leaveTask = createAsyncThunk(
    "task/leaveTask",
    async(taskId, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await taskService.leaveTask(taskId, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const changeTaskStatus = createAsyncThunk(
    "task/changeTaskStatus",
    async(payload, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await taskService.changeTaskStatus(payload, token)

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

export const deleteTask = createAsyncThunk(
    "task/deleteTask",
    async(taskId, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await taskService.deleteTask(taskId, token)

        // Check Errors
        if(data.error){
            toast.error(data.message[0])
            return thunkAPI.rejectWithValue(data.message)
        }
        toast.success('Task excluída.')
        return data
    }
)

export const createTask = createAsyncThunk(
    "task/createTask",
    async(payloadWithId, thunkAPI) =>{
        const { id, ...payload } = payloadWithId;

        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await taskService.createTask(payload, id, token)

        // Check Errors
        if(data.error){
            toast.error(data.message[0])
            return thunkAPI.rejectWithValue(data.message)
        }
        toast.success('Task criada com sucesso!')
        return data
    }
)

export const updateTask = createAsyncThunk(
    "task/updateTask",
    async(payloadWithId, thunkAPI) =>{
        const { id, ...payload } = payloadWithId;
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await taskService.update(id, payload, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

export const allProjectTasks = createAsyncThunk(
    "task/allprojecttasks",
    async(projectId, thunkAPI) =>{
        const token = await thunkAPI.getState().authReducer.auth.token
        const data = await projectService.allProjectTasks(projectId, token)

        // Check Errors
        if(data.error){
            return thunkAPI.rejectWithValue(data.message)
        }

        return data
    }
)

const initialState = {
    tasks: [],
    task: null,
    projectName: null,
    responsable: null,
    error: false,
    loading: false,
    minorLoading: false,
    nameLoading: false,
    minorSuccess: false,
    success: false
}

export const taskReducer = createSlice({
    name: 'task',
    initialState,
    reducers:{
        resetStates: (state) =>{
            state.loading = false,
            state.error = false,
            state.success = false,
            state.minorLoading = false,
            state.nameLoading = false,
            state.minorSuccess = false
        },
        setTask: (state, action) =>{
            state.task = action.payload
        },
        resetTasks: (state) =>{
            state.tasks = []
        },
        changeTasksLocally: (state, action) =>{
            state.tasks = state.tasks.filter(t => t.id != action.payload.id)
            state.tasks.push(action.payload)
        },
        updateTasksLocally: (state, action) =>{
            state.tasks = state.tasks.map(task => { 
                if(task.id === action.payload.id){
                    return action.payload;
                }
                return task;
            })
        }
    },
    extraReducers: builder =>{
        builder
        .addCase(getTask.pending, (state) =>{
            state.minorLoading = true
        })
        .addCase(getTask.fulfilled, (state, action) =>{
            state.minorLoading = false,
            state.task = action.payload
        })
        .addCase(allProjectTasks.pending, (state) =>{
            state.loading = true
        })
        .addCase(allProjectTasks.fulfilled, (state, action) =>{
            state.loading = false,
            state.tasks = action.payload
        })
        .addCase(createTask.pending, (state) =>{
            state.minorLoading = true,
            state.error = false
        })
        .addCase(createTask.fulfilled, (state, action) =>{
            state.minorLoading = false,
            state.tasks.push(action.payload)
        })
        .addCase(createTask.rejected, (state, action) =>{
            state.minorLoading = false,
            state.error = action.payload
        })
        .addCase(deleteTask.fulfilled, (state, action) =>{
            state.tasks = state.tasks.filter(task => task.id != action.payload),
            state.task = {}
        })
        .addCase(updateTask.fulfilled, (state, action) =>{
            state.task = action.payload
        })
    }
})

export const { resetStates, setTask, resetTasks, changeTasksLocally, updateTasksLocally } = taskReducer.actions
export default taskReducer.reducer