"use client"
import React, { useEffect, useState } from 'react';
import styles from './Login.module.css';
import './common.css';
import { useRouter } from 'next/navigation';


const Login = () => {

    const route = useRouter();

    const [userId, setUserid] = useState('');
    const [id, setid] = useState();
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    

    let status = false;
    const LoginHandle=(e)=>{
        e.preventDefault();
        
        let id = userId;
        status = true;

        if(true){
            route.push(`/Dashboard/Student/Profile/${id}`)
        }
    }


    return (
        <div className={`${styles.main_body}`}>
            <div className={styles.filter}></div>
            <div className="container d-flex h-100 w-100 justify-content-center align-items-center">
                <div className={`${styles.login_box} ${"rounded-3"}`}>
                    <form onSubmit={LoginHandle} className='d-flex flex-column p-4'>
                        <h1 className='px-2 text-light'>Sign In</h1>
                        <h6 className='px-2 text-light'>Empowering Smarter Education.</h6>
                        <input className={`${styles.custom_inputs} ${"px-3 py-2 m-2 "}`} type='text' id='common_outer' placeholder='Enter Id' onChange={(e) => {
                            setUserid(e.target.value);
                        }} />
                        <select className={`${styles.custom_inputs} ${"px-3 py-2 m-2"}`} onChange={(e) => {
                            setRole(e.target.value);
                        }}>
                            <option value="Select Role">Select Role</option>
                            <option className='text-dark' value="student">Student</option>
                            <option className='text-dark' value="faculty">Faculty</option>
                            <option className='text-dark' value="hod">Hod</option>
                            <option className='text-dark' value="admin">Admin</option>
                        </select>
                        <input className={`${styles.custom_inputs} ${'px-3 py-2 m-2'}`} type='Password' placeholder='Enter Password' onChange={(e) => {
                            setPassword(e.target.value);
                        }} />
                        <a className={`${styles.custom_anchor} ${'text-light px-3 my-1'}`} href='#'><p>Forget Password</p></a>
                        <button className={`${styles.custom_btn} ${'px-3 py-2 mx-2 text-light'}`}>Login In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
