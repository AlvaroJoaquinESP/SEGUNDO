package org.iesribera.batch.tasklet;

import org.generator.api.ControllerApi;
import org.generator.model.Author;
import org.generator.model.AuthorDTO;
import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class BooksTasklet implements Tasklet {

    private final ControllerApi controllerApi;

    public BooksTasklet(ControllerApi controllerApi) {
        this.controllerApi = controllerApi;
    }

    @Override
    public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception{
        System.out.println("Test");


        List<AuthorDTO> authorDTOS = this.controllerApi.getMaxAwards();

        for (AuthorDTO authorDTO : authorDTOS) {
            System.out.println(authorDTO);
        }



        return RepeatStatus.FINISHED;

    }





}
