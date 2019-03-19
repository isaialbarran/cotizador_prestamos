import React, {Component, Fragment} from 'react';
import '../css/App.css';
import Formulario from './Formulario';
import {totalAmount} from './helper';
import Resultado from "./Resultado";
import Mensaje from "./Mensaje";
import Spinner from "./Spinner";

class App extends Component {

  state = {
    total : '',
    cargando: false,
    propertyPrice : '',
    moneyForClient: '',
    yearsToPay: ''
  };

  dataLoan = (moneyForClient,yearsToPay) => {
    const total = totalAmount(moneyForClient,yearsToPay);
    this.setState({
      cargando:true
    }, () => {
      setTimeout(() => {
        this.setState({moneyForClient, yearsToPay, total, cargando:false})
      },2000)
    })
  };

  render() {
    const {moneyForClient, yearsToPay, total, cargando} = this.state;
    let componente;

    if(total === '' && !cargando){
      componente = <Mensaje/>;
    }
    else if(cargando){
      componente = <Spinner/>
    }
    else{
      componente =  <Resultado  moneyForClient={moneyForClient}
                                yearsToPay={yearsToPay}
                                total={total}/>
    }

    return (
      <Fragment >
        <div className="App">
          <Formulario dataLoan={this.dataLoan}/>
        </div>
        <div className="App">{componente}</div>
      </Fragment>
    );
  }
}

export default App;
