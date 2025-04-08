package com.example.college_erp.Controller;


import com.example.college_erp.Model.Faculty.AttendenceUpdate;
import com.example.college_erp.Model.Faculty.DeleteEvents;
import com.example.college_erp.Model.Faculty.FacultyProfile;
import com.example.college_erp.Model.Faculty.MarksUpdate;
import com.example.college_erp.Model.Student.StudentEvents;
import com.example.college_erp.Service.Faculty.FacultyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class FacultyController {

    @Autowired
    FacultyService facultyService;


//    for faculty profile details
    @GetMapping("dashboard/faculty/profile/{id}")
    public FacultyProfile getFacultydetails(@PathVariable int id){
        return facultyService.getFacultyprofileService(id);
    }

//    for attendence update
    @PostMapping("dashboard/faculty/attendence")
    public boolean attendenceUpdatebyFaculty(@RequestBody List<AttendenceUpdate> attendence){
       return facultyService.studentAttendenceupdate(attendence);
    }

//    for marks update
    @PostMapping("dashboard/faculty/updatemarks")
    public boolean marksUpdatebyfaculty(@RequestBody MarksUpdate marks){
        return facultyService.updatemarks(marks);
    }

//    for updating the evenets
    @PostMapping("dashboard/faculty/updatevents")
    public ResponseEntity<String> updateEvents(@RequestBody StudentEvents eventsDetails){
        return facultyService.updateEvents(eventsDetails);
    }

//    for deleting the events
    @PostMapping("dashboard/faculty/deleteevents")
    public boolean deleteEvents(@RequestBody DeleteEvents eventsDetails){
        System.out.println("running from controller"+eventsDetails.getEventid());
        return facultyService.deleteEvents(eventsDetails);
    }

}
