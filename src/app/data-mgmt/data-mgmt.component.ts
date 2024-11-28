import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-mgmt',
  templateUrl: './data-mgmt.component.html',
  standalone: false,
  styleUrls: ['./data-mgmt.component.css']
})
export class DataMgmtComponent {
  parts: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>("assets/available-parts.json").subscribe(data => {
     this.parts = data;
    });
  }

  removePart(part:any){
    this.parts = this.parts.filter(p => p !== part);
  }
}