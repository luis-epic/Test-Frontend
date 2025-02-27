import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { IonicModule } from '@ionic/angular';
import { ClassesPageRoutingModule } from './classes-routing.module';
import { ClassesPage } from './classes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ClassesPageRoutingModule
  ],
  declarations: [ClassesPage]
})
export class ClassesPageModule {}
