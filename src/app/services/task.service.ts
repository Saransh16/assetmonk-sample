import { Injectable } from '@angular/core';
import axios from 'axios';
import api from "src/api";

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  create(task) {
    return new Promise((res, rej) => {
      axios
        .post(api.createTask(), {
          title: task.title,
          completed : false
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
