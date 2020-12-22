import { Injectable } from '@angular/core';
import axios from 'axios';
import api from "src/api";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }

  getAlbums() {
    return new Promise((res, rej) => {
      axios.get(api.getAlbums())
      .then((response) => {
        return res(response);
      },
      (error) => {
        return rej(error);
      });
    });
  }
}
