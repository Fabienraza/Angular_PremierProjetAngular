import { Component, OnInit } from '@angular/core';
import { Patient } from '../models/patient';
import { PatientService } from '../services/patient.service';
import { Medecin } from '../models/medecin';
import { MedecinService } from '../services/medecin.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})


export class CreatePatientComponent implements OnInit {

  //Decalration et instanciation d'un objet de type Patient qui va stocker les infos saisis dans le formulaire
  newPatient:Patient = new Patient;

  //Declaration d'un tableau de type Medecin pour stocket la liste des medecins de la BD
  listMed:Medecin[];

  //Declaration d'un objet de type PatientService qui va permettre de faire l'appel des fonctions decrite dans la partie service
  constructor(private patientservice:PatientService, private medecinservice:MedecinService) { }

  //Methode en liaison avec la partie service (appel de la fonction "createPatient()")
  createNewPatient(){
    this.patientservice.createPatient(this.newPatient).subscribe(
      data => {
        console.log("Patient bien ajouté dans la base de donnée");
        console.log(data);
      }
    )
  }

  // Contenu qui va s'afficher en premier lors de l'execution de la page
  ngOnInit(): void {
    //Recuperation de la liste de tous les medecins
    this.medecinservice.getAll().subscribe(
      data => {
        this.listMed = data;
      }
    )

  }

}
