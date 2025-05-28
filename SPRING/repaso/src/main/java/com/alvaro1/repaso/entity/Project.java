package com.alvaro1.repaso.entity;

import com.alvaro1.repaso.enums.ProjectStatus;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name="project")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter

public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;

    @Enumerated(EnumType.STRING)
    private ProjectStatus status;
    private LocalDate startDate;
    private LocalDate endDate;

    @OneToOne
    private Client clientId;

    @OneToOne
    private Team teamId;
}
