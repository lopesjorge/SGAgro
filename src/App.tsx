import { useState } from 'react'
import styles from "./App.module.scss"
import { LoginBox } from './components/LoginBox'
import { MenuBox } from './components/MenuBox'
import { Page_Cad_Agricultor } from './components/Page_Cad_Agricultor'
import { Page_Cad_Colheita } from './components/Page_Cad_Colheita'
import { Page_Cad_Motorista } from './components/Page_Cad_Motorista'
import { Page_Cad_Propriedade } from './components/Page_Cad_Propriedade'
import { Page_Dados_Colheita } from './components/Page_Dados_Colheita'
import { Page_exibir_dados_agricultor } from './components/Page_exibir_dados_agricultor'
import { Page_exibir_motorista } from './components/Page_exibir_motorista'
import { Page_exibir_propriedade } from './components/Page_exibir_propriedade'
import { Page_exibir_veiculo } from './components/Page_exibir_veiculo'
import { Page_Cad_Veiculo } from './components/Pagr_Cad_Veiculo'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


export function App() {
  const [count, setCount] = useState(0)

  return (

    <Page_Dados_Colheita/>

    )
}


