var bicicleta = {
    color: 'rojo',
    modelo: '2018',
    frenos: 'De disco',
    velocidadMaxima: '60Km'
};

function cambiaColor(nuevo_color){
    bicicleta.color = nuevo_color;
    console.log(bicicleta);
};

cambiaColor("Azul");