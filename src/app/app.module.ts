import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './layouts/default/default.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { PostsComponent } from './modules/posts/posts.component';
import { PresenceCalendarComponent } from './modules/administrateur-components/presence-calendar/presence-calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { ProjetsComponent } from './modules/administrateur-components/gestion-projets/projets/projets.component';
import { MatIconModule } from '@angular/material/icon';
import { ParameterComponent } from './modules/administrateur-components/parameter/parameter.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { VacationComponent } from './modules/administrateur-components/vacation/vacation.component';
import { EmployeesListComponent } from './modules/admin-components/employees-list/employees-list.component';
import { AddEmployeComponent } from './modules/admin-components/add-employe/add-employe.component';
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { ListEmployeesComponent } from './modules/administrateur-components/gestion-employees/list-employees/list-employees.component';
import { ProfileEmployeComponent } from './modules/administrateur-components/gestion-employees/profile-employe/profile-employe.component';
import { NotesListComponent } from './modules/administrateur-components/gestion-notes/notes-list/notes-list.component';
import { AjoutNoteComponent } from './modules/administrateur-components/gestion-notes/ajout-note/ajout-note.component';
import { PresenceEmployeesComponent } from './modules/administrateur-components/presence-employees/presence-employees.component';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    PresenceCalendarComponent,
    ProjetsComponent,
    ParameterComponent,
    VacationComponent,
    EmployeesListComponent,
    AddEmployeComponent,
    LoginComponent,
    HomeComponent,
    ListEmployeesComponent,
    ProfileEmployeComponent,
    NotesListComponent,
    AjoutNoteComponent,
    PresenceEmployeesComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    FullCalendarModule,
    MatIconModule,
    NgxPaginationModule,
    MatCardModule,
  ],
  exports: [
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
