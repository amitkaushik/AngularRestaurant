import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RestoService {
url:string = "http://localhost:3000/restaurants";
rootUrl:string = "http://localhost:3000/";
  constructor(private http:HttpClient) {

   }
  getList()
  {
    return this.http.get(this.url);
  }
  saveResto(data:any)
  {
    return this.http.post(this.url,data);    
  }

  deleteResto(id:number)
  {
    return this.http.delete(`${this.url}/${id}`);
  }
  getResto(id:number)
  {
    return this.http.get(`${this.url}/${id}`);
  }
  updateResto(id:number, data:any)
  {
    return this.http.put(`${this.url}/${id}`,data);
  }

  registerResto(data:any)
  {
    return this.http.post(this.rootUrl+"Users",data);    
  }
}
