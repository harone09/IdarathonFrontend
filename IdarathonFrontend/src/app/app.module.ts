import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RestApiLoginService } from './services/rest-api-login.service';

@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    ListProjectComponent,
    UpdateProjectComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestApiLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
