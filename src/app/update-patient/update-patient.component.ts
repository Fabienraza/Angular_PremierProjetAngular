import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { MedecinService } from '../services/medecin.service';
import { Medecin } from '../models/medecin';
import { Patient } from '../models/patient';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})



export class UpdatePatientComponent implements OnInit {
  // Declaration d'un tableau pour stocket la liste des medecins 
  listeMedecins : Medecin[];

  // Objet de type medecin pour stocker les donnes du medecin rechercher suivant l'id
  patientFind : Patient = new Patient();

  // Objet de type entier pour stocker l'id du patient à recuperer les données
  idP : number;

  constructor(private patientservice : PatientService , private medecinservice : MedecinService , private route : ActivatedRoute) { 

    // Recuperation de l'id saisi dans l'URL 
    this.idP = parseInt(this.route.snapshot.paramMap.get('idP'));
        // 'idP' : correspond au parametre saisi dans l'URL present dans "app-routine.module.ts"

  }



  // Instruction pour modifier les donnees d'un patient
  modifPatient() {
    this.patientservice.updatePatient(this.idP , this.patientFind).subscribe(
      data => {
        console.log("Modification réussie");
        console.log(data);
      }
    )
  }



  // Methode pour comparer les medecins affectés à un patient
      // Utilisé dans la partie modification des infos patients
      // Affiche les infos affiché de base dans le menu select
  compareHop(a1:Medecin , a2:Medecin) {
    return a1 && a2 ? a1.idMedecin === a2.idMedecin : a1 === a2;
  }



  ngOnInit(): void {

    console.log(this.idP)

    // Recuperation de la liste des médecins 
    this.medecinservice.getAll().subscribe(
      data => {
        console.log("recuperation liste des medecins OK");
        this.listeMedecins = data;
      }
    )


    // Recuperation des donnes patient suivant son id
    this.patientservice.getPatientById(this.idP).subscribe(
      data => {
        console.log("recuperation donnees du patient via id OK");
        this.patientFind = data;
      }
    )
  }

}
