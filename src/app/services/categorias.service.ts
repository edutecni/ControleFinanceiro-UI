import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Importar o moodelo Categoria
import { Categoria } from '../models/Categoria';

// Constante que define que o tipo de dados é um json
const httpOptions = {
  headers: new HttpHeaders({
    'Content-tType' : 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  // url da api
  url = 'api/Categorias';

  // Instânciar o httpClient
  constructor(private http: HttpClient) { }

  PegarTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.url);
  }

  PegarCategoriaPeloId(categoriaId: number) : Observable<Categoria>
  {
    const apiUrl = `${this.url}/${categoriaId}`;

    return  this.http.get<Categoria>(apiUrl);
  }

  NovaCategoria(categoria: Categoria) : Observable<any>{
    return this.http.post<Categoria>(this.url, categoria, httpOptions)
  }

  AtualizarCategoria(categoriaId: number, categoria : Categoria) : Observable<any>{
    const apiUrl = `${this.url}/${categoriaId}`;

    return this.http.put<Categoria>(apiUrl, categoria, httpOptions);
  }

  ExcluirCategoria(categoriaId: number) : Observable<any>{
    const apiUrl = `${this.url}/${categoriaId}}`;

    return this.http.delete<number>(apiUrl, httpOptions);
  }


}
