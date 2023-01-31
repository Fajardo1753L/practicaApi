import styles from "../css/Panel.module.css"

export function Panel({person, setNum}) {
    
    return <div className={styles.contentPanel}>

    <h1 className={styles.titlePanel}>Obten tu personaje Aleatorio</h1>
      <button className={styles.myButton}
        onClick={() => {
          setNum([person[Math.round(Math.random() * 19)]]);
        }}
      >
        Obtener
      </button>
      

    
    </div>

}