package com.alvaro1.helloworld.dto;

import lombok.*;

import java.time.LocalDate;

@Getter @Setter
@ToString
@Builder
 // @NoArgsConstructor CONSTRUCTOR VACÍO.
public class StudentDTO {
    private static int count_id = 1;
    private Integer id;
    private String name;
    private String email;
    private LocalDate bornDate;


    public StudentDTO(String name, String email, LocalDate bornDate) {
        this.id = count_id;
        count_id++;
        this.name = name;
        this.email = email;
        this.bornDate = bornDate;
    }

 /*
    public String getName() {
        return name;
    }

    public void setName(String name) {
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

    public Integer getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Students{" +
                "id=" + id + '\'' +
                "bornDate=" + bornDate +
                ", name='" + name + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
    */
  
}
