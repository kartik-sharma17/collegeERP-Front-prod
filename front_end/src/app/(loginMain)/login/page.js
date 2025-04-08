"use client"
import React, { useEffect, useState } from 'react';
import './Login.scss'
import './common.css';
import { useRouter } from 'next/navigation';


const Login = () => {

    const route = useRouter();

    const [userId, setUserid] = useState('');
    const [id, setid] = useState();
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    

    const [loading,setLoading] = useState(false);
    

    let status = false;
    const LoginHandle=(e)=>{
        e.preventDefault();
        
        let id = userId;
        status = true;
        setLoading(true);
        if(true && role == "student"){
            route.push(`/Dashboard/Student/Profile/${id}`)
        }
        else if(true && role == "faculty"){
            route.push(`/Dashboard/Faculty/Profile/${id}`)
        }
        else{
            alert("please select the role")
        }

    }



    return (
        <div className={`${"main_body"}`}>
            <div className={"filter"}></div>
            <div className="container d-flex h-100 w-100 justify-content-center align-items-center">
                <div className={`${"login_box"} ${"rounded-3"}`}>
                    <form onSubmit={LoginHandle} className='d-flex flex-column p-4'>
                        <h1 className='px-2 text-light'>Sign In</h1>
                        <h6 className='px-2 text-light'>Empowering Smarter Education.</h6>
                        <input className={`${"custom_inputs"} ${"px-3 py-2 m-2 "}`} type='text' id='common_outer' placeholder='Enter Id' onChange={(e) => {
                            setUserid(e.target.value);
                        }} />
                        <select className={`${"custom_inputs"} ${"px-3 py-2 m-2"}`} onChange={(e) => {
                            setRole(e.target.value);
                        }}>
                            <option value="Select Role">Select Role</option>
                            <option className='text-dark' value="student">Student</option>
                            <option className='text-dark' value="faculty">Faculty</option>
                            <option className='text-dark' value="hod">Hod</option>
                            <option className='text-dark' value="admin">Admin</option>
                        </select>
                        <input className={`${"custom_inputs"} ${'px-3 py-2 m-2'}`} type='Password' placeholder='Enter Password' onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        <a className={`${"custom_anchor"} ${'text-light px-3 my-1'}`} href='#'><p>Forget Password</p></a>
                        <button className={`${"custom_btn"} ${'px-3 py-2 mx-2 text-light'}`}>{loading? "Login...":"Login"}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
