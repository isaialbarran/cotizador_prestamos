import React from 'react';
import '../css/index.css'

const Resultado = (props) => {
    return(
      <div id="resultado">
          <h2>Resultados</h2>
          <p>La cantidad solicitada fue: {props.moneyForClient}€</p>
          <p>A pagar en: {props.yearsToPay} años</p>
          <p>Total a pagar: {props.total}€</p>
          <p>Su pago mensual es: { (props.total / props.yearsToPay).toFixed(2)}€</p>
      </div>
    );
};

export default Resultado;