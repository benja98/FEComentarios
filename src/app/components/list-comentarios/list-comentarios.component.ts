import { Component, OnInit } from '@angular/core';
import { Comentario } from 'src/app/models/comentarios';
import { ComentarioService } from 'src/app/services/comentario.service';

@Component({
  selector: 'app-list-comentarios',
  templateUrl: './list-comentarios.component.html',
  styleUrls: ['./list-comentarios.component.css']
})
export class ListComentariosComponent implements OnInit {

  listComentarios: Comentario[] = [];
  loading = false;

  constructor(private comentarioService: ComentarioService){

  }
  
  ngOnInit():void{
      this.cargarComentario();
  }

//ayuda

/*
  cargarComentario(){
    this.loading = true;
    this.comentarioService.getListComentarios().subscribe(
      (comentarios) => {
        this.listComentarios = comentarios;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }
  */
  cargarComentario(){
    this.comentarioService.getListComentarios().subscribe(data =>{
      this.listComentarios = data;
      
    })
  }
  


}
