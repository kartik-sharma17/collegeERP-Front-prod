import axios from "axios"
import { ApiEndPoint } from "../Constant/apiEndpoints"
import { API_URL } from "../Constant/envVariable"



// for faculty 
export const facultyProfile = (id) => {
    return axios.get(`${API_URL}${ApiEndPoint.Faculty.Profile}${id}`);
}

export const getStudentattendenceList = (section) => {
    return axios.get(`${API_URL}${ApiEndPoint.Faculty.studentAttendencelist}${section}`)
}

export const updateStudentattendence = (data) => {
    return axios.post(`${API_URL}${ApiEndPoint.Faculty.updateStudentattendence}`, data)
}

export const getStudentresultList = (section) => {
    return axios.get(`${API_URL}${ApiEndPoint.Faculty.studentlistforresult}${section}`)
}

export const updatestudentresult = (data) => {
    return axios.post(`${API_URL}${ApiEndPoint.Faculty.studentresultupdate}`, data)
}

export const getEventds = () => {
    return axios.get(`${API_URL}${ApiEndPoint.Faculty.getEvents}`)
}

export const deleteEvents = (data) => {
    return axios.post(`${API_URL}${ApiEndPoint.Faculty.deleteEvents}`, data)
}

export const updateEvents = (data) => {
    return axios.post(`${API_URL}${ApiEndPoint.Faculty.updateEvents}`, data)
}


// for student 
export const studentProfile = (id) => {
    return axios.get(`${API_URL}${ApiEndPoint.Student.Profile}${id}`)
}
