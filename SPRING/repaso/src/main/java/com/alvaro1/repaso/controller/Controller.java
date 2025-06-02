package com.alvaro1.repaso.controller;

import com.alvaro1.repaso.dto.ProjectDTO;
import com.alvaro1.repaso.dto.ProjectRequestDTO;
import com.alvaro1.repaso.service.IService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping({"/project/", "/team/", "/client/"})
public class Controller {

    private final IService service;

    public Controller(IService service) {
        this.service = service;
    }

    @GetMapping("allByStatus")
    public ResponseEntity<List<ProjectDTO>> getAll(){

        return ResponseEntity.ok(service.getAllProjects());

    }


    @PostMapping("create")
    public ResponseEntity<ProjectDTO> create(@RequestBody @Valid ProjectRequestDTO projectRequestDTO) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(service.createProject(projectRequestDTO));

    }
}
