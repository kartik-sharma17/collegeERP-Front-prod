import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    studentUser: { name: "Loading" },
}

const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        setStudentUser: (state, action) => {
            state.studentUser = action.payload
        },
        clearStudentUser: (state) => {
            state.studentUser = null
        }
    }
})

export const { setStudentUser, clearStudentUser } = studentSlice.actions
export default studentSlice.reducer
