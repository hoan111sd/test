import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../_services/user.service';
declare var Cookies: any;
import * as _ from 'lodash';
@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit {

  public passwordChangeForm: FormGroup;
  public userInfoChangeForm: FormGroup;
  public messageChangePasswd = '';
  
  public isCheckCaptcha = false;
  public isCheckCaptchaUserInfo = false;
  public captcha = '';

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.passwordChangeForm = this.fb.group({
      // oldPasswd: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
      newPasswd: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],
      retypeNewPasswd: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(24)]],

    });

    this.userInfoChangeForm = this.fb.group({
      firstName: ['', [Validators.minLength(3), Validators.maxLength(24)]],
      lastName: ['', [Validators.minLength(3), Validators.maxLength(24)]],
      phone: ['', [Validators.minLength(9), Validators.maxLength(24)]],
      email: ['', [Validators.minLength(8), Validators.maxLength(24)]],
    });
  }

  changePasswd() {
    if (this.passwordChangeForm.value.newPasswd === this.passwordChangeForm.value.retypeNewPasswd) {
      let data = {
        userID: this.getUserID(),
        password: this.passwordChangeForm.value.newPasswd,
        cpassword: this.passwordChangeForm.value.retypeNewPasswd,
        recaptcha: this.captcha,
      }

      this.userService.changePasswd(data).subscribe(res => {
        if (res.success) { alert(res.message); location.reload(); this.passwordChangeForm.reset();}
        else alert(res.message)
      })
    }
    else this.messageChangePasswd = "Password not match!"
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

  getUserID() {
    let userID;
    if (Cookies.get('id')) userID = Cookies.get('id');
    else if (Cookies.get('idGG')) userID = Cookies.get('idGG');
    else if (Cookies.get('idFB')) userID = Cookies.get('idFB');
    return userID;
  }

  updateInfo() {
    if (this.userInfoChangeForm.value) {
      
      let data = _.pickBy({
        userID: this.getUserID(),
        firstName: this.userInfoChangeForm.value.firstName,
        lastName: this.userInfoChangeForm.value.lastName,
        phone: this.userInfoChangeForm.value.phone,
        recaptcha: this.captcha,
      }, _.identity);


      this.userService.changeInfo(data).subscribe(res => {
        if (res.success) { alert(res.message); location.reload(); this.userInfoChangeForm.reset();}
        else alert(res.message)
        
      })
    }


  }

  resolvedUserInfo(captchaResponse: string) {
    if (captchaResponse) {
      this.isCheckCaptchaUserInfo = true;
      return this.captcha = captchaResponse;
    }
    else {
      this.isCheckCaptchaUserInfo = false;
      return this.captcha = captchaResponse;
    }
  }
}
