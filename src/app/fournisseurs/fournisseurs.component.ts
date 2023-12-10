import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-fournisseurs',
  templateUrl: './fournisseurs.component.html',
  styleUrls: ['./fournisseurs.component.scss']
})
export class FournisseursComponent implements OnInit{
  nom:string='';
  id:string='';
  marque:string='';
  issubmeted : boolean =false;
  messages:Array<any>=[];

  constructor(private service:ServiceService)
  {
    this.messages=this.service.getAllMessages();

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  piece = {nom:"hakim",prenom:"aouini"};

    
}
