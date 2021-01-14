import { UpdateProjectComponent } from './components/update-project/update-project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'projets', component: ListProjectComponent },
  { path: 'projets/:id', component: UpdateProjectComponent },
  { path: 'projetsAdd', component: AddProjectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
