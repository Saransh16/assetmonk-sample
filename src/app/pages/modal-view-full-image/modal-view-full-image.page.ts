import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-view-full-image',
  templateUrl: './modal-view-full-image.page.html',
  styleUrls: ['./modal-view-full-image.page.scss'],
})
export class ModalViewFullImagePage implements OnInit {

  image;

  constructor(
    private modalController : ModalController
  ) { }

  ngOnInit() {
  }

  dismissModal() {
    this.modalController.dismiss();
  }

}
