import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.page.html',
  styleUrls: ['./albums.page.scss'],
})
export class AlbumsPage implements OnInit {

  albums : any = [];

  constructor(
    private loadingController : LoadingController,
    private albumService : AlbumService,
    private navController : NavController
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAlbums();
  }

  getAlbums() {
    this.loadingController.create({
      message : "Fetching albums..."
    }).then((loading) => {
      loading.present();
      this.albumService.getAlbums()
      .then((response : any) => {
        loading.dismiss();
        console.log(response);
        this.albums = response.data;
      },
      (error) => {
        loading.dismiss();
        console.log(error);
      })
    })
  }

  goToPhotos(id) {
    this.navController.navigateForward('albums/'+id+'/images')
  }

}
