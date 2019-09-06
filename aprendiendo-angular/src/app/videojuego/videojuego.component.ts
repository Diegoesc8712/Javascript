import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
@Component({
    selector: 'videojuevos',
    templateUrl: './videojuego.component.html'
    })
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy{
    public titulo: string;
    public listado: string;

    constructor(){
        this.titulo = "Componente de Videojuegos";
        this.listado = "Listado de Juegos";
        // console.log("Se ha cargado correctamente");
    }
    ngOnInit(){
        // console.log("OnInit ejecutado!!");
    }
    ngDoCheck(){
        
        // console.log("DoCheck ejecutado!!");
    }
    ngOnDestroy(){
        alert("")
        // console.log("OnDestroy ejecutado!!");
    }
    cambiarTitulo(){
        this.titulo = "nuego titulo del componente videosjuegos";
    }
}
    
