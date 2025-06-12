package org.iesribera.mapper;

import org.iesribera.dto.AppointmentDTO;
import org.iesribera.dto.PatientDTO;
import org.iesribera.dto.RequestCreateAppointmentDTO;
import org.iesribera.entity.Appointment;
import org.iesribera.entity.Patient;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.Optional;

@Mapper(componentModel = "spring")
public interface IMapper {

    @Mapping(source = "patientId", target = "patient.id") @Mapping(source = "doctorId", target = "doctor.id")
    Appointment RequestAppointmentDTOtoAppointment (RequestCreateAppointmentDTO requestCreateAppointmentDTO);

    AppointmentDTO appointmentToApointmentDTO (Appointment appointment);

    List<PatientDTO> listPatientToListPatientDTO (List<Patient> patients);



}
