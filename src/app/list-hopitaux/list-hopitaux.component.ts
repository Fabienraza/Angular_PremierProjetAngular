/****************************************************************************
* PARTIE QUI EFFECTUE LE TRAITEMENT DES DONNNEES UTILISES DANS LA PAGE HTML *
*****************************************************************************/


import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../services/hopital.service';
import { Hopital } from '../models/hopital';

// Import biblio pour les messages d'alerte utilisateur 
import Swal from 'sweetalert2'




@Component({
  selector: 'app-list-hopitaux',
  templateUrl: './list-hopitaux.component.html',
  styleUrls: ['./list-hopitaux.component.css']
})



export class ListHopitauxComponent implements OnInit {
  // Declaration d'un tableau "listeHopitaux" de type Hopital
  listHopitaux : Hopital[];


  // Instanciation d'un objet qui communique avec la partie service de ANGULAR
  constructor(private hopitalservice : HopitalService) { }


  // Methode pour supprimer un hopital
  deleteOneHopital(idH : number) {

    // Affichage message d'alerte utilisateur
    Swal.fire({
        title: 'Etes-vous sûr de vouloir supprimer?',
        text: "Cette action est irreversible!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Oui, supprimer!',
        cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.value) {
        // Instruction pour supprimer un hopital
        this.hopitalservice.deleteHopital(idH).subscribe()

        // Msg suppression avec succès si reponse msg info = supprimer
        Swal.fire(
          'Supprimer !',
          ' a bien été supprimé...',
          'success'
        )
        
      }
    })


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
