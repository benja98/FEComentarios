import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Comentario } from '../models/comentarios';
import { Observable } from 'rxjs';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  myAppUrl = 'http://localhost:5037/';
  myApiUrl = 'api/Comentario';

  httpOptions = {
    headers: new HttpHeaders({
      //'Content-Type':'application/json''Content-Type': 'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    })
  };


  constructor(private http: HttpClient) 
  {


   }
  getListComentarios():Observable<Comentario[]>{
      return this.http.get<Comentario[]>(this.myAppUrl +this.myApiUrl);

  }

  borrarComentario(id:number):Observable<Comentario>{
    return this.http.delete<Comentario>(this.myAppUrl + this.myApiUrl + id);

  }
  guardarComentario(comentario: Comentario):Observable<Comentario>{
    return this.http.post<Comentario>(this.myAppUrl + this.myApiUrl, comentario, this.httpOptions);

  }
  cargarComentario(id:number):Observable<Comentario>{
    return this.http.get<Comentario>(this.myAppUrl + this.myApiUrl + id);

  } 

  actualizarComentario(id:number, comentario:Comentario):Observable<Comentario>{
    return this.http.put<Comentario>(this.myAppUrl + this.myApiUrl,comentario, this.httpOptions);
  } 

}
