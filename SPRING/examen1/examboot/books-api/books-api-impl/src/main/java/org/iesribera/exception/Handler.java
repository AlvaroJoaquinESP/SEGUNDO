package org.iesribera.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class Handler {

    @ExceptionHandler(BookConflictException.class)
    public ResponseEntity<ErrorResponse> conflictBookException(BookConflictException ex) {

        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(), 409, "The book already exists");

        return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);
    }
}
