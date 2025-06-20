package org.iesribera.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class AuthorDTO {

    private Long id;
    private String name;
    private String nationality;
    private LocalDate birthDate;
    private  Integer awards;

}
