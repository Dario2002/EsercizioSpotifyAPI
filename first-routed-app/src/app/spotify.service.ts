import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({Authorization: environment.oauthToken});

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
        'Bearer BQAMibucGIlp-4i-lX36t9JKDvk21S6zd_7YInkM9d_iQlAcsXadantfn5llYrMqS4n58euFZ5dAVKUdJjScxa_lgPlYjuRsNSvYFqSjW-ddaVhMIWJlxLMHRz46J9HimZvFkMfHK5mvD8CtTy08W9-nuzXNgd4'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }

  getTrack(id: string) {
      const url = `https://api.spotify.com/v1/tracks/${id}`;
      const headers = new HttpHeaders({
        Authorization:
          'Bearer BQAMibucGIlp-4i-lX36t9JKDvk21S6zd_7YInkM9d_iQlAcsXadantfn5llYrMqS4n58euFZ5dAVKUdJjScxa_lgPlYjuRsNSvYFqSjW-ddaVhMIWJlxLMHRz46J9HimZvFkMfHK5mvD8CtTy08W9-nuzXNgd4'
      });

      return this.http.get(url, { headers });
    }

}
