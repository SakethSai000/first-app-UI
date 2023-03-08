import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Employee } from './models/employee.model';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  myAPIUrl:string="http://localhost:5257/";
  constructor(private http:HttpClient) { }

  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.myAPIUrl+'api/Employee');
  }

  addEmployee(employee:Employee):Observable<Employee>{
    return  this.http.post<Employee>(this.myAPIUrl+'api/Employee',employee);
  }

  getEmployee(id:string):Observable<Employee>{
    return this.http.get<Employee>(this.myAPIUrl+'api/Employee/'+id);
  }

  editEmployee(employee:Employee):Observable<Employee>{
    return this.http.put<Employee>(this.myAPIUrl+'api/Employee',employee);
  }
  deleteEmployee(id:number):Observable<Employee>{
    return this.http.delete<Employee>(this.myAPIUrl+'api/Employee/'+id);
  }
}