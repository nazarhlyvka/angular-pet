import { Component, OnInit } from '@angular/core';
import { IUsers, UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  users: IUsers[] = []
  isloading: boolean = false
  page: number = 1
  error = null
  allowinfinityScroll = true
  secSpinner = false
  scrollIcon = true
  namesFilter = '' 

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.isloading = true
    this.usersService.getUsers(this.page).subscribe(res => {
      this.users = res
      this.isloading = false
      this.page = this.page + 1
    },
    error => {
      this.isloading = false
      this.error = true
    })
  }

  onScroll() {
    console.log('scroll')
    if(!this.allowinfinityScroll) {
      return
    }
    this.secSpinner = true
    this.usersService.getUsers(this.page).subscribe(res => {
      this.allowinfinityScroll = false
      this.secSpinner = false
      this.scrollIcon = false
      this.users = [...this.users, ...res]

    })
  }

  // SearchFilter(value: string) {
  //   console.log(value)
  // }

}
