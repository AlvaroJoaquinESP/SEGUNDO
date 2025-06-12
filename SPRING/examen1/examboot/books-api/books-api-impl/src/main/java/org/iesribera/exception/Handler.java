package org.iesribera.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;

@ControllerAdvice
public class Handler {

    @ExceptionHandler(BookConflictException.class)
    public ResponseEntity<ErrorResponse> conflictBookException(BookConflictException ex) {

        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(), 409, "The book already exists");

        return ResponseEntity.status(HttpStatus.CONFLICT).body(errorResponse);

    }



    @ExceptionHandler(BookGenreNotFound.class)
    public ResponseEntity<ErrorResponse> bookGenreNotFound(BookGenreNotFound ex) {

        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(), 404, "Genre was not found");

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);

    }

    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handlerHttpMessageNotReadableException(MethodArgumentTypeMismatchException ex) {
        String errorMessage = ex.getMessage();
        ErrorResponse errorResponse;

        if (errorMessage != null && errorMessage.contains("enum")) {
            errorResponse = new ErrorResponse(errorMessage, HttpStatus.BAD_REQUEST.value(),"Invalid enum value provided");
        } else {
            errorResponse = new ErrorResponse(errorMessage, HttpStatus.BAD_REQUEST.value(),"Error");
        }

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);
    }

}
