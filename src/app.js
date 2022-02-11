import { LightningElement } from "lwc";

export default class App extends LightningElement {
  
  nome = "Alvo Dumbledore";
  telefone = "+44 789-236-451";
  cpf = "123.456.789-00";
  idade = 152;
  email = "alvo.dumbledore@hogwarts.edu.en";
  instagram = "@alvodumbledore";
  linkedIn = "https://www.linkedin.com/in/alvo-percival-dumbledore-57497b45/";

  visivel = true;

  visibilidade(){
    if(this.visivel==true){
      this.visivel = false;
    }else{
      this.visivel = true;
    }
  }

  alterarValores(){
    this.nome = "Minerva McGonagall";
    this.telefone = "+44 632-159-753";
    this.cpf = "987.654.321-00";
    this.idade = 85;
    this.email = "minerva.mcgonagall@hogwarts.edu.en";
    this.instagram = "@minervamcgonagall";
    this.linkedIn = "Minerva McGonagall";
  }
}
