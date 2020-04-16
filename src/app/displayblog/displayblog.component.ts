import { Component, OnInit } from '@angular/core';
import { Blog } from '../classes/blog.model';
import { ApiserviceService } from '../service/apiservice.service';
@Component({
  selector: 'app-displayblog',
  templateUrl: './displayblog.component.html',
  styleUrls: ['./displayblog.component.css']
})
export class DisplayblogComponent implements OnInit {

   listblog:Blog[];

  constructor(private apiservice:ApiserviceService) { }

  ngOnInit() {
this.apiservice.getblogs().subscribe(data=>{

  this.listblog=data;
})

  }

  oneditTest(){

    console.log("edit btn is working");
  }

}
