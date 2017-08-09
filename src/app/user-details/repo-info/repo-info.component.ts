import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {UsersService} from '../../users-list/users.service';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.css']
})
export class RepoInfoComponent implements OnInit, OnDestroy {
  paramsSubscription: Subscription[] = [];
  name = '';
  repo = '';
  forks = [];
  repoInfo = [];
  commits = [];

  constructor(private route: ActivatedRoute,
              private usersService: UsersService,
              private router: Router) {
  }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.repo = this.route.snapshot.params['repo'];
    this.paramsSubscription.push(this.route.params
      .subscribe(
        (params: Params) => {
          this.name = params['name'];
          this.repo = params['repo'];
        }
      )
    );
    this.getRepo();
    this.getForks();
    this.getCommits();
  }

  getRepo() {
    this.paramsSubscription.push(this.usersService.apiRun('repos/' + this.name + '/' + this.repo)
      .subscribe(
        (response) => {
          this.repoInfo = response;
        },
        (error) => console.log(error)
      )
    );
  }

  loadRepo(repo: string) {
    this.router.navigate([repo], {relativeTo: this.route});
  }

  getForks() {
    this.paramsSubscription.push(this.usersService.apiRun('repos/' + this.name + '/' + this.repo + '/forks')
      .subscribe(
        (response) => {
          this.forks = response;
        },
        (error) => console.log(error)
      ));
  }

  getCommits() {
    this.paramsSubscription.push(this.usersService.apiRun('repos/' + this.name + '/' + this.repo + '/commits')
      .subscribe(
        (response) => {
          this.commits = response;
        },
        (error) => console.log(error)
      ));
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
