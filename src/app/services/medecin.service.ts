/************************************************************************ 
* PARTIE SERVICE DE LA CLASSE MEDECIN DE ANGULAR ER WEB-SERVICE DE JAVA *
*************************************************************************/


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medecin } from '../models/medecin';


@Injectable({
  providedIn: 'root'
})



export class MedecinService {
  // Instanciation d'un objet "http" de type HttpClient pour communiquer avec la partie WEB-SERVICE JAVA
  constructor(private http:HttpClient) { }

  
  // Methode "getAll()" permettant afficher la liste de tous les medecins de la BD
  getAll(){
      return this.http.get<Medecin[]>('http://localhost:8080/medecin/all').pipe();
  }
  
  
  // Methode "createMedecin()" permettant d'ajouter un medecin dans la base de donnée
  createMedecin(medecin:Medecin){
    return this.http.post<Medecin>('http://localhost:8080/medecin/add',medecin).pipe();
  }


  //Methode pour supprimer un medecin de la base de donnée
  deleteMedecin(idM : number) {
    return this.http.delete<number>('http://localhost:8080/medecin/delete/'+idM).pipe();
  }


  // Methode pour rechercher un medecin suivant son id
  findMedecin(idM:number){
    return this.http.get<Medecin>('http://localhost:8080/medecin/find/'+idM).pipe();
  }


  // Methode pour modifier les donnees d'un medecin
  updateMedecin(idM:number , medecin : Medecin) {
    return this.http.put<Medecin>('http://localhost:8080/medecin/update/'+idM, medecin).pipe();
  }
}
