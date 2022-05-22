import styles from './styles.module.scss'

export function Page_Cad_Agricultor(){
    return(
        <div className={styles.container_cadastro_agricultor}>
            <h1 className={styles.texto1}>Agricultor<hr/></h1>
              
              <div className={styles.input_busca}>
                  <input type="text" placeholder='Pesquisar Agricultor '/>

                  <button>Novo Agricultor</button>

              </div>

        </div>
    )
}