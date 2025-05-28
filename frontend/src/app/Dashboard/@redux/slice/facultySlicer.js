import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  facultyUser: {name:"Loading"},
}

const facultySlice = createSlice({
  name: 'faculty',
  initialState,
  reducers: {
    setFacultyUser: (state, action) => {
      state.facultyUser = action.payload
    },
    clearFacultyUser: (state) => {
      state.facultyUser = null
    }
  }
})

export const { setFacultyUser, clearFacultyUser } = facultySlice.actions
export default facultySlice.reducer
