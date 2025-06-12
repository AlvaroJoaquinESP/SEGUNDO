package org.iesribera.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.iesribera.dto.AuthorDTO;
import org.iesribera.dto.BookDTO;
import org.iesribera.dto.RequestCreateBookDTO;
import org.iesribera.entity.Author;
import org.iesribera.entity.Book;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-06-12T11:09:55+0200",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 22.0.1 (Oracle Corporation)"
)
@Component
public class IMapperImpl implements IMapper {

    @Override
    public Book RequestCreateDTOtoBook(RequestCreateBookDTO requestCreateBookDTO) {
        if ( requestCreateBookDTO == null ) {
            return null;
        }

        Book.BookBuilder book = Book.builder();

        book.author( requestCreateBookDTOToAuthor( requestCreateBookDTO ) );
        book.title( requestCreateBookDTO.getTitle() );
        book.isbn( requestCreateBookDTO.getIsbn() );
        book.genre( requestCreateBookDTO.getGenre() );
        book.publishYear( requestCreateBookDTO.getPublishYear() );

        return book.build();
    }

    @Override
    public BookDTO BookToBookDTO(Book book) {
        if ( book == null ) {
            return null;
        }

        BookDTO.BookDTOBuilder bookDTO = BookDTO.builder();

        bookDTO.id( book.getId() );
        bookDTO.title( book.getTitle() );
        bookDTO.isbn( book.getIsbn() );
        bookDTO.genre( book.getGenre() );
        bookDTO.publishYear( book.getPublishYear() );
        bookDTO.author( book.getAuthor() );

        return bookDTO.build();
    }

    @Override
    public List<BookDTO> ListBooksToListBooksDTO(List<Book> bookList) {
        if ( bookList == null ) {
            return null;
        }

        List<BookDTO> list = new ArrayList<BookDTO>( bookList.size() );
        for ( Book book : bookList ) {
            list.add( BookToBookDTO( book ) );
        }

        return list;
    }

    @Override
    public List<AuthorDTO> ListAuthorToListhAuthorDTO(List<Author> authorList) {
        if ( authorList == null ) {
            return null;
        }

        List<AuthorDTO> list = new ArrayList<AuthorDTO>( authorList.size() );
        for ( Author author : authorList ) {
            list.add( authorToAuthorDTO( author ) );
        }

        return list;
    }

    protected Author requestCreateBookDTOToAuthor(RequestCreateBookDTO requestCreateBookDTO) {
        if ( requestCreateBookDTO == null ) {
            return null;
        }

        Author.AuthorBuilder author = Author.builder();

        author.id( requestCreateBookDTO.getAuthorId() );

        return author.build();
    }

    protected AuthorDTO authorToAuthorDTO(Author author) {
        if ( author == null ) {
            return null;
        }

        AuthorDTO.AuthorDTOBuilder authorDTO = AuthorDTO.builder();

        authorDTO.id( author.getId() );
        authorDTO.name( author.getName() );
        authorDTO.nationality( author.getNationality() );
        authorDTO.birthDate( author.getBirthDate() );
        authorDTO.awards( author.getAwards() );

        return authorDTO.build();
    }
}
