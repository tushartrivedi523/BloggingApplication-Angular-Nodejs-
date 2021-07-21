import { Component, Input, OnInit } from '@angular/core';
import { BlogServiceService } from 'src/app/services/blog-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/models';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})

export class BlogDetailsComponent implements OnInit {

  faPencilAlt = faPencilAlt;
  faTrashAlt = faTrashAlt;
  itemId : any;
  blogs ?: Blog[];
  dispBlog : Blog = {};
  flag : number = 0;


  constructor(private titleService: Title, private route : ActivatedRoute, private blogService : BlogServiceService,  private router: Router) { }


  ngOnInit(): void {

    this.setTitle("Bloggify")

    this.route.params.subscribe(event => {
        this.itemId = event.id;
      });
    this.getBlog(); 
  }

  setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
  
  getBlog()
  {
    this.blogService.getAll().subscribe(
      data=>{
        this.blogs = data;
        console.log(this.blogs);
      },
    )
  }
  deleteBlog() : void
  {
    console.log(this.itemId+"Hii")
    this.blogService.delete(this.itemId).subscribe(
      response =>{
        console.log(response+"Hii");
      },
      error => {
        console.log(error);
      });
  }
}
