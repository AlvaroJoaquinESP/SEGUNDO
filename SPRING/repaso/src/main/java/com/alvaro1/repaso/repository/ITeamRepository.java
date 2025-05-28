package com.alvaro1.repaso.repository;

import com.alvaro1.repaso.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITeamRepository extends JpaRepository<Team, Long> {
}
