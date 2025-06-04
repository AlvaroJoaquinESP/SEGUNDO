package ecocharge.entity;

import com.evaluable.ecocharge.enums.StationCategory;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Table(name = "stations")

public class Station {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String address;

    @Enumerated(EnumType.STRING)
    private StationCategory category;
    private Boolean publicAccess;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
