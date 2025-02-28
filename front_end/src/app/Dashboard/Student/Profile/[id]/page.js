"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import styles from '../../Css/Profile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBook, faCalendarWeek, faPenClip, faSquarePollVertical, faSackDollar, faCalendarCheck, faCircleInfo, faGear } from '@fortawesome/free-solid-svg-icons'
import { faUser, faBookmark } from '@fortawesome/free-regular-svg-icons'
import { useParams } from 'next/navigation';
import axios from 'axios';

export const StudentProfile = () => {


  const [resData, setResData] = useState(null);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const id = params.id;

  const route = useRouter();


  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async () => {
    try {
      console.log("it is running");
      await axios.get(`http://localhost:8080/dashboard/student/profile/${id}`).then((res) => {
        setResData(res.data);
        console.log(res);
        setLoading(true);
      })
    }
    catch (error) {
      console.log("there is some error while Fetching the data from backend", error)
    }
  }



  if(loading) return (
    <div className={`${styles.body} ${'container-fluid vh-100 vw-100'}`}>
      <div className={`${styles.nav_bar} ${'w-100'}`}></div>
      <div className={`${styles.main} ${'row mt-2 px-3'}`}>
        <div className={`${styles.side_bar} ${'col-12 px-3 col-md-2 py-4 d-flex flex-column'}`}>
          <h6 className='ps-3'>MENU</h6>
          <buttom onClick={() => { route.push("Profile") }} className={`${styles.custom_btn} ${styles.active} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faUser} /> Profile</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></buttom>
          <buttom onClick={() => { route.push("Attendence") }} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faCalendarWeek} /> Attendence</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></buttom>
          <buttom onClick={() => { route.push("Result") }} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faSquarePollVertical} /> Result</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></buttom>
          <buttom onClick={() => { route.push("Fee") }} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faSackDollar} /> Fees</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></buttom>
          <buttom onClick={() => { route.push("Events") }} className={`${styles.custom_btn} ${'w-100 rounded-3 py-2 px-3 mt-2 d-flex justify-content-between align-items-center'}`}><span><FontAwesomeIcon className='me-1' icon={faCalendarCheck} /> Events</span> <FontAwesomeIcon className='text-dark' icon={faChevronRight} /></buttom>
          <hr className='text-light' />
          <a className={`${'px-3 d-flex justify-content-between align-items-center'} ${styles.custom_btn}`} href='#'><span><FontAwesomeIcon className='me-1' icon={faCircleInfo} /> Help</span></a>
          <a className={`${'px-3 mt-2 d-flex justify-content-between align-items-center'} ${styles.custom_btn}`} href='/Fee'><span><FontAwesomeIcon className='me-1' icon={faGear} /> Settings</span></a>
        </div>
        <div className="col-12 col-md-10 ps-4">
          <div className='bg-primary row w-100'>
            <div className="col-12 col-md-7">
              <h4>{resData.fullName}</h4>
              <h4>{resData.branch}</h4>
              <h4>{resData.classAndsection}</h4>
              <h4>{resData.course}</h4>
              <h4>{resData.dob}</h4>
              <h4>{resData.email}</h4>
              <h4>{resData.universityNo}</h4>
            
            </div>
            <div className="col-12 col-md-5">
            <h4>{resData.enrollmentNo}</h4>
            <h4>{resData.number}</h4>
            <h4>{resData.gender}</h4>
            <h4>{resData.guardianName}</h4>
            <h4>{resData.guardianContactNo}</h4>
            <h4>{resData.guardianRelation}</h4>
            </div>
            <div className="row">
              <div className="col-12 col-md-7">
            <h4>{resData.studentId}</h4>
            <h4>{resData.year}</h4>
            <h4>{resData.address}</h4>
            <h4>{resData.busid}</h4>
            <h4>{resData.roomNo}</h4>
            <h4>{resData.course}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile;


