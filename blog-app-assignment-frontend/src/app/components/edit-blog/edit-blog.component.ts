import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from 'src/app/models/models';
import { BlogServiceService } from 'src/app/services/blog-service.service';


@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})


export class EditBlogComponent implements OnInit {

  currentBlog: Blog = {
    title: '',
    category: '',
    content: '',
    userId: 'tushartt523'
  };
  fetchedBlog: Blog = {
    title: '',
    category: '',
    content: '',
    userId: 'Abhinav Nadh Rayasam'
  };


  constructor(private blogService: BlogServiceService ,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.getBlog(this.route.snapshot.params.id)
  }


  getBlog(id:any)
  {
    this.blogService.get(id).subscribe(
      data=>{
        this.fetchedBlog = data[0];
        console.log(this.fetchedBlog);
      },
    )
  }
 

    updateTutorial(): void {
      console.log("In Update Method")
      this.blogService.update(this.route.snapshot.params.id, this.currentBlog)
        .subscribe(
          response => {
            console.log("In In Update Method")
            console.log(response);
          },
          error => {
            console.log("Erroe in Update Method")
            console.log(error);
          });
    }
}