/*
    Precisamos mostrar a tabuada no console de 0 até 10 neste seguinte formato:

    multiplicador x número = resultado
    multiplicador x 0 = resultado
    multiplicador x 1 = resultado
    multiplicador x 2 = resultado
    multiplicador x 3 = resultado
    ...
    multiplicador x 10 = resultado

    obs.: não podemos criar vários consoles.log(multiplicador x 3 = resultado)
    */

    const multiplicador = 7;

    //let i = 0
    //chegará até o valor desejado = 10
    // Ele add + 1 sobre o valor então sempre que acabar o código ele add + 1 = 1 + 1 = 2
    for (let i = 0; i <= 10; i++) {
        const calc = multiplicador * i;
        console.log(`${multiplicador} x ${i} = ${calc}`);
    }



