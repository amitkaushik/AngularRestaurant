import { RestoService } from '../Services/resto.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
  alertMsg:boolean=false;
  constructor(private restoService:RestoService) { }
  collection:any;
  ngOnInit(): void {
    this.restoService.getList().subscribe((result)=> 
    {
      this.collection= result;
    }
    )
  }

  deleteResto(id:number)
  {
    this.collection.splice(id-1,1);
    this.restoService.deleteResto(id).subscribe((result)=>{
      this.alertMsg=true;
    });
  }

  closeAlert()
  {
    this.alertMsg=false;
  } 

}
