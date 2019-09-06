

// CLASE (MODEL DEL OBJETO)
class Constructores{

    //PROPIEDADES (CARACTERISTICAS DEL OBJETO)
    private color: string;
    private modelo: string;
    private marca: string;
    private talla: string;
    private precio: number;
    //METODOS (FUNCIONES O ACCIONES DEL OBJETO)
    constructor(color, modelo, marca, talla, precio){
            this.color = color;
            this.modelo = modelo;
            this.marca = marca;
            this.talla = talla;
            this.precio = precio;
    }

    public setColor(color){
        this.color = color;
    }

    public getColor(){
        return this.color
    }

    
}

var camiseta = new Constructores("azul", "Manga Larga", "Nike", "L", 14);
camiseta.setColor ("Azul");

console.log(camiseta);
