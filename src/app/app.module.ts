import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListGenerator } from './user-list-generator';
import { NameInputComponent } from './user-list/name-input/name-input.component';
import { ListComponent } from './user-list/list/list.component';
import { CalculatePipe } from './user-list/calculate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    NameInputComponent,
    ListComponent,
    CalculatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [UserListGenerator],
  bootstrap: [AppComponent]
})
export class AppModule { }
