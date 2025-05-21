package com.alvaro1.helloworld.controller;

import com.alvaro1.helloworld.dto.Students;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import com.alvaro1.helloworld.services.IStudentService;

import java.util.List;

/*Con esto defino que es un controller*/
@RestController
public class StudentController {

    private final IStudentService studentService;

    public StudentController(IStudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/student/all")
    public ResponseEntity<List<Students>> getAll(){
        return ResponseEntity.ok(studentService.getAllStudents());
    }

    /*public ResponseEntity<>*/



}
