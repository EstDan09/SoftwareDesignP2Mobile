import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-btn',
  templateUrl: './auth-btn.component.html',
  styleUrls: ['./auth-btn.component.scss'],
})
export class AuthBtnComponent  implements OnInit {
  public isAuthenticated: boolean = false;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
    });
  }

  logBtn() {
    if (this.isAuthenticated) {
      this.router.navigate(["/user"]);
    } else {
      this.auth.loginWithRedirect();
    }
  }

}
