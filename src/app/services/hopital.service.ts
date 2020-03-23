/************************************************************************ 
* PARTIE SERVICE DE LA CLASSE MEDECIN DE ANGULAR ER WEB-SERVICE DE JAVA *
*************************************************************************/

import { Injectable } from '@angular/core';

// importation module d'angular qui permet la consommation de service (transformation donnees BD (sous JSON) => en donnée .ts)
import { HttpClient } from '@angular/common/http';

// importation du modele hopital.ts declaré dans models
import { Hopital } from '../models/hopital';




@Injectable({
  providedIn: 'root'
})


export class HopitalService {
  //URL de base 
  baseURL = "http://localhost:8080/hopital";

  // instanciation de l'objet http (idem "@Autowired private HttpClient http" dans java)
  constructor(private http:HttpClient) { }


  
  
  // Methode pour afficher la liste des hopitaux de la BD
  getAll() {
    return this.http.get<Hopital[]>(this.baseURL+'/all').pipe();
  }



  //Methode pour creer un nouveau hopital dans la base de donnee
  createHop(hopital:Hopital) {
    return this.http.post<Hopital>(this.baseURL+'/add',hopital).pipe();
  }
      // create (hopital:Hopital) : paramètre à l'entrée de la fonction : un objet de type Hopital
      // post<Hopital> : requete post qui renvoie en retour un objet de type Hopital
      // ('http://localhost:8080/hopital/add',hopital) : parametres attendu (URL dans WEB-SERVICE JAVA , corps de la requete)
            // (...,hopital) : representation de 'attribut mis en @requestbody dans les methodes de JAVA
      // pipe() : <=> thread.



  // Methode pour supprimer un hopital de la base de donnée
  deleteHopital(idH:Number) {
    return this.http.delete<number>(this.baseURL+'/delete/'+idH).pipe();
  }
      // (... +idH) : représentation de l'attribut mis en @PathVariable dans les methodes en JAVA



  // Methode pour récuperer un hopital suivant son id
  findHopital(idH:number){
    return this.http.get<Hopital>(this.baseURL+'/find/'+idH).pipe();
  }
 

  //Methode pour modifier une hopital dans la base de donnée
  updateHopital(idH:number , hopital:Hopital) {
      return this.http.put<Hopital>(this.baseURL+'/update/'+idH,hopital).pipe();
  }

  
}
