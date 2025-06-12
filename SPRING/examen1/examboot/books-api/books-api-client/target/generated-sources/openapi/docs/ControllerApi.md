# ControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createBook**](ControllerApi.md#createBook) | **POST** /books/create |  |
| [**getAllBooksByGenre**](ControllerApi.md#getAllBooksByGenre) | **GET** /books/category/{genre} |  |
| [**getMaxAwards**](ControllerApi.md#getMaxAwards) | **GET** /books/maxAwards |  |



## createBook

> BookDTO createBook(requestCreateBookDTO)



### Example

```java
// Import classes:
import org.generator.ApiClient;
import org.generator.ApiException;
import org.generator.Configuration;
import org.generator.models.*;
import org.generator.api.ControllerApi;

public class Example {
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

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **requestCreateBookDTO** | [**RequestCreateBookDTO**](RequestCreateBookDTO.md)|  | |

### Return type

[**BookDTO**](BookDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getAllBooksByGenre

> List&lt;BookDTO&gt; getAllBooksByGenre(genre)



### Example

```java
// Import classes:
import org.generator.ApiClient;
import org.generator.ApiException;
import org.generator.Configuration;
import org.generator.models.*;
import org.generator.api.ControllerApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost:8080");

        ControllerApi apiInstance = new ControllerApi(defaultClient);
        String genre = "NOVEL"; // String | 
        try {
            List<BookDTO> result = apiInstance.getAllBooksByGenre(genre);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ControllerApi#getAllBooksByGenre");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **genre** | **String**|  | [enum: NOVEL, FANTASY, ROMANCE, PROGRAMMING] |

### Return type

[**List&lt;BookDTO&gt;**](BookDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getMaxAwards

> List&lt;AuthorDTO&gt; getMaxAwards()



### Example

```java
// Import classes:
import org.generator.ApiClient;
import org.generator.ApiException;
import org.generator.Configuration;
import org.generator.models.*;
import org.generator.api.ControllerApi;

public class Example {
    public static void main(String[] args) {
        ApiClient defaultClient = Configuration.getDefaultApiClient();
        defaultClient.setBasePath("http://localhost:8080");

        ControllerApi apiInstance = new ControllerApi(defaultClient);
        try {
            List<AuthorDTO> result = apiInstance.getMaxAwards();
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ControllerApi#getMaxAwards");
            System.err.println("Status code: " + e.getCode());
            System.err.println("Reason: " + e.getResponseBody());
            System.err.println("Response headers: " + e.getResponseHeaders());
            e.printStackTrace();
        }
    }
}
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**List&lt;AuthorDTO&gt;**](AuthorDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

