export function totalAmount(cantidad,meses) {
    /*Cantidad
    * 0 a 1000      => 25%
    * 1001 a 5000   => 20%
    * 5001 a 10000  => 15%
    * 10001         => 10%*/
    let cantidadTotal;

    if(cantidad <= 1000){
        cantidadTotal = cantidad * 0.25
    }else if (cantidad > 1000 && cantidad <= 5000){
        cantidadTotal = cantidad * 0.2
    }
    else if (cantidad > 5000 && cantidad <= 10000){
        cantidadTotal = cantidad * 0.15
    }
    else{
        cantidadTotal = cantidad * 0.1
    }

    let totalMeses;
    /*Meses
    * 3     => 5%
    * 6     => 10%
    * 12    => 15%
    * 24    => 20%
    * */
    switch (meses) {
        case 3:
            totalMeses = cantidad * 0.05;
            break;
        case 6:
            totalMeses = cantidad * 0.1;
            break;
        case 12:
            totalMeses = cantidad * 0.15;
            break;
        case 24:
            totalMeses = cantidad * 0.2;
            break;
        default:
            break;
    }
    return cantidad + totalMeses + cantidadTotal;
};