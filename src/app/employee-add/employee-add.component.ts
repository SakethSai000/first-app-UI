import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  addEmployee:Employee={
    id:0,
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''
  };
  constructor(private empService:EmployeesService,private router:Router){}
  addTheEmployee(){
    //console.log(this.addEmployee);
    this.empService.addEmployee(this.addEmployee).subscribe({
      next:(employee)=>{
        this.router.navigate(['employees']);
      },
      error:(error)=>{
        console.log(error);
      }
    });
  }
}
