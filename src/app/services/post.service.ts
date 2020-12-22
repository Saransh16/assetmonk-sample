import { Injectable } from '@angular/core';
import axios from 'axios';
import api from "src/api";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getPosts() {

    return new Promise((res, rej) => {
      axios.get(api.getPosts())
      .then((response) => {
        return res(response);
      },
      (error) => {
        return rej(error);
      });
    });
  }
}
