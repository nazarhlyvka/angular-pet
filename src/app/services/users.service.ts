import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {map}from 'rxjs/operators'

export interface IUsers {
  id: number,
  name: string,
  username: string,
  email?: string,
  city?: string,
  address?: any
  phone?: string,
}

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient){}

  getUsers(page: number) {
    return this.http.get<IUsers[]>(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=5`)
      .pipe(
        map(res => {
          const convertedData: IUsers[] = []

          for(let i of res) {
            convertedData.push({
              id: i.id,
              name: i.name,
              username: i.username,
            })
          }
          
          return convertedData
        })
      )
  }

  getUser(id: number) {
    return this.http.get<IUsers>(`https://jsonplaceholder.typicode.com/users/${id}`)
      .pipe(
        map(res => {
          const user: IUsers = {
            id: res.id,
            name: res.name,
            username: res.username,
            city: res.address.city,
            email: res.email,
            phone: res.phone
          }
          return user
        }))
  }
}