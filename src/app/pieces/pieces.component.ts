import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
@Component({
  selector: 'app-pieces',
  templateUrl: './pieces.component.html',
  styleUrls: ['./pieces.component.scss']
})
export class PiecesComponent implements OnInit{
  id:string='';
  name:string='';
  marque:string='';
  monTableau:Array<any>=[];
  issubmeted : boolean =true;

  piece:any= FormGroup ;
  constructor(private formBuilder: FormBuilder,private service:ServiceService) { }

  ngOnInit() {
    this.piece = this.formBuilder.group({
      name: ['', Validators.required],
      id: ['', Validators.required],
    marque: ['', Validators.required],


      // Ajoutez d'autres champs selon vos besoins
    });
  }
 

  onSubmit() {
    // Vous pouvez accéder aux valeurs du formulaire ici
    const valeursFormulaire = this.piece.value;
    
    this.service.insert({
      'id':this.id,
      'name':this.name,
      'marque':this.marque
    
      

    })

   
    this.monTableau.push(valeursFormulaire);
    console.log(this.monTableau);
   
    
    
  }
  
}