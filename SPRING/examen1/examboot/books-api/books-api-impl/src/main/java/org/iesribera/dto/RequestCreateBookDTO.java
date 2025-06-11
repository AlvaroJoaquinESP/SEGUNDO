package org.iesribera.dto;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Positive;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.iesribera.enums.BookGenre;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class RequestCreateBookDTO {

    @NotEmpty
    private String title;
    @NotEmpty
    private String isbn;
    @Enumerated(EnumType.STRING)
    private BookGenre genre;
    @NotNull
    private Integer publishYear;
    @NotNull @Positive
    private Long authorId;
}
