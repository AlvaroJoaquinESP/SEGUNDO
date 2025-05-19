package com.alvaro1.helloworld.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController

/*Defino una ruta "principal"*/
@RequestMapping("/api")
public class HelloController {
    /* Las rutas en spring boot se declaran dentro del controller.*/

    /*
    @GetMapping("/hello")
    public  String hello() {
        return "Hello World";
    }
     */

    @GetMapping("/bye")
    public String bye() {
        return "Bye World";
    }

    @GetMapping("/hello")
    public ResponseEntity<String> hello() {

        /*Dos posibilidades. */
        /*return ResponseEntity.status(HttpStatus.OK).body("Hello World");*/
        return ResponseEntity.ok("Hello World");
    }

    @GetMapping("/numbers")
    public ResponseEntity<List<Integer>> listNumbers() {
        List<Integer> list = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        return ResponseEntity.ok(list);
    }
}
