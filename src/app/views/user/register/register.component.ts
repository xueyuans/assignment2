import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  pwErrorFlag: boolean;
  pwErrorMsg = 'Password should be same';
  userErrorFlag: boolean;
  userErrorMsg = 'Already Exist this userName';
  verifyPw: String;
  user = {_id: undefined, username: '', password: '', firstname: '', lastname: ''};
  constructor(private userService: UserService, private router: Router) { }

  register() {
    this.userService.createUser(this.user).subscribe(
      (user: any) => {
        this.user = user;
        this.user._id = user._id;
        console.log(this.user._id);
        this.router.navigate(['/profile/' + this.user._id]);
      }
    );
  }

  login() {
    this.router.navigate(['/login']);
  }

  ngOnInit() {
  }

}
