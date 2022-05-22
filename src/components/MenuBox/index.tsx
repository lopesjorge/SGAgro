import styles from './styles.module.scss'


export function MenuBox(){
    return(
        <div className={styles.container_menu}>

           <ul>
            <li className={styles.menu_itens}><a href="#">Agricultor</a></li>
            <li className={styles.menu_itens}><a href="#">Motorista</a></li>
            <li className={styles.menu_itens}><a href="#">Veículo</a> </li>
            <li className={styles.menu_itens}><a href="#"> Propriedades</a></li>
            <li className={styles.menu_itens}><a href="#"> Colheitas</a></li>
            <li className={styles.menu_itens}><a href="#">Dados</a></li>
            <li className={styles.menu_itens}><a href="#">Logout</a></li>
           </ul>
        </div>
    )
}