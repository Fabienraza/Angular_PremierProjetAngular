import { Component, OnInit } from '@angular/core';
import { Medecin } from '../models/medecin';
import { ActivatedRoute } from '@angular/router';
import { MedecinService } from '../services/medecin.service';
import { HopitalService } from '../services/hopital.service';
import { Hopital } from '../models/hopital';

@Component({
  selector: 'app-update-medecin',
  templateUrl: './update-medecin.component.html',
  styleUrls: ['./update-medecin.component.css']
})



export class UpdateMedecinComponent implements OnInit {

  // Object de type Mededin pour stocker l'objet à modifier
  docteur : Medecin = new Medecin();

  // Objet de type entier pour stocker l'id
  idDoc : number;

  // tableau pour stocker la liste des hopitaux
  listeHopitaux:Hopital[];


  constructor(private route : ActivatedRoute , private medecinservice : MedecinService , private hopitalservice:HopitalService) {

    // Recuperation de l'id saisi dans l'URL
    this.idDoc = parseInt(this.route.snapshot.paramMap.get('idM'));
   
  }



  // Instruction pour modifier les donnes d'un medecin
  modifMedecin(idDoc : number , docteur : Medecin) {
    this.medecinservice.updateMedecin(idDoc , docteur).subscribe(
      data => {
        console.log("Modification reussie");
        console.log(data);
      }
    )
  }


  ngOnInit(): void {

    // Recuperation de l'objet medecin suivant l'id saisi dans l'URL
    this.medecinservice.findMedecin(this.idDoc).subscribe(
      data => {
        this.docteur = data;
      }
    )

    // Recuperation de la liste de tous les hopitaux de la base de donnée
    this.hopitalservice.getAll().subscribe(
      data => {
        this.listeHopitaux = data;
      }
    )

    
  }

}


