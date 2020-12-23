import { Component, Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
    providedIn: 'root'
})
export class Helper {
  
  constructor(
    private toastController : ToastController
  ) { }

  showErrorToast(message = "Something went wrong. Please try again later.", time = 2000) {
    return this.toastController
    .create({
      message: message,
      duration: time,
      position: "bottom",
      color: "dark",
    })
    .then((toastData) => {
      toastData.present();
    });
  }  
  
  showSuccessToast(message, time = 2000) {
    return this.toastController
      .create({
        message: message,
        duration: time,
        position: "top",
        color: "success",
      })
      .then((toastData) => {
        toastData.present();
    });
  } 

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

}