package org.iesribera.dto;


import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.iesribera.enums.MissionStatus;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ChangeStatusRequestDTO {
    @NotNull
    private MissionStatus newStatus;
    @NotNull
    private Boolean agentDeceased;


}
