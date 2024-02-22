import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrl: './employeecrud.component.css'
})
export class EmployeecrudComponent {
  EmpArray : any[] = [];
  currentempid = "";

  name:string="";
  position:string="";
  office:string="";
  salary:number=0;

  constructor(private http:HttpClient){
        this.getallemployee();
  }

  getallemployee() {
    this.http.get<any>("http://localhost:3000/employees/getall")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.EmpArray = resultData.data.employee;
        console.log(this.EmpArray);
    });
  }

  setUpdate(data:any){
    this.name = data.name;
    this.position = data.position;
    this.office = data.office;
    this.salary = data.salary;
    this.currentempid = data._id;
        
  }
  
  UpdateRecords()
  {
    let bodyData = {
      "name":this.name,
      "position":this.position,
      "office":this.office,
      "salary":this.salary
    };
    
    this.http.put("http://localhost:3000/employees/update"+ "/"+this.currentempid,bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee details updated successfully")
        this.getallemployee();
      
    });
  }

  setDelete(data:any){
      this.http.delete("http://localhost:3000/employees/delete"+"/"+data._id).subscribe((resultData:any)=>{
      console.log(resultData);
      alert("employee deleted");
      this.getallemployee();
    })

  }

  save()
  {
    if(this.currentempid == '')
    {
        this.Onregister();
    }
      else
      {
       this.UpdateRecords();
      }       
  }

  Onregister(){
    let bodydata={
      "name":this.name,
      "position":this.position,
      "office":this.office,
      "salary":this.salary
    };

    this.http.post("http://localhost:3000/employees/create",bodydata).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Employee Registered Successfully")
        this.name = '';
        this.position = '';
        this.office  = '';
        this.salary = 0;
        this.getallemployee();
    });
  }

  }

