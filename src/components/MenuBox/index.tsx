import styles from './styles.module.scss'

export function MenuBox(){
    return(
        <div className={styles.MenuBox}>

           <ul>
                <li>
                    <a href="">Motorista</a>
                </li>

                <li>
                     <a href="">Veículo</a>
                </li>

                <li>
                     <a href="">Agricultor</a>
                </li>

                <li>
                     <a href="">Propriedade Rural</a>
                </li>

                <li>
                     <a href="">Colheitas</a>
                </li>

                <li>
                     <a href="">logout</a>
                </li>
           </ul>
            
        </div>
    )
}