package org.iesribera.dto;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.iesribera.entity.Author;
import org.iesribera.enums.BookGenre;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class BookDTO {

    private Long id;
    private String title;
    private String isbn;
    @Enumerated(EnumType.STRING)
    private BookGenre genre;
    private Integer publishYear;
    private Author author;

}
