import { Component, OnInit } from '@angular/core';
import { Post } from '../models/posts';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Search } from '../models/search';
import { SearchComponent } from '../search/search.component';
import { FormControl, FormGroup, FormBuilder, Validator, Validators,ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  postList: Array<Post> = []
  username : string;
  search = new Search();
  showVar: Boolean;

  constructor(private http: HttpClient, private route: ActivatedRoute) { 

}

  getAllPosts(){
    this.http.get('http://localhost:9000/allPosts')
       .subscribe((posts: Array<Post>) => {
          this.postList = posts;   //assign 
       });
  }

     ngOnInit() {
      this.username = this.route.snapshot.paramMap.get('username');
      this.getAllPosts();  //calling 
  }
  onSubmit(){
    this.http.post('http://localhost:9000/search/', this.search);
  }
  toggleChild() {
    this.showVar = !this.showVar;
 }

}
