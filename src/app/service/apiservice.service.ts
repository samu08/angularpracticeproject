import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Blog } from '../classes/blog.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  listblog:Blog[];
  constructor(private httpclient:HttpClient) { }

  getblogs():Observable<any>{

   return this.httpclient.get("http://localhost:3000/blog");
  }

  addblog(blog:Blog):Observable<Blog>{

   return this.httpclient.post<Blog>("http://localhost:3000/blog",blog,{
    headers:new HttpHeaders({
      'content-Type':'application/json'
   })
  });
}


}
