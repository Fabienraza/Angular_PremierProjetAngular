/***********************************
* DOC CONTENANT LA LISTE DES ROUTES *
************************************/


import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 1- Importer la component relier à la route
import { ListHopitauxComponent } from './list-hopitaux/list-hopitaux.component'
import { ListMedecinsComponent } from './list-medecins/list-medecins.component';
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { CreateHopitalComponent } from './create-hopital/create-hopital.component';
import { CreateMedecinComponent } from './create-medecin/create-medecin.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdateHopitalComponent } from './update-hopital/update-hopital.component';
import { UpdateMedecinComponent } from './update-medecin/update-medecin.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';

      // { ListHopitauxComponent } : nom du component créé
      // './list-hopitaux/list-hopitaux.component' : repertoire : liste-hopitaux > fichier : list-hopitaux.component.ts


// 2- Création de la route qui va etre reliée le WEB-SERVICE JAVA et la page html
const routes: Routes = [
          //////////////////////////////////////
          // ROUTE POUR VISUALISER LES LISTES //
          /////////////////////////////////////

  //Route pour afficher la liste des hopitaux
  {
    path  : "hopital/all",
    component : ListHopitauxComponent
  },
  //Route pour afficher la liste des medecins
  {
    path : "medecin/all",
    component : ListMedecinsComponent
  },
  //Route pour afficher laliste des patients
  {
    path : "patient/all",
    component : ListPatientsComponent
  },

          ///////////////////////////////////////////////////////////
          // ROUTE POUR AJOUTER UN ELEMENT DANS LA BASE DE DONNEE //
          //////////////////////////////////////////////////////////

  //Route pour ajouter un hopital dans la BD
  {
    path : "hopital/add",
    component : CreateHopitalComponent
  },
  //Route pour ajouter un medecin dans la BD
  {
    path : "medecin/add",
    component : CreateMedecinComponent
  },
  //Route pour ajouter un patient dans la BD
  {
    path : "patient/add",
    component : CreatePatientComponent
  },

          ///////////////////////////////////////////////////////////
          // ROUTE POUR MODIFIER UN ELEMENT DANS LA BASE DE DONNEE //
          //////////////////////////////////////////////////////////

  //Route pour modifier un hopital dans la BD
  {
    path :"hopital/update/:idHop",
    component : UpdateHopitalComponent
  },
  //Route pour modifier un medecin dans la base de donnée
  {
    path : "medecin/update/:idM",
    component : UpdateMedecinComponent
  },
  //Route pour modifier un patient dans la base de donnee
  {
    path : "patient/update/:idP",
    component : UpdatePatientComponent
  }
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
