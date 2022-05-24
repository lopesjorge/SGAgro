import { useState } from 'react'
import styles from "./App.module.scss"
import { LoginBox } from './components/LoginBox'
import { MenuBox } from './components/MenuBox'
import { Page_Cad_Agricultor } from './components/Page_Cad_Agricultor'
import { Page_Cad_Motorista } from './components/Page_Cad_Motorista'
import { Page_Cad_Veiculo } from './components/Pagr_Cad_Veiculo'


export function App() {
  const [count, setCount] = useState(0)

  return (

<Page_Cad_Veiculo/>

    )
}


