package org.iesribera.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.support.ResourceTransactionManager;
import org.springframework.validation.FieldError;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class HandlerException {

   /* private final ResourceTransactionManager resourceTransactionManager;

    public HandlerException(ResourceTransactionManager resourceTransactionManager) {
        this.resourceTransactionManager = resourceTransactionManager;
    }*/

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<ErrorResponse> handleNotFoundException(NotFoundException ex) {
        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(),
                "Error not found exception",
                HttpStatus.NOT_FOUND.value());

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {

        Map<String, String> errors = new HashMap<>();
        for(FieldError fieldError: ex.getBindingResult().getFieldErrors()){
            errors.put(fieldError.getField(),fieldError.getDefaultMessage());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new FieldErrorResponse(ex.getMessage()
                        ,"Errores de validación de datos de entrada"
                        ,HttpStatus.BAD_REQUEST.value()
                        ,errors));

    }


    @ExceptionHandler(NotFoundAgentException.class)
    public ResponseEntity<ErrorResponse> notFoundAgentException (NotFoundAgentException ex) {

       ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(), "Agent not fount", 404);

       return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);

    }


    @ExceptionHandler(ForbiddentMissionException.class)
    public ResponseEntity<ErrorResponse> forbiddenMissionException (ForbiddentMissionException ex) {

        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(), "Forbidden mission", 403);

        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(errorResponse);

    }


    @ExceptionHandler(NotFoundMissionException.class)
    public ResponseEntity<ErrorResponse> notFoundMissionException (NotFoundMissionException ex) {

        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(), "Mission not found", 404);

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);

    }

    @ExceptionHandler(BadRequestMissionException.class)
    public ResponseEntity<ErrorResponse> badRequestMissionException (BadRequestMissionException ex) {

        ErrorResponse errorResponse = new ErrorResponse(ex.getMessage(), "Mission is failed or completed", 400);

        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorResponse);

    }
}
