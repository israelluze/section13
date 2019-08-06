import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DvdComponent } from './Dvd/Dvd.component';
import { BookComponent } from './Book/Book.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { DvdDetailComponent } from './Dvd/DvdDetail/DvdDetail.component';
import { DvdFormComponent } from './Dvd/DvdForm/DvdForm.component';
import { BookDetailComponent } from './Book/BookDetail/BookDetail.component';
import { BookAuthorsComponent } from './Book/BookAuthors/BookAuthors.component';

const appRoutes: Routes = [
  {path: 'dvds', component: DvdComponent},
  {path: 'books',
    component: BookComponent,
    children: [
      {path: ':index', 
      component: BookDetailComponent,
      children: [
        {path: 'authors', component: BookAuthorsComponent }
      ]
    }
    ]
  },
  {path: 'electronics', loadChildren: './electronics/electronics.module#ElectronicsModule'},
  {path: 'dvds/new', component: DvdFormComponent},
  {path: 'dvds/:index', component: DvdDetailComponent},
  {path: '', pathMatch: 'full', redirectTo: 'dvds'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
