import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
private baseUrl='http://localhost:8080/api/employees';

  constructor(private http:HttpClient) {}

  getEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(`${this.baseUrl}`)
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this.http.get<Employee>(`${this.baseUrl}/${id}`)
  }
  addEmployee(emp:Employee):Observable<Employee>{
    return this.http.post<Employee>(`${this.baseUrl}`,emp)
  }
  updateEmployee(id:number,emp : Employee):Observable<Employee>{
    return this.http.put<Employee>(`${this.baseUrl}/${id}`,emp)
  }
  deleteEmployee(id:number):Observable<String>{
    return this.http.delete<String>(`${this.baseUrl}/${id}`)
  }
}
