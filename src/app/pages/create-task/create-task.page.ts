import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { LoadingController, NavController } from '@ionic/angular';
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
    private loadingController : LoadingController,
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
      this.loadingController.create({
        message : "Creating task..."
      }).then((loading) => {
        loading.present();
        this.taskService.create(this.taskForm.value)
        .then((response : any) => {
          loading.dismiss();
          console.log(response);
          Storage.set({
            key : 'user_id',
            value : response.data.id
          }).then(() => {
            this.events.publish('New Task Created');
            this.navController.navigateRoot('tabs/tasks');
          })
        },
        (error) => {
          loading.dismiss();
          console.log(error.response);
        })
      })
    }
  }

}
