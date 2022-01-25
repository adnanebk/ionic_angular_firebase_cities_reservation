import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  title = '';
  user: any;
  constructor(private fireauth: AngularFireAuth) {}

  onActivate($event: any) {
    this.title=$event.title;
  }

   ngOnInit() {
    this.fireauth.user.subscribe(user=> this.user = user);

  }

  async logout() {
    await this.fireauth.signOut();
  }
}
