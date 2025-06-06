/*
 * Swagger Petstore - OpenAPI 3.0
 * This is a sample Pet Store Server based on the OpenAPI 3.0 specification.  You can find out more about Swagger at [https://swagger.io](https://swagger.io). In the third iteration of the pet store, we've switched to the design first approach! You can now help us improve the API whether it's by making changes to the definition itself or to the code. That way, with time, we can improve the API in general, and expose some of the new features in OAS3.  _If you're looking for the Swagger 2.0/OAS 2.0 version of Petstore, then click [here](https://editor.swagger.io/?url=https://petstore.swagger.io/v2/swagger.yaml). Alternatively, you can load via the `Edit > Load Petstore OAS 2.0` menu option!_  Some useful links: - [The Pet Store repository](https://github.com/swagger-api/swagger-petstore) - [The source API definition for the Pet Store](https://github.com/swagger-api/swagger-petstore/blob/master/src/main/resources/openapi.yaml)
 *
 * The version of the OpenAPI document: 1.0.11
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.generator;

import org.springframework.web.client.RestClientException;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;

@jakarta.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2025-06-04T10:18:14.262460900+02:00[Europe/Madrid]", comments = "Generator version: 7.10.0")
public abstract class BaseApi {

    protected ApiClient apiClient;

    public BaseApi() {
        this(new ApiClient());
    }

    public BaseApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Directly invoke the API for the given URL. Useful if the API returns direct links/URLs for subsequent requests.
     * @param url The URL for the request, either full URL or only the path.
     * @param method The HTTP method for the request.
     * @return ResponseEntity&lt;Void&gt;
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public ResponseEntity<Void> invokeAPI(String url, HttpMethod method) throws RestClientException {
        return invokeAPI(url, method, null, new ParameterizedTypeReference<Void>() {});
    }

    /**
     * Directly invoke the API for the given URL. Useful if the API returns direct links/URLs for subsequent requests.
     * @param url The URL for the request, either full URL or only the path.
     * @param method The HTTP method for the request.
     * @param request The request object.
     * @return ResponseEntity&lt;Void&gt;
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public ResponseEntity<Void> invokeAPI(String url, HttpMethod method, Object request) throws RestClientException {
        return invokeAPI(url, method, request, new ParameterizedTypeReference<Void>() {});
    }

    /**
     * Directly invoke the API for the given URL. Useful if the API returns direct links/URLs for subsequent requests.
     * @param url The URL for the request, either full URL or only the path.
     * @param method The HTTP method for the request.
     * @param returnType The return type.
     * @return ResponseEntity in the specified type.
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public <T> ResponseEntity<T> invokeAPI(String url, HttpMethod method, ParameterizedTypeReference<T> returnType) throws RestClientException {
        return invokeAPI(url, method, null, returnType);
    }

    /**
     * Directly invoke the API for the given URL. Useful if the API returns direct links/URLs for subsequent requests.
     * @param url The URL for the request, either full URL or only the path.
     * @param method The HTTP method for the request.
     * @param request The request object.
     * @param returnType The return type.
     * @return ResponseEntity in the specified type.
     * @throws RestClientException if an error occurs while attempting to invoke the API
     */
    public abstract <T> ResponseEntity<T> invokeAPI(String url, HttpMethod method, Object request, ParameterizedTypeReference<T> returnType) throws RestClientException;
}
