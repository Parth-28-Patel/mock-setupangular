import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { TGHttpClient } from '@techgrains/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  getLoginDetail(): void {
    if (this.loginForm.invalid) {
      console.log('Form is invalid');
      return;
    }

    const requestData = this.loginForm.value;
    console.log('Submitted data:', requestData);

    this.loginService.getLoginDetail(requestData).subscribe({
      next: (response) => {
        console.log('response', response);
        this.loginForm.reset();
        localStorage.setItem('UserData', JSON.stringify(requestData));
        this.router.navigate(['/home']);
      },

      error: (error) => {
        console.log('error', error);
      },
    });
  }
}
