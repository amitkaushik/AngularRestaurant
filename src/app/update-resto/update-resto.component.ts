import { RestoService } from './../Services/resto.service';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import{ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  alertMsg:boolean=false;

  updateResto = new FormGroup({
    name: new FormControl(''),
    email:new FormControl(''),
  address:new FormControl('')
  });
  constructor(private route:ActivatedRoute,private service:RestoService) { }

  ngOnInit(): void {
    console.warn(this.route.snapshot.params.id);
    this.service.getResto(this.route.snapshot.params.id).subscribe((result:any)=>{
      this.updateResto = new FormGroup({
        name: new FormControl(result['name']),
        email:new FormControl(result['email']),
      address:new FormControl(result['address'])
      });
    });
  }
  collectResto()
  {
    this.service.updateResto(this.route.snapshot.params.id,this.updateResto.value).subscribe((result)=>{      
    this.alertMsg=true;
    this.updateResto.reset({});
    console.warn("result:",result);     
    });
  }
  closeAlert()
  {
    this.alertMsg=false;
  }

}
