import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {

  url = 'http://localhost:57678';
  //urls = 'https://localhost:44328';
  constructor(private http: HttpClient,) { }


  ////////////////////////////////
  // Users API
  //////////////////////////////
  getUsers() {
    return this.http.get(this.url + '/users');
  }

  addUser(addRecored: any) {
    return this.http.post(this.url + '/users', addRecored)
  }

  deleteUser(id: any) {
    return this.http.delete(`${this.url + '/users'}/${id}`);
    //return this.http.delete(this.url+'/users',id);
  }

  editUserById(id: number) {
    return this.http.get(`${this.url + '/users'}/${id}`);
  }

  updateUsers(id: Number, data: any) {

    return this.http.put(`${this.url + '/users'}/${id}`, data);

  }


  loginUser(email: string, password: string) {
    return this.http.post<{ token: any }>(this.url + "/login", {
      email: email,
      password: password,
    });
  }

  ////////////////////////////////
  // Classes API

  getClasses() {
    return this.http.get(this.url + '/classes');
  }
  addClass(addRecored: any) {
    return this.http.post(this.url + '/class', addRecored)
  }

  //////////////////////////////



  ////////////////////////////////
  // Fee API
  //////////////////////////////
}
