# Appointments API

- Spring Boot : 3.4.2
- Open Api Generator : 7.10.0
- Swagger : 2.8.4
- Jackson-databind-nullable : 0.2.6
- Java : 17

Generar clases e interfaces a partir de una specification OpenApi.

## Estructura
- En el módulo **appointments-api-client** colocaremos nuestra especificación en la carpeta resources (lo ideal sería que estuviese solo en un único módulo). Se genera un cliente para poder consumir la API REST.
- En nuestro módulo **appointments-api-impl**, podemos implementar las interfaces creadas. Asegúrate de que el paquete con la especificación se importe en tu proyecto y se actualice. En este módulo es donde se implementa toda la API.


**Usar un cliente generado en otro proyecto**
Añadir la dependencia generada y definir el fichero de configuración para inicializar los objetos correspondientes.

```xml

<dependency>
    <groupId>org.iesribera.api</groupId>
    <artifactId>appointments-api-client</artifactId>
    <version>1.0.0-SNAPSHOT</version>
</dependency>
```

```java
@Configuration
public class ApiClientConfig {

    @Bean
    public ApiClient apiClient() {
        ApiClient apiClient = new ApiClient();
        //Mover la URL al properties mejor!!!
        apiClient.setBasePath("http://localhost:8080/"); // URL base de la API
        return apiClient;
    }

    @Bean
    public ArtisanControllerApi artisanControllerApi(ApiClient apiClient) {
        return new ArtisanControllerApi(apiClient);
    }
}
```



En general, este bloque de configuración del plugin openapi-generator-maven-plugin se utiliza para personalizar la generación de código a partir de una especificación OpenAPI en un proyecto Maven.

Puedes ajustar las configuraciones según tus necesidades y requerimientos específicos de tu proyecto, todas las configuraciones del generador se explican con más detalle en el [sitio web de OpenAPI Generator](https://openapi-generator.tech/docs/generators/spring/)
