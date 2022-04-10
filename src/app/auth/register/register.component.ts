import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { emailValidator } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  passwordControl = new FormControl(null, [Validators.required, Validators.minLength(5)])

  registerFormGroup: FormGroup = this.formBuilder.group({
    'email': new FormControl('',{validators: [Validators.required, emailValidator], updateOn: 'blur'}),
    'password': new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  handleRegister(): void {
    let email = this.registerFormGroup.value['email'];
    let password = this.registerFormGroup.value['password'];
    console.log(email, password);
    this.authService.register(email, password);

    this.router.navigate(['/home']);
  }

}
