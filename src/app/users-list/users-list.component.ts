import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from './users.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  users: any[] = [];

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.subscription = this.usersService.apiRun('users')
      .subscribe(
        (response) => {
          this.users = response;
        },
        (error) => console.log(error)
      );
  }

  onClick(login: string) {
    this.router.navigate(['/users', login], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
