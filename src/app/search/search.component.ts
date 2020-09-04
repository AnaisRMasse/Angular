import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts';
import { User } from '../models/user'
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  postList: Array<Post> = [];
  userList: Array<User> = [];
  tag : string;
  follow: String;
  showVar: Boolean;

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getTag(){
    this.http.get('http://localhost:9000/search/' + this.tag)
       .subscribe((posts: Array<Post>) => {
          this.postList = posts;   
       });
  }
  getUserTag(){
    this.http.get('http://localhost:9000/searchUser/' + this.tag)
       .subscribe((users: Array<User>) => {
          this.userList = users;   
       });
  }

     ngOnInit() {
      this.tag = this.route.snapshot.paramMap.get('tag');
      this.getTag(); 
      this.getUserTag();
  }
  onSubmit(){
     
  }
  setFollow(element, text){
   element.textContent = text;
 }
 toggleChild() {
   this.showVar = !this.showVar;
}

}
