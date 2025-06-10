package org.iesribera.service;

import org.iesribera.dto.BookDTO;
import org.iesribera.dto.RequestCreateBookDTO;
import org.springframework.http.ResponseEntity;

public interface IService {
    BookDTO createBook(RequestCreateBookDTO requestCreateBookDTO);
}
