package com.alvaro1.repaso.dto;

import com.alvaro1.repaso.entity.Client;
import com.alvaro1.repaso.entity.Team;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Past;
import jdk.jfr.Description;
import lombok.*;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@ToString

public class ProjectRequestDTO {
    @NotEmpty
    private String name;

    @NotEmpty
    private String description;

    @NotEmpty
    @Past
    private LocalDate startDate;

    @NotEmpty
    private LocalDate endDate;

    @NotEmpty
    private Client clientId;

    @NotEmpty
    private Team teamId;


}
