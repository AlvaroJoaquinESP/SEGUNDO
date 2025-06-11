package org.iesribera.batch.config;

import org.iesribera.batch.tasklet.AppointmentsTasklet;
import org.springframework.batch.core.Job;
import org.springframework.batch.core.Step;
import org.springframework.batch.core.configuration.annotation.EnableBatchProcessing;
import org.springframework.batch.core.job.builder.JobBuilder;
import org.springframework.batch.core.repository.JobRepository;
import org.springframework.batch.core.step.builder.StepBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.transaction.PlatformTransactionManager;

@Configuration
@EnableBatchProcessing
@EnableScheduling
public class BatchConfig {

    private final JobRepository jobRepository;
    private final PlatformTransactionManager platformTransactionManager;
    private final AppointmentsTasklet appointmentsTasklet;

    public BatchConfig(JobRepository jobRepository, PlatformTransactionManager platformTransactionManager, AppointmentsTasklet appointmentsTasklet) {
        this.jobRepository = jobRepository;
        this.platformTransactionManager = platformTransactionManager;
        this.appointmentsTasklet = appointmentsTasklet;
    }

    @Bean
    public Job appointmentsJob() {
        return new JobBuilder("appointmentsJob", jobRepository)
                .start(step())
                .build();
    }

    @Bean
    protected Step step() {
        return new StepBuilder("step", jobRepository)
                .tasklet(appointmentsTasklet, platformTransactionManager)
                .build();
    }
}