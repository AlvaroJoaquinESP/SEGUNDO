package ecocharge.dto;

import com.evaluable.ecocharge.entity.Station;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class AvailabilityDTO {
    private Long id;
    private Integer slotsAvailable;
    private Station station;
}
