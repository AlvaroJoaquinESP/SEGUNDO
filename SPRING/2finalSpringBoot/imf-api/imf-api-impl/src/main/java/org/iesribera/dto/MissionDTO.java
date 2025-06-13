package org.iesribera.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.iesribera.entity.Agent;
import org.iesribera.enums.MissionStatus;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class MissionDTO {

    private Long id;
    private String description;
    private LocalDateTime missionDate;
    private Agent agent;
    private MissionStatus status;

}
