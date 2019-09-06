// CLASE (MODEL DEL OBJETO)
var Constructores = /** @class */ (function () {
    //METODOS (FUNCIONES O ACCIONES DEL OBJETO)
    function Constructores(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Constructores.prototype.setColor = function (color) {
        this.color = color;
    };
    Constructores.prototype.getColor = function () {
        return this.color;
    };
    return Constructores;
}());
var camiseta = new Constructores("azul", "Manga Larga", "Nike", "L", 14);
camiseta.setColor("Azul");
console.log(camiseta);
