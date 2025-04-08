package com.example.college_erp.Service.Faculty;

import com.example.college_erp.Model.Faculty.AttendenceUpdate;
import com.example.college_erp.Model.Faculty.DeleteEvents;
import com.example.college_erp.Model.Faculty.FacultyProfile;
import com.example.college_erp.Model.Faculty.MarksUpdate;
import com.example.college_erp.Model.Student.StudentAttendence;
import com.example.college_erp.Model.Student.StudentEvents;
import com.example.college_erp.Model.Student.StudentResult;
import com.example.college_erp.Repo.Faculty.facultyProfilerepo;
import com.example.college_erp.Repo.Student.StudentAttendenceRepo;
import com.example.college_erp.Repo.Student.StudentEventsRepo;
import com.example.college_erp.Repo.Student.Studentresultrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.lang.reflect.Field;
import java.lang.reflect.Method;
import java.util.List;

@Service
public class FacultyService {

    @Autowired
    facultyProfilerepo profilerepo;

    @Autowired
    StudentAttendenceRepo studentAttendence;

    @Autowired
    Studentresultrepo studentresult;

    @Autowired
    StudentEventsRepo studentevents;

    //    for faculty profile
    public FacultyProfile getFacultyprofileService(int id) {
        return profilerepo.findById(id).orElse(null);
    }


    //    for attendence update
    public boolean studentAttendenceupdate(List<AttendenceUpdate> details) {
        try {
            for (int i = 0; i < details.size(); i++) {
                StudentAttendence studentAtten = new StudentAttendence();
                int id = details.get(i).getId();
//            System.out.println(studentAttendence.findById(id));
                studentAtten = studentAttendence.findById(id).orElse(null);
                int day = details.get(i).getDay();
                String methodName = "setD" + day;

                Method method = studentAtten.getClass().getMethod(methodName, int.class);
                method.invoke(studentAtten, details.get(i).getAttendence());

                studentAttendence.save(studentAtten);
                return true;
            }
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }
        return false;
    }


    //    for updating the marks
    public boolean updatemarks(MarksUpdate marksDetails) {
        try {
            StudentResult studentmarks = new StudentResult();
            studentmarks = studentresult.findById(marksDetails.getStudentId()).orElse(null);

            if (marksDetails.getSessionalNo() == 1) {
                for (int i = 1; i <= 6; i++) {

                    String methodsubjectName = "getS" + i;
                    String methodsubjectMarks = "getS" + i + "marks";

                    Method method1 = marksDetails.getClass().getMethod(methodsubjectName);
                    String subName = (String) method1.invoke(marksDetails);
                    System.out.println(subName);

                    Method method2 = marksDetails.getClass().getMethod(methodsubjectMarks);
                    int submarks = (int) method2.invoke(marksDetails);
                    System.out.println(submarks);

                    String methodName = "setS" + 1 + "s" + i;
                    String methodName2 = "setS" + 1 + "s" + i + "Marks";
                    Method method = studentmarks.getClass().getMethod(methodName, String.class);
                    method.invoke(studentmarks, subName);
                    Method method4 = studentmarks.getClass().getMethod(methodName2, int.class);
                    method4.invoke(studentmarks, submarks);

                    studentresult.save(studentmarks);
                    System.out.println("marks updated successfully");

                }
            } else if (marksDetails.getSessionalNo() == 2) {
                for (int i = 1; i <= 6; i++) {

                    String methodsubjectName = "getS" + i;
                    String methodsubjectMarks = "getS" + i + "marks";

                    Method method1 = marksDetails.getClass().getMethod(methodsubjectName);
                    String subName = (String) method1.invoke(marksDetails);
                    System.out.println(subName);

                    Method method2 = marksDetails.getClass().getMethod(methodsubjectMarks);
                    int submarks = (int) method2.invoke(marksDetails);
                    System.out.println(submarks);

                    String methodName = "setS" + 2 + "s" + i;
                    String methodName2 = "setS" + 2 + "s" + i + "Marks";
                    Method method = studentmarks.getClass().getMethod(methodName, String.class);
                    method.invoke(studentmarks, subName);
                    Method method4 = studentmarks.getClass().getMethod(methodName2, int.class);
                    method4.invoke(studentmarks, submarks);

                    studentresult.save(studentmarks);
                    System.out.println("marks updated successfully");

                }
            } else if (marksDetails.getSessionalNo() == 3) {
                System.out.println("third is running");
                for (int i = 1; i <= 6; i++) {

                    String methodsubjectName = "getS" + i;
                    String methodsubjectMarks = "getS" + i + "marks";

                    Method method1 = marksDetails.getClass().getMethod(methodsubjectName);
                    String subName = (String) method1.invoke(marksDetails);
                    System.out.println(subName);

                    Method method2 = marksDetails.getClass().getMethod(methodsubjectMarks);
                    int submarks = (int) method2.invoke(marksDetails);
                    System.out.println(submarks);

                    String methodName = "setS" + 3 + "s" + i;
                    String methodName2 = "setS" + 3 + "s" + i + "Marks";
                    Method method = studentmarks.getClass().getMethod(methodName, String.class);
                    method.invoke(studentmarks, subName);
                    Method method4 = studentmarks.getClass().getMethod(methodName2, int.class);
                    method4.invoke(studentmarks, submarks);

                    studentresult.save(studentmarks);
                    System.out.println("marks updated successfully");

                }
            } else {
                for (int i = 1; i <= 6; i++) {

                    String methodsubjectName = "getS" + i;
                    String methodsubjectMarks = "getS" + i + "marks";

                    Method method1 = marksDetails.getClass().getMethod(methodsubjectName);
                    String subName = (String) method1.invoke(marksDetails);
                    System.out.println(subName);

                    Method method2 = marksDetails.getClass().getMethod(methodsubjectMarks);
                    int submarks = (int) method2.invoke(marksDetails);
                    System.out.println(submarks);

                    String methodName = "setPuts" + i;
                    String methodName2 = "setPuts" + i + "Marks";
                    Method method = studentmarks.getClass().getMethod(methodName, String.class);
                    method.invoke(studentmarks, subName);
                    Method method4 = studentmarks.getClass().getMethod(methodName2, int.class);
                    method4.invoke(studentmarks, submarks);

                    studentresult.save(studentmarks);
                    System.out.println("marks updated successfully");

                }
            }
        } catch (Exception e) {
            System.out.println(e);
        }
        return true;
    }

//    for updating the events
    public ResponseEntity<String> updateEvents(StudentEvents eventsDetails){
        StudentEvents e1 = new StudentEvents();
        e1 = studentevents.findById(eventsDetails.getEventid()).orElse(null);
        if(e1 == null){
            studentevents.save(eventsDetails);
            return new ResponseEntity<>("SuccessFully Added", HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("Event is already Exist Please Change Event ID or Delete Event with ID = "+e1.getEventid(),HttpStatus.CONFLICT);
        }
    }



//    for deleting the event
    public boolean deleteEvents(DeleteEvents details){
        try{
            studentevents.deleteById(details.getEventid());
            System.out.println(details);
            System.out.println("running successfully");
            return true;
        }catch (Exception e){
            System.out.println(e);
            return false;
        }
    }


}
