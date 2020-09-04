import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpInterceptor, HttpRequest, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { SearchComponent } from './search/search.component';
import { CommentsComponent } from './comments/comments.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { ErrorComponent } from './error/error.component';
import { UserpostsComponent } from './userposts/userposts.component';
import { LoginComponent } from './login/login.component';
import { HeaderLoggedComponent } from './header-logged/header-logged.component';
import { UploadComponent } from './upload/upload.component';
import { UserpostComponent } from './userpost/userpost.component';
import { BlankdashComponent } from './blankdash/blankdash.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    UserprofileComponent,
    SearchComponent,
    CommentsComponent,
    PostComponent,
    ErrorComponent,
    UserpostsComponent,
    LoginComponent,
    HeaderLoggedComponent,
    UploadComponent,
    UserpostComponent,
    BlankdashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
