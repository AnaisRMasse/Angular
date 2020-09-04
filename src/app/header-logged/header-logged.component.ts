import { Component, OnInit } from '@angular/core';
import { user } from '../models/username';

@Component({
  selector: 'app-header-logged',
  templateUrl: './header-logged.component.html',
  styleUrls: ['./header-logged.component.css']
})
export class HeaderLoggedComponent implements OnInit {

  username: String = user;

  constructor() { }

  ngOnInit(): void {
  }

}
