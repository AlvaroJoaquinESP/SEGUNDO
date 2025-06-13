package org.iesribera.mapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import javax.annotation.processing.Generated;
import org.iesribera.dto.AgentDTO;
import org.iesribera.dto.CreateMissionRequestDTO;
import org.iesribera.dto.MissionDTO;
import org.iesribera.entity.Agent;
import org.iesribera.entity.Mission;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-06-13T13:17:22+0200",
    comments = "version: 1.6.3, compiler: javac, environment: Java 23-valhalla (Oracle Corporation)"
)
@Component
public class IMapperImpl implements IMapper {

    @Override
    public List<AgentDTO> listAgentsToListAgentsDTO(List<Agent> agentList) {
        if ( agentList == null ) {
            return null;
        }

        List<AgentDTO> list = new ArrayList<AgentDTO>( agentList.size() );
        for ( Agent agent : agentList ) {
            list.add( agentToAgentDTO( agent ) );
        }

        return list;
    }

    @Override
    public Mission createMissionRequestDTOtoMission(CreateMissionRequestDTO createMissionRequestDTO) {
        if ( createMissionRequestDTO == null ) {
            return null;
        }

        Mission.MissionBuilder mission = Mission.builder();

        mission.agent( createMissionRequestDTOToAgent( createMissionRequestDTO ) );
        mission.description( createMissionRequestDTO.getDescription() );
        mission.missionDate( createMissionRequestDTO.getMissionDate() );

        return mission.build();
    }

    @Override
    public MissionDTO missionToMissionDTO(Mission mission) {
        if ( mission == null ) {
            return null;
        }

        MissionDTO.MissionDTOBuilder missionDTO = MissionDTO.builder();

        missionDTO.id( mission.getId() );
        missionDTO.description( mission.getDescription() );
        missionDTO.missionDate( mission.getMissionDate() );
        missionDTO.agent( mission.getAgent() );
        missionDTO.status( mission.getStatus() );

        return missionDTO.build();
    }

    @Override
    public AgentDTO optionalAgentToAgentDTO(Optional<Agent> optionalAgent) {
        if ( optionalAgent == null ) {
            return null;
        }

        AgentDTO.AgentDTOBuilder agentDTO = AgentDTO.builder();

        return agentDTO.build();
    }

    @Override
    public List<AgentDTO> listAgentToListAgentDTO(List<Agent> agentList) {
        if ( agentList == null ) {
            return null;
        }

        List<AgentDTO> list = new ArrayList<AgentDTO>( agentList.size() );
        for ( Agent agent : agentList ) {
            list.add( agentToAgentDTO( agent ) );
        }

        return list;
    }

    @Override
    public List<MissionDTO> listMissionsToListMissionsDTO(List<Mission> missionList) {
        if ( missionList == null ) {
            return null;
        }

        List<MissionDTO> list = new ArrayList<MissionDTO>( missionList.size() );
        for ( Mission mission : missionList ) {
            list.add( missionToMissionDTO( mission ) );
        }

        return list;
    }

    protected AgentDTO agentToAgentDTO(Agent agent) {
        if ( agent == null ) {
            return null;
        }

        AgentDTO.AgentDTOBuilder agentDTO = AgentDTO.builder();

        agentDTO.id( agent.getId() );
        agentDTO.name( agent.getName() );
        agentDTO.level( agent.getLevel() );
        agentDTO.team( agent.getTeam() );
        agentDTO.deceased( agent.getDeceased() );

        return agentDTO.build();
    }

    protected Agent createMissionRequestDTOToAgent(CreateMissionRequestDTO createMissionRequestDTO) {
        if ( createMissionRequestDTO == null ) {
            return null;
        }

        Agent.AgentBuilder agent = Agent.builder();

        agent.id( createMissionRequestDTO.getAgentId() );

        return agent.build();
    }
}
