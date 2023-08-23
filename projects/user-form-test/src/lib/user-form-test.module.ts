import { NgModule } from '@angular/core';
import { UserFormTestComponent } from './user-form-test.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    UserFormTestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports: [
    UserFormTestComponent,
    BrowserModule,
    FormsModule
  ]
})
export class UserFormTestModule { }
