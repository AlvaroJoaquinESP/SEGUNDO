package org.iesribera.batch.config;

import org.iesribera.batch.tasklet.BooksTasklet;
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
    private final BooksTasklet booksTasklet;

    public BatchConfig(JobRepository jobRepository, PlatformTransactionManager platformTransactionManager, BooksTasklet booksTasklet) {
        this.jobRepository = jobRepository;
        this.platformTransactionManager = platformTransactionManager;
        this.booksTasklet = booksTasklet;
    }

    @Bean
    public Job booksJob() {
        return new JobBuilder("booksJob", jobRepository)
                .start(step())
                .build();
    }

    @Bean
    protected Step step() {
        return new StepBuilder("step", jobRepository)
                .tasklet(booksTasklet, platformTransactionManager)
                .build();
    }
}