import React, { useState } from 'react'
import styles from './Css/Login.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


export const Login = () => {

    
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");

    const submit = async (e)=>{

        e.preventDefault();
        let data = {'username':parseInt(username),'password':password}

        try{
            const response = await axios.post('http://localhost:8080/login',data);
            if(response.data == true){
                alert("login successfully");
            }
            else{
                alert("Wrong id or password");
            }


            //     const response = await fetch('http://localhost:8080/login' , {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         },
            //     body: JSON.stringify(data)
            // })

            // console.log("completed");
            // console.log(response);

        }
        catch(e){
            alert("Something went wrong",e);
        }

    }


    return (

        <div className={`${styles.body} ${"h-screen"} ${"w-screen"} ${"flex"} ${"justify-center"} ${"items-center"}`}>
            <div className={`${styles.container} ${styles.height90} ${"w-4/5"} ${"rounded-3xl"} ${"flex"} ${"items-center"} ${"p-0"}`}>
                <div className={`${styles.content} ${"w-1/3"} ${styles.height90} ${"rounded-3xl"} ${"p-4"} ${" ml-10 "}`}>
                    <form action="" onSubmit={submit} method="post" className={`${"flex"} ${"flex-col"} ${"h-full"} ${"w-full"} ${"items-center"}`}>
                        <div className={styles.heading}>
                            <h4>College ERP |<span className={styles.message}> Manage Student Records</span></h4>
                            <h1>Over 1000+ Student <br /> Register With Us</h1>
                            <h4>Currently Only Support Web Only</h4>
                        </div>
                        <input type="number" name="username" placeholder="Enter username here : "
                            className={`${styles.inp} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`} 
                            onChange={(e)=>{
                                setUsername(e.target.value)
                            }}/>
                        <input type="password" name="password" placeholder="Enter password here : "
                            className={`${styles.inp} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`} 
                            onChange={(e)=>{
                                setPassword(e.target.value)
                            }}/>
                        <div class="flex items-center mb-4">
                            <input type="checkbox" value="agree" />
                            <label className={"ml-1"}>I agree to platform accessing my <span className={styles.info}>Information</span></label>
                        </div>
                        <button className={styles.btn}>LOGIN</button>

                        <h5>No Account Yet ? <a href="register.jsp"> Registered</a></h5>
                    </form>
                </div>
                <div className={`${styles.img} ${"w-6/12"} ${"h-full"} ${"bg-blue-500"}`}>
                    <a className={styles.back_to_home} href="index.jsp"><FontAwesomeIcon icon={faArrowLeft} /> Back To Home</a>
                </div>
            </div>

        </div>

    )
}
