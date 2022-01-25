import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import  data  from '../../assets/Data.json';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.page.html',
  styleUrls: ['./reservation.page.scss'],
})
export class ReservationPage implements OnInit {
  title = 'Reserver';
    reservation: any = {};
    villes : string[] = [];
    constructor(
      private fireauth: AngularFireAuth,
      private router: Router,
      private alertCtrl: AlertController,
      private route: ActivatedRoute,
      public firestore: AngularFirestore,) {

    }
    ngOnInit() {
      this.villes=data.Villes.map(ville=>ville.name);
      console.log(this.villes);
      this.reservation.ville_destination = this.route.snapshot.params?.ville ;
    }
    async reserver() {
      const user = await this.fireauth.currentUser;
      if(!user)
        this.router.navigate(['login']);

    this.reservation.user_id = 'users/'+ user.uid;
    console.log('reserve');
      await this.firestore.collection('reservation').doc().set({reservation: this.reservation});
      this.router.navigate(['mes-reservations']);

    }


    async presentAlert(header, msg) {
      const alert = await this.alertCtrl.create({
        header,
        message: msg,
        buttons: ['OK']
      });

      await alert.present();
    }

}
