import React, { useRef, useState } from 'react'
import styles from './Css/Registration.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { type } from '@testing-library/user-event/dist/type'
import matchers from '@testing-library/jest-dom/matchers'


export const Registration = () => {


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submit = async (e) => {

        e.preventDefault();
        let data = { 'username': parseInt(username), 'password': password }

        try {
            const response = await axios.post('http://localhost:8080/login', data);
            if (response.data == true) {
                alert("login successfully");
            }
            else {
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
        catch (e) {
            alert("Something went wrong", e);
        }

    }

    const [selectvalue, setselectvalue] = useState("");

    const getselectvalue = (e) => {
        setselectvalue(e.target.value);
    }


    const verify1 = async (e) => {
        e.preventDefault();

        let request = { 'username': username, 'selectedoption': selectvalue }
        // const response = await axios.post('http://localhost:8080/login',request)

        let response = true;
        type = "student";
        if (response == true && type == "student") {
            studentregister();

        }
        else {
            alert("User ID is already registered")
        }

    }


    // to send the data of student


    const student_registration_form = useRef(null);

    const [dob, setdob] = useState("");
    const [Semester, setsemester] = useState("");
    const [course, setcourse] = useState("");
    const [branch, setbranch] = useState("");
    const [contactnumber, setcontactnumber] = useState("");
    const [universityroll, setuniversityroll] = useState("");
    const [mothernumber, setmothernumber] = useState("");
    const [fathernumber, setfathernumber] = useState("");

    const studentregister = () => {
        student_registration_form.current.style.transform = 'translateX(0px)';
        console.log(dob);
        console.log(Semester);
        console.log(course);
        console.log(branch);
        console.log(contactnumber);
        console.log(universityroll);
        console.log(mothernumber);
        console.log(fathernumber);

    }


    return (

        <div className={`${styles.body} ${"h-screen"} ${"w-screen"} ${"flex"} ${"justify-center"} ${"items-center"}`}>
            <div className={`${styles.container} ${styles.height90} ${"w-4/5"} ${"rounded-3xl"} ${"flex"} ${"items-center"} ${"p-0"}`}>

                <div id={styles.main} className={`${styles.form1} ${"rounded-3xl"} ${"flex"} ${"items-center"} ${"p-0"}`}>

                    <div className={`${styles.content} ${"w-1/3"} ${styles.height90} ${"rounded-3xl"} ${"p-4"} ${" ml-10 "}`}>
                        <form action="" onSubmit={verify1} method="post" className={`${"flex"} ${"flex-col"} ${"h-full"} ${"w-full"} ${"items-center"}`}>
                            <div className={styles.heading}>
                                <h4>College ERP |<span className={styles.message}> Manage Student Records</span></h4>
                                <h1>Over 1000+ Student <br /> Register With Us</h1>
                                <h4>Currently Only Support Web Only</h4>
                            </div>
                            <input type="text" placeholder="Enter ID here : "
                                className={`${styles.inp} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`}
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }} />

                            <select onChange={getselectvalue} value={selectvalue} className={`${styles.inp} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`} >
                                <option value="Select" className={styles.options}>Select an Option</option>
                                <option value="Student" className={styles.options}>Register as Student</option>
                                <option value="Faculy" className={styles.options}>Register as Faculty</option>
                                <option value="HOD" className={styles.options}>Register as HOD</option>
                                <option value="Admin" className={styles.options}>Register as Admin</option>
                            </select>

                            <div class="flex items-center mb-4">
                                <input type="checkbox" value="agree" />
                                <label className={"ml-1"}>I agree to platform accessing my <span className={styles.info}>Information</span></label>
                            </div>
                            <button className={styles.btn}>CONTINUE</button>

                            <h5>Already Register ?<a href="register.jsp"> LOGIN</a></h5>
                        </form>
                    </div>
                    <div className={`${styles.img} ${"w-6/12"} ${"h-full"} ${"bg-blue-500"}`}>
                        <a className={styles.back_to_home} href="index.jsp"><FontAwesomeIcon icon={faArrowLeft} /> Back To Home</a>
                    </div>

                </div>

                {/* for student registration form */}
                <div ref={student_registration_form} id={styles.student_form} className={`${styles.form1} ${"rounded-3xl"} ${"flex"} ${"items-center"} ${"justify-center"} ${"p-0"}`}>

                    <div className={`${styles.content} ${"w-11/12"} ${styles.height90} ${"rounded-3xl"} ${"p-4"}`}>

                        <form action="" onSubmit={studentregister} method="post" className={`${"flex"} ${"flex-col"} ${"h-full"} ${"w-full"} ${"items-center"}`}>
                            <div className={styles.heading}>
                                <h4>College ERP |<span className={styles.message}> Manage Student Records</span></h4>
                            </div>

                            <div className={`${styles.sec} ${"h-full"} ${"w-full"} ${"flex"} ${"justify-between"} `}>

                                <div className={`${styles.sec1} ${"w-3/6"} ${"h-full"} ${"flex"} ${"flex-col"} ${"items-center"}`}>

                                    <input type="text" placeholder="Enter Name : "
                                        className={`${styles.inp2} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`}
                                        readOnly="true" />

                                    <input type="text" placeholder="Enter Date of birth : "
                                        className={`${styles.inp2} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`}
                                        onChange={(e) => {
                                            setdob(e.target.value)
                                        }} />

                                    <input type="text" placeholder="Enter Email ID : "
                                        className={`${styles.inp2} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`}
                                        readOnly="true" />

                                    <input type="text" placeholder="Enter Semester: "
                                        className={`${styles.inp2} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`}
                                        onChange={(e) => {
                                            setsemester(e.target.value)
                                        }} />

                                    <input type="text" placeholder="Enter Course: "
                                        className={`${styles.inp2} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`}
                                        onChange={(e) => {
                                            setcourse(e.target.value)
                                        }} />

                                    <div className={styles.checkbox_container}>
                                        <input type="checkbox" value="agree" />
                                        <label className={"ml-1"}>I agree to platform accessing my <span className={styles.info}>Information</span></label>
                                    </div>


                                </div>

                                <div className={`${styles.sec2} ${"w-3/6"} ${"h-full"} ${"flex"} ${"flex-col"} ${"items-center"}`}>

                                    <input type="text" placeholder="Enter Branch : "
                                        className={`${styles.inp2} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`}
                                        onChange={(e) => {
                                            setbranch(e.target.value)
                                        }} />

                                    <input type="text" placeholder="Enter Contact Number : "
                                        className={`${styles.inp2} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`}
                                        onChange={(e) => {
                                            setcontactnumber(e.target.value)
                                        }} />

                                    <input type="text" placeholder="Enter University roll number : "
                                        className={`${styles.inp2} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`}
                                        onChange={(e) => {
                                            setuniversityroll(e.target.value)
                                        }} />

                                    <input type="text" placeholder="Mother Phone Number : "
                                        className={`${styles.inp2} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`}
                                        onChange={(e) => {
                                            setmothernumber(e.target.value)
                                        }} />

                                    <input type="text" placeholder="Enter Father Phone Number : "
                                        className={`${styles.inp2} ${"m-4"} ${"p-2"} ${"rounded-lg"} ${"bg-transparent"}`}
                                        onChange={(e) => {
                                            setfathernumber(e.target.value)
                                        }} />

                                    <button className={styles.btn2}>CONTINUE</button>

                                </div>

                            </div>



                        </form>
                    </div>


                </div>


            </div>

        </div>

    )
}
