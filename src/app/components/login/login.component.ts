import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User.model';
import { UserService } from '../../services/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService],
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public ok: boolean = true;

  constructor(private _userService: UserService, private router: Router) {
    this.title = 'Identificate';
    this.user = new User('', '', '', '', '', '', 'ROLE_USER');
  }

  ngOnInit(): void {}

  onSubmit(f: NgForm) {
    this._userService.signin(this.user).subscribe(
      (resp) => {
        /* GUARDAMOS EL USUARIO EN UNA PROPIEDAD */
        localStorage.setItem('identity', JSON.stringify(resp.usuario));
        localStorage.setItem('token', JSON.stringify(resp.token));
        f.reset();
        this.router.navigate(['/']);
      },
      (err) => {
        this.ok = false;
      }
    );
  }
}
