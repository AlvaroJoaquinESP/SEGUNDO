package org.iesribera.repository;
import org.iesribera.entity.Book;
import org.iesribera.enums.BookGenre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IBookRepository extends JpaRepository <Book, Long> {

    Book getBookByIsbn (String isbn);

    List<Book> findBooksByGenre(BookGenre genre);
}
