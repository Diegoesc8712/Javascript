// CLASE (MODEL DEL OBJETO)
var Camiseta = /** @class */ (function () {
    function Camiseta() {
    }
    //METODOS (FUNCIONES O ACCIONES DEL OBJETO)
    Camiseta.prototype.setColor = function (color) {
        this.color = color;
    };
    Camiseta.prototype.getColor = function () {
        return this.color;
    };
    Camiseta.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
    };
    Camiseta.prototype.getModelo = function () {
        return this.modelo;
    };
    return Camiseta;
}());
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
