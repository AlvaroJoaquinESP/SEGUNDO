package org.iesribera.repository;

import org.iesribera.entity.Appointment;
import org.iesribera.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAppointmentRepository extends JpaRepository <Appointment, Long> {
    List<Appointment> getAppointmentsByPatientId(Long patientId);


    @Query("SELECT a.patient FROM Appointment a WHERE a.doctor.id = :doctorId")
    List<Patient> findPatiensByDoctorId (Long doctorId);


}
