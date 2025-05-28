package com.alvaro1.repaso.service;

import com.alvaro1.repaso.dto.ProjectDTO;
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
}
