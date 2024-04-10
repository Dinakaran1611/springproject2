import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin-module';
constructor(private AdminService: AdminService){
  this.getAdminDetails();
}

  register(registerForm: NgForm){
    this.AdminService.registerAdmin(registerForm.value).subscribe(
      (resp: any)=>{
        console.log(resp);
        registerForm.reset();
        this.getAdminDetails();

      },(err: any)=>{
        console.log(err);
      }
    );
  }

  getAdminDetails(){
    this.AdminService.getAdmins().subscribe(
      (resp)=>{
        console.log(resp);
        this.AdminDetails=resp;
      }, (err)=>{
        console.log(err);
      }
    );
  }

  AdminDetails= null as any;

  deleteAdmin(Admin: any){
    this.AdminService.deleteAdmin(Admin.sid).subscribe(
      (resp)=>{
        console.log(resp);
        this.getAdminDetails();
      },(err)=>{
        console.log(err);
      }
    );
  }
 
  AdminToUpdate={
    C_id: "",
    C_name: "",
    gender: "",
    age:"",
    password: ""
  };

  edit(Admin: any){
    this.AdminToUpdate=Admin;
  }
  updateAdmin(){
    this.AdminService.updateAdmin(this.AdminToUpdate).subscribe(
      (resp)=>{
        console.log(resp);
      },(err)=>{
        console.log(err);
      }
    );
  }
  
}
