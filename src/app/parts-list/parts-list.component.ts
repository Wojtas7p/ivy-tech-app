
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-parts-list',
  standalone: false,
  templateUrl: './parts-list.component.html',
  styleUrls: ['./parts-list.component.css']
})
export class PartsListComponent {
  @Input() parts: any[] = []; // Dane wejściowe
  @Output() remove = new EventEmitter<any>(); // Wyjście dla usuwania elementu

  // Emitowanie zdarzenia usuwania
  onRemove(part:any) {
    this.remove.emit(part);
  }
  
}