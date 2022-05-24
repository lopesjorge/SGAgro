import styles from './styles.module.scss'

export function Page_Cad_Agricultor(){
    return(
        <div className={styles.container_cadastro_agricultor}>
            <h1 className={styles.texto1}>Cadastro Agricultor<hr/></h1>
                 

              <form className={styles.form_cad_Agricultor} action="">
            
        <div className={styles.container_dados_pessoais}>
            <div className={styles.text_dados_pessoais}>
              <span >Dados Pessoais</span>
            </div>
                <div>
                    <label htmlFor="">Nome:</label>
                    <input className={styles.input_agricultor} type="text" placeholder=' Informe o nome'/>
                </div>

                <div>
                    <label htmlFor="">CPF:</label>
                    <input className={styles.input_cpf_agricultor} type="text" placeholder=' Informe o CPF'/>
                </div>

                <div className={styles.telefone}>
                    <label htmlFor="">Telefone:</label>
                    <input className={styles.input_telefone_dd} type="text" placeholder=' DDD'/>
                    <input className={styles.input_telefone_number} type="text" placeholder=' Informe o telefone '/>
                </div>
        </div>

        <div className={styles.container_endereço}>
               
               <div className={styles.text_endereco}>
                    <span>Endereço</span>

                </div>
                
                <div>
                    <label htmlFor="">CEP:</label>
                    <input className={styles.input_cep} type="text" placeholder='Informe o CEP'/>
                </div>

                <div>
                    <label htmlFor="">Cidade:</label>
                    <input className={styles.input_cidade} type="text" placeholder='Informe o nome da cidade'/>
                </div>

                <div>
                    <label htmlFor="">Bairro:</label>
                    <input className={styles.input_bairro} type="text" placeholder='Informe o nome do bairro'/>
                </div>

                <div>
                    <label htmlFor="">Rua:</label>
                    <input className={styles.input_rua} type="text" placeholder='Informe o nome da rua '/>
                </div>

                <div>
                    <label htmlFor="">Número:</label>
                    <input className={styles.input_numero_casa} type="text" placeholder='Informe o número da casa'/>
                </div>

        </div>

        <div className={styles.container_tipo_agricultura}>
               <div className={styles.text_tipo_agricultura}>
                    <span>Tipo de Agricultura</span>
                </div>

                <div className={styles.select_agricultura}>
                    <select name="tipo_agricultura" id="agricultura">
                         <option value="Grãos">Grãos</option>
                         <option value="Legumes">Legumes</option>
                         <option value="Hortaliças">Hortaliças</option>
                    </select>
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