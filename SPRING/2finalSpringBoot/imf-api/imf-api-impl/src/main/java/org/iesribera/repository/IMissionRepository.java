package org.iesribera.repository;

import org.iesribera.entity.Mission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IMissionRepository extends JpaRepository <Mission, Long> {

}
