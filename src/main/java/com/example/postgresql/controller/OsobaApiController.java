package com.example.postgresql.controller;

import com.example.postgresql.model.Osoba;
import com.example.postgresql.repository.OsobaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/osobe")
public class OsobaApiController {

    @Autowired
    private OsobaRepository osobaRepository;

    @PostMapping
    public Osoba kreirajOsobu(@RequestBody Osoba osoba) {
        return osobaRepository.save(osoba);
    }

    @GetMapping
    public List<Osoba> sveOsobe() {
        return osobaRepository.findAll();
    }
}
