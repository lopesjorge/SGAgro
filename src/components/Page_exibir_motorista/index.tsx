import styles from './styles.module.scss'
import {MdDeleteForever, MdCreate} from 'react-icons/md'

export function Page_exibir_motorista(){
    return( 
        <div className={styles.container_motorista}>

             <h1 className={styles.texto1}>Motorista<hr/>
             <button className={styles.btn_adicionar}>Adicionar</button>
             </h1>
            
             <div className={styles.data_motorista}>
                   <ul>
                       <li> <b>Nome:</b>  José pereira</li>
                       <li> <b>CNH:</b> 000.112.44</li>
                       <li> <b>Endereço:</b>  Serrinha dos Pintos - RN</li>
                       <li> <b>Telefone:</b>  84 95555-5555</li>
                       <MdDeleteForever className={styles.excluir}/>  
                       <MdCreate className={styles.editar}/>
                   </ul>
             </div>

        </div>
    )
}