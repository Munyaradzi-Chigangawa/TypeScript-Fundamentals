import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;

  constructor(private authService: AuthService, private router: Router) { 
  }

  ngOnInit(): void {
    let username = new FormControl(null, Validators.required);
    let password = new FormControl(null, Validators.required);

    this.loginForm = new FormGroup({
      username: username,
      password: password
    });

    
  }

  // onSubmit() {
  //   this.login(this.loginForm.value);
  //   console.log(this.loginForm.value);
  // }
  

  login(formValues: any) {
    this.authService.loginUser(formValues.userName, formValues.password);
  }
}
