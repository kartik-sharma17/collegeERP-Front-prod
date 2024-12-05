"use client"
import React from 'react'
import styles from '../Css/StudentDashboard.module.css'
import { Link, NavLink, Route, Routes } from 'react-router'
import '../Css/Common.css'
import { Profile } from './Profile'
import { Attendence } from './Attendence'


export const StudentDashboard = () => {
  return (
    <div className={`${styles.body} ${'container-fluid vh-100 vw-100'}`}>
      <div className={`${styles.nav_bar} ${'w-100'}`}></div>
      <div className={`${styles.main} ${'w-100 d-flex justify-content-center mt-2'}`}>
      <div className={`${styles.side_bar} ${'px-3 py-4 d-flex flex-column'}`}>
        <h6 className='ps-3'>MENU</h6>
        <NavLink to={'/'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2'}`}>Profile</NavLink>
        <NavLink to={'/Student/Attendence'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2'}`}>Attendence</NavLink>
        <NavLink to={'/kartik'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2'}`}>Profile</NavLink>
        <NavLink to={'/i'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2'}`}>Profile</NavLink>
        <NavLink to={'/b'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2'}`}>Profile</NavLink>
      </div>
      <div className={`${styles.content_area} ${'ms-2 h-100'}`}>
        <Routes>
          <Route path='/' element={<Profile/>} ></Route>
          <Route path='/Student/Attendence' element={<Attendence/>} ></Route>
        </Routes>
      </div>
      </div>
    </div>
  )
}
