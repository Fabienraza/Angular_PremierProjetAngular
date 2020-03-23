/*********************************
* LA STRUCTURE DU MODELE PATIENT *
**********************************/


import { Medecin } from './medecin';


export class Patient {
    idPatient : number;
    nomPatient : String;
    prenomPatient : String;
    dateDeNaissance : Date;
    pathologie : String;
    medecin : Medecin
}


