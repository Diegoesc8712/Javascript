

interface CamisetaBase{
    setColor(color);
    getColor();

}

//DECORADOR 
function estampar(logo: string){
    return function(target: Function){
        target.prototype.estampacion = function():void{
            console.log("Camiseta estampada con el logo de:"+logo)
        }
    }
}

// CLASE (MODEL DEL OBJETO)
@estampar('H2A')
class Herencias implements CamisetaBase{

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




//CLASE HIJAAA

class Sudadera extends Herencias{
    public capucha: boolean;

    setCapucha(capucha: boolean){
        this.capucha = capucha;
    }

    getCapucha():boolean{
        return this.capucha;
    }
}

var camiseta = new Herencias("Azul", "manga larga", "111", "L", 15);
console.log(camiseta);
camiseta.estampacion();

var sudadera_nike = new Sudadera("Rojo", "Manga Corta", "222", "M", 20);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("verde")
console.log(sudadera_nike);