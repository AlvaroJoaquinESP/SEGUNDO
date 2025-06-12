package org.iesribera.service;

import org.iesribera.dto.AuthorDTO;
import org.iesribera.dto.BookDTO;
import org.iesribera.dto.RequestCreateBookDTO;
import org.iesribera.enums.BookGenre;

import java.util.List;

public interface IService {
    BookDTO createBook(RequestCreateBookDTO requestCreateBookDTO);
    List<BookDTO> getAllBooksByGenre(BookGenre genre);
    List<AuthorDTO> getMaxAwards();
}
