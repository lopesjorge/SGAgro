import styles from './styles.module.scss'

export function Page_Cad_Propriedade(){
    return(
        <div className={styles.container_cadastro_propriedade}>
            <h1 className={styles.texto1}>Cadastro Propriedade Rural<hr/></h1>
                 

              <form className={styles.form_cad_propriedade} action="">
            
        <div className={styles.container_dados_propriedade}>
            <div className={styles.text_dados_propriedade}>
              <span >Dados da Propriedade</span>
            </div>
                <div>
                    <label htmlFor="">Nome:</label>
                    <input className={styles.input_nome_propriedade} type="text" placeholder=' Informe o nome'/>
                </div>

                <div>
                    <label htmlFor="">Proprietário:</label>
                    <input className={styles.input_nome_proprietario} type="text" placeholder=' Informe o nome do proprietário' required/>
                </div>

                
                <div>
                    <label htmlFor="">Área m²:</label>
                    <input className={styles.input_area} type="text" placeholder=' Informe o tamanho da propriedade' required/>
                </div>


        </div>

        <div className={styles.container_endereço}>
               
               <div className={styles.text_endereco}>
                    <span>Endereço</span>

                </div>
                
                <div>
                    <label htmlFor="">CEP:</label>
                    <input className={styles.input_cep} type="text" placeholder='Informe o CEP' required/>
                </div>

                <div>
                    <label htmlFor="">Cidade:</label>
                    <input className={styles.input_cidade} type="text" placeholder='Informe o nome da cidade' required/>
                </div>

                <div>
                    <label htmlFor="">Bairro:</label>
                    <input className={styles.input_bairro} type="text" placeholder='Informe o nome do bairro' required/>
                </div>

                <div>
                    <label htmlFor="">Rua:</label>
                    <input className={styles.input_rua} type="text" placeholder='Informe o nome da rua' required/>
                </div>

                <div>
                    <label htmlFor="">Número:</label>
                    <input className={styles.input_numero_casa} type="text" placeholder='Informe o número da casa' required/>
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