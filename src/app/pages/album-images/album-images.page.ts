import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, ModalController } from '@ionic/angular';
import { AlbumService } from 'src/app/services/album.service';
import { ModalViewFullImagePage } from '../modal-view-full-image/modal-view-full-image.page';

@Component({
  selector: 'app-album-images',
  templateUrl: './album-images.page.html',
  styleUrls: ['./album-images.page.scss'],
})
export class AlbumImagesPage implements OnInit {

  album_id = "";
  photos : any = [];

  constructor(
    private route : ActivatedRoute,
    private loadingController : LoadingController,
    private albumService : AlbumService,
    private modalController : ModalController
  ) {
    this.route.params.subscribe((params) => {
      this.album_id = params.id;
      this.getPhotos();
    });
  }

  ngOnInit() {
  }

  getPhotos() {
    this.loadingController.create({
      message : 'Fetching Photos...'
    }).then((loading) => {
      loading.present();
      this.albumService.getPhotos(this.album_id)
      .then((response : any) => {
        loading.dismiss();
        console.log(response);
        this.photos = response.data;
      },
      (error) => {
        loading.dismiss();
        console.log(error);
      });
    });
  }

  async previewImage(image) {
    const modal = await this.modalController.create({
      component: ModalViewFullImagePage,
      componentProps: {
        image: image,
      },
    });

    return await modal.present();
  }

}
