package org.iesribera.batch.config;

import org.iesribera.batch.tasklet.ImfTasklet;
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
    private final ImfTasklet imfTasklet;

    public BatchConfig(JobRepository jobRepository, PlatformTransactionManager platformTransactionManager, ImfTasklet imfTasklet) {
        this.jobRepository = jobRepository;
        this.platformTransactionManager = platformTransactionManager;
        this.imfTasklet = imfTasklet;
    }

    @Bean
    public Job imfJob() {
        return new JobBuilder("imfJob", jobRepository)
                .start(step())
                .build();
    }

    @Bean
    protected Step step() {
        return new StepBuilder("step", jobRepository)
                .tasklet(imfTasklet, platformTransactionManager)
                .build();
    }
}