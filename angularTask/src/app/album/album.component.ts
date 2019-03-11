import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../services/request-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
  albums: any;
  userid;
  constructor(private requestService: RequestServiceService, private activeRoute: ActivatedRoute, private router: Router) {
    this.userid = this.activeRoute.snapshot.paramMap.get("userId")
    localStorage.setItem('userId', JSON.stringify(this.userid));
  }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() {
    this.requestService.getAlbums(this.userid).subscribe(data => {
      this.albums = data.json();
      console.log(data.json())
    });
  };

  back() {
    this.router.navigate(["/users"]);
  }

}
