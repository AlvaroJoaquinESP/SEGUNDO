package student.services;

import com.alvaro1.helloworld.dto.CreateStudentRequest;
import com.alvaro1.helloworld.dto.StudentDTO;
import com.alvaro1.helloworld.dto.UpdateStudentRequest;

import java.util.List;


public interface IStudentService {

    List<StudentDTO> getAllStudents();

    StudentDTO createStudent(CreateStudentRequest createStudentRequest);

    StudentDTO deleteStudent(int id);

    StudentDTO searchStudent(int id);

    StudentDTO updateStudent(int id, UpdateStudentRequest updateStudentRequest);


}
