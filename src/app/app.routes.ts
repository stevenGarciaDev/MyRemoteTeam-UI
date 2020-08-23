import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
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
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ChatComponent } from './pages/chat/chat.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { WorkHoursComponent } from './pages/work-hours/work-hours.component';
import { MeetingsComponent } from './pages/meetings/meetings.component';
import { CalendarComponent } from './pages/calendar/calendar.component';

export const RoutePaths = {
    home: '',
    dailyStandUp: 'dailystandup/:userid/:date',
    helpOrder: 'help-order/:id',
    viewHelpOrders: 'view/help-order/:teamid',
    viewProfile: 'view-profile/:id',
    editProfile: 'edit-profile/:id',
    viewTeamProfiles: 'my-team/:id',
    login: 'login',
    signUp: 'sign-up',
    resetPassword: 'reset-password',
    about: 'about',
    chat: 'chat/:id',
    settings: 'settings',
    workHours: 'work-hours',
    meetings: 'meetings',
    calendar: 'calendar'
};

export const AppRoutes: Routes = [{
    path: RoutePaths.home,
    component: HomeComponent
},
{
    path: RoutePaths.dailyStandUp,
    component: DailyStandUpComponent
},
{
    path: RoutePaths.helpOrder,
    component: HelpOrderComponent
},
{
    path: RoutePaths.viewHelpOrders,
    component: ViewHelpOrdersComponent
},
{
    path: RoutePaths.viewTeamProfiles,
    component: ViewProfileComponent
},
{
    path: RoutePaths.editProfile,
    component: EditProfileComponent
},
{
    path: RoutePaths.viewTeamProfiles,
    component: MyTeamProfilesComponent
},
{
    path: RoutePaths.login,
    component: LoginComponent
},
{
    path: RoutePaths.signUp,
    component: SignUpComponent
},
{
    path: RoutePaths.resetPassword,
    component: ResetPasswordComponent
},
{
    path: RoutePaths.about,
    component: AboutComponent
},
{
    path: RoutePaths.chat,
    component: ChatComponent
},
{
    path: RoutePaths.settings,
    component: SettingsComponent
},
{
    path: RoutePaths.workHours,
    component: WorkHoursComponent
},
{
    path: RoutePaths.meetings,
    component: MeetingsComponent
},
{
    path: RoutePaths.calendar,
    component: CalendarComponent
},
{
    path: '**',
    component: NotFoundComponent
}];
