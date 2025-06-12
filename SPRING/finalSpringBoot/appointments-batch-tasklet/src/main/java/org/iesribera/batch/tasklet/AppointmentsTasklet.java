package org.iesribera.batch.tasklet;

import org.springframework.batch.core.StepContribution;
import org.springframework.batch.core.scope.context.ChunkContext;
import org.springframework.batch.core.step.tasklet.Tasklet;
import org.springframework.batch.repeat.RepeatStatus;
import org.springframework.stereotype.Component;

@Component
public class AppointmentsTasklet implements Tasklet {

    // Creo el controller de la api y el servicio del batch.
    // Primero llamo al service, y dentro del service llamo al controller.

    @Override
    public RepeatStatus execute(StepContribution contribution, ChunkContext chunkContext) throws Exception{





        return RepeatStatus.FINISHED;
    }
}
