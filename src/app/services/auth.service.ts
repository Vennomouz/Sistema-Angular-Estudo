import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioLogar } from '../model/UsuarioLogar';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // teste: Usuario = new Usuario('','');

  constructor(private http: HttpClient) { 
  }

  cadastrar(usuario: Usuario){

    let header = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    let options = {headers: header};

    console.log(usuario);
    console.log(typeof(usuario));
    let obj = JSON.stringify({usuario});
    console.log(obj);

    return this.http.post<any>('http://localhost:80/classes/cadastrar.php', obj).subscribe(data => {
      console.log(data);
    },erro =>{
      console.log(erro);
    }
    );

  }

  logar(usuarioLogar: UsuarioLogar){
    let obj = JSON.stringify({usuarioLogar});
    console.log(usuarioLogar)
    console.log(obj)

  //   return this.http.post<any>('http://localhost:80/classes/logar.php', obj, {headers: header}).pipe(map(data => {
  //     // store user details and jwt token in local storage to keep user logged in between page refreshes

  //     //localStorage.setItem('currentUser', JSON.stringify(user));
  //     //this.currentUserSubject.next(user);
  //     console.log('testeeeeeeeeeeeeeeeeeee');
  //     console.log(data);
  //     return data;
  // }));


    return this.http.post<any>('http://localhost:80/classes/logar.php', obj).subscribe(function(data){
      console.log(data)
    })

  }

}
