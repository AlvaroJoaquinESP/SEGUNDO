package org.iesribera.repository;

import org.iesribera.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ITeamRepository extends JpaRepository <Team, Long> {

}
