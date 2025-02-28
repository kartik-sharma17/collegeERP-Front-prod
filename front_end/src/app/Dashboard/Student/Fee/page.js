"use client";

import React from 'react'
import { useRouter } from 'next/navigation';
import styles from '../Css/StudentDashboard.module.css'
import '../Css/Common.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBook, faCalendarWeek, faPenClip, faSquarePollVertical, faSackDollar, faCalendarCheck, faCircleInfo, faGear } from '@fortawesome/free-solid-svg-icons'
import { faUser, faBookmark } from '@fortawesome/free-regular-svg-icons'

const Fee = () => {
    const route = useRouter();
  return (
    <div className={`${styles.body} ${'container-fluid vh-100 vw-100'}`}>
    <div className={`${styles.nav_bar} ${'w-100'}`}></div>
    <div className={`${styles.main} ${'w-100 d-flex justify-content-center mt-2'}`}>
      <div className={`${styles.side_bar} ${'px-3 py-4 d-flex flex-column'}`}>
        <h6 className='ps-3'>MENU</h6>
        <buttom onClick={() => { route.push("Profile") }} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faUser} /> Profile</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></buttom>
        <buttom onClick={() => { route.push("Attendence") }} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faCalendarWeek} /> Attendence</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></buttom>
        <buttom onClick={() => { route.push("Result") }} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faSquarePollVertical} /> Result</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></buttom>
        <buttom onClick={() => { route.push("Fee") }} className={`${styles.custom_btn} ${'active w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faSackDollar} /> Fees</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></buttom>
        <buttom onClick={() => { route.push("Events") }} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faCalendarCheck} /> Events</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></buttom>
        <hr className='text-light' />
        <a className={`${'px-3 d-flex justify-content-between align-items-center'} ${styles.custom_btn}`} href='#'><span><FontAwesomeIcon className='me-1' icon={faCircleInfo} /> Help</span></a>
        <a className={`${'px-3 mt-2 d-flex justify-content-between align-items-center'} ${styles.custom_btn}`} href='/Fee'><span><FontAwesomeIcon className='me-1' icon={faGear} /> Settings</span></a>
      </div>
    </div>
  </div>
  )
}

export default Fee


