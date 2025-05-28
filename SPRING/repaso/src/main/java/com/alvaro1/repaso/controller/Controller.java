package com.alvaro1.repaso.controller;

import com.alvaro1.repaso.dto.ProjectDTO;
import com.alvaro1.repaso.service.IService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
