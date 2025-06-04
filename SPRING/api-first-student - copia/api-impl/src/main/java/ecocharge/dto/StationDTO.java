package ecocharge.dto;

import com.evaluable.ecocharge.enums.StationCategory;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class StationDTO {
    private Long id;
    private String address;

    @Enumerated(EnumType.STRING)
    private StationCategory category;
    private Boolean publicAccess;

}
