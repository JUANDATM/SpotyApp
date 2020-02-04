import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');

   }

   getQuery(query: string){
    const url = `https://api.spotify.com/v1/${ query}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBJqux0-aXec6ag7bf312vfw2wDBZC9NKsCKq89xC7eJbV0tpwy_K7xCPgnPbmWwMzYIgfSdQF16jb5N_E'
    });
    return this.http.get(url, {headers});
   }


   getNewReleases(){
     return this.getQuery('browse/new-releases')
     .pipe( map( data => data['albums'].items));
    }

     getArtista(termino: string){
     return this.getQuery(`search?q=${ termino }&type=artist`)
     .pipe(map( data => data['artists'].items));
     
     }

}
