package org.iesribera.repository;

import org.iesribera.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDoctorRepository extends JpaRepository <Doctor, Long> {

}
