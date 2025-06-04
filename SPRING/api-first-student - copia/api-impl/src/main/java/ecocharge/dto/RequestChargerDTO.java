package ecocharge.dto;

import com.evaluable.ecocharge.entity.Station;
import com.evaluable.ecocharge.enums.ChargerStatus;
import com.evaluable.ecocharge.enums.ChargerType;
import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class RequestChargerDTO {
    // NotEmpty SOLO aplica a String, Collections, Maps o Arrays.

    @NotEmpty
    private String serialNumber;

    @Enumerated(EnumType.STRING) @NotNull
    private ChargerType type;

    @Enumerated(EnumType.STRING) @NotNull
    private ChargerStatus status;

    @NotNull @Positive
    private Double powerKW;

    @JsonFormat(pattern = "yyyy-MM-dd") @Past @NotNull
    private LocalDate installationDate;

    @NotNull
    private Station station;

}
