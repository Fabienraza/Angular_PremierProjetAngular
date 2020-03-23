import { Component, OnInit } from '@angular/core';
import { HopitalService } from '../services/hopital.service';
import { Hopital } from '../models/hopital';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-hopital',
  templateUrl: './update-hopital.component.html',
  styleUrls: ['./update-hopital.component.css']
})



export class UpdateHopitalComponent implements OnInit {

  hopital : Hopital = new Hopital();
  
  // Variable permettant de stocker l'id saisi dans la barre d'URL
  idHopitalURL : number; 


  constructor(private hopitalservice : HopitalService , private route : ActivatedRoute) {
    // Recuperation de l'iD saisi sur l'URL 
    this.idHopitalURL = parseInt(this.route.snapshot.paramMap.get('id'));
        //'id': correspond au paramètre saisi dans la route.
        // this.route.snapshot.paramMap.get() : retourne un objet de type String, d'ou la necessite de le convertir en un entier.
  }


  

  // Methode pour modifier les donnees de l'hopital
  modifHopital(idHopitalURL : number , hopital : Hopital) {
    this.hopitalservice.updateHopital(idHopitalURL , hopital).subscribe(
      data => {
        console.log("Modification reussie");
        console.log(data);
      }
    )
  } 


  ngOnInit(): void {
    // Test si recuperation effectué de l'id
    console.log(this.idHopitalURL);

    //Recupération de l'objet hopital suivant l'id 
    this.hopitalservice.findHopital(this.idHopitalURL).subscribe(
      data => {
          this.hopital = data;
      }
    )


  }

}
