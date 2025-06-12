package org.iesribera.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class PatientDTO {

    private Long id;
    private String name;
    private String dni;
    private String email;
    private String medicalHistory;
}
