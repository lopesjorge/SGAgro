import styles from './styles.module.scss'
import {MdDeleteForever, MdCreate} from 'react-icons/md'

export function Page_exibir_veiculo(){
    return( 
        <div className={styles.container_veiculo}>

             <h1 className={styles.texto1}>Veículos<hr/>
             <button className={styles.btn_adicionar}>Adicionar</button>
             </h1>
            
             <div className={styles.data_veiculo}>
                   <ul>
                       <li> <b>Modelo:</b> Trator</li>
                       <li> <b>Marca:</b> New Holland</li>
                       <li> <b>Ano:</b> 2019</li>
                       <li> <b>Motorista:</b> José Pereira</li>
                       <MdDeleteForever className={styles.excluir}/>  
                       <MdCreate className={styles.editar}/>
                   </ul>
             </div>

             <div className={styles.data_veiculo}>
                   <ul>
                       <li> <b>Modelo:</b> Trator</li>
                       <li> <b>Marca:</b> Holland</li>   
                       <li> <b>Ano:</b> 2012</li>
                       <li> <b>Motorista:</b> Severino</li>
                       <MdDeleteForever className={styles.excluir}/>  
                       <MdCreate className={styles.editar}/>
                   </ul>
             </div>


        </div>
    )
}