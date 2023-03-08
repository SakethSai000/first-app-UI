import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';
import { EmployeesListComponent } from './employees-list/employees-list.component';

const routes: Routes = [
  {
    path:'',component:EmployeesListComponent,pathMatch:'full'
  },
  {
    path:'employees',component:EmployeesListComponent,pathMatch:'full'
  },
  {
    path:'employees/add',component:EmployeeAddComponent
  },
  {
    path:'employees/edit/:id',component:EmployeeEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
