import styles from "./styles.module.scss"

export function LoginBox(){
    return(
    
        <div className={styles.LoginBox}>

            <div className={styles.box_esquerdo}>
            
            <p>
            <h1>Bem-vindo</h1>
            <h4>ao Sistema de </h4>
            <h4>Gerenciamento</h4>
            <h4>de Agricultores</h4>
            </p>

            </div>
            
            <div className={styles.login_style}>
                 
                 <form action="" className={styles.formulario}>
                    
                    <input type="email" name="email" id="email" placeholder="Email" required/>
                     <br />
                    <input type="password" name="password" id="password"  placeholder="Password" required/>
                
                </form>
                 
                 <a href="" className={styles.esqueceuSenha}>Esqueceu Senha?</a>
                 <br />
                 <a href="" className={styles.btn_login}>Login</a>
               
            </div>
            
        </div>

    )
}