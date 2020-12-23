import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { NavController } from '@ionic/angular';
import { EventService } from 'src/app/services/event.service';
import { TaskService } from 'src/app/services/task.service';
const { Storage } = Plugins;

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.page.html',
  styleUrls: ['./create-task.page.scss'],
})
export class CreateTaskPage implements OnInit {

  taskForm : FormGroup;
  submitAttempt: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private taskService : TaskService,
    private navController : NavController,
    private events : EventService
  ) {
    this.taskForm = this.formBuilder.group({
      title : ["", [Validators.required]],
    });
  }

  ngOnInit() {
  }

  submit() {
    this.submitAttempt = true;
    if (this.taskForm.valid) {

      Storage.get({
        key : 'token',
      }).then((data) => {
        this.taskService.create(this.taskForm.value, data.value)
        .then((response : any) => {
          this.events.publish('New Task Created');
          this.navController.navigateRoot('tabs/tasks');
        },
        (error) => {
          console.log(error.response);
        });
      });
    }
  }

}
