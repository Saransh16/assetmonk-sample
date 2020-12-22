import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plugins } from '@capacitor/core';
import { LoadingController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Helper } from 'src/utilities/helper';
const { Storage } = Plugins;

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  submitAttempt: boolean = false;

  constructor(
    private formBuilder : FormBuilder,
    private loadingController : LoadingController,
    private authService : AuthService,
    private helper : Helper,
    private navController : NavController
  ) {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  ngOnInit() {
  }

  submit() {
    this.submitAttempt = true;
    if (this.loginForm.valid) {
      this.loadingController.create({
        message: "Loggin In...",
      }).then((loading) => {
        loading.present();
        this.authService.login(this.loginForm.value)
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

  navigateToRegister() {
    this.navController.navigateRoot('register');
  }
}
