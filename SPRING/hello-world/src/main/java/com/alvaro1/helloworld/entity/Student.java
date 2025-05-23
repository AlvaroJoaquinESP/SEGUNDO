package com.alvaro1.helloworld.entity;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "students")
public class Student {

    // Indico la primary key de la tabla así.
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    /*
    * Por defecto los nombres son siempre en inglés.
    * Si por defecto quisiera ponerlo en otro idioma sería asi:
    * */
    @Column(name = "nombre")
    private String name;
    private String email;
    private LocalDate bornDate;

    public Student(LocalDate bornDate, String email, Integer id, String name) {
        this.bornDate = bornDate;
        this.email = email;
        this.id = id;
        this.name = name;
    }

    // Necesita un constructor vacío.
    public Student() {
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

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
