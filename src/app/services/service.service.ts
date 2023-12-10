import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

 
  piece:Array<any>=[];

  constructor() { 
    this.init();
  }
  init ():void{
    this.insert({
      id:'123',
      name:'piston',
      marque:'toshiba'
    });
    this.insert({
      id:'741',
      name:'carbirateure',
      marque:'chin'
    });
    this.insert({
      id:'77',
      name:'piston gaze',
      marque:'allemagne'
    });
  }

  insert (piece:{ id:string,name:string,marque:string}):void{
    this.piece.push(piece);
    console.log(piece);
    
  }
  getAllMessages(){
    return this.piece;
  }
  deleteMessage(index:number):void{
    this.piece.splice(index,1);
  }
}
