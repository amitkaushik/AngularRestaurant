import { RestoService } from './../Services/resto.service';
import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup} from '@angular/forms'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alertMsg:boolean=false;
  registerResto = new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
    password:new FormControl('')
  });

  constructor(private service:RestoService) { }

  ngOnInit(): void {
  }
  closeAlert()
  {
    this.alertMsg=false;
  } 
  collectResto()
  {
    this.service.registerResto(this.registerResto.value).subscribe((result)=>{      
    this.alertMsg=true;
    this.registerResto.reset({});
    console.warn("result:",result);     
    });
  }

}
