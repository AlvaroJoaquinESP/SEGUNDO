package com.alvaro1.helloworld.services;

import com.alvaro1.helloworld.dto.CreateStudentRequest;
import com.alvaro1.helloworld.dto.StudentDTO;
import com.alvaro1.helloworld.entity.Student;
import com.alvaro1.helloworld.exceptions.NotFoundStudentException;
import com.alvaro1.helloworld.mapper.IStudentMapper;
import com.alvaro1.helloworld.repository.IStudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@Service
public class StudentsServiceImpl implements IStudentService {

    private final RestClient.Builder builder;
    private Map<Integer, StudentDTO> students;
    private final IStudentRepository studentRepository;
    // Para usar el MAPPER de classes/general...
    private final IStudentMapper studentMapper;

    public StudentsServiceImpl(IStudentRepository studentRepository, IStudentMapper studentMapper, RestClient.Builder builder) {
        this.studentRepository = studentRepository;
        this.studentMapper = studentMapper;
        this.builder = builder;
    }

    // ----- GRACIAS AL MAPPER -----
        @Override
        public  List<StudentDTO> getAllStudents() {

            return studentMapper.studentToStudentDTO
                    (this.studentRepository.findAll());

        }


    @Override
    public StudentDTO createStudent(CreateStudentRequest createStudentRequest) {


        Student student = Student.builder()
                .name(createStudentRequest.getName())
                    .email(createStudentRequest.getEmail())
                        .bornDate(createStudentRequest.getBornDate())
                            .build();
        return student;
    }


    @Override
    public StudentDTO deleteStudent(int id) {

        Optional<Student> opStudent= this.studentRepository.findById(id);

        if (opStudent.isEmpty()) {
            throw new NotFoundStudentException("Not found");
        }

        this.studentRepository.deleteById(id);

        return this.studentMapper.studentToStudentDTO(opStudent.get());


    }

    @Override
    public StudentDTO searchStudent(int id) {

        return this.studentMapper.studentToStudentDTO(this.studentRepository.findById(id).get());

    }


}
