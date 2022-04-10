import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = '';

  loginFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('',{validators: [Validators.required, emailValidator], updateOn: 'blur'}),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  handleLogin(): void {
    let email = this.loginFormGroup.value['email']
    let password = this.loginFormGroup.value['password']
    this.authService.login(email, password)

    this.router.navigate(['/home'])
  }

  // handleLogin(): void {
  //   console.log(this.loginFormGroup.value)
  //   this.errorMessage = '';
  //   this.authService.login$(this.loginFormGroup.value).subscribe({
  //     next: user => {
  //       console.log(user);
  //       this.router.navigate(['/home']);
  //     },
  //     complete: () => {
  //       console.log('login completed')
  //     },
  //     error: err => {
  //       this.errorMessage = err.error.message;
  //     }
  //   })
  // }

}
