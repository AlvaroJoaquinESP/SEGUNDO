package ecocharge.dto;

import com.evaluable.ecocharge.entity.Station;
import com.evaluable.ecocharge.enums.ChargerStatus;
import com.evaluable.ecocharge.enums.ChargerType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class ChargerDTO {
    private Long id;
    private String serialNumber;

    @Enumerated(EnumType.STRING)
    private ChargerType type;

    @Enumerated(EnumType.STRING)
    private ChargerStatus status;
    private Double powerKW;
    private LocalDate installationDate;
    private Station station;

}
