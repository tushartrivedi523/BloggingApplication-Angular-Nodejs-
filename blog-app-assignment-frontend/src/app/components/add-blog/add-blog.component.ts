import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/models/models';
import { BlogServiceService } from 'src/app/services/blog-service.service';
@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {
  blog : Blog = {
    title:'',
    category:'',
    content:'',
    userId:'tushart523',
  }
  constructor(private blogService : BlogServiceService) { }

  ngOnInit(): void {
    
  }
  createOnClick(data : Blog)
  {

    this.blogService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
  }
