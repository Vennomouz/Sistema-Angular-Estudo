export class UsuarioLogar {
    public usuario: string;
    public senha: string;

    constructor(constructUsuario: string, constructSenha: string){
        this.usuario = constructUsuario;
        this.senha = constructSenha;
    }
}