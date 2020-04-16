import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms"; 
import { ApiserviceService } from '../service/apiservice.service';

@Component({
  selector: 'app-formcreate',
  templateUrl: './formcreate.component.html',
  styleUrls: ['./formcreate.component.css']
})
export class FormcreateComponent implements OnInit {

  blogform:FormGroup;
  constructor(private apiservice:ApiserviceService) { }

  ngOnInit() {

    this.blogform=new FormGroup({
      title:new FormControl(""),
      content:new FormControl("")
    })
  }

  saveblog(){
this.apiservice.addblog(this.blogform.value).subscribe(
  (data)=>{
    console.log(data);
  }
)

  }

}
