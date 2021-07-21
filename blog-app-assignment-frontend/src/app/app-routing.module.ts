import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { AppComponent } from './app.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'blogList', pathMatch: 'full' },
  { path: 'blogList', component: BlogListComponent },
  { path: 'blogList/:id', component: BlogDetailsComponent },
  { path: 'add', component: AddBlogComponent },
  { path: 'edit/:id', component: EditBlogComponent },
  { path: '**', pathMatch: 'full', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
