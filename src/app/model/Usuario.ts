export class Usuario {
    public nome: string;
    public usuario: string;
    public senha: string;

    constructor(constructNome: string, constructUsuario: string, constructSenha: string){
        this.nome = constructNome;
        this.usuario = constructUsuario;
        this.senha = constructSenha;
    }
}