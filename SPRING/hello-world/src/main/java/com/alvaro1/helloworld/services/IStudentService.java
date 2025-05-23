package com.alvaro1.helloworld.services;

import com.alvaro1.helloworld.dto.CreateStudentRequest;
import com.alvaro1.helloworld.dto.Student;

import java.util.List;


public interface IStudentService {

    public List<Student> getAllStudents();

    public Student createStudent(CreateStudentRequest createStudentRequest);


}
