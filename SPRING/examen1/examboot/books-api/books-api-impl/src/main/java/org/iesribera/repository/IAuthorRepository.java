package org.iesribera.repository;

import org.iesribera.entity.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IAuthorRepository extends JpaRepository <Author, Long> {

    @Query("SELECT a FROM Author a WHERE a.awards = (SELECT MAX(au.awards) FROM Author au)")
    List<Author> findAuthorMaxAwards();
}
