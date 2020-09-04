import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-userposts',
  templateUrl: './userposts.component.html',
  styleUrls: ['./userposts.component.css']
})
export class UserpostsComponent implements OnInit {

  postList: Array<Post> = []

  username : string;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getAllUserPosts(username){
    this.http.get('http://localhost:9000/' + username + '/allUserPosts')
       .subscribe((posts: Array<Post>) => {
          this.postList = posts;   //assign 
       });
  }

     ngOnInit() {
      this.username = this.route.snapshot.paramMap.get('username');
      this.getAllUserPosts(this.username);  
  }

}
