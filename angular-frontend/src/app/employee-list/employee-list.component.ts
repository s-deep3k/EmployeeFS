import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[]=[]
  constructor(private empService:EmployeeService) {}

  ngOnInit(): void {
    this.getEmployeeList()
  }

  private getEmployeeList(){
    this.empService.getEmployees().subscribe(data=>{
      this.employees=data
    })
  }
}
