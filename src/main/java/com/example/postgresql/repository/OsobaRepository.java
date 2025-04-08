package com.example.postgresql.repository;

import com.example.postgresql.model.Osoba;
import org.springframework.data.jpa.repository.JpaRepository;

public interface OsobaRepository extends JpaRepository<Osoba, Long> {
}
