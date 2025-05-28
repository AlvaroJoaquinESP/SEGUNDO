package com.alvaro1.repaso.service;

import com.alvaro1.repaso.dto.ProjectDTO;
import com.alvaro1.repaso.dto.ProjectRequestDTO;
import com.alvaro1.repaso.entity.Project;

import java.util.List;

public interface IService {
    List<ProjectDTO> getAllProjects();
    ProjectDTO createProject(ProjectRequestDTO projectRequestDTO);
}
