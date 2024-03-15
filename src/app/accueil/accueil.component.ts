import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { MatcheAleatoireComponent } from '../matche-aleatoire/matche-aleatoire.component';
import { ClassementComponent } from '../classement/classement.component';
import { MatchsComponent } from '../matchs/matchs.component';
@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [FooterComponent,NavBarComponent,MatcheAleatoireComponent,ClassementComponent,MatchsComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
