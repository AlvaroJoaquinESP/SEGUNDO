package com.alvaro1.helloworld.services;

import com.alvaro1.helloworld.dto.Students;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class StudentsServiceImpl implements IStudentService {

    private List<Students> lstStudents;

    public StudentsServiceImpl() {
        // Voy a inicializar la lista de students.
        initListStudents();
    }


    @Override
    public  List<Students> getAllStudents() {
        return lstStudents;
    }

    @Override
    public Students AddStudent() {
        return null;
    }

    private void initListStudents() {
        lstStudents = new ArrayList<>();

        lstStudents.add(new Students("Joaquin",
                        "joq@gmail.com",
                        LocalDate.of(12, 12, 12)));
        lstStudents.add(new Students("Andrés",
                        "andq@gmail.com",
                        LocalDate.of(12, 12, 12)));
        lstStudents.add(new Students("Yo",
                        "yoq@gmail.com",
                        LocalDate.of(13, 12, 12)));
    }


}
