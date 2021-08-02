import { Pipe, PipeTransform } from '@angular/core';
import { IUsers } from '../services/users.service';

@Pipe({
  name: 'Namesfilter',
  pure: false,
})
export class NamesFilterPipe implements PipeTransform {
  transform(users: IUsers[], filter: string): any {
    if (filter === '') {
      return users;
    } 

    return users.filter( user => 
      user.name.toLowerCase().includes(filter.toLowerCase()) || 
      user.username.toLowerCase().includes(filter.toLowerCase())
    )
  }
}
