import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService],
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user: User;
  public ok = false;

  constructor(private _userService: UserService) {
    this.title = 'Registrate';
    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    console.log(this.user);
    this._userService.register(this.user).subscribe(
      (resp) => {
        console.log(resp);
        this.ok = true;
        f.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
