import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tasks',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/tasks/tasks.module').then( m => m.TasksPageModule)
          }
        ]
      },
      {
        path: 'posts',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsPageModule)
          }
        ]
      }, 
      {
        path: 'albums',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/albums/albums.module').then( m => m.AlbumsPageModule)
          }
        ]
      },            
      {
        path: '',
        redirectTo: '/tabs/tasks',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'posts',
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'albums',
    loadChildren: () => import('./pages/albums/albums.module').then( m => m.AlbumsPageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./pages/tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'modal-post-comment',
    loadChildren: () => import('./pages/modal-post-comment/modal-post-comment.module').then( m => m.ModalPostCommentPageModule)
  },
  {
    path: 'albums/:id/images',
    loadChildren: () => import('./pages/album-images/album-images.module').then( m => m.AlbumImagesPageModule)
  },
  {
    path: 'modal-view-full-image',
    loadChildren: () => import('./pages/modal-view-full-image/modal-view-full-image.module').then( m => m.ModalViewFullImagePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
