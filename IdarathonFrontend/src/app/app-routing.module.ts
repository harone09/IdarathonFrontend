import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RoulementComponent } from './components/roulement/roulement.component';
import { HomeComponent } from './home/home.component';
import {ListPhaseComponent} from './components/list-phase/list-phase.component';
// import {UpdateRoulementComponent} from "./components/update-roulement/update-roulement.component";

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'projets', component: ListProjectComponent },
  { path: 'projets/:id', component: ListPhaseComponent },
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'roulement', component: RoulementComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
