import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-classement',
  templateUrl: './classement.component.html',
  styleUrls: ['./classement.component.css'],
  standalone : true,
  imports:[CommonModule]
})
export class ClassementComponent implements OnInit {
  classementData: any; // Déclaration de la propriété classementData

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getClassement();
  }

  getClassement() {
    // Le reste de votre code pour récupérer le classement
  }
}
