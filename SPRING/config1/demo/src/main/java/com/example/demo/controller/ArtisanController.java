package com.example.demo.controller;

import org.springframework.web.bind.annotation.*;

import java.util.List;

public class ArtisanController {
    @RestController
    public class UserRestController {

        @GetMapping("/user")
        public ResponseEntity<List<SecurityProperties.User>> getAllUsers() {

        }
        @GetMapping("/user/findById")
        public ResponseEntity<User> getUserById(@RequestParam Long id) {

        }
        /* La diferencia con el metodo de arriba, es que pasa el parametro en el path
        de la ruta, en vez de como parametro*/
        @GetMapping("/user/{id}")
        public ResponseEntity<User> getUserByPathId(@PathVariable Long id) {

        }
        @PostMapping(("/user"))
        public ResponseEntity<User> createUser(@RequestBody User user) {

        }

        @PatchMapping("/user")
        public ResponseEntity<User> updateUser(@RequestBody User user) {

        }

        @DeleteMapping("/user")
        public ResponseEntity<Void> deleteUserById(@RequestParam Long id) {

        }
    }
}
