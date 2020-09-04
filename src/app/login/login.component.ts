import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

user = new User();

submitted = false;

onSubmit() { 
  this.submitted = true; 
  console.log("form submitted");
  this.http.post('http://localhost:9000/addUser', this.user);
}

  ngOnInit(): void {
  }

}
