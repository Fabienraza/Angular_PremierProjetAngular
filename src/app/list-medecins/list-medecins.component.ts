/****************************************************************************
* PARTIE QUI EFFECTUE LE TRAITEMENT DES DONNNEES UTILISES DANS LA PAGE HTML *
*****************************************************************************/


import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../services/medecin.service';


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
    this.medecinservice.deleteMedecin(idMed).subscribe(
      data => {
        console.log("suppression reussi")
        console.log(data);
      }
    )
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
