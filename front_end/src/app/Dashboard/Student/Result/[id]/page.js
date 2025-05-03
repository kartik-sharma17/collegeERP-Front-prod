'use client'
import axios from 'axios';
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const page = () => {
  const params = useParams();
  const id = params.id;

  const [loading, setLoading] = useState(false);
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);


  // fettching the data for profile 
  const fetchData = async () => {
    try {
      await axios.get(`https://college-erp-prod-backend-production.up.railway.app/dashboard/student/result/${id}`).then((res) => {
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
    <>
      <div className="row">
        <div className="col-12 col-md-6 px-2">
          <Link className='text-decoration-none' href={{ pathname: `/Dashboard/Student/Result/${id}/sessional1`, query: resData }}>
            <div className='custom_bg_color p-3 rounded-4'>
              <h4 className='text-light pb-1' style={{ borderBottom: "1px solid #5B5D5C" }}>Sessional 1</h4>
              <h6 className='text-light'><span className={"label"}>Date : </span> 31-10-24</h6>
            </div>
          </Link>
        </div>
        <div className="col-12 col-md-6 px-2">
          <Link className='text-decoration-none' href={{ pathname: `/Dashboard/Student/Result/${id}/sessional2`, query: resData }}>
            <div className='custom_bg_color p-3 rounded-4'>
              <h4 className='text-light pb-1' style={{ borderBottom: "1px solid #5B5D5C" }}>Sessional 2</h4>
              <h6 className='text-light'><span className={"label"}>Date : </span> 28-12-24</h6>
            </div>
          </Link>
        </div>
        <div className="col-12 col-md-6 px-2 py-2">
          <Link className='text-decoration-none' href={{ pathname: `/Dashboard/Student/Result/${id}/sessional3`, query: resData }}>
            <div className='custom_bg_color p-3 rounded-4'>
              <h4 className='text-light pb-1' style={{ borderBottom: "1px solid #5B5D5C" }}>Sessional 3</h4>
              <h6 className='text-light'><span className={"label"}>Date : </span> 02-02-25</h6>
            </div>
          </Link>
        </div>
        <div className="col-12 col-md-6 px-2 py-2">
          <Link className='text-decoration-none' href={{ pathname: `/Dashboard/Student/Result/${id}/put`, query: resData }}>
            <div className='custom_bg_color p-3 rounded-4'>
              <h4 className='text-light pb-1' style={{ borderBottom: "1px solid #5B5D5C" }}>PUT</h4>
              <h6 className='text-light'><span className={"label"}>Date : </span> 03-04-25</h6>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default page