"use client";

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import styles from '../../Css/Profile.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faBook, faCalendarWeek, faPenClip, faSquarePollVertical, faSackDollar, faCalendarCheck, faCircleInfo, faGear } from '@fortawesome/free-solid-svg-icons'
import { faUser, faBookmark, faBell } from '@fortawesome/free-regular-svg-icons'
import { useParams } from 'next/navigation';
import axios from 'axios';
import profilepic from '../../../../images/profilepic.jpg';

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


  // fettching the data for profile 
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


  // fettching the data for attendence
  const fetchAttendence = async () => {
    try {
      await axios.get(`http://localhost:8080/dashboard/student/attendence/${id}`).then((res) => {
        setAttendence(res.data);
        console.log(res);
        setLoading2(true);
        findAttendencePercentage();
        // const objLength = Object.keys(res.data).length;
        // console.log(objLength);
      })
    }
    catch (error) {
      console.log("there is some error while Fetching the Attendence from backend", error)
    }
  }

  var present = 0;


  var day1;
  var day2;
  var day3;
  var day4;
  var day5;
  var day6;
  var day7;
  var day8;
  var day9;
  var day10;
  var day11;
  var day12;
  var day13;
  var day14;
  var day15;
  var day16;
  var day17;
  var day18;
  var day19;
  var day20;
  var day21;
  var day22;
  var day23;
  var day24;
  var day25;
  var day26;
  var day27;
  var day28;
  var day29;
  var day30;
  var day31;


  if (loading2) {
    if (resAttendence.d1 == 1) {
      day1 = true;
      present++;
    } else {
      day1 = false;
    }

    if (resAttendence.d2 == 1) {
      day2 = true;
      present++;
    } else {
      day2 = false;
    }

    if (resAttendence.d3 == 1) {
      day3 = true;
      present++;
    } else {
      day3 = false;
    }

    if (resAttendence.d4 == 1) {
      day4 = true;
      present++;
    } else {
      day4 = false;
    }

    if (resAttendence.d5 == 1) {
      day5 = true;
      present++;
    } else {
      day5 = false;
    }

    if (resAttendence.d6 == 1) {
      day6 = true;
      present++;
    } else {
      day6 = false;
    }

    if (resAttendence.d7 == 1) {
      day7 = true;
      present++;
    } else {
      day7 = false;
    }

    if (resAttendence.d8 == 1) {
      day8 = true;
      present++;
    } else {
      day8 = false;
    }

    if (resAttendence.d9 == 1) {
      day9 = true;
      present++;
    } else {
      day9 = false;
    }

    if (resAttendence.d10 == 1) {
      day10 = true;
      present++;
    } else {
      day10 = false;
    }

    if (resAttendence.d11 == 1) {
      day11 = true;
      present++;
    } else {
      day11 = false;
    }

    if (resAttendence.d12 == 1) {
      day12 = true;
      present++;
    } else {
      day12 = false;
    }

    if (resAttendence.d13 == 1) {
      day13 = true;
      present++;
    } else {
      day13 = false;
    }

    if (resAttendence.d14 == 1) {
      day14 = true;
      present++;
    } else {
      day14 = false;
    }

    if (resAttendence.d15 == 1) {
      day15 = true;
      present++;
    } else {
      day15 = false;
    }

    if (resAttendence.d16 == 1) {
      day16 = true;
      present++;
    } else {
      day16 = false;
    }

    if (resAttendence.d17 == 1) {
      day17 = true;
      present++;
    } else {
      day17 = false;
    }

    if (resAttendence.d18 == 1) {
      day18 = true;
      present++;
    } else {
      day18 = false;
    }

    if (resAttendence.d19 == 1) {
      day19 = true;
      present++;
    } else {
      day19 = false;
    }

    if (resAttendence.d20 == 1) {
      day20 = true;
      present++;
    } else {
      day20 = false;
    }

    if (resAttendence.d21 == 1) {
      day21 = true;
      present++;
    } else {
      day21 = false;
    }

    if (resAttendence.d22 == 1) {
      day22 = true;
      present++;
    } else {
      day22 = false;
    }

    if (resAttendence.d23 == 1) {
      day23 = true;
      present++;
    } else {
      day23 = false;
    }

    if (resAttendence.d24 == 1) {
      day24 = true;
      present++;
    } else {
      day24 = false;
    }

    if (resAttendence.d25 == 1) {
      day25 = true;
      present++;
    } else {
      day25 = false;
    }

    if (resAttendence.d26 == 1) {
      day26 = true;
      present++;
    } else {
      day26 = false;
    }

    if (resAttendence.d27 == 1) {
      day27 = true;
      present++;
    } else {
      day27 = false;
    }

    if (resAttendence.d28 == 1) {
      day28 = true;
      present++;
    } else {
      day28 = false;
    }

    if (resAttendence.d29 == 1) {
      day29 = true;
      present++;
    } else {
      day29 = false;
    }

    if (resAttendence.d30 == 1) {
      day30 = true;
      present++;
    } else {
      day30 = false;
    }

    if (resAttendence.d31 == 1) {
      day31 = true;
      present++;
    } else {
      day31 = false;
    }
  }



  if (loading && loading2) return (
    <div className={`${styles.body} ${'container-fluid vh-100'}`}>
      <div className={`${styles.main} ${'row px-3'}`}>
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
          <div className={`${styles.nav_bar} ${'w-100 p-2 d-flex justify-content-between align-items-center'}`}>
            <div className='d-flex'>
              <img className='rounded-circle img-fluid' src={profilepic} alt="profile pic" />
              <div>
                <h6 className='text-white'>{resData.fullName}</h6>
                <p><span className={styles.label}>Hello, Welcome Back!</span></p>
              </div>
            </div>
            <div>
              <FontAwesomeIcon className='text-white' icon={faBell} />
            </div>
          </div>
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
                        <div style={{ height: "34px", width: "34px", }} className={`${day1 ? styles.present : styles.absent} ${'p-2 m-2'}`} >1</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day2 ? styles.present : styles.absent} ${'p-2 m-2'}`} >2</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day3 ? styles.present : styles.absent} ${'p-2 m-2'}`} >3</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day4 ? styles.present : styles.absent} ${'p-2 m-2'}`} >4</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day5 ? styles.present : styles.absent} ${'p-2 m-2'}`} >5</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day6 ? styles.present : styles.absent} ${'p-2 m-2'}`} >6</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day7 ? styles.present : styles.absent} ${'p-2 m-2'}`} >7</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day8 ? styles.present : styles.absent} ${'p-2 m-2'}`} >8</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day9 ? styles.present : styles.absent} ${'p-2 m-2'}`} >9</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day10 ? styles.present : styles.absent} ${'p-2 m-2'}`} >10</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day11 ? styles.present : styles.absent} ${'p-2 m-2'}`} >11</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day12 ? styles.present : styles.absent} ${'p-2 m-2'}`} >12</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day13 ? styles.present : styles.absent} ${'p-2 m-2'}`} >13</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day14 ? styles.present : styles.absent} ${'p-2 m-2'}`} >14</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day15 ? styles.present : styles.absent} ${'p-2 m-2'}`} >15</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day16 ? styles.present : styles.absent} ${'p-2 m-2'}`} >16</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day17 ? styles.present : styles.absent} ${'p-2 m-2'}`} >17</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day18 ? styles.present : styles.absent} ${'p-2 m-2'}`} >18</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day19 ? styles.present : styles.absent} ${'p-2 m-2'}`} >19</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day20 ? styles.present : styles.absent} ${'p-2 m-2'}`} >20</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day21 ? styles.present : styles.absent} ${'p-2 m-2'}`} >21</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day22 ? styles.present : styles.absent} ${'p-2 m-2'}`} >22</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day23 ? styles.present : styles.absent} ${'p-2 m-2'}`} >23</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day24 ? styles.present : styles.absent} ${'p-2 m-2'}`} >24</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day25 ? styles.present : styles.absent} ${'p-2 m-2'}`} >25</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day26 ? styles.present : styles.absent} ${'p-2 m-2'}`} >26</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day27 ? styles.present : styles.absent} ${'p-2 m-2'}`} >27</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day28 ? styles.present : styles.absent} ${'p-2 m-2'}`} >28</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day29 ? styles.present : styles.absent} ${'p-2 m-2'}`} >29</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day30 ? styles.present : styles.absent} ${'p-2 m-2'}`} >30</div>
                        <div style={{ height: "34px", width: "34px", }} className={`${day31 ? styles.present : styles.absent} ${'p-2 m-2'}`} >31</div>
                      </div>
                    </div>
                    <div className="col-3">
                      <h6><span className={styles.label}>Total Days : </span>31</h6>
                      <h6><span className={styles.label}>Present : </span>{[present]}</h6>
                      <h6><span className={styles.label}>Absent : </span>{31 - present}</h6>
                      <h6><span className={styles.label}>Percentage : </span>{parseInt((present / 31) * 100)}%</h6>
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


