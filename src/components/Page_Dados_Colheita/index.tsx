import Chart from "react-google-charts"
import styles from './styles.module.scss'

export const Data_Colheita = [
   ['Grão','Toneladas produzidas - ano'],
   ['Feijão',3000],
   ['Milho',5000],
   ['Arroz',2600]
]


export function Page_Dados_Colheita (){

    return(
         <div className={styles.container_data_colheita}>
         <h1>Dados da colheitas <hr /> </h1>

         <Chart chartType="PieChart" data={Data_Colheita} width={'100%'} height={'40%'}/>
         <span>Toneladas Anuais</span>
         </div>
      )
    }