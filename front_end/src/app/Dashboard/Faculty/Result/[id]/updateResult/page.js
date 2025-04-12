'use client'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { updatestudentresult } from '@/app/Dashboard/Apis/Apihandler'

const page = () => {
    const [subject1Name, setSubject1name] = useState("");
    const [subject1marks, setSubject1marks] = useState();
    const [subject2Name, setSubject2name] = useState("");
    const [subject2marks, setSubject2marks] = useState();
    const [subject3Name, setSubject3name] = useState("");
    const [subject3marks, setSubject3marks] = useState();
    const [subject4Name, setSubject4name] = useState("");
    const [subject4marks, setSubject4marks] = useState();
    const [subject5Name, setSubject5name] = useState("");
    const [subject5marks, setSubject5marks] = useState();
    const [subject6Name, setSubject6name] = useState("");
    const [subject6marks, setSubject6marks] = useState();
    const [examType, setExamtype] = useState('Select Exam Type');


    const data1 = useSearchParams()
    var studentName = data1.get("studentName")
    var studentID = data1.get("studentId")


    const handleUpdateresult = async (e) => {
        e.preventDefault();

        const data = {
            studentId: studentID,
            sessionalNo: examType,
            s1: subject1Name,
            s1marks: parseInt(subject1marks),
            s2: subject2Name,
            s2marks: parseInt(subject2marks),
            s3: subject3Name,
            s3marks: parseInt(subject3marks),
            s4: subject4Name,
            s4marks: parseInt(subject4marks),
            s5: subject5Name,
            s5marks: parseInt(subject5marks),
            s6: subject6Name,
            s6marks: parseInt(subject6marks)
        }

        if (examType !== "Select Exam Type") {
            try {
                const response = await updatestudentresult(data);
                console.log(response)
                alert("successfully updated");
            } catch (e) {
                console.log(e)
            }
        }
        else {
            alert("Select exam Type First")
        }
        console.log(data);
    }

    return (
        <div className="row">
            <div className="col-12 px-2">
                <div className={`${"custom_bg_color"} ${"p-3 rounded-4"}`}>
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <h4 className='text-light pb-1 text-uppercase' style={{ borderBottom: "1px solid #5B5D5C" }}>{studentName}'s Result Update</h4>
                        <select onChange={(e) => { setExamtype(e.target.value) }} name="day" id="day">
                            <option value="Select Day">Select Exam Type</option>
                            <option value="1">Sessional 1</option>
                            <option value="2">Sessional 2</option>
                            <option value="3">Sessional 3</option>
                            <option value="4">Put</option>
                        </select>
                    </div>
                    <form onSubmit={handleUpdateresult}>
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject1name(e.target.value) }} placeholder='Enter Subject 1 Name' />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject1marks(e.target.value) }} placeholder='Enter Subject 1 Marks' />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject2name(e.target.value) }} placeholder='Enter Subject 2 Name' />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject2marks(e.target.value) }} placeholder='Enter Subject 2 Marks' />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject3name(e.target.value) }} placeholder='Enter Subject 3 Name' />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject3marks(e.target.value) }} placeholder='Enter Subject 3 Marks' />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject4name(e.target.value) }} placeholder='Enter Subject 4 Name' />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject4marks(e.target.value) }} placeholder='Enter Subject 4 Marks' />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject5name(e.target.value) }} placeholder='Enter Subject 5 Name' />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject5marks(e.target.value) }} placeholder='Enter Subject 5 Marks' />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject6name(e.target.value) }} placeholder='Enter Subject 6 Name' />
                            </div>
                            <div className="col-12 col-md-6">
                                <input type="text" onChange={(e) => { setSubject6marks(e.target.value) }} placeholder='Enter Subject 6 Marks' />
                            </div>
                        </div>
                        <button type='submit'>Update Marks</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page