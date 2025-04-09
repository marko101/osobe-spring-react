import React, { useState } from "react";
import axios from "axios";

function Unos() {
  const [ime, setIme] = useState("");
  const [prezime, setPrezime] = useState("");
  const [poruka, setPoruka] = useState("");
  const [datumRodjenja, setDatumRodjenja] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8081/api/osobe", { ime, prezime, datumRodjenja, email }).then((res) => {
      setPoruka("Uspešno sačuvano!");
      setIme("");
      setPrezime("");
    }).catch(() => {
      setPoruka("Greška prilikom čuvanja.");
    });
  };

  return (
    <div className="container">
      <h2 className="mb-4">Unesi osobu</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control mb-2" placeholder="Ime" value={ime} onChange={e => setIme(e.target.value)} />
        <input type="text" className="form-control mb-2" placeholder="Prezime" value={prezime} onChange={e => setPrezime(e.target.value)} />
        <input type="date" className="form-control mb-2" placeholder="Datum rođenja" value={datumRodjenja} onChange={e => setDatumRodjenja(e.target.value)} />
        <input type="email" className="form-control mb-3" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <button className="btn btn-primary">Sačuvaj</button>
      </form>
      {poruka && <div className="mt-3 alert alert-info">{poruka}</div>}
    </div>
  );
  }

export default Unos;