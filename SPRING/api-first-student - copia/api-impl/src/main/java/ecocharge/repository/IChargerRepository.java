package ecocharge.repository;

import com.evaluable.ecocharge.entity.Charger;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IChargerRepository extends JpaRepository <Charger, Long> {

}
