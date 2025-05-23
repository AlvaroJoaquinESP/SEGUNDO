package com.alvaro1.helloworld.services;

import com.alvaro1.helloworld.dto.CreateStudentRequest;
import com.alvaro1.helloworld.dto.StudentDTO;
import com.alvaro1.helloworld.entity.Student;
import com.alvaro1.helloworld.repository.IStudentRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class StudentsServiceImpl implements IStudentService {

    private Map<Integer, StudentDTO> students;
    private final IStudentRepository studentRepository;

    /*
    * Como una especie de constructor en el cual:
    *   - Instancio una lista.
    *   - Inserto valores en esa lista.
    *   - ¿ Lo podria hacer directamente en el constructor ?
    * */
    public StudentsServiceImpl(IStudentRepository studentRepository) {
        this.studentRepository = studentRepository;
        // Voy a inicializar la lista de students.
        initStudents();
    }


    @Override
    public  List<StudentDTO> getAllStudents() {
        /*
        * Tengo que devolver StudentDTO, pero el metodo findAll devuelve Student(Entity).
        * return this.studentRepository.findAll();
        * */
        List<Student> lstStudent = this.studentRepository.findAll();
        List<StudentDTO> lstStudentDTO = new ArrayList<>();

        //----- TERMINAR -----
        for (Student student : lstStudent) {
            lstStudentDTO.add(new StudentDTO());
        }
        
    }

    @Override
    public StudentDTO createStudent(CreateStudentRequest createStudentRequest) {
        StudentDTO student = new StudentDTO(createStudentRequest.getName(),
                createStudentRequest.getEmail(),
                createStudentRequest.getBornDate());

        students.put(student.getId(), student);
        return student;
    }


    private void initStudents() {
        // Creo la lista.
        students = new HashMap<>();

        // Inserto valores en la lista.
        StudentDTO student = new StudentDTO("Joaquin",
                "joq@gmail.com",
                LocalDate.of(12, 12, 12));
        students.put(student.getId(), student);

        student  = new StudentDTO("Andrés",
                "andq@gmail.com",
                LocalDate.of(12, 12, 12));

        students.put(student.getId(), student);


        student  = (new StudentDTO("Yo",
                "yoq@gmail.com",
                LocalDate.of(13, 12, 12)));


        students.put(student.getId(), student);

    }
}
