package org.iesribera.mapper;

import org.iesribera.dto.AuthorDTO;
import org.iesribera.dto.BookDTO;
import org.iesribera.dto.RequestCreateBookDTO;
import org.iesribera.entity.Author;
import org.iesribera.entity.Book;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;


@Mapper(componentModel = "spring")
public interface IMapper {
    // Estos dos son para el crear.
    @Mapping(source = "authorId", target = "author.id")
    Book RequestCreateDTOtoBook (RequestCreateBookDTO requestCreateBookDTO);

    BookDTO BookToBookDTO (Book book);

    List<BookDTO> ListBooksToListBooksDTO (List<Book> bookList);

    List<AuthorDTO> ListAuthorToListhAuthorDTO (List<Author> authorList);


}
