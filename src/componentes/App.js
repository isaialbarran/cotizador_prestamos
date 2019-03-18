import React, {Component, Fragment} from 'react';
import '../css/App.css';
import Formulario from './Formulario';
import {totalAmount} from './helper';
import Resultado from "./Resultado";
import Mensaje from "./Mensaje";
import Spinner from "./Spinner";

class App extends Component {

  state = {
    cantidad : '',
    meses : '',
    total : '',
    cargando: false
  };

  dataLoan = (cantidad,meses) => {
    const total = totalAmount(cantidad,meses);
    this.setState({
      cargando : true
    }, () => {
      setTimeout(() => {
        this.setState({cantidad,meses,total, cargando:false})
      },2000)
    })
  };

  render() {
    const {cantidad,meses,total,cargando} = this.state;
    let componente;

    if(total === '' && !cargando){
      componente = <Mensaje/>;
    }
    else if(cargando){
      componente = <Spinner/>
    }
    else{
      componente =  <Resultado
              cantidad={cantidad}
              meses={meses}
              total={total}/>
    }

    return (
      <Fragment >
        <div className="App">
          <Formulario
              dataLoan={this.dataLoan}/>
        </div>
        <div className="App">
          {componente}
        </div>
      </Fragment>
    );
  }
}

export default App;
