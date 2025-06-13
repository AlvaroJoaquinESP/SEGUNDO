package org.iesribera.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class TeamDTO {

    private Long id;
    private String name;
    private String baseLocation;

}
