import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUsers, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {
  user: IUsers
  userSub: Subscription
  isLoading: boolean = false

  constructor(private route: ActivatedRoute, private usersService: UsersService) { }

  ngOnInit() {
    this.isLoading = true
    this.userSub = this.route.params.subscribe(
      (params: Params) => {
        this.isLoading = true
        const id = +params['id']
        this.usersService.getUser(id).subscribe(res => {
          console.log(res)
          this.user = res
          this.isLoading = false
        })
      }
    )
  }

  ngOnDestroy() {
    this.userSub.unsubscribe()
  }

}
