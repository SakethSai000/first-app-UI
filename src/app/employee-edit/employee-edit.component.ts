import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit{
  employee:Employee={
    id:0,
    name:'',
    email:'',
    phone:0,
    salary:0,
    department:''
  };
  constructor(private route:ActivatedRoute,private empService:EmployeesService,private router:Router){}
  ngOnInit(){
    this.route.paramMap.subscribe({
      next:(params)=>{
        const id=params.get('id');

        if(id){
          this.empService.getEmployee(id).subscribe({
            next:(data)=>{
              this.employee=data;
            },
            error:(error)=>{
              console.log(error);
            }
          })
        }
      }
    });
  }
  editEmployee(){
    this.empService.editEmployee(this.employee).subscribe({
      next:(response)=>{
        //console.log(response);
        this.router.navigate(['/employees']);
      }
    });
  }
}
