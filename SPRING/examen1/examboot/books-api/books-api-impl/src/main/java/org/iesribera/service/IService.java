package org.iesribera.service;

import org.iesribera.dto.BookDTO;
import org.iesribera.dto.RequestCreateBookDTO;

import java.util.List;

public interface IService {
    BookDTO createBook(RequestCreateBookDTO requestCreateBookDTO);
    List<BookDTO> getBooksByGenre();
}
