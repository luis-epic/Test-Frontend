import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
//import { ExampleComponent } from './components/example/example.component';

const routes: Routes = [
  /*{
    path: '',
    redirectTo: 'example/home',
    pathMatch: 'full'
  },
  {
  path: 'example',
  component: ExampleComponent,
    children: [*/
    {
      path: 'home',
      loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    },
    {
      path: 'student',
      loadChildren: () => import('./pages/students/student.module').then( m => m.StudentPageModule)
    },
    {
      path: 'tutors',
      loadChildren: () => import('./pages/tutors/tutors.module').then( m => m.TutorsPageModule)
    },
    {
      path: 'classes',
      loadChildren: () => import('./pages/classes/classes.module').then( m => m.ClassesPageModule)
    },
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    },
  /*]
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
