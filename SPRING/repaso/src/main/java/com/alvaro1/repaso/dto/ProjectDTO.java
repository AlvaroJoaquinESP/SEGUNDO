package com.alvaro1.repaso.dto;

import com.alvaro1.repaso.enums.ProjectStatus;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
// ESTA CLASE ES LA QUE CONECTA CON EL FRONTEND.
public class ProjectDTO {

    private Long id;
    private String name;
    private String description;

    private ProjectStatus status;
    //
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;

    private Long clientId;

    private Long teamId;
}


