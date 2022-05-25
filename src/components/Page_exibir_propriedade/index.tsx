import styles from './styles.module.scss'
import {MdDeleteForever, MdCreate} from 'react-icons/md'

export function Page_exibir_propriedade(){
    return( 
        <div className={styles.container_propriedade}>

             <h1 className={styles.texto1}>Propriedade<hr/>
             <button className={styles.btn_adicionar}>Adicionar</button>
             </h1>
            
             <div className={styles.data_propriedade}>
                   <ul>
                       <li> <b>Nome:</b>  Fazenda Vitória</li>
                       <li> <b>Prprietário:</b> Antônio Lopes</li>
                       <li> <b>Endereço:</b>  Sítio lajes - Serrinha dos Pintos - RN</li>
                       <MdDeleteForever className={styles.excluir}/>  
                       <MdCreate className={styles.editar}/>
                   </ul>
             </div>

        </div>
    )
}