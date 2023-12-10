import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-piece-details',
  templateUrl: './piece-details.component.html',
  styleUrls: ['./piece-details.component.scss']
})
export class PieceDetailsComponent {
  @Input()
  message: any = {};
 
  @Input()
  index:number = -1;
@Output()

 delete: EventEmitter<number>= new EventEmitter<number>();

 onDelete() {
  this.delete.emit(this.index);
  
  }

}
