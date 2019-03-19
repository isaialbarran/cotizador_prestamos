import React, {Component} from 'react';
import '../css/index.css';

class Formulario extends Component {

    state = {
        propertyPrice : '',
        moneyForClient: '',
        yearsToPay: '',
        error: false
    };

    handleChange = (e) => {
        const { name, value} = e.target;
        this.setState({
            [name]: Number(value)
        });
    };

    completedSubmit = () => {
      const {propertyPrice, yearsToPay, moneyForClient} = this.state;
      const noValido = !propertyPrice || !yearsToPay || !moneyForClient;
      return noValido
    };

    calculateLoan = (e) => {
        e.preventDefault();
        const {moneyForClient,yearsToPay, propertyPrice } = this.state;
        if(moneyForClient > propertyPrice * 0.8){
            this.setState({error: true});
        }
        else{
            this.setState({error: false});
            this.props.dataLoan(moneyForClient,yearsToPay);
        }

    };

    render() {
        const { propertyPrice, yearsToPay, moneyForClient, error } = this.state;
        return (
            <div>
                <h1>Simulador Hipoteca</h1>
                <form action="" onSubmit={this.calculateLoan}>
                    <div id="col-order">
                        <h3>Precio de la vivienda</h3>
                        <input type="number"
                               disabled={true}
                               placeholder="62.500"
                               defaultValue={propertyPrice}/><br/>
                        <div id="rangeDiv">
                            <input type="range" defaultValue="62500" id="range"
                                   step={100}
                                   min="62500" max="1000000"
                                   name="propertyPrice" onChange={this.handleChange}/>
                                    <span id="rangeMin">62.500€</span>
                                    <span id="rangeMax">1.000.000€</span>
                        </div>
                    </div>
                    <div id="col-order">
                        <h3>Cuanto dinero necesitas</h3>
                        <p>El import máximo corresponde al 80% del valor de la tasación de la vivienda
                        o el máximo que te podemos financiar.</p>
                        <input type="number" placeholder="50.000" defaultValue={moneyForClient}/><br/>
                        <div id="rangeDiv">
                            <input type="range" defaultValue="50000" id="range" step={100}
                                   min="50000" max={(this.state.propertyPrice * 0.8).toFixed(1)}
                                   name="moneyForClient" onChange={this.handleChange}/>
                            <span id="rangeMin">50.000€</span>
                            <span id="rangeMax">{(this.state.propertyPrice * 0.8).toFixed(0)}€</span>
                        </div>
                    </div>
                    <div id="col-order">
                        <h3>¿En cuánto tiempo quieres devolverlo?</h3>
                        <input type="number"
                               disabled={true}
                               placeholder="9 años"
                               defaultValue={yearsToPay}/><br/>
                        <div id="rangeDiv">
                            <input type="range" defaultValue="9" id="range" step="1"
                                   min="9" max="40"
                                   name="yearsToPay" onChange={this.handleChange}/>
                            <p id="rangeMin">9 años</p>
                            <p id="rangeMax">40 años</p>
                        </div>
                    </div>
                    <div>
                        <input type="submit"
                               disabled={this.completedSubmit()}
                               value="Calcular"/>
                    </div>
                    {error ?
                        (<div>
                            <h5>El dinero solicitado no puede ser superior al 80% de la vivienda.</h5>
                            <h5>Por favor intentelo de nuevo</h5>
                        </div>) : (<p></p>)}
                </form>
            </div>
        );
    }
}

export default Formulario;