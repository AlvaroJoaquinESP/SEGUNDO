package com.alvaro1.helloworld.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Past;
import lombok.*;

import java.time.LocalDate;

@Getter
@Setter
@ToString
// @Builder ME DA ERROR ESTO, MÁS SI PONGO EL NOARGSCONSTRUCTOR
@NoArgsConstructor
public class CreateStudentRequest {
    /*@NotEmpty(message = "Name is mandatory")*/
    @NotEmpty()
    private String name;
    // @Email(message = "Email is mandatory")


    @NotEmpty()
    @Email()
    private String email;
    // Indica que la fecha tiene que ser ANTERIOR a la hora y fecha actuales.
    @NotEmpty()
    @Past
    private LocalDate bornDate;

    public CreateStudentRequest(LocalDate bornDate, String email, String name) {
        this.bornDate = bornDate;
        this.email = email;
        this.name = name;
    }
}
