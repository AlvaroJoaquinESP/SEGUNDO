package ecocharge.repository;

import com.evaluable.ecocharge.entity.Station;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IStationRepository extends JpaRepository <Station, Long> {
}
