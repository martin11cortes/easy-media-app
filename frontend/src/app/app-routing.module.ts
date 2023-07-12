import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: 'sign-up',
    loadComponent: () =>
      import('./sign-up/sign-up.component').then((c) => c.SignUpComponent),
    title: 'Sign Up',
  },
  {
    path: 'sign-in',
    loadComponent: () =>
      import('./sign-in/sign-in.component').then((c) => c.SignInComponent),
    title: 'Sign In',
  },
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'create-post',
        loadComponent: () =>
          import('./create-post/create-post.component').then(
            (c) => c.CreatePostComponent
          ),
        title: 'Create Post',
      },
      {
        path: 'my-posts',
        loadComponent: () =>
          import('./posts-list/posts-list.component').then(
            (c) => c.PostsListComponent
          ),
        title: 'My Posts',
        data: {
          mine: true,
        },
      },
      {
        path: 'all-posts',
        loadComponent: () =>
          import('./posts-list/posts-list.component').then(
            (c) => c.PostsListComponent
          ),
        title: 'All Posts',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
