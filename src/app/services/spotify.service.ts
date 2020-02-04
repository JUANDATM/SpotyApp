import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');

   }


   getNewReleases(){
      const headers = new HttpHeaders({
        'Authorization': 'Bearer BQCNpmhuE1z_QhnmfGp1BeNspkecm_hYpjtpV-z5jJ9RUiRyrgkOYyPYxqfVd8yGMX8a9pwBW4RFIDohFwA'
      });

     return this.http.get('	https://api.spotify.com/v1/browse/new-releases',{ headers });
     };
}
