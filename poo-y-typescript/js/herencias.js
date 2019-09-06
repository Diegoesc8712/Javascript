var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//DECORADOR 
function estampar(logo) {
    return function (target) {
        target.prototype.estampacion = function () {
            console.log("Camiseta estampada con el logo de:" + logo);
        };
    };
}
// CLASE (MODEL DEL OBJETO)
var Herencias = /** @class */ (function () {
    //METODOS (FUNCIONES O ACCIONES DEL OBJETO)
    function Herencias(color, modelo, marca, talla, precio) {
        this.color = color;
        this.modelo = modelo;
        this.marca = marca;
        this.talla = talla;
        this.precio = precio;
    }
    Herencias.prototype.setColor = function (color) {
        this.color = color;
    };
    Herencias.prototype.getColor = function () {
        return this.color;
    };
    Herencias = __decorate([
        estampar('H2A')
    ], Herencias);
    return Herencias;
}());
//CLASE HIJAAA
var Sudadera = /** @class */ (function (_super) {
    __extends(Sudadera, _super);
    function Sudadera() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Sudadera.prototype.setCapucha = function (capucha) {
        this.capucha = capucha;
    };
    Sudadera.prototype.getCapucha = function () {
        return this.capucha;
    };
    return Sudadera;
}(Herencias));
var camiseta = new Herencias("Azul", "manga larga", "111", "L", 15);
console.log(camiseta);
camiseta.estampacion();
var sudadera_nike = new Sudadera("Rojo", "Manga Corta", "222", "M", 20);
sudadera_nike.setCapucha(true);
sudadera_nike.setColor("verde");
console.log(sudadera_nike);
