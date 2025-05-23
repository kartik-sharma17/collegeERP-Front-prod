'use client'

import '../../Css/Common.scss';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBook, faCalendarWeek, faPenClip, faSquarePollVertical, faSackDollar, faCalendarCheck, faCircleInfo, faGear } from '@fortawesome/free-solid-svg-icons'
import { faUser, faBookmark, faBell } from '@fortawesome/free-regular-svg-icons'
import Link from 'next/link';
import { usePathname } from "next/navigation";


const Sidebar = () => {
  const para = usePathname();
  const id = para.split('/')

  return (
    <div className={`${"side_bar"} ${'px-3 pb-4 pt-2 d-flex flex-column vh-100'}`}>
      <div className='d-flex w-100 p-2 custom_sidebar_box'>
        <div>
          <img src="/assets/img/nav-icon.PNG" className='img-fluid' alt="" />
        </div>
        <div className='ms-2'>
          <p className='text-white size_medium m-0'>CampusCore</p>
          <p className='size_small custom_color1 m-0'>Smart ERP system</p>
        </div>
      </div>
      <h6 className='ps-3 mt-3'>MENU</h6>
      <Link href={`/Dashboard/Faculty/Profile/${id[4]}`} className={`custom_btn w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center ${para.startsWith(`/Dashboard/Faculty/Profile`) ? "active" : ""}`}><span><FontAwesomeIcon className='me-1' icon={faUser} /> Profile</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></Link>
      <Link href={`/Dashboard/Faculty/Attendence/${id[4]}`} className={`custom_btn w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center ${para.startsWith(`/Dashboard/Faculty/Attendence`) ? "active" : ""}`}><span><FontAwesomeIcon className='me-1' icon={faUser} />Update Atten..</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></Link>
      <Link href={`/Dashboard/Faculty/Result/${id[4]}`} className={`custom_btn w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center ${para.startsWith(`/Dashboard/Faculty/Result`) ? "active" : ""}`}><span><FontAwesomeIcon className='me-1' icon={faSquarePollVertical} />Update Result</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></Link>
      <Link href={`/Dashboard/Faculty/Events/${id[4]}`} className={`custom_btn w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center ${para.startsWith(`/Dashboard/Faculty/Events`) ? "active" : ""}`}><span><FontAwesomeIcon className='me-1' icon={faCalendarCheck} />Update Events</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></Link>
      <hr className='text-light' />
      <a className={`${'px-3 d-flex justify-content-between align-items-center'} ${"custom_btn"}`} href='#'><span><FontAwesomeIcon className='me-1' icon={faCircleInfo} /> Help</span></a>
      <a className={`${'px-3 mt-2 d-flex justify-content-between align-items-center'} ${"custom_btn"}`} href='/Fee'><span><FontAwesomeIcon className='me-1' icon={faGear} /> Settings</span></a>
    </div>
  )
}

export default Sidebar