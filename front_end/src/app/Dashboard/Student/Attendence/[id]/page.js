'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'next/navigation';
import { Chart } from 'primereact/chart';
import 'primereact/resources/themes/lara-light-indigo/theme.css'; // Theme
import 'primereact/resources/primereact.min.css'; // Core CSS
import 'primeicons/primeicons.css'; // Icons

const page = () => {
  const params = useParams();
  const id = params.id;
  const [loading2, setLoading2] = useState(false);
  const [resAttendence, setAttendence] = useState(null);
  // fettching the data for attendence

  const fetchAttendence = async () => {
    try {
      await axios.get(`https://college-erp-prod-backend-production.up.railway.app/dashboard/student/attendence/${id}`).then((res) => {
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

  useEffect(() => {
    fetchAttendence();
  }, [])

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
      activateChart();
    } else {
      day31 = false;
      activateChart();
    }
  }


  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});

  // for pie chart
  const activateChart = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const data = {
      labels: ['Present', 'Absent'],
      datasets: [
        {
          data: [present,3],
          backgroundColor: [
            documentStyle.getPropertyValue('--green-500'),
            documentStyle.getPropertyValue('--red-500'),
          ],
          hoverBackgroundColor: [
            documentStyle.getPropertyValue('--blue-400'),
            documentStyle.getPropertyValue('--yellow-400'),
          ]
        }
      ]
    };
    const options = {
      cutout: '60%'
    };

    setChartData(data);
    setChartOptions(options);
  };



  if (loading2) return (
    <div className="row">
      <div className={`${"col-12 col-md-7"}`}>
        <div className={`${"custom_bg_color"} ${"col-12 col-md-7 w-100 p-3 rounded-4"}`}>
          <h4 className='text-light pb-1' style={{ borderBottom: "1px solid #5B5D5C" }}>Attendence</h4>
          <div className="row p-1">
            <div className="col-9">
              <div className="row">
                <div style={{ height: "34px", width: "34px", }} className={`${day1 ? "present" : "absent"} ${'p-2 m-2'}`} >1</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day2 ? "present" : "absent"} ${'p-2 m-2'}`} >2</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day3 ? "present" : "absent"} ${'p-2 m-2'}`} >3</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day4 ? "present" : "absent"} ${'p-2 m-2'}`} >4</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day5 ? "present" : "absent"} ${'p-2 m-2'}`} >5</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day6 ? "present" : "absent"} ${'p-2 m-2'}`} >6</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day7 ? "present" : "absent"} ${'p-2 m-2'}`} >7</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day8 ? "present" : "absent"} ${'p-2 m-2'}`} >8</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day9 ? "present" : "absent"} ${'p-2 m-2'}`} >9</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day10 ? "present" : "absent"} ${'p-2 m-2'}`} >10</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day11 ? "present" : "absent"} ${'p-2 m-2'}`} >11</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day12 ? "present" : "absent"} ${'p-2 m-2'}`} >12</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day13 ? "present" : "absent"} ${'p-2 m-2'}`} >13</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day14 ? "present" : "absent"} ${'p-2 m-2'}`} >14</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day15 ? "present" : "absent"} ${'p-2 m-2'}`} >15</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day16 ? "present" : "absent"} ${'p-2 m-2'}`} >16</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day17 ? "present" : "absent"} ${'p-2 m-2'}`} >17</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day18 ? "present" : "absent"} ${'p-2 m-2'}`} >18</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day19 ? "present" : "absent"} ${'p-2 m-2'}`} >19</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day20 ? "present" : "absent"} ${'p-2 m-2'}`} >20</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day21 ? "present" : "absent"} ${'p-2 m-2'}`} >21</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day22 ? "present" : "absent"} ${'p-2 m-2'}`} >22</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day23 ? "present" : "absent"} ${'p-2 m-2'}`} >23</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day24 ? "present" : "absent"} ${'p-2 m-2'}`} >24</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day25 ? "present" : "absent"} ${'p-2 m-2'}`} >25</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day26 ? "present" : "absent"} ${'p-2 m-2'}`} >26</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day27 ? "present" : "absent"} ${'p-2 m-2'}`} >27</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day28 ? "present" : "absent"} ${'p-2 m-2'}`} >28</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day29 ? "present" : "absent"} ${'p-2 m-2'}`} >29</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day30 ? "present" : "absent"} ${'p-2 m-2'}`} >30</div>
                <div style={{ height: "34px", width: "34px", }} className={`${day31 ? "present" : "absent"} ${'p-2 m-2'}`} >31</div>
              </div>
            </div>
            <div className="col-3">
              <h6><span className={"label"}>Total Days : </span>31</h6>
              <h6><span className={"label"}>Present : </span>{[present]}</h6>
              <h6><span className={"label"}>Absent : </span>{31 - present}</h6>
              <h6><span className={"label"}>Percentage : </span>{parseInt((present / 31) * 100)}%</h6>
            </div>
          </div>
        </div>
      </div>
      <div className='col-12 col-md-5'>
        <div className='custom_bg_color p-3 rounded-4'>
          <h4 className='text-light pb-1' style={{ borderBottom: "1px solid #5B5D5C" }}>Attendence Chart</h4>
          <div className="card flex justify-content-center">
            <Chart type="doughnut" data={chartData} options={chartOptions} className="w-full md:w-30rem" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default page