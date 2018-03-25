import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router'

//import {MDBBootstrapModule} from 'angular-bootstrap-md';
import {AppComponent} from './app.component';
import {UserService} from './shared/user.service';

import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {UserComponent} from './user/user.component';
import {SignInComponent} from './user/sign-in/sign-in.component';
import {HomeComponent} from './home/home.component';
import {SignUpComponent} from './user/sign-up/sign-up.component';
import {appRoutes} from './routes';
import {AuthGuard} from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import {InwardComponent} from './Inwards/inward/inward.component';
import {InwardDataService} from './shared/services/inward-data.service';
//import { MDBBootstrapModulePro} from '../app/typescripts/pro';
import { MDBBootstrapModule} from '../app/typescripts/angular-bootstrap-md/free';
import { MDBBootstrapModulePro} from '../app/typescripts/angular-bootstrap-md/pro/index';
import { InwardlistComponent } from './Inwards/inwardlist/inwardlist.component';
import { MastersComponent } from './masters/masters.component';
import { BranchComponent } from './masters/branch/branch.component';
import {BranchService} from './shared/services/branch.service';
import { InwardStatusComponent } from './masters/inward-status/inward-status.component';
import {InwardStatusService} from './shared/services/inward-status.service';
import { RefInwardsComponent } from './masters/ref-inwards/ref-inwards.component';
import {RefInwardsService} from './shared/services/ref-inwards.service';
import {PurposeofinwService} from './shared/services/purposeofinw.service';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { SocietyTypeComponent } from './masters/society-type/society-type.component';
import { OfficeTypeComponent } from './masters/office-type/office-type.component';
import { PurposeOfInwardComponent } from './masters/purpose-of-inward/purpose-of-inward.component';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    HomeComponent,
    InwardComponent,
    InwardlistComponent,
    MastersComponent,
    BranchComponent,
    InwardStatusComponent,
    RefInwardsComponent,  
    EditProfileComponent, SocietyTypeComponent, OfficeTypeComponent, PurposeOfInwardComponent,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, ToastrModule.forRoot(),
    BrowserAnimationsModule,
    //MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    MDBBootstrapModulePro.forRoot(),

  ],
  providers: [
    UserService,
    AuthGuard,
    BranchService,
    RefInwardsService,
    PurposeofinwService,
    InwardStatusService,
    InwardDataService, {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}