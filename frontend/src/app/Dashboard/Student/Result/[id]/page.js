'use client'
import Link from 'next/link'
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Loader } from '../../../@core/Loader';
import { studentResult } from '../../../Apis/Apihandler';

const page = () => {
  const params = useParams();
  const id = params.id;
  const [loading, setLoading] = useState(false);
  const [resData, setResData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await studentResult(id)
      setResData(res.data);
      console.log(res);
      setLoading(true);
    }
    catch (error) {
      console.log("there is some error while Fetching the data from backend", error)
    }
  }

  return (
    loading ? (
      <div className="row">
        <div style={{minHeight:"50%"}} className="col-12 col-md-6 px-2">
          <Link className='text-decoration-none h-full' href={{ pathname: `/Dashboard/Student/Result/${id}/sessional1`, query: resData }}>
            <div className='custom_bg_color p-3 rounded-4 h-full'>
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
    ) : (
      <Loader />
    )
  )
}

export default page