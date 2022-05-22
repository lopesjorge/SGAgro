import { Page_Cad_Agricultor } from '../Page_Cad_Agricultor'
import styles from './styles.module.scss'


export function MenuBox(){
    return(
        <div className={styles.container_menu}>

           <ul>
            <li className={styles.menu_itens}><a type='button' href="#">Agricultor</a> </li>
            <li className={styles.menu_itens}><a type='button' href="#">Motorista</a></li>
            <li className={styles.menu_itens}><a type='button' href="#">Veículo</a> </li>
            <li className={styles.menu_itens}><a type='button' href="#">Propriedades</a></li>
            <li className={styles.menu_itens}><a type='button' href="#">Colheitas</a></li>
            <li className={styles.menu_itens}><a type='button' href="#">Dados</a></li>
            <li className={styles.menu_itens}><a type='button' href="#">Logout</a></li>
            <li className={styles.menu_itens}><img className={styles.image} src="/src/imagens/SGAgro- logo-L.svg" alt="" /></li>
           </ul>
        </div>
    )
}