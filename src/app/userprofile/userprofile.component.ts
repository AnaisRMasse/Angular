import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userList: Array<User> = []

  user = new User();
  username : string;

  constructor(private http: HttpClient, private route: ActivatedRoute){
  }
  
  getUser(username){
    this.http.get('http://localhost:9000/user/' + username)
       .subscribe((users: Array<User>) => {
        this.userList = users;  
       });
  }

     ngOnInit() {
      this.username = this.route.snapshot.paramMap.get('username');;
      this.getUser(this.username);  
  }

}
