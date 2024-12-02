import React from 'react'
import styles from './Login.module.css'

export const Login = () => {
    return (
        <div className={`${styles.main_body}`}>
            <div className="container d-flex h-100 w-100 justify-content-center align-items-center">
                <div className={`${styles.login_box} ${"rounded-3"}`}>
                    <form className='d-flex flex-column p-4'>
                        <h1 className='px-2 text-light'>Sign In</h1>
                        <h6 className='px-2 text-light'>Empowering Smarter Education.</h6>
                        <input className={`${styles.custom_inputs} ${"px-3 py-2 m-2 text-light"}`} type='text' placeholder='Enter Id' />
                        <select className={`${styles.custom_inputs} ${"px-3 py-2 m-2"}`}>
                            <option value="Select Role">Select Role</option>
                            <option className='text-dark' value="Select Role">Student</option>
                            <option className='text-dark' value="Select Role">Faculty</option>
                            <option className='text-dark' value="Select Role">Hod</option>
                            <option className='text-dark' value="Select Role">Admin</option>
                        </select>
                        <input className={`${styles.custom_inputs} ${'px-3 py-2 m-2'}`} type='Password' placeholder='Enter Password' />
                        <a className='text-light px-2 my-2' href='#'>Forget Password</a>
                        <button className={`${styles.custom_btn} ${'px-3 py-2 m-2 text-light'}`}>Login In</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
