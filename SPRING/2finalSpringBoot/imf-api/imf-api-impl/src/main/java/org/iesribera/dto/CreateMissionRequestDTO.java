package org.iesribera.dto;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class CreateMissionRequestDTO {

    @NotNull
    private LocalDateTime missionDate;
    @NotEmpty
    private String description;
    @NotNull @Positive
    private Long agentId;

}
