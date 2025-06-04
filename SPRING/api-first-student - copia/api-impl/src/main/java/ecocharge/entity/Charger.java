package ecocharge.entity;

import com.evaluable.ecocharge.enums.ChargerStatus;
import com.evaluable.ecocharge.enums.ChargerType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
@Builder
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "chargers")


public class Charger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String serialNumber;

    @Enumerated(EnumType.STRING)
    private ChargerType type;

    @Enumerated(EnumType.STRING)
    private ChargerStatus status;
    private Double powerKW;
    private LocalDate installationDate;

    @ManyToOne
    private Station station;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


}
