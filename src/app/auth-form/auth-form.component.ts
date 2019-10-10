import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent} from '../registration/registration.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
