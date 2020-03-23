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
    this.idP = parseInt(this.route.snapshot.paramMap.get('idPatient'));

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


  ngOnInit(): void {
    // Recuperation de la liste des médecins 
    this.medecinservice.getAll().subscribe(
      data => {
        console.log("recuperation donnees du patient via id");
        this.listeMedecins = data;
      }
    )


    // Recuperation des donnes patient suivant son id
    this.patientservice.getPatientById(this.idP).subscribe(
      data => {
        console.log("recuperation id de l'URL");
        this.patientFind = data;
      }
    )
  }

}
