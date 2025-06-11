package org.iesribera.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController{

    @GetMapping("/")
    public String test() {
        return "Bienvenid@s al examen de spring boot!!!";
    }
}
