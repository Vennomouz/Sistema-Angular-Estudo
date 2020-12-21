import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  nome: string = '';
  usuario: string = '';
  senha: string ='';
  user: Usuario = new Usuario(this.nome, this.usuario, this.senha);

  constructor(private authService: AuthService) { 

  }

  ngOnInit(): void {
  }

  cadastrar(){
    this.user.nome = this.nome;
    this.user.usuario = this.usuario;
    this.user.senha = this.senha;

    this.authService.cadastrar(this.user);
  }

}