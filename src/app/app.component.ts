import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de usuarios';
  kap = 'zerbait';
  mezua="ññ";
  erroldatua=false;
  
  izena:string="";
  deitura:string="";
  ardura:string="";
  
  entradas:object[];
  
  sarrerak = ["Lehen kapitulua","Bigarren kapitulua", "Hirugarren kapitulua","Laugarren kapitulua","Bosgarren kapitulua"];

  constructor(){
    this.entradas=[
      {izena: "Lehen kapitulua"},
      {izena: "Bigarren kapitulua"},
      {izena: "Hirugarren kapitulua"},
      {izena: "Laugarren kapitulua"},
      {izena: "Bosgarren kapitulua"},
    ]
  }
  
  erroldatu(){
    this.erroldatua=true;
    this.mezua="Pertsona hau ederto erroldatu da, izen-deitura hauekin: ";
  }
}
