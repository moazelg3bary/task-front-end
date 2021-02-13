import { StateUserService } from './services/state-user.service';
import { RouterModule } from '@angular/router';
import { InterceptorInterceptor } from './interceptor/Interceptor';
import { SharedModule } from './shared/shared.module';
import { environment } from './../environments/environment';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SingUpComponent } from './components/sing-up/sing-up.component';
import { ListComponent } from './components/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [AppComponent, LoginComponent, SingUpComponent, ListComponent],
  imports: [
    RouterModule,
    SharedModule,
    BrowserModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
  ],
  providers: [
    StateUserService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
