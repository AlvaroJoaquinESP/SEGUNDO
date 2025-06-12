package org.iesribera.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.iesribera.dto.AppointmentDTO;
import org.iesribera.dto.PatientDTO;
import org.iesribera.dto.RequestCreateAppointmentDTO;
import org.iesribera.entity.Appointment;
import org.iesribera.entity.Doctor;
import org.iesribera.entity.Patient;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-06-12T23:58:27+0200",
    comments = "version: 1.6.3, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class IMapperImpl implements IMapper {

    @Override
    public Appointment RequestAppointmentDTOtoAppointment(RequestCreateAppointmentDTO requestCreateAppointmentDTO) {
        if ( requestCreateAppointmentDTO == null ) {
            return null;
        }

        Appointment.AppointmentBuilder appointment = Appointment.builder();

        appointment.patient( requestCreateAppointmentDTOToPatient( requestCreateAppointmentDTO ) );
        appointment.doctor( requestCreateAppointmentDTOToDoctor( requestCreateAppointmentDTO ) );
        appointment.appointmentDate( requestCreateAppointmentDTO.getAppointmentDate() );

        return appointment.build();
    }

    @Override
    public AppointmentDTO appointmentToApointmentDTO(Appointment appointment) {
        if ( appointment == null ) {
            return null;
        }

        AppointmentDTO.AppointmentDTOBuilder appointmentDTO = AppointmentDTO.builder();

        appointmentDTO.id( appointment.getId() );
        appointmentDTO.patient( appointment.getPatient() );
        appointmentDTO.doctor( appointment.getDoctor() );
        appointmentDTO.appointmentDate( appointment.getAppointmentDate() );
        appointmentDTO.status( appointment.getStatus() );
        appointmentDTO.notes( appointment.getNotes() );

        return appointmentDTO.build();
    }

    @Override
    public List<PatientDTO> listPatientToListPatientDTO(List<Patient> patients) {
        if ( patients == null ) {
            return null;
        }

        List<PatientDTO> list = new ArrayList<PatientDTO>( patients.size() );
        for ( Patient patient : patients ) {
            list.add( patientToPatientDTO( patient ) );
        }

        return list;
    }

    protected Patient requestCreateAppointmentDTOToPatient(RequestCreateAppointmentDTO requestCreateAppointmentDTO) {
        if ( requestCreateAppointmentDTO == null ) {
            return null;
        }

        Patient.PatientBuilder patient = Patient.builder();

        patient.id( requestCreateAppointmentDTO.getPatientId() );

        return patient.build();
    }

    protected Doctor requestCreateAppointmentDTOToDoctor(RequestCreateAppointmentDTO requestCreateAppointmentDTO) {
        if ( requestCreateAppointmentDTO == null ) {
            return null;
        }

        Doctor.DoctorBuilder doctor = Doctor.builder();

        doctor.id( requestCreateAppointmentDTO.getDoctorId() );

        return doctor.build();
    }

    protected PatientDTO patientToPatientDTO(Patient patient) {
        if ( patient == null ) {
            return null;
        }

        PatientDTO.PatientDTOBuilder patientDTO = PatientDTO.builder();

        patientDTO.id( patient.getId() );
        patientDTO.name( patient.getName() );
        patientDTO.dni( patient.getDni() );
        patientDTO.email( patient.getEmail() );
        patientDTO.medicalHistory( patient.getMedicalHistory() );

        return patientDTO.build();
    }
}
