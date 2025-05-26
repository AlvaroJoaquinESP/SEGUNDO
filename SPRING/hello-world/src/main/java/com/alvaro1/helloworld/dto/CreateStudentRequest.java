package com.alvaro1.helloworld.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Past;

import java.time.LocalDate;

public class CreateStudentRequest {
    /*@NotEmpty(message = "Name is mandatory")*/
    @NotEmpty()
    private String name;
    /*@Email(message = "Email is mandatory")
    * Debe tener la estructura local-part@domain.

    Local-part: puede incluir letras, números y algunos caracteres especiales permitidos (como . + _ -).

    Domain: debe tener al menos un punto (.) para separar el dominio de nivel superior, y solo caracteres alfanuméricos y guiones.

    No permite espacios ni caracteres especiales fuera del conjunto válido.

    Ejemplos que acepta:
    - usuario@dominio.com

    - usuario.nombre+etiqueta@sub.dominio.com

    - user_name-123@domain.co.uk

    */
    @NotEmpty() @Email()
    private String email;
    // Indica que la fecha tiene que ser ANTERIOR a la hora y fecha actuales.
    @NotEmpty() @Past
    private LocalDate bornDate;

    public CreateStudentRequest(LocalDate bornDate, String email, String name) {
        this.bornDate = bornDate;
        this.email = email;
        this.name = name;
    }

    public LocalDate getBornDate() {
        return bornDate;
    }

    public void setBornDate(LocalDate bornDate) {
        this.bornDate = bornDate;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
