import { configureStore } from '@reduxjs/toolkit'
import facultyReducer from './slice/facultySlicer'
import studentReducer from './slice/studentSlicer'

export const store = configureStore({
    reducer: {
        faculty: facultyReducer,
        student: studentReducer,
    },
})