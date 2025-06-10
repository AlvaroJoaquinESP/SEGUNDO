package org.iesribera.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.iesribera.entity.Book;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class LoanDTO {

    private Long id;
    private Book book;
    private LocalDate loanDate;
    private LocalDate returnDate;

}
