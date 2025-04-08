import React, { useEffect, useState } from "react";
import axios from "axios";

function Lista() {
  const [osobe, setOsobe] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editedOsoba, setEditedOsoba] = useState({
    ime: "",
    prezime: "",
    datumRodjenja: "",
    email: ""
  });

  useEffect(() => {
    axios.get("http://localhost:8080/api/osobe").then((res) => {
      setOsobe(res.data);
    });
  }, []);

  const obrisiOsobu = (id) => {
    axios.delete(`http://localhost:8080/api/osobe/${id}`).then(() => {
      setOsobe(osobe.filter((osoba) => osoba.id !== id));
    });
  };

  const zapocniIzmenu = (osoba) => {
    setEditId(osoba.id);
    setEditedOsoba({
      ime: osoba.ime,
      prezime: osoba.prezime,
      datumRodjenja: osoba.datumRodjenja,
      email: osoba.email
    });
  };

  const sacuvajIzmene = (id) => {
    axios.put(`http://localhost:8080/api/osobe/${id}`, editedOsoba).then((res) => {
      setOsobe(osobe.map((o) => (o.id === id ? res.data : o)));
      setEditId(null);
    });
  };

  return (
    <div className="container">
      <h2 className="mb-4">Lista sačuvanih osoba</h2>
      <ul className="list-group">
        {osobe.map((osoba) => (
          <li key={osoba.id} className="list-group-item">
            {editId === osoba.id ? (
              <>
                <input className="form-control mb-1" value={editedOsoba.ime} onChange={e => setEditedOsoba({ ...editedOsoba, ime: e.target.value })} />
                <input className="form-control mb-1" value={editedOsoba.prezime} onChange={e => setEditedOsoba({ ...editedOsoba, prezime: e.target.value })} />
                <input className="form-control mb-1" type="date" value={editedOsoba.datumRodjenja} onChange={e => setEditedOsoba({ ...editedOsoba, datumRodjenja: e.target.value })} />
                <input className="form-control mb-2" type="email" value={editedOsoba.email} onChange={e => setEditedOsoba({ ...editedOsoba, email: e.target.value })} />
                <button className="btn btn-success btn-sm me-2" onClick={() => sacuvajIzmene(osoba.id)}>Sačuvaj</button>
                <button className="btn btn-secondary btn-sm" onClick={() => setEditId(null)}>Otkaži</button>
              </>
            ) : (
              <>
                <strong>{osoba.ime} {osoba.prezime}</strong> <br />
                📅 {osoba.datumRodjenja} <br />
                📧 {osoba.email} <br />
                <button className="btn btn-danger btn-sm me-2" onClick={() => obrisiOsobu(osoba.id)}>Obriši</button>
                <button className="btn btn-warning btn-sm" onClick={() => zapocniIzmenu(osoba)}>Izmeni</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Lista;