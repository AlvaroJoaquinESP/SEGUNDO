package org.iesribera.service;

import org.iesribera.dto.AgentDTO;
import org.iesribera.dto.ChangeStatusRequestDTO;
import org.iesribera.dto.CreateMissionRequestDTO;
import org.iesribera.dto.MissionDTO;
import org.iesribera.entity.Agent;
import org.iesribera.entity.Mission;
import org.iesribera.enums.MissionStatus;
import org.iesribera.exception.BadRequestMissionException;
import org.iesribera.exception.ForbiddentMissionException;
import org.iesribera.exception.NotFoundAgentException;
import org.iesribera.exception.NotFoundMissionException;
import org.iesribera.mapper.IMapper;
import org.iesribera.repository.IAgentRepository;
import org.iesribera.repository.IMissionRepository;
import org.iesribera.repository.ITeamRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class ServiceImpl implements IService {

    private final IAgentRepository agentRepository;
    private final IMissionRepository missionRepository;
    private final ITeamRepository teamRepository;
    private final IMapper mapper;

    public ServiceImpl(IAgentRepository agentRepository, IMissionRepository missionRepository, ITeamRepository teamRepository, IMapper mapper) {
        this.agentRepository = agentRepository;
        this.missionRepository = missionRepository;
        this.teamRepository = teamRepository;
        this.mapper = mapper;
    }


    @Override
    public List<AgentDTO> getAgentsDeceased(Boolean deceased) {

        List<Agent> list = this.agentRepository.findAgentsByDeceased(deceased);

        return this.mapper.listAgentsToListAgentsDTO(list);

    }

    @Override
    public MissionDTO createMission(CreateMissionRequestDTO createMissionRequestDTO) {

        if (!this.agentRepository.existsById(createMissionRequestDTO.getAgentId())) {
            throw new NotFoundAgentException("Agent with id " +  createMissionRequestDTO.getAgentId() + " does not exists");
        }

        Optional<Agent> optionalAgent = this.agentRepository.findById(createMissionRequestDTO.getAgentId());

        Agent agent = optionalAgent.get();

        if (agent.getDeceased()) {
            throw new ForbiddentMissionException("The agent is deceased");
        }

        Mission mission = this.mapper.createMissionRequestDTOtoMission(createMissionRequestDTO);

        mission.setStatus(MissionStatus.ASSIGNED);

        mission.setCreatedAt(LocalDateTime.now());

        mission.setUpdatedAt(LocalDateTime.now());

        return this.mapper.missionToMissionDTO(this.missionRepository.save(mission));


    }

    @Override
    public MissionDTO updateMissionStatus(Long id, ChangeStatusRequestDTO changeStatusRequestDTO) {

        Optional<Mission> optionalMission = this.missionRepository.findById(id);

        if (optionalMission.isEmpty()) {

            throw new NotFoundMissionException("Mission with id " + id  + " does not exists");

        }


        if (optionalMission.get().getStatus() == MissionStatus.FAILED || optionalMission.get().getStatus() == MissionStatus.COMPLETED) {

            throw new BadRequestMissionException("Mission with id " + optionalMission.get().getId() + " has a status failed or completed");

        }


        Optional<Agent> optionalAgent = this.agentRepository.findById(optionalMission.get().getAgent().getId());

        if (optionalAgent.isEmpty()) {

            throw new NotFoundAgentException("Agent not found");

        }

        if ((changeStatusRequestDTO.getNewStatus() == MissionStatus.FAILED) && (this.agentRepository.existsById(optionalAgent.get().getId()))) {

            optionalAgent.get().setDeceased(true);

        }

        optionalMission.get().setStatus(changeStatusRequestDTO.getNewStatus());

        optionalMission.get().setAgent(optionalAgent.get());

        return this.mapper.missionToMissionDTO(this.missionRepository.save(optionalMission.get()));

    }

    @Override
    public List<AgentDTO> getAgentsByTeamName(String teamName) {

        List<Agent> agentList = this.agentRepository.getAgentsByTeamName(teamName);

        return this.mapper.listAgentsToListAgentsDTO(agentList);

    }

    @Override
    public List<MissionDTO> getAllMissions() {

        List<Mission> missionList = this.missionRepository.findAll();

        return this.mapper.listMissionsToListMissionsDTO(missionList);

    }


}





















