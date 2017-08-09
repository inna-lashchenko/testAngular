import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersListComponent} from './users-list/users-list.component';
import {UserDetailsComponent} from './user-details/user-details.component';
import {RepoInfoComponent} from './user-details/repo-info/repo-info.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'users', component: UsersListComponent, pathMatch: 'full', data: {
      animation: {
        value: 'products',
      }
  }},
  {path: 'users/:name', component: UserDetailsComponent, data: {
    animation: {
      value: 'product-detail',
    }
  }},
  {
    path: 'users/:name/:repo', component: RepoInfoComponent, data: {
    animation: {
      value: 'products',
    }
  }
  }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
