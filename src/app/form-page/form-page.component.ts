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

   possiblePartNames = ['XCM23', '2E3RF', 'GF562', 'ZAS45', 'LMK7J', 'LKOIA',
    '0D9PL', 'LP908', 'SH789', '09JKO', '09OPL', 'AZ234'];

  onSubmit() {
    if (this.model.partName && this.model.quantity) {
      this.parts.push({
        partName: this.model.partName,
        quantity: this.model.quantity
      });
      this.model.partName = '';
      this.model.quantity = null;
    }
  }

  removePart(part: any) {
    this.parts = this.parts.filter(p => p !== part);
  }

  changeValue(part: any) {

    const randomPartName = this.possiblePartNames[
      Math.floor(Math.random() * this.possiblePartNames.length)
    ];

       const randomQuantity = Math.floor(Math.random() * 100) + 1;

    part.partName = randomPartName;
    part.quantity = randomQuantity;
  }
}
