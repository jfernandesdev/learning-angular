import { Component } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.scss']
})
export class EmitterComponent {
  myNumber: number = 0;

  onChangeNumber(): void {
    this.myNumber = Math.floor(Math.random() * 100);
    console.log("Evento do filho emitido e capturado pelo seu pai com sucesso!");
  }
}
