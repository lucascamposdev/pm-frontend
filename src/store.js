import { configureStore } from "@reduxjs/toolkit";

import authReducer from './reducers/authReducer.js'
import userReducer from "./reducers/userReducer.js";
import projectReducer from "./reducers/projectReducer.js";
import taskReducer from "./reducers/taskReducer.js";

const store = configureStore({
    reducer: {
        authReducer,
        userReducer,
        projectReducer,
        taskReducer
    }
})

export default store;