package org.iesribera.controller;

import jakarta.validation.Valid;
import org.iesribera.dto.AuthorDTO;
import org.iesribera.dto.BookDTO;
import org.iesribera.dto.RequestCreateBookDTO;
import org.iesribera.enums.BookGenre;
import org.iesribera.service.IService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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




    @GetMapping("category/{genre}")
    public ResponseEntity<List<BookDTO>> getAllBooksByGenre(@PathVariable BookGenre genre) {
        return ResponseEntity.status(HttpStatus.OK).body(this.service.getAllBooksByGenre(genre));
    }


    @GetMapping("maxAwards")
    public ResponseEntity<List<AuthorDTO>> getMaxAwards() {
        return ResponseEntity.status(HttpStatus.OK).body(this.service.getMaxAwards());
    }



}
