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

    @PutMapping("/{id}")
    public Osoba izmeniOsobu(@PathVariable Long id, @RequestBody Osoba novaOsoba) {
        return osobaRepository.findById(id).map(osoba -> {
            osoba.setIme(novaOsoba.getIme());
            osoba.setPrezime(novaOsoba.getPrezime());
            osoba.setDatumRodjenja(novaOsoba.getDatumRodjenja());
            osoba.setEmail(novaOsoba.getEmail());
            return osobaRepository.save(osoba);
        }).orElseThrow(() -> new RuntimeException("Osoba nije pronađena"));
    }

    @DeleteMapping("/{id}")
    public void obrisiOsobu(@PathVariable Long id) {
        osobaRepository.deleteById(id);
    }


}
