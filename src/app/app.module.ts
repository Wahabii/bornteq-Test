import { AuthenticatinService } from './services/authenticatin.service';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostsComponent } from './posts/posts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { DetailsComponent } from './details/details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { NoAccessComponent } from './no-access/no-access.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PostsComponent,
    DetailsComponent,
    LoginComponent,
    NoAccessComponent,
    NotFoundComponent,
    HomeComponent,
    DisplayComponent,

  ],
  entryComponents: [
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot([
      {path: '',
       component: HomeComponent
      },
      {
        path: 'posts/:id',
        component: DetailsComponent,
        canActivate: [AuthGuardService]
      },

      {
        path: 'posts',
        component: PostsComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
      path: 'no-access',
      component: NoAccessComponent
     },
     {
      path: '**',
      component: NotFoundComponent
     }

    ])

  ],
  providers: [
    AuthenticatinService,
    AuthGuardService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
