package org.iesribera.service;

import org.iesribera.dto.BookDTO;
import org.iesribera.dto.RequestCreateBookDTO;
import org.iesribera.entity.Book;
import org.iesribera.exception.BookConflictException;
import org.iesribera.mapper.IMapper;
import org.iesribera.repository.IAuthorRepository;
import org.iesribera.repository.IBookRepository;
import org.iesribera.repository.ILoanRepositirory;
import org.springframework.stereotype.Service;

@Service
public class ServiceImpl implements IService {

    private final IBookRepository bookRepository;
    private final IAuthorRepository authorRepository;
    private final ILoanRepositirory loanRepositirory;
    private final IMapper mapper;

    public ServiceImpl(IAuthorRepository authorRepository, IBookRepository bookRepository, ILoanRepositirory loanRepositirory, IMapper mapper) {
        this.authorRepository = authorRepository;
        this.bookRepository = bookRepository;
        this.loanRepositirory = loanRepositirory;
        this.mapper = mapper;
    }

    @Override
    public BookDTO createBook(RequestCreateBookDTO requestCreateBookDTO) {

        Book book = this.mapper.RequestCreateDTOtoBook(requestCreateBookDTO);

        if (this.bookRepository.getBookByIsbn(book.getIsbn()) != null) {
            throw new BookConflictException("The book with isbn " + book.getIsbn() + " already exists");
        }

        return this.mapper.BookToBookDTO(this.bookRepository.save(book));

    }
}
