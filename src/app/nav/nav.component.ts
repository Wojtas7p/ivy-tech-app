import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-nav',
  standalone: false,
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
title = "PartsApp";
  logoUrl: string = '';

constructor(private http: HttpClient) {}

ngOnInit() {
  this.logoUrl = 'assets/logo.png';
  
}
}
