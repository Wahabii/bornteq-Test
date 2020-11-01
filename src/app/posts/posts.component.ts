import { DisplayComponent } from './../display/display.component';

import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any[];
  confirmation ;

  constructor(
    private service: PostService,
    private route: Router ,
    private dialog: MatDialog) {
  }

  ngOnInit() {
    this.service.getPosts()
      .subscribe((response: any[]) => {
        this.posts = response ;

      });
  }


  createPost(input: HTMLInputElement) {
    let post   = { name: input.value };
    input.value = '';
    this.service.create(post)
      .subscribe(
        newPost => {
          this.posts.splice(0, 0, post);
        });
  }


  updatePost(post) {
    this.dialog.open(DisplayComponent).afterClosed().subscribe(( result ) => {
      if(result === 'yes'){
        this.service.update(post)
              .subscribe(
                 updatedPost => {
                   console.log(updatedPost);
                }); }
         });
      }

  deletePost(post) {

  this.dialog.open(DisplayComponent).afterClosed().subscribe(( result ) => {
    if(result === 'yes'){
      this.service.delete(post.id)
        .subscribe(response => {
           let index = this.posts.indexOf(post);
           this.posts.splice(index, 1);
       });
      }
    });

  }


  DetailsPost(post) {
   this.route.navigate(['/posts/' + post.id]);
}

}
