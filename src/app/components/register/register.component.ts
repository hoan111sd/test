import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';
import { Router } from '@angular/router';
declare var Cookies: any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  public messageRegister: string = '';
  public messageLogin: string = '';
  public expires = 30;
  public captcha = '';
  public isCheckCaptcha = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(24)],]
    });

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      lastName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      email: ['', [Validators.email, Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      password: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
      passwordComfirm: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(24)]],
    });

  }
  register() {
    if (this.registerForm.value.password === this.registerForm.value.passwordComfirm) {
      let data = {
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        firstName: this.registerForm.value.firstName,
        lastName: this.registerForm.value.lastName,
        recaptcha: this.captcha
      }
      this.userService.register(data).subscribe(res => { this.messageRegister = 'Sign up success!!!'; this.registerForm.reset(); location.reload()})
    }
    else this.messageRegister = "Password not match"
  }

  login() {
    const value = this.loginForm.value;
    const data = { email: value.email, password: value.password, recaptcha: this.captcha };
    this.userService.logIn(data).subscribe(res => {
      this.messageLogin = res.error;
      if (res.success === true) {
        let username = res.data[0].profile.firstName + ' ' + res.data[0].profile.lastName;
        Cookies.set('username', username, { expires: this.expires, path: '' });
        Cookies.set('token', res.data[0].token, { expires: this.expires, path: '' });
        // this.setLogin();
        this.userService.loginFromRegisterPage(username);
        this.userService.sendDataUser(username);
        this.loginForm.reset();
        this.router.navigate(['/home']);
      }
    });
  }

  resolved(captchaResponse: string) {
    if (captchaResponse) {
      this.isCheckCaptcha = true;
      return this.captcha = captchaResponse;

    }
    else {
      this.isCheckCaptcha = false;
      return this.captcha = captchaResponse;
    }
  }
}

