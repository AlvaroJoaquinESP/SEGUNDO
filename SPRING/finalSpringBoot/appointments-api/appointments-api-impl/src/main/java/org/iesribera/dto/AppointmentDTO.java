package org.iesribera.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.iesribera.entity.Doctor;
import org.iesribera.entity.Patient;
import org.iesribera.enums.AppointmentStatus;
import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class AppointmentDTO {

    private Long id;
    private Patient patient;
    private Doctor doctor;
    private LocalDateTime appointmentDate;
    private AppointmentStatus status;
    private String notes;
}
