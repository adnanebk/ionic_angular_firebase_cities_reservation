import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import  data  from '../../assets/Data.json';

@Component({
  selector: 'app-ville',
  templateUrl: './ville.page.html',
  styleUrls: ['./ville.page.scss'],
})
export class VillePage implements OnInit {
  title = "Ville";
  ville: Ville ;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.ville= data.Villes.find(ville => ville.name===this.route.snapshot.params.name);
    this.title=this.ville.name;
  }

}

export interface Ville{
  name: string;
  description: string;
  image: string;
}
