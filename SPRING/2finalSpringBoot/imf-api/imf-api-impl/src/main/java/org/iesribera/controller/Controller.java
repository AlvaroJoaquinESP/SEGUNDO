package org.iesribera.controller;

import jakarta.validation.Valid;
import org.iesribera.dto.AgentDTO;
import org.iesribera.dto.ChangeStatusRequestDTO;
import org.iesribera.dto.CreateMissionRequestDTO;
import org.iesribera.dto.MissionDTO;
import org.iesribera.service.IService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/imf/api/")
public class Controller {

    private final IService service;

    public Controller(IService service) {
        this.service = service;
    }


    @GetMapping("agents/{deceased}")
    public ResponseEntity<List<AgentDTO>> getAgentsDeceased (Boolean deceased) {
        return ResponseEntity.ok(this.service.getAgentsDeceased(deceased));
    }


    @PostMapping("missions")
    public ResponseEntity<MissionDTO> createMission (@RequestBody @Valid CreateMissionRequestDTO createMissionRequestDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.service.createMission(createMissionRequestDTO));
    }



    @PatchMapping("missions/{id}")
    public ResponseEntity<MissionDTO> updateMissionStatus (@PathVariable Long id, @RequestBody @Valid ChangeStatusRequestDTO changeStatusRequestDTO) {
        return ResponseEntity.status(HttpStatus.OK).body(this.service.updateMissionStatus(id, changeStatusRequestDTO));
    }


    @GetMapping("teams/name/{teamName}/agents")
    public ResponseEntity<List<AgentDTO>> getAgentsByTeamName (@PathVariable String teamName) {
        return ResponseEntity.status(HttpStatus.OK).body(this.service.getAgentsByTeamName(teamName));
    }


}
