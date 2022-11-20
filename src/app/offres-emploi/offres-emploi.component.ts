import { Component, OnInit } from '@angular/core';
import { Emploi } from '../core/Emploi';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {

  listeEmploi!:Emploi[]
  nbr!:number
  searchText!:string
  constructor() { }

  ngOnInit(): void {
    this.listeEmploi=[{reference:'001',titre:'test1',entreprise:'esprit',etat:true}, { reference:'002',titre:'test2',entreprise:'sesame',etat:false}];
    }
  
    //!calculer le nombre des offres d’emploi non clôturées. 
    Bilan(){
      this.nbr=0;
      for(let i=0;i<this.listeEmploi.length;i++)
      {
        if (this.listeEmploi[i].etat==true) this.nbr++;
      }
    }
  
    //chercher un emploi par entreprise.
  Search(){
    this.listeEmploi= this.listeEmploi.filter((e)=>e.entreprise.match(this.searchText))
    
    
    
  
    
  }

}
