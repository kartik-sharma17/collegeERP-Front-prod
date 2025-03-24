"use client";

import React, { useEffect, useState } from 'react'
import '../../../Css/Common.scss'
import { useParams } from 'next/navigation';
import axios from 'axios';
// import profilepic from '../../../../images/profilepic.jpg';
import Sidebar from '../../commonConponent/Sidebar';
export const StudentProfile = () => {


  const [resData, setResData] = useState(null);
  const [loading, setLoading] = useState(false);


  const params = useParams();
  const id = params.id;


  useEffect(() => {
    fetchData();
  }, []);


  // fettching the data for profile 
  const fetchData = async () => {
    try {
      await axios.get(`https://college-erp-prod-backend-production.up.railway.app/dashboard/student/profile/${id}`).then((res) => {
        setResData(res.data);
        console.log(res);
        setLoading(true);
      })
    }
    catch (error) {
      console.log("there is some error while Fetching the data from backend", error)
    }
  }

  if (loading) return (
    
      <div className={`${"main"} ${'row m-0'}`}>
        <div className="col-12 col-md-10">
          <div className={`${"row w-100 text-light"}`}>
            <div className={` ${"col-12 col-md-7 pe-2 ps-0"}`}>
              <div style={{ minHeight: "100%" }} className={`${"custom_bg_color"} ${"p-3 rounded-4"}`}>
                <h4 style={{ borderBottom: "1px solid #5B5D5C" }}>Basic Details</h4>

                <h6><span className={"label"}>Name :</span> {resData.fullName}</h6>
                <h6><span className={"label"}>Branch :</span>{resData.branch}</h6>
                <h6><span className={"label"}>Class & Section : </span>{resData.classAndsection}</h6>
                <h6><span className={"label"}>Course : </span>{resData.course}</h6>
                <h6><span className={"label"}>DOB : </span>{resData.dob}</h6>
                <h6><span className={"label"}>Email : </span>{resData.email}</h6>
                <h6><span className={"label"}>University Rollno : </span>{resData.universityNo}</h6>
              </div>
            </div>
            <div className='col-12 col-md-5 ps-0'>
              <div style={{ minHeight: "100%" }} className={`${"custom_bg_color"} ${"p-3 rounded-4"}`}>
                <h4 style={{ borderBottom: "1px solid #5B5D5C" }}>Advance Details</h4>
                <h6><span className={"label"}>Enrollment No : </span>{resData.enrollmentNo}</h6>
                <h6><span className={"label"}>Phone No : </span>{resData.number}</h6>
                <h6><span className={"label"}>Gender : </span>{resData.gender}</h6>
                <h6><span className={"label"}>Guardian Name : </span>{resData.guardianName}</h6>
                <h6><span className={"label"}>Guardian No : </span>{resData.guardianContactNo}</h6>
                <h6><span className={"label"}>Student ID : </span>{resData.studentId}</h6>
                <h6><span className={"label"}>Year : </span>{resData.year}</h6>
                <h6><span className={"label"}>Address : </span>{resData.address}</h6>
              </div>
            </div>

          </div>
        </div>
      </div>
    
  )
}

export default StudentProfile;


