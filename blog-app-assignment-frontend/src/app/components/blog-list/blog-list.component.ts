import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Blog } from 'src/app/models/models';
import { BlogServiceService } from 'src/app/services/blog-service.service';




@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs ?: Blog[];
  constructor(private blogService : BlogServiceService, private titleService: Title) { }

  ngOnInit(): void {

    this.setTitle("Bloggify")

    this.retrieveTutorials();
        function preventBack() {
            window.history.forward(); 
        }
          
        setTimeout("preventBack()", 0);
          
        window.onunload = function () { null };
    
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

  retrieveTutorials(): void {
    this.blogService.getAll()
    .subscribe(
      data =>{
        this.blogs = data;
        console.log(data);
    },
        error => {
          console.log(error);
        });
  }

}
