'use Client'
import React from 'react'
import { Routes , Route } from 'react-router-dom'
import { Login } from './Login'
import { StudentDashboard } from './Students/Components/StudentDashboard'
import { Profile } from './Students/Components/Profile'

export const Common = () => {
  return (
    <div style={{height:"100vh", width:"100vw"}}>
      {/* <StudentDashboard/> */}
    {/* <Routes>
        <Route path='/' element={<Login/>} ></Route>
        <Route path='/pro' element={<Profile/>} ></Route>
        <Route path="/student/main" element={<StudentDashboard/>} ></Route>
    </Routes> */}
    </div>
  )
}
