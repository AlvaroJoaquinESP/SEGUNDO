package com.alvaro1.repaso.dto;

import com.alvaro1.repaso.entity.Client;
import com.alvaro1.repaso.entity.Team;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Past;

import lombok.*;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@ToString
// ESTA CLASE ES LA QUE RECIBE JSON.
public class ProjectRequestDTO {
    @NotEmpty
    private String name;

    @NotEmpty
    private String description;

    @Past
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;

    private Long clientId;

    private Long teamId;

}
