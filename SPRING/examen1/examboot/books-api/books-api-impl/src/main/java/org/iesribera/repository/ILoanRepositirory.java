package org.iesribera.repository;

import org.iesribera.entity.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ILoanRepositirory extends JpaRepository <Loan, Long> {
}
