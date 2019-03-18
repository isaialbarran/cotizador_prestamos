import React, {Component} from 'react';

class Formulario extends Component {

    state = {
        cantidad : '',
        meses : '',
        completed : false
    };

    handleChange = (e) => {
        const { name, value} = e.target;
        this.setState({
            [name]: Number(value)
        });

    };

    completedSubmit = () => {
      const {cantidad, meses} = this.state;
      const noValido = !cantidad || !meses;
      return noValido
    };

    calculateLoan = (e) => {
        e.preventDefault();
        const {cantidad,meses} = this.state;
        this.props.dataLoan(cantidad,meses);
    };

    render() {
        return (
            <div>
                <h1>Cotizador de Préstamos</h1>
                <form action="" onSubmit={this.calculateLoan}>
                    <div>
                        <h3>Cantidad Préstamo</h3>
                        <input type="number"
                               name="cantidad"
                               placeholder="Ejemplo 3000"
                               onChange={this.handleChange}/>
                    </div>
                    <div>
                        <h3>Plazo a pagar</h3>
                        <select name="meses" id="" onChange={this.handleChange}>
                            <option value="">Seleccionar</option>
                            <option value="3">3 meses</option>
                            <option value="6">6 meses</option>
                            <option value="12">12 meses</option>
                            <option value="24">24 meses</option>
                        </select><br/>
                    </div>
                    <div>
                        <input type="submit"
                               disabled={this.completedSubmit()}
                               value="Calcular"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Formulario;