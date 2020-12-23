import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';
import { EventService } from 'src/app/services/event.service';
import { TaskService } from 'src/app/services/task.service';
const { Storage } = Plugins;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  tasks : any = [];
  token  = "";

  constructor(
    private navController : NavController,
    private taskService : TaskService,
    private events : EventService
  ) {
    this.listenToEvents();
  }

  listenToEvents() {
    this.events.subscribe().subscribe((event) => {
      const event_type = typeof event == 'string' ? event : event.type;

      if(event_type == "New Task Created") this.fetchTasks();
    })
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.fetchTasks();
  }

  fetchTasks() {

    Storage.get({
      key : 'tasks'
    }).then((data) => {
      Storage.get({
        key : 'token'
      }).then((token) => {
        let tasks = JSON.parse(data.value);
        this.token = token.value;
        this.tasks = [];
        if(tasks) {
          tasks.forEach(element => {
            if(element.userId == this.token) 
            this.tasks = this.tasks.concat(element);
          });
        }
      });
    })

  }

  createTask() {
    this.navController.navigateForward('create-task');
  }

  changeStatus(id, event) {

    this.tasks.forEach(element => {
      if(element.id == id && element.userId == this.token) {
        element.completed = event.target.value;
      }
    });

    Storage.set({
      key : 'tasks',
      value : JSON.stringify(this.tasks)
    });
    
  }

}
