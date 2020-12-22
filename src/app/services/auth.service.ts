import { Injectable } from '@angular/core';
import axios from 'axios';
import api from "src/api";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user) {
    return new Promise((res, rej) => {
      axios
        .post(api.login(), {
          email: user.email,
          password: user.password,
        })
        .then(
          (response) => {
            return res(response);
          },
          (error) => {
            console.log(error.response);
            return rej(error.response);
          }
        );
    });
  }
}
