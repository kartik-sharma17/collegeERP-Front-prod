'use client'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { updatestudentresult } from '../../../../Apis/Apihandler'
import { CustomInput } from '../../../../@core/input'
import { Loader } from '../../../../@core/Loader'
import { useFormik } from 'formik'
import { initialValues, validate } from './formConfig'
import { CustomBtn } from '../../../../@core/CustomBtn'

const page = () => {
    const formik = useFormik({
        initialValues,
        validate,
        onSubmit: (values) => {
            setLoading(true)
            handleUpdateresult(values)
        }
    })
    const [examType, setExamtype] = useState('Select Exam Type');
    const [loading, setLoading] = useState(true);


    const data1 = useSearchParams()
    var studentName = data1.get("studentName")
    var studentID = data1.get("studentId")


    const handleUpdateresult = async (values) => {
        const data = {
            studentId: studentID,
            sessionalNo: examType,
            s1: values.subject1Name,
            s1marks: parseInt(values.subject1marks),
            s2: values.subject2Name,
            s2marks: parseInt(values.subject2marks),
            s3: values.subject3Name,
            s3marks: parseInt(values.subject3marks),
            s4: values.subject4Name,
            s4marks: parseInt(values.subject4marks),
            s5: values.subject5Name,
            s5marks: parseInt(values.subject5marks),
            s6: values.subject6Name,
            s6marks: parseInt(values.subject6marks)
        }

        if (examType !== "Select Exam Type") {
            try {
                const response = await updatestudentresult(data);
                console.log(response)
                setLoading(false)
                alert("successfully updated");
            } catch (e) {
                console.log(e)
            }
        }
        else {
            alert("Select exam Type First")
            setLoading(false)
        }
    }


    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])

    return (
        <>
            {loading ? (
                <Loader />
            ) : (
                <div className="row">
                    <div className="col-12 px-2">
                        <div className={`${"custom_bg_color"} ${"p-3 rounded-4"}`}>
                            <div className="col-12 d-flex align-items-center justify-content-between">
                                <h4 className='text-light pb-1 text-uppercase' style={{ borderBottom: "1px solid #5B5D5C" }}>{studentName}'s Result Update</h4>
                                <select className='px-3 py-1 rounded-2' onChange={(e) => { setExamtype(e.target.value) }} name="day" id="day">
                                    <option value="Select Day">Select Exam Type</option>
                                    <option value="1">Sessional 1</option>
                                    <option value="2">Sessional 2</option>
                                    <option value="3">Sessional 3</option>
                                    <option value="4">Put</option>
                                </select>
                            </div>
                            <form onSubmit={formik.handleSubmit}>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject1Name" formik={formik} label="Enter First Subject Name" placeholder="Enter First Subject Name" addLabelclass="text-white" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject1marks" formik={formik} label="Enter Subject 1 Marks" placeholder="Enter Subject 1 Marks" addLabelclass="text-white" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject2Name" formik={formik} label="Enter Subject 2 Name" placeholder="Enter Subject 2 Name" addLabelclass="text-white" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject2marks" formik={formik} label="Enter Subject 2 Marks" placeholder="Enter Subject 2 Marks" addLabelclass="text-white" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject3Name" formik={formik} label="Enter Subject 3 Name" placeholder="Enter Subject 3 Name" addLabelclass="text-white" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject3marks" formik={formik} label="Enter Subject 3 Marks" placeholder="Enter Subject 3 Marks" addLabelclass="text-white" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject4Name" formik={formik} label="Enter Subject 4 Name" placeholder="Enter Subject 4 Name" addLabelclass="text-white" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject4marks" formik={formik} label="Enter Subject 4 Marks" placeholder="Enter Subject 4 Marks" addLabelclass="text-white" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject5Name" formik={formik} label="Enter Subject 5 Name" placeholder="Enter Subject 5 Name" addLabelclass="text-white" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject5marks" formik={formik} label="Enter Subject 5 Marks" placeholder="Enter Subject 5 Marks" addLabelclass="text-white" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject6Name" formik={formik} label="Enter Subject 6 Name" placeholder="Enter Subject 6 Name" addLabelclass="text-white" />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <CustomInput addClass="my-2" name="subject6marks" formik={formik} label="Enter Subject 6 Marks" placeholder="Enter Subject 6 Marks" addLabelclass="text-white" />
                                    </div>
                                </div>
                                <CustomBtn type='submit' addClass={"my-3"} label={"Update Marks"} />
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default page