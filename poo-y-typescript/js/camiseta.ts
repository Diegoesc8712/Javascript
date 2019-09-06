// CLASE (MODEL DEL OBJETO)
class Camiseta{

    //PROPIEDADES (CARACTERISTICAS DEL OBJETO)
    private color: string;
    private modelo: string;
    public marca: string;
    public talla: string;
    public precio: number;
//METODOS (FUNCIONES O ACCIONES DEL OBJETO)
public setColor(color){
    this.color = color;
}

public getColor(){
    return this.color;
}

public setModelo(modelo){
    this.modelo = modelo;
}

public getModelo(){
    return this.modelo;
}

}

var camiseta = new Camiseta();
camiseta.setColor("Rojo");
camiseta.setModelo("Manga Larga");


camiseta.marca = "Nike";
camiseta.talla = "L";
camiseta.precio = 10;

var playera = new Camiseta();
playera.setColor("Azul");
playera.setModelo("Manga Corta");


playera.marca = "Adidas";
playera.talla = "L";
playera.precio = 15;

console.log(camiseta, playera);
console.log(camiseta.getColor(), playera.getColor());
console.log(camiseta.getModelo(), playera.getModelo());
