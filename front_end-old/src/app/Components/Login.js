import React, { useEffect, useState } from 'react';
import styles from './Login.module.css';
import './Outer-common.css';
import { Link, Links, useNavigate } from 'react-router-dom';
import { StudentDashboard } from './Students/Components/StudentDashboard';

export const Login = () => {

    const [userId,setUserid] = useState('');
    const [password,setPassword] = useState('');
    const [role,setRole] = useState('');

    const navigate = useNavigate();

    const loginHandle = ()=>{
        navigate('/Student');
    }


    return (
        <div className={`${styles.main_body}`}>
            <div className={styles.filter}></div>
            <div className="container d-flex h-100 w-100 justify-content-center align-items-center">
                <div className={`${styles.login_box} ${"rounded-3"}`}>
                    <form action={<StudentDashboard/>} className='d-flex flex-column p-4'>
                        <h1 className='px-2 text-light'>Sign In</h1>
                        <h6 className='px-2 text-light'>Empowering Smarter Education.</h6>
                        <input className={`${styles.custom_inputs} ${"px-3 py-2 m-2 "}`} type='text' id='common_outer' placeholder='Enter Id' onChange={(e)=>{
                            setUserid(e.target.value);
                        }} />
                        <select className={`${styles.custom_inputs} ${"px-3 py-2 m-2"}`} onChange={(e)=>{
                            setRole(e.target.value);
                        }}>
                            <option value="Select Role">Select Role</option>
                            <option className='text-dark' value="student">Student</option>
                            <option className='text-dark' value="faculty">Faculty</option>
                            <option className='text-dark' value="hod">Hod</option>
                            <option className='text-dark' value="admin">Admin</option>
                        </select>
                        <input className={`${styles.custom_inputs} ${'px-3 py-2 m-2'}`} type='Password' placeholder='Enter Password'onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>
                        <a className={`${styles.custom_anchor} ${'text-light px-3 my-1'}`} href='#'><p>Forget Password</p></a>
                        <button className={`${styles.custom_btn} ${'px-3 py-2 mx-2 text-light'}`}>Login In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
