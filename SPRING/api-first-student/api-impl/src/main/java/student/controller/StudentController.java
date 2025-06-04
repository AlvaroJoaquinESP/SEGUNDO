package student.controller;

import com.alvaro1.helloworld.dto.CreateStudentRequest;
import com.alvaro1.helloworld.dto.StudentDTO;
import com.alvaro1.helloworld.dto.UpdateStudentRequest;
import com.alvaro1.helloworld.services.IStudentService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<List<StudentDTO>> getAll(){
        return ResponseEntity.ok(studentService.getAllStudents());
    }

    // Si no pongo @Valid, las validaciones están DESACTIVADAS por defecto.
    @PostMapping("/create")
    public  ResponseEntity<StudentDTO> create(@RequestBody @Valid CreateStudentRequest createStudentRequest){

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(studentService
                        .createStudent(createStudentRequest));

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<StudentDTO> delete(@PathVariable int id){

        return ResponseEntity.ok(studentService.deleteStudent(id));
    }



    @GetMapping("/search/{id}")
    public ResponseEntity<StudentDTO> search(@PathVariable int id) {

        return ResponseEntity.status(HttpStatus.OK)
                .body(studentService.searchStudent(id));
    }

    @PatchMapping("update/{id}")
    public ResponseEntity<StudentDTO> update(@PathVariable int id, @RequestBody UpdateStudentRequest updateStudentRequest) {
        return ResponseEntity.ok
                (this.studentService.updateStudent(id, updateStudentRequest));
    }

}
