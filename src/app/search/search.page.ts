
import { Component, OnInit } from '@angular/core';
import { FunctionsService } from '../functions.service';
import { DataService } from '../data.service';
import { HomePage } from '../home/home.page';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  trending = [];
  recent = [];

  constructor(private menuCtrl: MenuController, private fun: FunctionsService, private dataService: DataService, private nav: NavController) {
    this.trending = dataService.trending;
    this.recent = dataService.recent;
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(true, 'start');
    this.menuCtrl.enable(false, 'end');
  }

}
