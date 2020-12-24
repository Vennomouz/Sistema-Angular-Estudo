import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'
import { UsuarioLogar } from '../model/UsuarioLogar';
// import * as $ from "jquery";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string ='';
  user: UsuarioLogar = new UsuarioLogar(this.usuario, this.senha);
  resp: string = ''
  
  constructor(
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }

  entrar(){
    this.user.usuario = this.usuario;
    this.user.senha = this.senha;

    // console.log(this.user);

    // this.authService.logar(this.user).then(function(data){

    // })

    this.authService.logar(this.user);
    
    // .subscribe(data =>{
    //   console.log(data)
    //   console.log('teste')
    // })

    // this.authService.logar(this.user).subscribe((data: JSON) => {
    //   console.log(data);
      // for(const dados in data){
      //   console.log(data[dados].id);
      //   console.log(data[dados].nome);
      // }

      // this.user = data;
      // localStorage.setItem('token', this.user.token)
      // this.router.navigate(['/site']);

    // })

    
  }

}
