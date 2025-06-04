package ecocharge.repository;

import com.evaluable.ecocharge.entity.Availability;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IAvailabitilyRepository extends JpaRepository <Availability, Long> {

}
