import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: any[] = [];

  constructor(private usersService: UsersService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.usersService.apiRun('users')
      .subscribe(
        (response) => {
          console.log(response);
          this.users = response;
        },
        (error) => console.log(error)
      );
  }

  onClick(login: string) {
    // console.log(login);
    this.router.navigate(['/users', login], {relativeTo: this.route});
  }

}
