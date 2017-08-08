import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersListComponent } from './users-list/users-list.component';
import {UsersService} from './users-list/users.service';
import { UserDetailsComponent } from './user-details/user-details.component';
import {AppRoutingModule} from './app.routing.module';
import { RepoInfoComponent } from './user-details/repo-info/repo-info.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersListComponent,
    UserDetailsComponent,
    RepoInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
