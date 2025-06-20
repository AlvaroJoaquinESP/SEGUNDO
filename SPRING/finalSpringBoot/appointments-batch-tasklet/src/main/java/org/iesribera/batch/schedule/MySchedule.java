package org.iesribera.batch.schedule;

import org.springframework.batch.core.Job;
import org.springframework.batch.core.JobParametersBuilder;
import org.springframework.batch.core.launch.JobLauncher;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

@Component
public class MySchedule {

    private final JobLauncher jobLauncher;
    private final Job appointmentsJob;


    public MySchedule(JobLauncher jobLauncher, Job booksJob) {
        this.jobLauncher = jobLauncher;
        this.appointmentsJob = booksJob;
    }

    @Scheduled(fixedDelayString = "${my.scheduled.task.fixed.delay}")
    public void performJob() throws Exception {
        jobLauncher.run(appointmentsJob, new JobParametersBuilder()
                .addLong("time", System.currentTimeMillis()) // Parámetro único
                .toJobParameters());
    }

}
