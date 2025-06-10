package org.iesribera.controller;

import jakarta.validation.Valid;
import org.iesribera.dto.BookDTO;
import org.iesribera.dto.RequestCreateBookDTO;
import org.iesribera.service.IService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/books/")
public class Controller {

    private final IService service;

    public Controller(IService service) {
        this.service = service;
    }

    @PostMapping("create")
    public ResponseEntity<BookDTO> createBook(@RequestBody @Valid RequestCreateBookDTO requestCreateBookDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(this.service.createBook(requestCreateBookDTO));
    }
}
