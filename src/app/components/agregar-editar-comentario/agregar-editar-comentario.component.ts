import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Comentario } from 'src/app/models/comentarios';
import { ComentarioService } from 'src/app/services/comentario.service';


@Component({
  selector: 'app-agregar-editar-comentario',
  templateUrl: './agregar-editar-comentario.component.html',
  styleUrls: ['./agregar-editar-comentario.component.css']
})
export class AgregarEditarComentarioComponent implements OnInit {
  comentarios: FormGroup;
  idComentario = 0;
  accion = 'Agregar';


  constructor( private fb:FormBuilder, private route: ActivatedRoute, private comentarioService: ComentarioService, private routers: Router){
    this.comentarios = this.fb.group({
          titulo:['', Validators.required],
          creador:['', Validators.required],
          texto:['', Validators.required]

    });
    if(this.route.snapshot.paramMap.get('id') != null){
        this.idComentario = Number(this.route.snapshot.paramMap.get('id'));
    }
  }
  ngOnInit(): void {
    this.esEditar();
  }

  guardarComentario(){
    if(this.accion == 'Agregar')
    {
      const comentario: Comentario={
        fechaCreacion: new Date(),
        creador:this.comentarios.get('creador')?.value,
        titulo:this.comentarios.get('titulo')?.value,
        texto:this.comentarios.get('texto')?.value,

      };
      this.comentarioService.guardarComentario(comentario).subscribe(data =>{
          this.routers.navigate(['/']);
          
      })
    }
  }

  esEditar()
  {
      if(this.idComentario > 0)
      {
        this.accion='Editar';
         this.comentarios.patchValue({
          titulo:'algo',
          creador:'algo',
          texto:'otro algo'
         });
      }

  }

}
