package com.alvaro1.helloworld.controller;

import com.alvaro1.helloworld.dto.CreateStudentRequest;
import com.alvaro1.helloworld.dto.Student;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.alvaro1.helloworld.services.IStudentService;

import java.util.List;

/*Con esto defino que es un controller*/
@RestController
@RequestMapping("/student")
public class StudentController {

    // ¿Por qué del tipo interfaz ?
    private final IStudentService studentService;

    public StudentController(IStudentService studentService) {
        this.studentService = studentService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Student>> getAll(){
        return ResponseEntity.ok(studentService.getAllStudents());
    }

    // Si no pongo @Valid, las validaciones están DESACTIVADAS por defecto.
    @PostMapping("/create")
    public  ResponseEntity<Student> create(@RequestBody @Valid CreateStudentRequest createStudentRequest){

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(studentService
                        .createStudent(createStudentRequest));



    }


    /*public ResponseEntity<>*/



}
