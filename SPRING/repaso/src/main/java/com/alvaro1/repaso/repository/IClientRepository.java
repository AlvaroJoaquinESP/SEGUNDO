package com.alvaro1.repaso.repository;

import com.alvaro1.repaso.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClientRepository extends JpaRepository<Client, Long> {
}
