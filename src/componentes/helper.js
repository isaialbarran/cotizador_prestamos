//Function helper to separate the code (Logic)

export function totalAmount(moneyForClient,yearsToPay) {
    /*Cantidad
    * 50000 a 100000      => 25%
    * 100001 a 200000   => 20%
    * 200001 a 300000  => 15%
    * 300001         => 10%*/
    let cantidadTotal;

    if(moneyForClient <= 50000 && moneyForClient >= 100000 )
    {
        cantidadTotal = moneyForClient * 0.25
    }
    else if (moneyForClient >= 100001 && moneyForClient <= 200000)
    {
        cantidadTotal = moneyForClient * 0.2
    }
    else if (moneyForClient >= 200001 && moneyForClient <= 300000)
    {
        cantidadTotal = moneyForClient * 0.15
    }
    else
        {
        cantidadTotal = moneyForClient * 0.1
    }

    let totalYears;
    /*years
    * 9 - 12     => 5%
    * 13 - 20     => 10%
    * 21 - 30    => 15%
    * 31        => 20%
    * */
    if(yearsToPay >= 9 && yearsToPay<=12)
    {
        totalYears = moneyForClient * 0.05;
    }
    else if(yearsToPay >=13 && yearsToPay <=20)
    {
        totalYears = moneyForClient * 0.1;
    }
    else if(yearsToPay >=21 && yearsToPay <=30)
    {
        totalYears = moneyForClient * 0.15;
    }
    else {
        totalYears = moneyForClient * 0.2;
    }
    return moneyForClient + totalYears + cantidadTotal;
};