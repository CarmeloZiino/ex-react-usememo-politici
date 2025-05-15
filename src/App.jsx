import { useState, useEffect, useMemo } from "react";
const urlPoliticians = "http://localhost:5001/politicians";

function App() {
  const [politicians, setPoliticians] = useState([]);

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch(urlPoliticians)
      .then((res) => res.json())
      .then((data) => setPoliticians(data))
      .catch((err) => {
        console.error("Qualcosa è andato storto", err);
      });
  }, []);

  const politiciFiltrati = useMemo(() => {
    return politicians.filter((p) => {
      console.log(search)
      return p.name.toLowerCase().includes(search.toLowerCase());
    });
  }, [politicians, search]);

  return (
    <>
      <div className="input">
        <p>Che Politico ti interessa?</p>
        <input
          type="text"
          value={search}
          placeholder="Scrivi qui il tuo politico"
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="block-card">
        {/* {politicians.map((p) => {
          return (
            <div className="card">
              <div className="contentCard">
                <div className="politiciansDetails">
                  <img src={p.image} alt={p.name} width={100} />{" "}
                  <span>
                    <p className="politicians">{p.name}</p>
                    <p className="positionPol"> {p.position}</p>
                  </span>
                </div>

                <p className="bioPol">{p.biography}</p>
              </div>
            </div>
          );
        })} */}
        {politiciFiltrati.map((p) => {
          return (
            <div className="card" key={p.id}>
              <div className="contentCard">
                <div className="politiciansDetails">
                  <img src={p.image} alt={p.name} width={100} />{" "}
                  <span>
                    <p className="politicians">{p.name}</p>
                    <p className="positionPol"> {p.position}</p>
                  </span>
                </div>

                <p className="bioPol">{p.biography}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;

/*
📌 Milestone 1: Recuperare e visualizzare i dati
Effettua una chiamata API a
https://boolean-spec-frontend.vercel.app/freetestapi/politicians

Salva la risposta in uno stato React (useState).

Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:

Nome (name)
Immagine (image)
Posizione (position)
Breve biografia (biography)

Obiettivo: Caricare e mostrare i politici in un’interfaccia chiara e leggibile.

📌 Milestone 2: Implementare la ricerca ottimizzata
Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.
Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
❌ Non usare useEffect per aggiornare l’array filtrato.

Obiettivo: Migliorare le prestazioni evitando ricalcoli inutili quando il valore della ricerca non cambia.

📌 Milestone 3: Ottimizzare il rendering delle card con React.memo
Attualmente, ogni volta che l’utente digita nella barra di ricerca, tutte le card vengono ri-renderizzate, anche quelle che non sono cambiate.
Usa React.memo() per evitare il ri-render delle card quando le loro props non cambiano.
Aggiungi un console.log() dentro il componente Card per verificare che venga renderizzato solo quando necessario.

Obiettivo: Se la lista filtrata cambia, solo le nuove card devono essere renderizzate, mentre le altre rimangono in memoria senza essere ridisegnate.
*/
