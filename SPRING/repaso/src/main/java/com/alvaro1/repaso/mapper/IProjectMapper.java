package com.alvaro1.repaso.mapper;

import com.alvaro1.repaso.dto.ProjectDTO;
import com.alvaro1.repaso.entity.Project;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface IProjectMapper {
    ProjectDTO projectToProjectDTO(Project project);
    List<ProjectDTO> projectToProjectDTO(List<Project> projects);
}
