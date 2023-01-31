import { useState, useEffect } from "react";
import { Card } from "./components/Card";
import { Panel } from './components/Panel';
import styles from "./App.module.css";

function App() {
  const [person, setPerson] = useState([]);
  const [num, setNum] = useState([]);

  useEffect(() => {
    const persons = async () => {
      const request = await fetch("https://rickandmortyapi.com/api/character");
      const data = await request.json();

      setPerson(data.results);
    };

    persons();
  }, []);

  return (
    <div className={styles.Content}>
      <Panel person={person} setNum={setNum}/>
      
      {num.map((e) => {
        return <Card key={e.id} e={e} />;
      })}
    </div>
  );
}

export default App;
