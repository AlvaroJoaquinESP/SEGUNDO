package org.generator.api;

import org.generator.ApiClient;
import org.generator.BaseApi;

import org.generator.model.AppointmentDTO;
import org.generator.model.PatientDTO;
import org.generator.model.RequestCreateAppointmentDTO;

import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-06-12T23:58:19.133047400+02:00[Europe/Madrid]", comments = "Generator version: 7.10.0")
public class ControllerApi extends BaseApi {

    public ControllerApi() {
        super(new ApiClient());
    }

    public ControllerApi(ApiClient apiClient) {
        super(apiClient);
    }

    /**
     * 
     * 
     * <p><b>200</b> - OK
     * @param requestCreateAppointmentDTO  (required)
     * @return AppointmentDTO
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public AppointmentDTO createAppointment(RequestCreateAppointmentDTO requestCreateAppointmentDTO) throws RestClientException {
        return createAppointmentWithHttpInfo(requestCreateAppointmentDTO).getBody();
    }

    /**
     * 
     * 
     * <p><b>200</b> - OK
     * @param requestCreateAppointmentDTO  (required)
     * @return ResponseEntity&lt;AppointmentDTO&gt;
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public ResponseEntity<AppointmentDTO> createAppointmentWithHttpInfo(RequestCreateAppointmentDTO requestCreateAppointmentDTO) throws RestClientException {
        Object localVarPostBody = requestCreateAppointmentDTO;
        
        // verify the required parameter 'requestCreateAppointmentDTO' is set
        if (requestCreateAppointmentDTO == null) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing the required parameter 'requestCreateAppointmentDTO' when calling createAppointment");
        }
        

        final MultiValueMap<String, String> localVarQueryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders localVarHeaderParams = new HttpHeaders();
        final MultiValueMap<String, String> localVarCookieParams = new LinkedMultiValueMap<String, String>();
        final MultiValueMap<String, Object> localVarFormParams = new LinkedMultiValueMap<String, Object>();

        final String[] localVarAccepts = { 
            "*/*"
         };
        final List<MediaType> localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        final String[] localVarContentTypes = { 
            "application/json"
         };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] {  };

        ParameterizedTypeReference<AppointmentDTO> localReturnType = new ParameterizedTypeReference<AppointmentDTO>() {};
        return apiClient.invokeAPI("/JonHealth/create", HttpMethod.POST, Collections.<String, Object>emptyMap(), localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localReturnType);
    }
    /**
     * 
     * 
     * <p><b>200</b> - OK
     * @param patientId  (required)
     * @return Integer
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public Integer getAppointmentsByPatient(Long patientId) throws RestClientException {
        return getAppointmentsByPatientWithHttpInfo(patientId).getBody();
    }

    /**
     * 
     * 
     * <p><b>200</b> - OK
     * @param patientId  (required)
     * @return ResponseEntity&lt;Integer&gt;
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public ResponseEntity<Integer> getAppointmentsByPatientWithHttpInfo(Long patientId) throws RestClientException {
        Object localVarPostBody = null;
        
        // verify the required parameter 'patientId' is set
        if (patientId == null) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing the required parameter 'patientId' when calling getAppointmentsByPatient");
        }
        
        // create path and map variables
        final Map<String, Object> uriVariables = new HashMap<String, Object>();
        uriVariables.put("patientId", patientId);

        final MultiValueMap<String, String> localVarQueryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders localVarHeaderParams = new HttpHeaders();
        final MultiValueMap<String, String> localVarCookieParams = new LinkedMultiValueMap<String, String>();
        final MultiValueMap<String, Object> localVarFormParams = new LinkedMultiValueMap<String, Object>();

        final String[] localVarAccepts = { 
            "*/*"
         };
        final List<MediaType> localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        final String[] localVarContentTypes = {  };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] {  };

        ParameterizedTypeReference<Integer> localReturnType = new ParameterizedTypeReference<Integer>() {};
        return apiClient.invokeAPI("/JonHealth/appointmentsById/{patientId}", HttpMethod.GET, uriVariables, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localReturnType);
    }
    /**
     * 
     * 
     * <p><b>200</b> - OK
     * @param doctorId  (required)
     * @return List&lt;PatientDTO&gt;
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public List<PatientDTO> getPatiensByDoctor(Long doctorId) throws RestClientException {
        return getPatiensByDoctorWithHttpInfo(doctorId).getBody();
    }

    /**
     * 
     * 
     * <p><b>200</b> - OK
     * @param doctorId  (required)
     * @return ResponseEntity&lt;List&lt;PatientDTO&gt;&gt;
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public ResponseEntity<List<PatientDTO>> getPatiensByDoctorWithHttpInfo(Long doctorId) throws RestClientException {
        Object localVarPostBody = null;
        
        // verify the required parameter 'doctorId' is set
        if (doctorId == null) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing the required parameter 'doctorId' when calling getPatiensByDoctor");
        }
        
        // create path and map variables
        final Map<String, Object> uriVariables = new HashMap<String, Object>();
        uriVariables.put("doctorId", doctorId);

        final MultiValueMap<String, String> localVarQueryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders localVarHeaderParams = new HttpHeaders();
        final MultiValueMap<String, String> localVarCookieParams = new LinkedMultiValueMap<String, String>();
        final MultiValueMap<String, Object> localVarFormParams = new LinkedMultiValueMap<String, Object>();

        final String[] localVarAccepts = { 
            "*/*"
         };
        final List<MediaType> localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        final String[] localVarContentTypes = {  };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] {  };

        ParameterizedTypeReference<List<PatientDTO>> localReturnType = new ParameterizedTypeReference<List<PatientDTO>>() {};
        return apiClient.invokeAPI("/JonHealth/listOfPatiens/{doctorId}", HttpMethod.GET, uriVariables, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localReturnType);
    }
    /**
     * 
     * 
     * <p><b>200</b> - OK
     * @param appointmentStatus  (required)
     * @param body  (required)
     * @return AppointmentDTO
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public AppointmentDTO updateAppointment(String appointmentStatus, Long body) throws RestClientException {
        return updateAppointmentWithHttpInfo(appointmentStatus, body).getBody();
    }

    /**
     * 
     * 
     * <p><b>200</b> - OK
     * @param appointmentStatus  (required)
     * @param body  (required)
     * @return ResponseEntity&lt;AppointmentDTO&gt;
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public ResponseEntity<AppointmentDTO> updateAppointmentWithHttpInfo(String appointmentStatus, Long body) throws RestClientException {
        Object localVarPostBody = body;
        
        // verify the required parameter 'appointmentStatus' is set
        if (appointmentStatus == null) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing the required parameter 'appointmentStatus' when calling updateAppointment");
        }
        
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new HttpClientErrorException(HttpStatus.BAD_REQUEST, "Missing the required parameter 'body' when calling updateAppointment");
        }
        

        final MultiValueMap<String, String> localVarQueryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders localVarHeaderParams = new HttpHeaders();
        final MultiValueMap<String, String> localVarCookieParams = new LinkedMultiValueMap<String, String>();
        final MultiValueMap<String, Object> localVarFormParams = new LinkedMultiValueMap<String, Object>();

        localVarQueryParams.putAll(apiClient.parameterToMultiValueMap(null, "appointmentStatus", appointmentStatus));
        

        final String[] localVarAccepts = { 
            "*/*"
         };
        final List<MediaType> localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        final String[] localVarContentTypes = { 
            "application/json"
         };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] {  };

        ParameterizedTypeReference<AppointmentDTO> localReturnType = new ParameterizedTypeReference<AppointmentDTO>() {};
        return apiClient.invokeAPI("/JonHealth/updateAppointment", HttpMethod.POST, Collections.<String, Object>emptyMap(), localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, localReturnType);
    }

    @Override
    public <T> ResponseEntity<T> invokeAPI(String url, HttpMethod method, Object request, ParameterizedTypeReference<T> returnType) throws RestClientException {
        String localVarPath = url.replace(apiClient.getBasePath(), "");
        Object localVarPostBody = request;

        final Map<String, Object> uriVariables = new HashMap<String, Object>();
        final MultiValueMap<String, String> localVarQueryParams = new LinkedMultiValueMap<String, String>();
        final HttpHeaders localVarHeaderParams = new HttpHeaders();
        final MultiValueMap<String, String> localVarCookieParams = new LinkedMultiValueMap<String, String>();
        final MultiValueMap<String, Object> localVarFormParams = new LinkedMultiValueMap<String, Object>();

        final String[] localVarAccepts = { 
            "*/*"
         };
        final List<MediaType> localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        final String[] localVarContentTypes = { 
            "application/json"
         };
        final MediaType localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);

        String[] localVarAuthNames = new String[] {  };

        return apiClient.invokeAPI(localVarPath, method, uriVariables, localVarQueryParams, localVarPostBody, localVarHeaderParams, localVarCookieParams, localVarFormParams, localVarAccept, localVarContentType, localVarAuthNames, returnType);
    }
}
