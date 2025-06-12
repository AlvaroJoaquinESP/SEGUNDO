package org.iesribera.service;

import org.iesribera.dto.AppointmentDTO;
import org.iesribera.dto.PatientDTO;
import org.iesribera.dto.RequestCreateAppointmentDTO;
import org.iesribera.entity.Appointment;
import org.iesribera.entity.Doctor;
import org.iesribera.entity.Patient;
import org.iesribera.enums.AppointmentStatus;
import org.iesribera.exception.AppointmentNotFoundException;
import org.iesribera.exception.DoctorNotFoundException;
import org.iesribera.exception.PatientNotFoundException;
import org.iesribera.mapper.IMapper;
import org.iesribera.repository.IAppointmentRepository;
import org.iesribera.repository.IDoctorRepository;
import org.iesribera.repository.IPatientRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceImpl implements IService {

    private final IAppointmentRepository appointmentRepository;
    private final IPatientRepository patientRepository;
    private final IDoctorRepository doctorRepository;
    private final IMapper mapper;

    public ServiceImpl(IAppointmentRepository appointmentRepository, IPatientRepository patientRepository, IDoctorRepository doctorRepository, IMapper mapper) {
        this.appointmentRepository = appointmentRepository;
        this.patientRepository = patientRepository;
        this.doctorRepository = doctorRepository;
        this.mapper = mapper;
    }


    @Override
    public AppointmentDTO createAppointment(RequestCreateAppointmentDTO requestCreateAppointmentDTO) {

        if (!this.patientRepository.existsById(requestCreateAppointmentDTO.getPatientId())) {
            throw new DoctorNotFoundException("Patient with id does not exists");
        }

        if (!this.doctorRepository.existsById(requestCreateAppointmentDTO.getDoctorId())) {
            throw new PatientNotFoundException("Doctor with id does not exists");
        }


        Appointment appointment = this.mapper.RequestAppointmentDTOtoAppointment(requestCreateAppointmentDTO);

        appointment.setStatus(AppointmentStatus.SCHEDULED);

        return this.mapper.appointmentToApointmentDTO(this.appointmentRepository.save(appointment));

    }

    @Override
    public Integer getAppointmentsByPatient(Long patientId) {

        if (!this.patientRepository.existsById(patientId)) {
            throw new PatientNotFoundException("Patient with id " + patientId + " does not exists");
        }

        List<Appointment> appointments = this.appointmentRepository.getAppointmentsByPatientId(patientId);

        Integer count = 0;

         for (Appointment i : appointments) {
             count++;
         }

         return count;

    }

    @Override
    public AppointmentDTO updateAppointment(Long appointmentId, AppointmentStatus appointmentStatus) {

        Optional<Appointment> optionalAppointment = this.appointmentRepository.findById(appointmentId);

        if (optionalAppointment.isEmpty()) {
            throw new AppointmentNotFoundException("Appointment with id " + appointmentId + " does not exists");
        }

        Appointment appointment = optionalAppointment.get();

        appointment.setStatus(appointmentStatus);

        return this.mapper.appointmentToApointmentDTO(this.appointmentRepository.save(appointment));



    }

    @Override
    public List<PatientDTO> getPatiensByDoctor(Long doctorId) {

        if (!this.patientRepository.existsById(doctorId)) {
            throw new DoctorNotFoundException("Doctor with id " + doctorId + " does not exists");
        }

        List<Patient> patientList = this.appointmentRepository.findPatiensByDoctorId(doctorId);

        return this.mapper.listPatientToListPatientDTO(patientList);
    }


}
