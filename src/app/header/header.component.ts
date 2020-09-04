import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userEmail : String;
  userPassword : String;

  constructor(private httpClient: HttpClient, private router : Router) { }

  ngOnInit(): void {
  }

  test() {
    this.httpClient.get("http://localhost:3000/", { responseType: 'text' }).
    subscribe(res => {console.log(res);})
  }

}
