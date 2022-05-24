import styles from './styles.module.scss'

export function Page_Cad_Veiculo(){
    return(
        <div className={styles.container_cadastro_veiculo}>
            <h1 className={styles.texto1}>Cadastro de Veículo<hr/></h1>
                 
              <form className={styles.form_cad_veiculo} action="">
            
            <div className={styles.container_dados_veiculo}>

                <div className={styles.text_dados_veiculo}>
                       <span >Dados do Veículo</span>
                </div>

                <div>
                    <label htmlFor="">Modelo:</label>
                    <input className={styles.input_modelo_veiculo} type="text" placeholder=' Informe o modelo do veículo' required/>
                </div>

                <div>
                    <label htmlFor="">Marca:</label>
                    <input className={styles.input_marca_veiculo} type="text" placeholder=' Informe a marca do veículo' required/>
                </div>

                <div>
                    <label htmlFor="">Ano:</label>
                    <input className={styles.input_ano_veiculo} type="text" placeholder=' Informe ano do veículo' required/>
                </div>


        </div>
        
        </form>

        <div className={styles.container_button}>
        <button className={styles.salvar}>Salvar</button>
        <button className={styles.cancelar}>Cancelar</button>
        </div>
        
        </div>
    )
}