package com.alvaro1.repaso.dto;

import com.alvaro1.repaso.enums.TeamSpecialization;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Setter
@ToString
public class TeamDTO {

    private Long id;
    private String name;
    @Enumerated(EnumType.STRING)
    private TeamSpecialization specialization;
    private String members;

}


