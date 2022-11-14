import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-Angular-Spring';

  usuario = {login: "", senha: ""};

 

  public login(){
    console.log(this.usuario.login + " " + this.usuario.senha)
  }
}
