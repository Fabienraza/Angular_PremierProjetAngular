
/*********************************
* LA STRUCTURE DU MODELE MEDECIN *
**********************************/

import { Hopital } from './hopital';


// Structure idem que celui present dans Postman (ie sous format JSON)

export class Medecin {
    idMedecin : number;
    nomMedecin : String;
    prenomMedecin : String;
    adresseMedecin : String;
    hopital : Hopital
}

