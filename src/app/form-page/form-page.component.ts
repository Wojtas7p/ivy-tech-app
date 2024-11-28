import { Component } from '@angular/core';

@Component({
  selector: 'app-form-page',
  standalone: false,
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.css']
})
export class FormPageComponent {
  model = {
    partName: '',
    quantity: null
  };

  parts: any[] = [];


  colors = ['rgb(223, 228, 232)', 'rgb(148, 148, 128)', 'rgb(161, 193, 195)'];
  colorIndex = 0; 

  onSubmit() {
    if (this.model.partName && this.model.quantity) {
      this.parts.push({
        partName: this.model.partName,
        quantity: this.model.quantity,
        color: 'rgb(223, 228, 232)'  
      });
      this.model.partName = '';
      this.model.quantity = null;
    }
  }

  removePart(part: any) {
    
    this.parts = this.parts.filter(p => p !== part);

   
    this.colorIndex = 0;  
  }

  changeColor(part: any) {
    
    const currentColorIndex = this.colors.indexOf(part.color);
    const nextColorIndex = (currentColorIndex + 1) % this.colors.length;
    part.color = this.colors[nextColorIndex];
  }
}
