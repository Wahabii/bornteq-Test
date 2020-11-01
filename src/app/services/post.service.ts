
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PostService  {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}


  getPosts() {
    return  this.http.get(this.url);
   }

   create(post) {
      return this.http.post(this.url, JSON.stringify(post));
   }

   update(post) {
     return this.http.patch(this.url + '/' +  post.id , JSON.stringify({isRead: true}));

   }

   delete(id){
      return this.http.delete(this.url + '/' + id);

   }


  getDetails(id) {
    return  this.http.get(this.url + '/' + id);
   }


   isLoggedIn() {

    let token = localStorage.getItem('token');
     if(!token)
        return false;
    
    return true;
  }



}
