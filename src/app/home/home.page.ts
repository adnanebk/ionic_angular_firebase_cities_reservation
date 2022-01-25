import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {AngularFirestore} from '@angular/fire/compat/firestore';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  title = "Maroc";
  reservations: any = [];
  user: any;

  constructor(private fireauth: AngularFireAuth,
              private router: Router,
              private alertCtrl: AlertController,
              public firestore: AngularFirestore) {
  }
  ngOnInit(): void {

  }

/*    ngOnInit() {
    this.fireauth.user.subscribe(user=>{
      this.user=user;

      this.firestore.collection('reservation').valueChanges().subscribe(resp => {
        this.reservations = resp.map((e: any) => e.reservation).filter(r=>r.user_id=='users/'+user.uid);
        console.log(this.reservations);
      });

    });  } */




}
