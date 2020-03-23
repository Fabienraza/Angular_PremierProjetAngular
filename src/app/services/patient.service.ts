/************************************************************************ 
* PARTIE SERVICE DE LA CLASSE PATIENT DE ANGULAR ER WEB-SERVICE DE JAVA *
*************************************************************************/


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';



@Injectable({
  providedIn: 'root'
})



export class PatientService {
  // Instanciation d'un objet "http" de type HttpClient pour communiquer avec WEB-SERVICE JAVA
  constructor(private http:HttpClient) { }

  // Methode pour recuperer la liste de tous les patients dans la BD
  getAll(){
      return this.http.get<Patient[]>('http://localhost:8080/patient/all').pipe();
  }
  
  // Methode pour ajouter un patient dans la base de donnée
  createPatient(patient:Patient){
    return this.http.post<Patient>('http://localhost:8080/patient/add',patient).pipe();
  }


  //Methode pour supprimer un patient de la base de donnée
  deletePatient(idP : number){
    return this.http.delete<number>('http://localhost:8080/patient/delete/'+idP).pipe();
  }

  
  //Methode pour rechercher un patient à partir de son id
  getPatientById(idP:number){
    return this.http.get<Patient>('http://localhost:8080/patient/find/'+idP).pipe();
  }


  //Methode pour modifier les données d'un patient
  updatePatient(idPatient:number , patient:Patient){
    return this.http.put<Patient>('http://localhost:8080/patient/update/'+idPatient , patient).pipe();
  }

}
