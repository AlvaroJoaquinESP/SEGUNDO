package com.alvaro1.helloworld.services;

import com.alvaro1.helloworld.dto.Students;

import java.util.List;


public interface IStudentService {
    public List<Students> getAllStudents();
    public Students AddStudent();
}
