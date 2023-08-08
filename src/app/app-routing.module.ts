import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AddEmployeComponent } from './modules/admin-components/add-employe/add-employe.component';
import { EmployeesListComponent } from './modules/admin-components/employees-list/employees-list.component';
import { ListEmployeesComponent } from './modules/administrateur-components/gestion-employees/list-employees/list-employees.component';
import { ProfileEmployeComponent } from './modules/administrateur-components/gestion-employees/profile-employe/profile-employe.component';
import { AjoutNoteComponent } from './modules/administrateur-components/gestion-notes/ajout-note/ajout-note.component';
import { NotesListComponent } from './modules/administrateur-components/gestion-notes/notes-list/notes-list.component';
import { ProjetsComponent } from './modules/administrateur-components/gestion-projets/projets/projets.component';
import { ParameterComponent } from './modules/administrateur-components/parameter/parameter.component';
import { PresenceCalendarComponent } from './modules/administrateur-components/presence-calendar/presence-calendar.component';
import { PresenceEmployeesComponent } from './modules/administrateur-components/presence-employees/presence-employees.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HomeComponent } from './modules/home/home.component';
import { LoginComponent } from './modules/login/login.component';
import { PostsComponent } from './modules/posts/posts.component';

const routes: Routes = [



  {path: '', component: DefaultComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'pointage', component: PresenceCalendarComponent},
    {path: 'pointage-employees', component: PresenceEmployeesComponent},
    {path: 'employees',component: ListEmployeesComponent},
    { path: 'profilEmploye', component: ProfileEmployeComponent },
    { path: 'gestionnote', component: NotesListComponent },
    { path: 'ajoutnote', component: AjoutNoteComponent },
    {path: 'parameter',component: ParameterComponent},
    
    {path: 'projects',component: ProjetsComponent},
     /*
    {path: 'employees-list', component: EmployeesListComponent}, 
    {path: 'add-employee', component: AddEmployeComponent},

    {path: 'pointage', component: PresenceCalendarComponent},
    {path: 'vacation',component: VacationComponent},
    {path: 'projects',component: ProjetsComponent},
    {path: 'notifications', component: AnnouncementsComponent},
    {path: 'parameter',component: ParameterComponent},

    {path: 'posts',component: PostsComponent}*/
]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
