package org.iesribera.dto;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.iesribera.entity.Team;
import org.iesribera.enums.AgentLevel;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class AgentDTO {

    private Long id;
    private String name;
    private AgentLevel level;
    private Team team;
    private Boolean deceased;

}
