import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../services/medecin.service';
import { Hopital } from '../models/hopital';
import { HopitalService } from '../services/hopital.service';

// Import biblio pour msg alerte utilisateur
import Swal from 'sweetalert2'


@Component({
  selector: 'app-create-medecin',
  templateUrl: './create-medecin.component.html',
  styleUrls: ['./create-medecin.component.css']
})



export class CreateMedecinComponent implements OnInit {

  //Declaration et instanciation d'un objet de type Medecin pour strocke les infos saisis dans formulaire
  newMedecin : Medecin = new Medecin;

  //Declaration d'un tableau de type Hopital pour stocker la liste des hopitaux
  listHopitaux:Hopital[];



  //Declaration d'un objet medecinservice pour communiquer avec la partie service
  constructor(private medecinservice:MedecinService , private hopitalservice:HopitalService) { }



  // Methode en liaison avec la partie service (appel de la fonction createMedecin)
  createNewMed(){
    this.medecinservice.createMedecin(this.newMedecin).subscribe(
      data => {
      // Message d'alerte afficher à l'utilisateur (reussi si idMededin != 0, Erreur sinon)
        if (data['idMedecin'] == 0) {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Erreur dans le processus !'
            })
        } else if (data['idMedecin']) {
            Swal.fire(
              'Félicitation!',
              'Dr. ' +data.nomMedecin+ ' a bien été ajouté(e)!',
              'success'
            ).then( () => {
              console.log("Médecin bien ajouté dans la base de donnée");
              window.location.href="http://localhost:4200/medecin/all"
              }
            )
        }

      }
    )
  }




  // COntenu qui va s'afficher dès l'execution de la page
  ngOnInit(): void {
    
    //Recuperation de la liste de tous les hopitaux
    this.hopitalservice.getAll().subscribe(
      data => {
        this.listHopitaux = data;
      }
    )

    
  }

}
