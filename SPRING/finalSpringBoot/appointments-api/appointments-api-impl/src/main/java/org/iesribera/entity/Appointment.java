package org.iesribera.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.iesribera.enums.AppointmentStatus;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "appointments")

public class Appointment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.EAGER) @JoinColumn(name = "patient_id")
    private Patient patient;
    @ManyToOne(fetch = FetchType.EAGER)   @JoinColumn(name = "doctor_id")
    private Doctor doctor;
    private LocalDateTime appointmentDate;
    @Enumerated(EnumType.STRING)
    private AppointmentStatus status;
    @Column(nullable = true)
    private String notes;

}
