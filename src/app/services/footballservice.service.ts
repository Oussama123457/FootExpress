import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FootballService {
  private apiUrl = 'https://v3.football.api-sports.io'; // URL de base de l'API
  private apiKey = '2ed988260c392b6232f95ead443f60c0'; // Votre clé API

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer les données de classement
  getStandings(leagueId: number, season: string): Observable<any> {
    const headers = new HttpHeaders({
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': this.apiKey
    });

    return this.http.get(`${this.apiUrl}/standings?league=${leagueId}&season=${season}`, { headers });
  }
}
