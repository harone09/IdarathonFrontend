import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTreeModule} from '@angular/material/tree';
import {MatTableModule} from '@angular/material/table';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProjectComponent } from './components/update-project/update-project.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SideBarComponent } from './side-bar/side-bar.component';
import {MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CdkColumnDef } from '@angular/cdk/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import { DeleteProjectComponent } from './components/delete-project/delete-project.component';
import {RoulementComponent} from './components/roulement/roulement.component';
import {AfficherAutorisationsComponent} from './components/afficher-autorisations/afficher-autorisations.component';
import {UpdateRoulementComponent} from './components/update-roulement/update-roulement.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';
// @ts-ignore
import {MatTabsModule} from '@angular/material/tabs';
import {ListPhaseComponent} from './components/list-phase/list-phase.component';

import {HomeComponent} from './home/home.component';
import { DeletePhaseComponent } from './components/delete-phase/delete-phase.component';
import { UpdatePhaseComponent } from './components/update-phase/update-phase.component';
import { AddPhaseComponent } from './components/add-phase/add-phase.component';
import { AddTacheComponent } from './components/add-tache/add-tache.component';
import { UpdateTacheComponent } from './components/update-tache/update-tache.component';
import { DeleteTacheComponent } from './components/delete-tache/delete-tache.component';


@NgModule({
  declarations: [
    AppComponent,
    AddProjectComponent,
    ListProjectComponent,
    UpdateProjectComponent,
    SideBarComponent,
    LoginComponent,
    DeleteProjectComponent,
    UpdateRoulementComponent,
    RoulementComponent,
    AfficherAutorisationsComponent,
    ListPhaseComponent,
    HomeComponent,
    DeletePhaseComponent,
    UpdatePhaseComponent,
    AddPhaseComponent,
    AddTacheComponent,
    UpdateTacheComponent,
    DeleteTacheComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    LayoutModule,
    MatTreeModule,
    AppRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatIconModule,
    MatPaginatorModule,
    MatListModule,
    MatInputModule,
    MatSortModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatTooltipModule,
    MatRadioModule,
    MatTabsModule,

    /////////////////

  ],
  providers: [{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {floatLabel: 'always'}}, CdkColumnDef],
  bootstrap: [AppComponent],
  entryComponents: [UpdateRoulementComponent, AfficherAutorisationsComponent]
})
export class AppModule { }
