import { configureStore } from '@reduxjs/toolkit'
import facultyReducer from './slice/facultySlicer'

export const store = configureStore({
    reducer: {
        faculty: facultyReducer,
    },
})