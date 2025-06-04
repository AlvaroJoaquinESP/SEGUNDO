package student.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

// ¿ Esta clase se utiliza para enviar y procesar mensajes ?

// Esta etiqueta sirve para manejar excepciones y aplicar métodos de majejo de las mismas.
@ControllerAdvice
public class Handler {

    /* Esta etiqueta sirve para manejar excepciones específicas dentro de un controlador,
    o de manera global en la aplicación.*/
    @ExceptionHandler
    public ResponseEntity<ErrorResponse> handleNotFoundStudent(NotFoundStudentException ex) {
        ErrorResponse error = new ErrorResponse(ex.getMessage(), 1111, "") {
        };
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(error);
    }


    @ExceptionHandler(MethodArgumentNotValidException.class)
    // Devuelvo ErrorResponse y no FieldErrorResponse ya que esta última hereda de la primera. Por eso no da error.
    public ResponseEntity<ErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException ex) {

        Map<String, String> errors = new HashMap<>();
        for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {
            errors.put(fieldError.getField(), fieldError.getDefaultMessage());
        }
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(
                new FieldErrorResponse(ex.getMessage()
                        , "Errores de validación de datos de entrada"
                        , HttpStatus.BAD_REQUEST.value()
                        , errors));

    }
}