# openapi-java-client

OpenAPI definition

- API version: v0

- Build date: 2025-06-12T10:59:05.534167700+02:00[Europe/Madrid]

- Generator version: 7.10.0

No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)


*Automatically generated by the [OpenAPI Generator](https://openapi-generator.tech)*

## Requirements

Building the API client library requires:

1. Java 1.8+
2. Maven/Gradle

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn clean install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn clean deploy
```

Refer to the [OSSRH Guide](http://central.sonatype.org/pages/ossrh-guide.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
  <groupId>org.openapitools</groupId>
  <artifactId>openapi-java-client</artifactId>
  <version>v0</version>
  <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
  repositories {
    mavenCentral()     // Needed if the 'openapi-java-client' jar has been published to maven central.
    mavenLocal()       // Needed if the 'openapi-java-client' jar has been published to the local maven repo.
  }

  dependencies {
     implementation "org.openapitools:openapi-java-client:v0"
  }
```

### Others

At first generate the JAR by executing:

```shell
mvn clean package
```

Then manually install the following JARs:

- `target/openapi-java-client-v0.jar`
- `target/lib/*.jar`

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import org.generator.*;
import org.generator.auth.*;
import org.generator.model.*;
import org.generator.api.ControllerApi;

public class ControllerApiExample {

    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost:8080");
        
        ControllerApi apiInstance = new ControllerApi(defaultClient);
        RequestCreateBookDTO requestCreateBookDTO = new RequestCreateBookDTO(); // RequestCreateBookDTO | 
        try {
            BookDTO result = apiInstance.createBook(requestCreateBookDTO);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ControllerApi#createBook");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *http://localhost:8080*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*ControllerApi* | [**createBook**](docs/ControllerApi.md#createBook) | **POST** /books/create | 
*ControllerApi* | [**getAllBooksByGenre**](docs/ControllerApi.md#getAllBooksByGenre) | **GET** /books/category/{genre} | 
*ControllerApi* | [**getMaxAwards**](docs/ControllerApi.md#getMaxAwards) | **GET** /books/maxAwards | 
*TestControllerApi* | [**test**](docs/TestControllerApi.md#test) | **GET** / | 


## Documentation for Models

 - [Author](docs/Author.md)
 - [AuthorDTO](docs/AuthorDTO.md)
 - [BookDTO](docs/BookDTO.md)
 - [RequestCreateBookDTO](docs/RequestCreateBookDTO.md)


<a id="documentation-for-authorization"></a>
## Documentation for Authorization

Endpoints do not require authorization.


## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author



