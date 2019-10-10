import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from  '@angular/forms';
import { Router } from  '@angular/router';
import { AuthService } from '../services/auth.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted  =  false;

  constructor(private authService: AuthService,
              private router: Router,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.loginForm  =  this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)]],
      password: ['', [Validators.required, Validators.min(8)]]
    });
  }

  get formControls() {
    return this.loginForm.controls; //to make easy to access the form controls on the HTML form
  }


  onSubmit() {
    this.isSubmitted = true;

    if (this.loginForm.invalid) {
      return;
    }


    this.authService.login(this.formControls.name.value, this.formControls.password.value)
  }
}
