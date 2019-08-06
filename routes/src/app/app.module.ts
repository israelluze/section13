import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { BookComponent } from './Book/Book.component';
import { DvdComponent } from './Dvd/Dvd.component';
import { PageNotFoundComponent } from './PageNotFound/PageNotFound.component';
import { Routes, Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { DvdDetailComponent } from './Dvd/DvdDetail/DvdDetail.component';
import { DvdFormComponent } from './Dvd/DvdForm/DvdForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailComponent } from './Book/BookDetail/BookDetail.component';
import { BookAuthorsComponent } from './Book/BookAuthors/BookAuthors.component';
import { ElectronicsModule } from './electronics/electronics.module';

// const appRoutes: Routes = [
//   {path: 'dvds', component: DvdComponent},
//   {path: 'books', component: BookComponent},
//   {path: '', pathMatch: 'full', redirectTo: 'dvds'},
//   {path: '**', component: PageNotFoundComponent}
// ];

@NgModule({
   declarations: [
      AppComponent,
      BookComponent,
      DvdComponent,
      PageNotFoundComponent,
      DvdDetailComponent,
      DvdFormComponent,
      BookDetailComponent, 
      BookAuthorsComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MaterialModule,
      ReactiveFormsModule,
      // RouterModule.forRoot(appRoutes),
      // ElectronicsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
