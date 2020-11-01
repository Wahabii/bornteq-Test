import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class AuthenticatinService {


 AppUsers = [
    {username: 'wahabi', password: '1234', lastname: '', firstname: '' },
    {username: 'malek', password: '1234', lastname: '', firstname: ''}
   ];


constructor(private http: HttpClient) {}


login(credentials) {

  let resp = this.AppUsers.find(({username, password}) => username === credentials.email && password === credentials.password);
    if (resp){
      localStorage.setItem('token', resp.username)
      return true ;
    }else
      return false ;

}

logout() {
   localStorage.removeItem('token');
}

isLoggedIn() {

  let token = localStorage.getItem('token');
   if(!token)
      return false;

  return true;
}


currentUser() {
 let token = localStorage.getItem('token');
 if (token)
 {
    return token ;
 }else
 return null;
}


addUsers(user){

this.AppUsers.push(user);
console.log(user);
}

}
