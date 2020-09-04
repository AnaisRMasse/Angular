import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  user = new User();
  userList: Array<User> = []

submitted = false;

onSubmit() { 
  this.submitted = true; 
  console.log("form submitted");
  this.http.post('http://localhost:9000/addUser', this.user)
  .subscribe((users: Array<User>) => {
    this.userList = users;   //assign 
 },
 error => {
   console.log(error);
 });
}


ngOnInit(): void {

}


}
