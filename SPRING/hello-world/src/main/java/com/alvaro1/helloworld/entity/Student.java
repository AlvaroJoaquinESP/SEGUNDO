package com.alvaro1.helloworld.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
// Necesita un constructor vacío. ¿Lo aplica por defecto o hace falta indicarlo?
@NoArgsConstructor
@Getter
@Setter
@ToString
// @Entity se utiliza para definir una clase como una entidad de base de datos.
@Entity
// Indico el nombre de la tabla. ¿Lo pondría así por defecto?
@Table(name = "students")
public class Student {

    // Indico la primary key de la tabla así.
    @Id
    /* Esta etiqueta se utiliza junto a la etiqueta @Id
       para indicar que el valor de su clave primaria será
       GENERADO AUTOMÁTICAMENTE.
     */
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    /*
    * Por defecto los nombres son siempre en inglés.
    * Si por defecto quisiera ponerlo en otro idioma sería asi:
    * @Column(name = "nombre")
    * */
    private String name;
    private String email;
    private LocalDate bornDate;

    public Student(LocalDate bornDate, String email, Integer id, String name) {
        this.bornDate = bornDate;
        this.email = email;
        this.id = id;
        this.name = name;
    }



}
