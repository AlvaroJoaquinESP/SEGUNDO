package com.alvaro1.helloworld.repository;

import com.alvaro1.helloworld.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// En JpaRepository<Student, Integer>, Integer es el tipo de la PK.
@Repository
public interface IStudentRepository extends JpaRepository<Student, Integer> {
}
