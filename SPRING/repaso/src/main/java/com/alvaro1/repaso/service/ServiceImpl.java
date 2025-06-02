package com.alvaro1.repaso.service;

import com.alvaro1.repaso.dto.ProjectDTO;
import com.alvaro1.repaso.dto.ProjectRequestDTO;
import com.alvaro1.repaso.entity.Project;
import com.alvaro1.repaso.entity.Team;
import com.alvaro1.repaso.enums.ProjectStatus;
import com.alvaro1.repaso.mapper.IProjectMapper;
import com.alvaro1.repaso.repository.IProjectRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ServiceImpl implements IService{

    private final IProjectRepository projectRepository;
    private final IProjectMapper projectMapper;

    public ServiceImpl(IProjectRepository projectRepository, IProjectMapper projectMapper) {
        this.projectRepository = projectRepository;
        this.projectMapper = projectMapper;
    }

    @Override
    public List<ProjectDTO> getAllProjects() {

        return this.projectMapper.projectToProjectDTO
                (this.projectRepository
                        .findByStatus
                                (ProjectStatus.IN_PROGRESS));

    }

    @Override
    public ProjectDTO createProject(ProjectRequestDTO projectRequestDTO) {

        Team team = Team.builder().id(ProjectRequestDTO.getTeamId())

        Project project = Project.builder().name(projectRequestDTO.getName())
                .description(projectRequestDTO.getDescription())
                    .startDate(projectRequestDTO.getStartDate())
                        .endDate(projectRequestDTO.getEndDate())
                            .clientId(this.projectRepository.findById(projectRequestDTO.getClientId()))
                                .teamId(projectRequestDTO.getTeamId())
                                    .status(ProjectStatus.CREATED)
                                        .build();

        return this.projectMapper.projectToProjectDTO
                (this.projectRepository.save(project));
    }

}
