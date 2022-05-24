import styles from './styles.module.scss'

export function Page_Cad_Motorista(){
    return(
        <div className={styles.container_cadastro_motorista}>
            <h1 className={styles.texto1}>Cadastro Motorista<hr/></h1>
                 

              <form className={styles.form_cad_motorista} action="">
            
        <div className={styles.container_dados_pessoais}>
            <div className={styles.text_dados_pessoais}>
              <span >Dados Pessoais</span>
            </div>
                <div>
                    <label htmlFor="">Nome:</label>
                    <input className={styles.input_motorista} type="text" placeholder=' Informe o nome' required/>
                </div>

                <div>
                    <label htmlFor="">Matrícula:</label>
                    <input className={styles.input_matricula} type="text" placeholder=' Informe o CPF' required/>
                </div>

                <div>
                    <label htmlFor="">CNH:</label>
                    <input className={styles.input_cnh} type="text" placeholder=' Informe o numero da CNH' required/>
                    
                    <label htmlFor="">Categoria</label>

                    <select name="cnh" id="cnh" required>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                    </select>

               
                </div>

                <div className={styles.telefone}>
                    <label htmlFor="">Telefone:</label>
                    <input className={styles.input_telefone_dd} type="text" placeholder=' DDD' required/>
                    <input className={styles.input_telefone_number} type="text" placeholder=' Informe o telefone' required/>
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