package com.alvaro1.helloworld.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Past;

import java.time.LocalDate;

public class CreateStudentRequest {
    @NotEmpty(message = "Name is mandatory")
    private String name;
    @Email(message = "Email is mandatory")
    private String email;
    @Past
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
