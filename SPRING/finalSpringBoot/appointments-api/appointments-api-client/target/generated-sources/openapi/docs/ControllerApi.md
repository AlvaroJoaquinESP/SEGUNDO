# ControllerApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createAppointment**](ControllerApi.md#createAppointment) | **POST** /JonHealth/create |  |
| [**getAppointmentsByPatient**](ControllerApi.md#getAppointmentsByPatient) | **GET** /JonHealth/appointmentsById/{patientId} |  |
| [**getPatiensByDoctor**](ControllerApi.md#getPatiensByDoctor) | **GET** /JonHealth/listOfPatiens/{doctorId} |  |
| [**updateAppointment**](ControllerApi.md#updateAppointment) | **POST** /JonHealth/updateAppointment |  |



## createAppointment

> AppointmentDTO createAppointment(requestCreateAppointmentDTO)



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
        RequestCreateAppointmentDTO requestCreateAppointmentDTO = new RequestCreateAppointmentDTO(); // RequestCreateAppointmentDTO | 
        try {
            AppointmentDTO result = apiInstance.createAppointment(requestCreateAppointmentDTO);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ControllerApi#createAppointment");
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
| **requestCreateAppointmentDTO** | [**RequestCreateAppointmentDTO**](RequestCreateAppointmentDTO.md)|  | |

### Return type

[**AppointmentDTO**](AppointmentDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getAppointmentsByPatient

> Integer getAppointmentsByPatient(patientId)



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
        Long patientId = 56L; // Long | 
        try {
            Integer result = apiInstance.getAppointmentsByPatient(patientId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ControllerApi#getAppointmentsByPatient");
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
| **patientId** | **Long**|  | |

### Return type

**Integer**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## getPatiensByDoctor

> List&lt;PatientDTO&gt; getPatiensByDoctor(doctorId)



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
        Long doctorId = 56L; // Long | 
        try {
            List<PatientDTO> result = apiInstance.getPatiensByDoctor(doctorId);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ControllerApi#getPatiensByDoctor");
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
| **doctorId** | **Long**|  | |

### Return type

[**List&lt;PatientDTO&gt;**](PatientDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |


## updateAppointment

> AppointmentDTO updateAppointment(appointmentStatus, body)



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
        String appointmentStatus = "SCHEDULED"; // String | 
        Long body = 56L; // Long | 
        try {
            AppointmentDTO result = apiInstance.updateAppointment(appointmentStatus, body);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling ControllerApi#updateAppointment");
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
| **appointmentStatus** | **String**|  | [enum: SCHEDULED, COMPLETED, CANCELLED] |
| **body** | **Long**|  | |

### Return type

[**AppointmentDTO**](AppointmentDTO.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

