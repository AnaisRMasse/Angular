import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/home/home.component';
import { LoginComponent} from '../app/login/login.component';
import { DashboardComponent } from '../app/dashboard/dashboard.component';
import { SearchComponent } from '../app/search/search.component';
import { PostComponent } from '../app/post/post.component';
import { UserprofileComponent } from '../app/userprofile/userprofile.component';
import { ErrorComponent } from '../app/error/error.component';
import { UploadComponent } from '../app/upload/upload.component';
import { BlankdashComponent } from '../app/blankdash/blankdash.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  },
  {
    path: 'login/:username',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: BlankdashComponent
  },
  {
    path: 'dashboard/:username',
    component: DashboardComponent
  },
  {
    path: 'search/:tag',
    component: SearchComponent
  },
  {
    path: 'post/:post_url',
    component: PostComponent
  },
  {
    path: 'user/:username',
    component: UserprofileComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
