'use client'
import React, { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons
import { getStudentattendenceList } from '@/app/Dashboard/Apis/Apihandler';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { updateStudentattendence } from '@/app/Dashboard/Apis/Apihandler';

const page = () => {
  // for table 
  const [loading, setLoading] = useState(false);
  const [attendence, setAttendence] = useState([]);
  const [tableData, setTabledata] = useState([]);
  const [day, setDay] = useState("Select Day");
  const route = useRouter();
  const param = useParams();

  const id = param.id;
  let section;
  // getting the section


  useEffect(() => {
    section = localStorage.getItem("section");
    setTimeout(() => {
      if (section == null) {
        route.push(`/Dashboard/Faculty/Profile/${id}`)
      }
    }, 1000)
  }, [])

  const getStudentlist = async () => {
    const res = await getStudentattendenceList(section);
    setTabledata(res.data);
    console.log(res.data);
    setLoading(true)
  }

  useEffect(() => {
    getStudentlist()
  }, []);

  const updateAttendence = (rowData) => {
    if (attendence.some(item => item.id === rowData.studentId)) return (
      <button onClick={() => {
        setAttendence(pre => pre.filter(pre => pre.id != rowData.studentId))
        console.log("update aatendence")
      }}>Mark A</button>
    )
    return (
      <button onClick={() => {
        if (day !== "Select Day") {
          setAttendence(pre => [...pre, { id: rowData.studentId, day: parseInt(day), attendence: 1 }])
          console.log("update aatendence")
        } else {
          alert("select the day first");
        }
      }}>Mark P</button>
    )
  }

  useEffect(() => {
    setAttendence([]);
  }, [day])

  const handleUpdateAttence = async (e) => {
    e.preventDefault();

    if (day !== "Select Day")
      if (attendence.length !== 0) {
        try {
          let response = await updateStudentattendence(attendence)
          console.log(response);
          alert("updated successfully")
        }
        catch (e) {
          console.log(e)
          alert("there is some error ", e)
        }
      }
      else {
        alert("Please update the attendence first")
      }
    else {
      alert("please select the day first")
    }
  }


  if (loading) return (
    <div className="row">
      <div className="col-12 px-2">
        <div className={`${"custom_bg_color"} ${"p-3 rounded-4"}`}>
          <div className="col-12 d-flex align-items-center justify-content-between">
            <h4 className='text-light pb-1 text-uppercase' style={{ borderBottom: "1px solid #5B5D5C" }}>Attendence Update</h4>
            <select onChange={(e) => { setDay(e.target.value) }} name="day" id="day">
              <option value="Select Day">Select Day</option>
              {[...Array(31)].map((_, index) => (
                <option key={index} value={index + 1}>
                  Day {index + 1}
                </option>
              ))}
            </select>
          </div>
          <DataTable value={tableData} paginator rows={5} dataKey="id" emptyMessage="No customers found.">
            <Column field="studentId" header="Student ID" />
            <Column field="studentName" header="Student Name" />
            <Column body={updateAttendence} header="Attendence" />
          </DataTable>
          <form onSubmit={handleUpdateAttence}>
            <button>UPDATE ATTENDENCE</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default page