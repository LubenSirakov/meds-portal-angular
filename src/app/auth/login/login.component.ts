import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    email: new FormControl('', [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.minLength(5)])
  })

  constructor(private router: Router, 
    private formBuilder: FormBuilder, 
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    console.log(this.loginFormGroup.value)
    // this.errorMessage = '';
    // let [email, password] = this.loginFormGroup.value;

    // this.authService.login(email, password)
  }

}
