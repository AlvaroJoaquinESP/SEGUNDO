package org.iesribera.batch.config;

import org.generator.ApiClient;
import org.generator.api.ControllerApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public ApiClient apiClient() {
        ApiClient apiClient = new ApiClient();
        //Mover la URL al properties mejor!!!
        apiClient.setBasePath("http://localhost:8080/"); // URL base de la API
        return apiClient;
    }

    @Bean
    public ControllerApi ControllerApi(ApiClient apiClient) {
        return new ControllerApi(apiClient);
    }
}