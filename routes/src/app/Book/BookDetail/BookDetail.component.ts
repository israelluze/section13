import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BookService } from 'src/app/_services/Book.service';
import { Observable } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';
import { Book } from 'src/app/_models/Book';

@Component({
  selector: 'app-BookDetail',
  templateUrl: './BookDetail.component.html',
  styleUrls: ['./BookDetail.component.css']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book> = null;
  index: number;
  authors: string[];

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.book$ = this.route.paramMap
      .pipe(
        tap((params: ParamMap) => this.index = +params.get('index')),
        switchMap((params: ParamMap) => this.bookService.get(+params.get('index'))), 
        tap(b => this.authors = (b) ? b.authors : [] )); // o switchMap fazer o subscribe nos 2
  }

  remove() {
    this.bookService.remove(this.index);
    this.router.navigateByUrl('books');
  }
  
  goAuthors() {
    // tslint:disable-next-line: prefer-const
    let url = '/books/' + this.index + '/authors';
    this.router.navigate([url, {authors: this.authors}]);
  }

}
