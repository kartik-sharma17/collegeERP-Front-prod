"use client"
import React from 'react'
import styles from '../Css/StudentDashboard.module.css'
import { Link, NavLink, Route, Routes } from 'react-router'
import '../Css/Common.css'
import { Profile } from './Profile'
import { Attendence } from './Attendence'
import { Academic } from './Academic'
import { Assignments } from './Assignments'
import { Events } from './Events'
import { Fees } from './Fees'
import { Result } from './Result'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBook, faCalendarWeek, faPenClip, faSquarePollVertical,faSackDollar,faCalendarCheck,faCircleInfo,faGear } from '@fortawesome/free-solid-svg-icons'
import { faUser, faBookmark } from '@fortawesome/free-regular-svg-icons'


export const StudentDashboard = () => {
  return (
    <div className={`${styles.body} ${'container-fluid vh-100 vw-100'}`}>
      <div className={`${styles.nav_bar} ${'w-100'}`}></div>
      <div className={`${styles.main} ${'w-100 d-flex justify-content-center mt-2'}`}>
      <div className={`${styles.side_bar} ${'px-3 py-4 d-flex flex-column'}`}>
        <h6 className='ps-3'>MENU</h6>
        <NavLink to={'/'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faUser} /> Profile</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></NavLink>
        <NavLink to={'/Student/Attendence'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faCalendarWeek} /> Attendence</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></NavLink>
        <NavLink to={'/Student/Academic'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faBook} /> Academic Details</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></NavLink>
        <NavLink to={'/Student/Assignments'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faPenClip} /> Assignments</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></NavLink>
        <NavLink to={'/Student/Result'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faSquarePollVertical} /> Result</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></NavLink>
        <NavLink to={'/Student/Fees'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faSackDollar} /> Fees</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></NavLink>
        <NavLink to={'/Student/Events'} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faCalendarCheck} /> Events</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></NavLink>
        <hr className='text-light'/>
        <a className={`${'px-3 d-flex justify-content-between align-items-center'} ${styles.custom_btn}`} href='#'><span><FontAwesomeIcon className='me-1' icon={faCircleInfo } /> Help</span></a>
        <a className={`${'px-3 mt-2 d-flex justify-content-between align-items-center'} ${styles.custom_btn}`} href='#'><span><FontAwesomeIcon className='me-1' icon={faGear} /> Settings</span></a>
      </div>
      <div className={`${styles.content_area} ${'ms-2 h-100'}`}>
        <Routes>
          <Route path='/Student' element={<Profile/>} ></Route>
          <Route path='/Student/Attendence' element={<Attendence/>} ></Route>
          <Route path='/Student/Academic' element={<Academic/>} ></Route>
          <Route path='/Student/Assignments' element={<Assignments/>} ></Route>
          <Route path='/Student/Result' element={<Result/>} ></Route>
          <Route path='/Student/Fees' element={<Fees/>} ></Route>
          <Route path='/Student/Events' element={<Events/>} ></Route>
        </Routes>
      </div>
      </div>
    </div>
  )
}
