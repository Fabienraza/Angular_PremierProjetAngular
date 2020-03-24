import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../services/hopital.service';
import { Hopital } from '../models/hopital';

// importation biblio pour les alertes utilisateur
import Swal from 'sweetalert2';


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
         
        // Affichage onglet alerte à l'utilisateur suivant la reussite ou non de l'ajout d'un hopital dans BD
             //  data['idHopital'] : equivalent "data.idHopital"
        if (data['idHopital'] == 0) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Erreur dans le processus !'
            })
        } else if (data['idHopital']) {
            Swal.fire (
              'Félicitation!',
              data.nomHopital+' a bien été ajouté !',
              'success'
            ).then( () => {     // Action qui se produit lors du clique sur le bouton
              // ecriture msg au niveau de la console
              console.log("Hôpital bien ajouté dans la base de donnée")

              //redirection vers une autre page apres validation de l'ajout
              window.location.href = "http://localhost:4200/hopital/all"
              }
            )
        }

      }
    )
  }


  //Son contenu correspond à l'ensemble des fonctions qui vont s'executer dès le demarrage de la page
  ngOnInit(): void {
  }

}
