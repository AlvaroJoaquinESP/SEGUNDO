package org.iesribera.repository;

import org.iesribera.dto.BookDTO;
import org.iesribera.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBookRepository extends JpaRepository <Book, Long> {

    Book getBookByIsbn (String isbn);
}
