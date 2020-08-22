import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DailyStandUpComponent } from './pages/daily-stand-up/daily-stand-up.component';
import { HelpOrderComponent } from './pages/help-order/help-order.component';
import { ViewHelpOrdersComponent } from './pages/view-help-orders/view-help-orders.component';
import { ViewProfileComponent } from './pages/view-profile/view-profile.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { MyTeamProfilesComponent } from './pages/my-team-profiles/my-team-profiles.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DailyStandUpComponent,
    HelpOrderComponent,
    ViewHelpOrdersComponent,
    ViewProfileComponent,
    EditProfileComponent,
    MyTeamProfilesComponent,
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    AboutComponent,
    HomeComponent,
    NotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'dailystandup/:userid/:date',
        component: DailyStandUpComponent
      },
      {
        path: 'help-order/:id',
        component: HelpOrderComponent
      },
      {
        path: 'view/help-order/:teamid',
        component: ViewHelpOrdersComponent
      },
      {
        path: 'view-profile/:id',
        component: ViewProfileComponent
      },
      {
        path: 'edit-profile/:id',
        component: EditProfileComponent
      },
      {
        path: 'my-team/:id',
        component: MyTeamProfilesComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
      {
        path: 'reset-password',
        component: ResetPasswordComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
