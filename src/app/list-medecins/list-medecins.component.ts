/****************************************************************************
* PARTIE QUI EFFECTUE LE TRAITEMENT DES DONNNEES UTILISES DANS LA PAGE HTML *
*****************************************************************************/


import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../services/medecin.service';

// import biblio pour les message d'alerte utilisateur
import Swal from 'sweetalert2'



@Component({
  selector: 'app-list-medecins',
  templateUrl: './list-medecins.component.html',
  styleUrls: ['./list-medecins.component.css']
})



export class ListMedecinsComponent implements OnInit {
  // Declaration d'un tableau de type Medecin
  listeMedecins : Medecin[];

  // Instanciation d'un objet de type MedecinService
  constructor(private medecinservice : MedecinService) { }


  // instruction pour supprimer un mededin de la base de donnée
  deleteMed(idMed : number) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        title: 'Est-vous sûr de vouloir supprimer?',
        text: "Cette action est irreversible!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimer!',
        cancelButtonText: 'Annuler!',
        reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Instruction pour supprimer un medecin
        this.medecinservice.deleteMedecin(idMed).subscribe()

        swalWithBootstrapButtons.fire(
          'Supprimer!',
          'Les donnés du médecin ont bien été supprimés.',
          'success'
        )

      } else if (result.dismiss === Swal.DismissReason.cancel) {

        swalWithBootstrapButtons.fire(
          'Annulation',
          'No stress vos données sont intacts :)',
          'error'
        )

      }
    })

  }


  ngOnInit(): void {
    // Instruction pour afficher la liste des medecins presents dans la base de donnée
    this.medecinservice.getAll().subscribe(
      data => {
        this.listeMedecins = data;
      }
    )
  }

}
