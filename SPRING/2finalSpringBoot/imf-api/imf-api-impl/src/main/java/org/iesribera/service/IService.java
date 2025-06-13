package org.iesribera.service;

import org.iesribera.dto.AgentDTO;
import org.iesribera.dto.ChangeStatusRequestDTO;
import org.iesribera.dto.CreateMissionRequestDTO;
import org.iesribera.dto.MissionDTO;

import java.util.List;

public interface IService {

    List<AgentDTO> getAgentsDeceased (Boolean deceased);

    MissionDTO createMission (CreateMissionRequestDTO createMissionRequestDTO);

    MissionDTO updateMissionStatus (Long id, ChangeStatusRequestDTO changeStatusRequestDTO);

    List<AgentDTO> getAgentsByTeamName (String teamName);


    List<MissionDTO> getAllMissions();

}
