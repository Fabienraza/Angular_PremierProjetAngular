/****************************************************************************
* PARTIE QUI EFFECTUE LE TRAITEMENT DES DONNNEES UTILISES DANS LA PAGE HTML *
*****************************************************************************/


import { Component, OnInit } from '@angular/core';

import { HopitalService } from '../services/hopital.service';
import { Hopital } from '../models/hopital';




@Component({
  selector: 'app-list-hopitaux',
  templateUrl: './list-hopitaux.component.html',
  styleUrls: ['./list-hopitaux.component.css']
})



export class ListHopitauxComponent implements OnInit {
  // Declaration d'un tableau "listeHopitaux" de type Hopital
  listHopitaux : Hopital[];

  //Declaration d'un objet de type hôpital
  hopital:Hopital = new Hopital;



  // Instanciation d'un objet qui communique avec la partie service de ANGULAR
  constructor(private hopitalservice : HopitalService) { }


  //Methode pour supprimer un hopital
  deleteOneHopital(idH : number) {
      this.hopitalservice.deleteHopital(idH).subscribe(
        data => {
          console.log("suppression reussi");
          console.log(data);
        }
      )
  }


  // Son contenu correspond aux fonctions qui vont s'executer des l'ouverture de la page
  ngOnInit(): void {
    // Affichage de la liste des hôpitaux
    // equivalent "this.listHopitaux = this.hopitalService.getAll()" dans JAVA
    this.hopitalservice.getAll().subscribe(
      data => {
        this.listHopitaux = data;
      }
    )

  }

}
