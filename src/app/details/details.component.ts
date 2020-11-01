import { PostService } from './../services/post.service';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  dataPostDetails: any;
   id ;

  constructor(private service: PostService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(
      params => {
        let id = +params.get('id');
        this.id = id;
      })
     this.service.getDetails(this.id).subscribe((response: any[]) => {
      this.dataPostDetails = response ;
    });
  }


}
