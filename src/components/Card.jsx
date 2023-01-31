import styles from "../css/Card.module.css"

 export function Card({e}) {
    
    return <div className={styles.contentCard}>
    <h1 className={styles.title} >{e.name}</h1>
    <img className={styles.imagen} src={e.image}></img>
    <p className={styles.parrafo}>
      Estado: {e.status} <br/>
      Creado: {e.created}<br/>
      Genero: {e.gender}<br/>
      Episodios: {e.episode.length}<br/>
    </p>
    </div>

}