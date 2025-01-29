import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { TutorsPageRoutingModule } from './tutors-routing.module';
import { TutorsPage } from './tutors.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TutorsPageRoutingModule
  ],
  declarations: [TutorsPage]
})
export class TutorsPageModule {}
