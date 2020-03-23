/****************************************************************************
* PARTIE QUI EFFECTUE LE TRAITEMENT DES DONNNEES UTILISES DANS LA PAGE HTML *
*****************************************************************************/


import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';

@Component({
  selector: 'app-list-patients',
  templateUrl: './list-patients.component.html',
  styleUrls: ['./list-patients.component.css']
})




export class ListPatientsComponent implements OnInit {
  // Declaration d'un tableau de type Patient
  listePatients : Patient[];

  // Instanciation d'un object "patientservice" de type PatientService pour le lien html et partie service
  constructor(private patientservice:PatientService) { }


  // Instruction pour supprimer un patient de la base de donnée
  deletePatient(idPatient : number) {
    this.patientservice.deletePatient(idPatient).subscribe(
      data => {
        console.log("suppresion reussie");
        console.log(data);
      }
    )
  }

  ngOnInit(): void {
    // Instruction pour afficher la listes de tous les patients de la base de donnée
    this.patientservice.getAll().subscribe(
      data => {
        this.listePatients = data;
      }
    )
  }

}
