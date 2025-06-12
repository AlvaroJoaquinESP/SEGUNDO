package org.iesribera.service;

import org.iesribera.dto.AppointmentDTO;
import org.iesribera.dto.PatientDTO;
import org.iesribera.dto.RequestCreateAppointmentDTO;
import org.iesribera.enums.AppointmentStatus;

import java.util.List;

public interface IService {

AppointmentDTO createAppointment (RequestCreateAppointmentDTO requestCreateAppointmentDTO);

Integer getAppointmentsByPatient (Long patientId);

AppointmentDTO updateAppointment (Long appointmentId, AppointmentStatus appointmentStatus);

List<PatientDTO> getPatiensByDoctor (Long doctorId);

}
