package org.iesribera.controller;

import jakarta.validation.Valid;
import org.iesribera.dto.AppointmentDTO;
import org.iesribera.dto.PatientDTO;
import org.iesribera.dto.RequestCreateAppointmentDTO;
import org.iesribera.enums.AppointmentStatus;
import org.iesribera.service.IService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/JonHealth/")
public class Controller {

    private final IService service;

    public Controller(IService service) {
        this.service = service;
    }


    @PostMapping("create")
    public ResponseEntity<AppointmentDTO> createAppointment (@RequestBody @Valid RequestCreateAppointmentDTO requestCreateAppointmentDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.service.createAppointment(requestCreateAppointmentDTO));
    }


    @GetMapping("appointmentsById/{patientId}")
    public ResponseEntity<Integer> getAppointmentsByPatient (@PathVariable Long patientId) {
        return ResponseEntity.status(HttpStatus.OK).body(this.service.getAppointmentsByPatient(patientId));
    }


    @PostMapping("updateAppointment")
    public ResponseEntity<AppointmentDTO> updateAppointment (@RequestBody Long appointmentId, AppointmentStatus appointmentStatus) {
        return ResponseEntity.status(HttpStatus.OK).body(this.service.updateAppointment(appointmentId, appointmentStatus));
    }


    @GetMapping("listOfPatiens/{doctorId}")
    public ResponseEntity<List<PatientDTO>> getPatiensByDoctor (@PathVariable Long doctorId) {
        return ResponseEntity.status(HttpStatus.OK).body(this.service.getPatiensByDoctor(doctorId));
    }
}
