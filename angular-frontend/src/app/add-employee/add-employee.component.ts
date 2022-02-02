import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  employee:Employee=new Employee()
  constructor(private empService:EmployeeService,private router:Router) { }

  ngOnInit(): void {
  }
createEmployee(){
  this.empService.addEmployee(this.employee).subscribe(data=>{
    console.log("Created!")
    //console.log(data)
    this.router.navigate(['/employees'])
  },err=>{console.log(err);
  })
}
onSubmit(){
  //console.log(this.employee);
  this.createEmployee()
}
}
