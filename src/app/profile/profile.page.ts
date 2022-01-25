import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import {AngularFirestore} from '@angular/fire/compat/firestore'
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})



export class ProfilePage implements OnInit {
  title = 'Mon profile';

  profil: any = {} ;
  user: any;

  constructor(private fireauth: AngularFireAuth,
              private router: Router,
              private alertCtrl: AlertController,
              public firestore: AngularFirestore) {
  }

  ngOnInit() {
    this.fireauth.user.subscribe(user=>{
      this.user=user;
      console.log(user.uid);
      this.firestore.collection('users').doc(user.uid).valueChanges().subscribe(resp => {
        this.profil = resp
        console.log(this.profil);
      });

    });



  }



}
