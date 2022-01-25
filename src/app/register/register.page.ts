import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  title = 'Registration';
username : string = "";
password : string = "";
nom :string ="";
telephone : number ;
ville : string = "";
cin : string = "";
  constructor(  private fireauth: AngularFireAuth,
    private router: Router,
    private alertCtrl: AlertController,
    public firestore: AngularFirestore) {

  }
  ngOnInit() {

  }
  register() {
    this.fireauth.createUserWithEmailAndPassword(this.username, this.password)
    .then(
      ress => {
        console.log("User id after reigstration = "+ress.user.uid);
        this.firestore.collection('users').doc(ress.user.uid).set({
          email : ress.user.email,
          nom : this.nom,
          telephone : this.telephone,
          ville : this.ville,
          cin : this.cin
        }).then((res) => {
          this.router.navigate(['login']);
      }).catch((err) => {
        let msg = err.message;

        this.presentAlert("Error", msg);
      });
  });
}
login(){
  this.router.navigateByUrl("login");
}


async presentAlert(header, msg) {
  const alert = await this.alertCtrl.create({
    header: header,
    message: msg,
    buttons: ['OK']
  });

  await alert.present();
}



}
