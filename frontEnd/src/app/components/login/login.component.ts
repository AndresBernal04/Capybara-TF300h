import { Component, Input } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../../../services/login.service';
import { Credentials } from '../../../interfaces/credentials';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() toggleLogin: () => void = () => {};

  constructor(private serviceLogin: LoginService) {}

  credentialForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  login() {
    const request: Credentials = {
      email: this.credentialForm.value.email!,
      password: this.credentialForm.value.password!,
    };

    this.serviceLogin.login(request).subscribe((resp) => {
      console.log(resp);
    });
  }
}
