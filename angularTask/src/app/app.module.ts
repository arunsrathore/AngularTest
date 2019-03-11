import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { AlbumComponent } from './album/album.component';
import { PhotosComponent } from './photos/photos.component';
import { AppRoutingModule } from './/app-routing.module';
import { RequestServiceService } from './services/request-service.service';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    AlbumComponent,
    PhotosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RequestServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
