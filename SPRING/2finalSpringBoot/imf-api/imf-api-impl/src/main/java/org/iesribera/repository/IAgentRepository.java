package org.iesribera.repository;

import org.iesribera.entity.Agent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAgentRepository extends JpaRepository <Agent, Long> {

    List<Agent> findAgentsByDeceased(Boolean deceased);

    List<Agent> getAgentsByTeamName(String teamName);
}
