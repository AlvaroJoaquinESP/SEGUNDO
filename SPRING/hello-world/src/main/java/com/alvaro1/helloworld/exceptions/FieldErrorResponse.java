package com.alvaro1.helloworld.exceptions;

import java.util.HashMap;
import java.util.Map;

public class FieldErrorResponse extends ErrorResponse{

    private Map<String, String> errors = new HashMap<>();

    public FieldErrorResponse(String message, String details, int value, Map<String, String> errors) {
        super(message, value, details);
        this.errors = errors;
    }

    public Map<String, String> getErrors() {
        return errors;
    }

    public void setErrors(Map<String, String> errors) {
        this.errors = errors;
    }
}
