
import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { FunctionsService } from '../functions.service';
import { DataService, Orders } from '../data.service';
import { OrderinfoPage } from '../orderinfo/orderinfo.page';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  orders: Array<Orders>;

  constructor(private menuCtrl: MenuController, private modalController: ModalController, private fun: FunctionsService, private dataService: DataService) {
    this.orders = dataService.orders;
  }

  ngOnInit() {
  }
  
  ionViewDidEnter(){
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');
  }

  async open(order: Orders){
    let modal = await this.modalController.create({
      component: OrderinfoPage,
      componentProps: { value: order }
    });
    return await modal.present();
  }

}
