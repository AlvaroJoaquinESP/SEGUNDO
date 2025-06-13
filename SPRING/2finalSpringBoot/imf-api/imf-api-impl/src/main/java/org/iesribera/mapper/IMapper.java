package org.iesribera.mapper;

import org.iesribera.dto.AgentDTO;
import org.iesribera.dto.ChangeStatusRequestDTO;
import org.iesribera.dto.CreateMissionRequestDTO;
import org.iesribera.dto.MissionDTO;
import org.iesribera.entity.Agent;
import org.iesribera.entity.Mission;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;
import java.util.Optional;

@Mapper(componentModel = "spring")
public interface IMapper {

    List<AgentDTO> listAgentsToListAgentsDTO (List<Agent> agentList);

    @Mapping(source = "agentId", target = "agent.id")
    Mission createMissionRequestDTOtoMission (CreateMissionRequestDTO createMissionRequestDTO);

    MissionDTO missionToMissionDTO (Mission mission);

    AgentDTO optionalAgentToAgentDTO (Optional<Agent> optionalAgent);

    List<AgentDTO> listAgentToListAgentDTO (List<Agent> agentList);

    List<MissionDTO> listMissionsToListMissionsDTO (List<Mission> missionList);



}
