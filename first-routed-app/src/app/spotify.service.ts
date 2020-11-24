import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQCxqXmJtxPa1Rn6_4v9S_1yL_VvjaTC6Ti8tHNZaoHvnZsGAwu9FPdtBbgz3XQXLn9iqxImOpjl5m-M8GUY967TdtICchMndx6ficgC0pvZ0mFXMrOa2cea19aQqsqVLWihI9qEVv1J0QWY-jHqidN2dAizI3k'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}
