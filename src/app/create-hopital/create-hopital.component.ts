import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../services/hopital.service';
import { Hopital } from '../models/hopital';

@Component({
  selector: 'app-create-hopital',
  templateUrl: './create-hopital.component.html',
  styleUrls: ['./create-hopital.component.css']
})
export class CreateHopitalComponent implements OnInit {
  // Decralaration et instanciation d'un objet de type Hopital pour stocker les infos saisis dans le formulaire
  newHopital : Hopital = new Hopital;

  //Declaration de l'objet hopitalservice pour communiquer avec le WEB-SERVICE DE JAVA
  constructor(private hopitalservice:HopitalService) { }

  //Methode pour creer un hopital dans la base de donne
  createHopital (){
    this.hopitalservice.createHop(this.newHopital).subscribe(
      data => {
        //data contient la réponse de la requete
        console.log("Hôpital bien ajouté dans la base de donnée")
        console.log(data)
      }
    )
  }

  //Son contenu correspond à l'ensemble des fonctions qui vont s'executer dès le demarrage de la page
  ngOnInit(): void {
  }

}
