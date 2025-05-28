package com.alvaro1.repaso.repository;

import com.alvaro1.repaso.entity.Project;
import com.alvaro1.repaso.enums.ProjectStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProjectRepository extends JpaRepository<Project, Long> {

    @Query("SELECT p FROM Project p where p.status = ?1")
    List<Project> findByStatus(ProjectStatus status);
}
