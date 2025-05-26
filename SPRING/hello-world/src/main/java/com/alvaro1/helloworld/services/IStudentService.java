package com.alvaro1.helloworld.services;

import com.alvaro1.helloworld.dto.CreateStudentRequest;
import com.alvaro1.helloworld.dto.StudentDTO;

import java.util.List;


public interface IStudentService {

    List<StudentDTO> getAllStudents();

    StudentDTO createStudent(CreateStudentRequest createStudentRequest);

    StudentDTO deleteStudent(int id);


}
