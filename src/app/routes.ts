import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component';
// import {InwardRegisterComponent} from
// './inward-register/inward-register.component'
import {UserComponent} from './user/user.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {AuthGuard} from './auth/auth.guard';
import {InwardComponent} from './Inwards/inward/inward.component';
import { InwardlistComponent } from './Inwards/inwardlist/inwardlist.component';
import {BranchComponent} from './masters/branch/branch.component'
import {EditProfileComponent} from './user/edit-profile/edit-profile.component'

export const appRoutes : Routes = [
    {
        
        path: 'Branch',
        component: BranchComponent,
        children: [
            {
                path: '',
                component: BranchComponent,
                canActivate: [AuthGuard]
            }
        ]
        
    },
    
    {

        path: 'inwards',
        component: InwardlistComponent,
        children: [
            {
                path: '',
                component: InwardlistComponent,
                canActivate: [AuthGuard]
            }
        ]
        
    },
    {
        path: 'inward',
        component: InwardComponent,
        canActivate: [AuthGuard]
        
    }, {
        path: 'home',
        component: HomeComponent,
        canActivate: [AuthGuard]
    }, {
        path: 'CreateUser',
        component: SignUpComponent /*  UserComponent,
        children: [
            {
                path: '',
                component: SignUpComponent
            }
        ] */
    }, {
        path: 'login',
        component: UserComponent,
        children: [
            {
                path: '',
                component: SignInComponent
            }
        ]
    }, {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    }, {
        path: 'editprofile',
        component: EditProfileComponent,
        canActivate: [AuthGuard]
    }

];