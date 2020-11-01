
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatinService } from '../services/authenticatin.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private service: AuthenticatinService , private route: Router) {
  }

  ngOnInit() {

      };


   log(x){

   }


  submit(f) {
  this.service.addUsers(f.value);
  this.route.navigate(['/login']);


  }

}
