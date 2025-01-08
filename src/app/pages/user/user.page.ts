import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '@auth0/auth0-angular';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  public user: any = null;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.user$.subscribe(response => {
      if (response) {
        this.user = response;
      }
    })
  }

  logout() {
    this.auth.logout({ logoutParams: { returnTo: document.location.origin + "/about"} });
  }

}
