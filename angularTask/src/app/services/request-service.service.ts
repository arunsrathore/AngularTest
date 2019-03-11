import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class RequestServiceService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get("https://jsonplaceholder.typicode.com/users");
  }

  getPhotos(albumid) {
    return this.http.get("https://jsonplaceholder.typicode.com/photos?albumId=" + albumid);
  }

  getAlbums(userid) {
    return this.http.get("https://jsonplaceholder.typicode.com/albums?userId=" + userid);
  }
}
