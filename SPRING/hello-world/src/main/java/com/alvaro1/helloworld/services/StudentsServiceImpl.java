package com.alvaro1.helloworld.services;

import com.alvaro1.helloworld.dto.CreateStudentRequest;
import com.alvaro1.helloworld.dto.Student;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StudentsServiceImpl implements IStudentService {

    private Map<Integer, Student> students;

    /*
    * Como una especie de constructor en el cual:
    *   - Instancio una lista.
    *   - Inserto valores en esa lista.
    *   - ¿ Lo podria hacer directamente en el constructor ?
    * */
    public StudentsServiceImpl() {
        // Voy a inicializar la lista de students.
        initStudents();
    }


    @Override
    public  List<Student> getAllStudents() {
        return students.values().stream().toList();
    }

    @Override
    public Student createStudent(CreateStudentRequest createStudentRequest) {
        Student student = new Student(createStudentRequest.getName(),
                createStudentRequest.getEmail(),
                createStudentRequest.getBornDate());

        students.put(student.getId(), student);
        return student;
    }


    private void initStudents() {
        // Creo la lista.
        students = new HashMap<>();

        // Inserto valores en la lista.
        Student student = new Student("Joaquin",
                "joq@gmail.com",
                LocalDate.of(12, 12, 12));
        students.put(student.getId(), student);

        student  = new Student("Andrés",
                "andq@gmail.com",
                LocalDate.of(12, 12, 12));

        students.put(student.getId(), student);


        student  = (new Student("Yo",
                "yoq@gmail.com",
                LocalDate.of(13, 12, 12)));


        students.put(student.getId(), student);

    }
}
