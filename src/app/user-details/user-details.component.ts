import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {UsersService} from '../users-list/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription[] = [];
  name = '';
  userDetails = {};
  userRepos = [];

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.paramsSubscription.push(this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
        }
      )
    );
    this.getUser();
    this.getRepos();
  }

  getUser() {
    this.paramsSubscription.push(this.usersService.apiRun('users/' + this.name)
      .subscribe(
        (response) => {
          this.userDetails = response;
        },
        (error) => console.log(error)
      )
    );
  }

  getRepos() {
    this.paramsSubscription.push(this.usersService.apiRun('users/' + this.name + '/repos')
      .subscribe(
        (response) => {
          this.userRepos = response;
        },
        (error) => console.log(error)
      )
    );
  }

  loadRepo(repo: string) {
    this.router.navigate([repo], {relativeTo: this.route});
  }

  backward() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.paramsSubscription.forEach(function (elem) {
      elem.unsubscribe();
    });
  }

}
