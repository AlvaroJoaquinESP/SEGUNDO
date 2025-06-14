/*
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.generator.api;

import org.generator.model.AuthorDTO;
import org.generator.model.BookDTO;
import org.generator.model.RequestCreateBookDTO;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.web.client.RestClientException;

import java.time.LocalDate;
import java.time.OffsetDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for ControllerApi
 */
@Disabled
class ControllerApiTest {

    private final ControllerApi api = new ControllerApi();

    
    /**
     * 
     *
     * 
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void createBookTest() {
        RequestCreateBookDTO requestCreateBookDTO = null;

        BookDTO response = api.createBook(requestCreateBookDTO);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void getAllBooksByGenreTest() {
        String genre = null;

        List<BookDTO> response = api.getAllBooksByGenre(genre);

        // TODO: test validations
    }
    
    /**
     * 
     *
     * 
     *
     * @throws RestClientException
     *          if the Api call fails
     */
    @Test
    void getMaxAwardsTest() {

        List<AuthorDTO> response = api.getMaxAwards();

        // TODO: test validations
    }
    
}
