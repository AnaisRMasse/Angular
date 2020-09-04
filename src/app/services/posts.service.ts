import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../models/posts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(){    
   return this.http.get('http://localhost:9000/allPosts')
  }

  getPost(post_url: number){
    return this.http.get(`${'http://localhost:9000/post'}/${post_url}`);
  }
}