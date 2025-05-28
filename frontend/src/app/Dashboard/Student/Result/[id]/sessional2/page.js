"use client"
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Chart } from 'primereact/chart';

const page = () => {
  const [chartData, setChartData] = useState({});
  const [chartOptions, setChartOptions] = useState({});


  const data = useSearchParams();
  var totalMarks = parseInt(data.get("s2s1Marks")) + parseInt(data.get("s2s2Marks")) + parseInt(data.get("s2s3Marks")) + parseInt(data.get("s2s4Marks")) + parseInt(data.get("s2s5Marks")) + parseInt(data.get("s1s6Marks"));

  useEffect(() => {
    const data2 = {
      labels: [data.get('s2s1'), data.get('s2s2'), data.get('s2s3'), data.get('s2s4'), data.get('s2s5'),data.get('s2s6')],
      datasets: [
        {
          label: 'Sessional 2 Marks',
          data: [data.get('s2s1Marks'), data.get('s2s2Marks'), data.get('s2s3Marks'), data.get('s2s4Marks'), data.get('s2s5Marks'),data.get('s2s6Marks')],
          backgroundColor: [
            'rgba(255, 159, 64, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(12, 232, 214, 0.2)'
          ],
          borderColor: [
            'rgb(255, 159, 64)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(12, 232, 214)'
          ],
          borderWidth: 1
        }
      ]
    };
    const options = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

    setChartData(data2);
    setChartOptions(options);
  }, []);


  return (
    <div className='row'>
      <div className="col-12 col-md-6 px-2">
        <div className='custom_bg_color p-3 rounded-3'>
          <h4 className='text-light pb-1' style={{ borderBottom: "1px solid #5B5D5C" }}>Sessional 2 Result</h4>
          <div className="row">
            <div className="col-6">
              <h6 className='text-light'><span className={"label"}>{data.get('s2s1')} : </span> {data.get('s2s1Marks')}</h6>
              <h6 className='text-light'><span className={"label"}>{data.get('s2s2')} : </span> {data.get('s2s2Marks')}</h6>
              <h6 className='text-light'><span className={"label"}>{data.get('s2s3')} : </span> {data.get('s2s3Marks')}</h6>
            </div>
            <div className="col-6">
              <h6 className='text-light'><span className={"label"}>{data.get('s2s4')} : </span> {data.get('s2s4Marks')}</h6>
              <h6 className='text-light'><span className={"label"}>{data.get('s2s5')} : </span> {data.get('s2s5Marks')}</h6>
              <h6 className='text-light'><span className={"label"}>{data.get('s1s6')} : </span> {data.get('s1s6Marks')}</h6>
            </div>
          </div>
        </div>
        <div className='custom_bg_color p-3 mt-3 rounded-3'>
          <h4 className='text-light pb-1' style={{ borderBottom: "1px solid #5B5D5C" }}>Result stats</h4>
          <div className="row">
            <div className="col-6">
              <h6 className='text-light'><span className={"label"}>Total Marks : </span> 600</h6>
              <h6 className='text-light'><span className={"label"}>Obtained Marks : </span> {totalMarks}</h6>
              <h6 className='text-light'><span className={"label"}>Percentage : </span>  {((totalMarks / 600) * 100).toFixed(2)}%</h6>
            </div>
            <div className="col-6">
              <h6 className='text-light'><span className={"label"}>CGPA : </span> {(((totalMarks / 600) * 100) / 10).toFixed(1)}</h6>
            </div>
          </div>

        </div>
      </div>
      <div className="col-12 col-md-6 px-2">
        <div className='custom_bg_color p-3 rounded-3'>
          <h4 className='text-light pb-1' style={{ borderBottom: "1px solid #5B5D5C" }}>Marks Chart</h4>
          <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  )
}

export default page