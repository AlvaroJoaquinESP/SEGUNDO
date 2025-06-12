package org.iesribera.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.iesribera.enums.DoctorSpeciality;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class DoctorDTO {

    private Long id;
    private String name;
    private DoctorSpeciality speciality;
    private String dni;
    private String email;
}
