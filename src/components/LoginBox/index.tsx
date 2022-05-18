import styles from "./styles.module.scss"

export function LoginBox(){
    return(
    
        <div className={styles.box_esquerdo}>
            <div className={styles.font_esquerdo}>
            <h1>Bem-vindo</h1>
            <h4>ao Sistema de </h4>
            <h4>Gerenciamento</h4>
            <h4>de Agricultores</h4>
            </div>

            <div className={styles.login}>
                 
                 <form action="">
                    
                    <input type="email" name="email" id="email" />

                    <input type="password" name="password" id="password" />

                    <a href="">Esqueceu Senha?</a>

                    <a href="">Login</a>

                 </form>

            </div>

        </div>

    )
}