import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EventService } from 'src/app/services/event.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

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
    
  }

  fetchTasks() {

  }

  createTask() {
    this.navController.navigateForward('create-task');
  }

}
