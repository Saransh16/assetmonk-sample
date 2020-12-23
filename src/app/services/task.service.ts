import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Helper } from 'src/utilities/helper';
const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks : any = [];

  constructor(
    private helper : Helper
  ) { }

  create(task, userToken) {

    return new Promise((res, rej) => {
      Storage.get({
        key : 'tasks'
      }).then((data) => {
        if(data.value) {
          this.tasks = JSON.parse(data.value);
          console.log(this.tasks);
          let new_task = {
            userId : userToken,
            id : this.helper.getRandomNumber(1,100),
            completed : false,
            title : task.title
          }
          this.tasks = this.tasks.concat(new_task);
          Storage.set({
            key : 'tasks',
            value : JSON.stringify(this.tasks)
          }).then(() =>{
            return res(true);
          })
        }
        else {
          task = [{
            userId : 'token',
            id : this.helper.getRandomNumber(1,100),
            completed : false,
            title : task.title
          }]
          Storage.set({
            key : 'tasks',
            value : JSON.stringify(task)
          }).then(() =>{
            return res(true);
          })
        }
      })
    });
  }
}
