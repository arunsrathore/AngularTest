import { Component, OnInit } from '@angular/core';
import { RequestServiceService } from '../services/request-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photos: any;
  albumid;
  userId;
  constructor(private requestService: RequestServiceService, private activeRoute: ActivatedRoute, private router: Router) {
    this.albumid = this.activeRoute.snapshot.paramMap.get("albumId")
    this.userId = JSON.parse(localStorage.getItem('userId'));
  }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos() {
    this.requestService.getPhotos(this.albumid).subscribe(data => {
      this.photos = data.json();
      console.log(data.json())
    });
  };

  back() {
    this.router.navigate(["/albums/" + this.userId]);
  }
}
