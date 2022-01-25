import { Component, OnInit } from '@angular/core';
import {Ville} from '../ville/ville.page';
import data   from '../../assets/Data.json';


@Component({
  selector: 'app-visit',
  templateUrl: './visit.page.html',
  styleUrls: ['./visit.page.scss'],
})
export class VisitPage implements OnInit {
  title = "Visite";
  marocVilles: Ville[]=data.Villes;

  constructor() { }

  ngOnInit() {
  }

}
