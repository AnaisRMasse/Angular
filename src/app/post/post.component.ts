import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  postList: Array<Post> = []

  post = new Post;
  post_url : string;
  showVar: Boolean;

  constructor(private http: HttpClient, private route: ActivatedRoute){
  }
  
  getPost(post_url){
    this.http.get('http://localhost:9000/post/' + post_url)
       .subscribe((posts: Array<Post>) => {
        this.postList = posts;  
       });
  }

     ngOnInit() {
      this.post_url = this.route.snapshot.paramMap.get('post_url');
      this.getPost(this.post_url);  
  }
  toggleChild() {
    this.showVar = !this.showVar;
 }
}

