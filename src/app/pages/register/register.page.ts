import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Helper } from 'src/utilities/helper';
const { Storage } = Plugins;

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private authService : AuthService,
    private loadingController : LoadingController,
    private helper : Helper,
    private navController : NavController
  ) {
    this.registerForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  ngOnInit() {
  }

  submit() {

    this.submitAttempt = true;
    if (this.registerForm.valid) {
      this.loadingController.create({
        message: "Please wait...",
      }).then((loading) => {
        loading.present();
        this.authService.register(this.registerForm.value)
        .then((response: any) => {
            loading.dismiss();              
            console.log("I am here in response", response); 
            if(response.status == 200) {
              Storage.set({
                key : 'token',
                value : response.data.token
              }).then(() => {
                this.navController.navigateRoot("/tabs/tasks");
              })
            }
          },
          (error) => {
            loading.dismiss();
            this.helper.showErrorToast("Invalid Credentials");
          } 
        );
      });
    }

  }

  navigateToLogin() {
    this.navController.navigateRoot('login');
  }

}
