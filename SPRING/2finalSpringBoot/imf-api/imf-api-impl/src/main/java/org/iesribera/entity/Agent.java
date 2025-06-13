package org.iesribera.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.iesribera.enums.AgentLevel;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "agents")

public class Agent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Enumerated(EnumType.STRING)
    private AgentLevel level;
    @ManyToOne(fetch = FetchType.EAGER) @JoinColumn(name = "team_id")
    private Team team;
    private Boolean deceased;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


}
