import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  API="http://localhost:8080";
  public registerAdmin(AdminData: any)
  {
    return this.http.post(this.API + '/registerAdmin' , AdminData);
  }

  public getAdmins(){
    return this.http.get(this.API+'/getAdmins');
  }

  public deleteAdmin(C_id:any){
    return this.http.delete(this.API+'/deleteAdmin?C_id=' + C_id);
  }

  public updateAdmin(Admin: any){
    return this.http.put(this.API +'/updateAdmin', Admin);
  }
  constructor(private http: HttpClient) { }
}
