import { RestoService } from './../Services/resto.service';
import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormControl } from '@angular/forms';
@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {

  alertMsg:boolean=false;

  addResto = new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
  address:new FormControl('')
  });

  constructor(private service:RestoService) { }
  ngOnInit(): void {
  }

  collectResto()
  {
    this.service.saveResto(this.addResto.value).subscribe((result)=>{      
    this.alertMsg=true;
    this.addResto.reset({});
    console.warn("result:",result);     
    });
  }
  closeAlert()
  {
    this.alertMsg=false;
  }  
}
