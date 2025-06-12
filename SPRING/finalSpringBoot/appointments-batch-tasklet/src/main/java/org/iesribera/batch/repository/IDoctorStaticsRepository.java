package org.iesribera.batch.repository;

import org.iesribera.batch.entity.DoctorStatics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IDoctorStaticsRepository extends JpaRepository <DoctorStatics , Long> {
}
