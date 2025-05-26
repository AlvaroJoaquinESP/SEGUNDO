package com.alvaro1.helloworld.mapper;

import com.alvaro1.helloworld.dto.StudentDTO;
import com.alvaro1.helloworld.entity.Student;
import org.mapstruct.Mapper;

import java.util.List;

// Muy importante esta etiqueta.
@Mapper(componentModel = "spring")
public interface IStudentMapper {
    // Especifico las conversiones que voy a hacer. De Student a StudentDTO.
    StudentDTO studentToStudentDTO(Student student);
    List<StudentDTO> studentToStudentDTO(List<Student> students);
}
