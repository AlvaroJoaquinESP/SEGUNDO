package com.alvaro1.repaso.entity;

import com.alvaro1.repaso.enums.TeamSpecialization;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "team")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    @Enumerated(EnumType.STRING)
    private TeamSpecialization specialization;

    private String members;

}
