
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FaqsPage } from './faqs.page';
import { FaqPage } from '../faq/faq.page';

const routes: Routes = [
  {
    path: '',
    component: FaqsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FaqsPage, FaqPage], 
  entryComponents: [FaqPage]
})
export class FaqsPageModule {}
