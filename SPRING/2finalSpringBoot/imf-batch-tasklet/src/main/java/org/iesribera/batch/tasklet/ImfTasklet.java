package org.iesribera.batch.tasklet;

import org.generator.api.ControllerApi;
import org.generator.model.Agent;
import org.generator.model.AgentDTO;
import org.generator.model.MissionDTO;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ImfTasklet implements Tasklet {

    private final ControllerApi controllerApi;

    public ImfTasklet(ControllerApi controllerApi) {
        this.controllerApi = controllerApi;
    }

    @Override
    public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception {

        List<MissionDTO> missionDTOS = this.controllerApi.getAllMissions();

        List<Agent> agentList;

        for (MissionDTO missionDTO : missionDTOS) {
            agentList = agentList.add(missionDTO.getAgent());
        }


        System.out.println
                ("agentId | total_missions | completed_missions " +
                        agentDTOList.getId() + "  |  |  |  ");

        return RepeatStatus.FINISHED;

    }
}
