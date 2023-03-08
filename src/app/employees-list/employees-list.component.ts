import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
    employees:Employee[]=[];
    constructor(private empService:EmployeesService,private router:Router){

    }
    ngOnInit(){
      this.empService.getAllEmployees().subscribe({
        next:(employees)=>{
          this.employees=employees;
        },
        error:(error)=>{
          console.log(error);
        }
      })
    }
    deleteEmp(id:number){
      this.empService.deleteEmployee(id).subscribe({
        next:(response)=>{
          console.log(response);
          this.ngOnInit();
        },
        error:(error)=>{
          console.log("Error:"+error);
        }
      });
    }
}
