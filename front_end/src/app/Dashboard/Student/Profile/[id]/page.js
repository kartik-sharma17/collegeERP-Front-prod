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
  const [resAttendence, setAttendence] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const params = useParams();
  const id = params.id;

  const route = useRouter();


  useEffect(() => {
    fetchData();
    fetchAttendence();
  }, []);

  const fetchData = async () => {
    try {
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
  const fetchAttendence = async () => {
    try {
      await axios.get(`http://localhost:8080/dashboard/student/attendence/${id}`).then((res) => {
        setAttendence(res.data);
        console.log(res);
        setLoading2(true);
        // const objLength = Object.keys(res.data).length;
        // console.log(objLength);
      })
    }
    catch (error) {
      console.log("there is some error while Fetching the Attendence from backend", error)
    }
  }



  if (loading && loading2) return (
    <div className={`${styles.body} ${'container-fluid'}`}>
      <div className={`${styles.nav_bar} ${'w-100'}`}> <h1>navbar</h1></div>
      <div className={`${styles.main} ${'row mt-2 px-3'}`}>
        <div className={`${styles.side_bar} ${'col-12 px-3 col-md-2 py-4 d-flex flex-column rounded-4'}`}>
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
        <div className="col-12 col-md-10 ps-4 custom_css">
          <div className={`${"row w-100 text-light"}`}>
            <div className={` ${"col-12 col-md-7 pe-2 ps-0"}`}>
              <div style={{ minHeight: "100%" }} className={`${styles.custom_bg_color} ${"p-3 rounded-4"}`}>
                <h4 style={{ borderBottom: "1px solid #5B5D5C" }}>Basic Details</h4>
                
                <h6><span className={styles.label}>Name :</span> {resData.fullName}</h6>
                <h6><span className={styles.label}>Branch :</span>{resData.branch}</h6> 
                <h6><span className={styles.label}>Class & Section : </span>{resData.classAndsection}</h6>
                <h6><span className={styles.label}>Course : </span>{resData.course}</h6>
                <h6><span className={styles.label}>DOB : </span>{resData.dob}</h6>
                <h6><span className={styles.label}>Email : </span>{resData.email}</h6>
                <h6><span className={styles.label}>University Rollno : </span>{resData.universityNo}</h6>
              </div>
            </div>
            <div className='col-12 col-md-5 ps-0'>
              <div style={{ minHeight: "100%" }} className={`${styles.custom_bg_color} ${"p-3 rounded-4"}`}>
                <h4 style={{ borderBottom: "1px solid #5B5D5C" }}>Advance Details</h4>
                <h6><span className={styles.label}>Enrollment No : </span>{resData.enrollmentNo}</h6>
                <h6><span className={styles.label}>Phone No : </span>{resData.number}</h6>
                <h6><span className={styles.label}>Gender : </span>{resData.gender}</h6>
                <h6><span className={styles.label}>Guardian Name : </span>{resData.guardianName}</h6>
                <h6><span className={styles.label}>Guardian No : </span>{resData.guardianContactNo}</h6>
                <h6><span className={styles.label}>Student ID : </span>{resData.studentId}</h6>
                <h6><span className={styles.label}>Year : </span>{resData.year}</h6>
                <h6><span className={styles.label}>Address : </span>{resData.address}</h6>
              </div>
            </div>
            <div className="row">
              <div className={`${"col-12 col-md-7 w-100 pt-2 ps-0"}`}>
                <div className={`${styles.custom_bg_color} ${"col-12 col-md-7 w-100 p-3 rounded-4"}`}>
                  <h4 style={{ borderBottom: "1px solid #5B5D5C" }}>Attendence</h4>
                  <div className="row p-1">
                    <div className="col-9">
                      <div className="row">
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                        <div style={{ height: "34px", width: "34px", backgroundColor: "green" }} className='p-2 m-2' >P</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentProfile;


