package com.alvaro1.repaso.dto;

import com.alvaro1.repaso.enums.ProjectStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class ProjectDTO {

    private Long id;
    private String name;
    private String description;

    @Enumerated(EnumType.STRING)
    private ProjectStatus status;
    private LocalDate startDate;
    private LocalDate endDate;

    private ClientDTO clientId;

    private TeamDTO teamId;
}


