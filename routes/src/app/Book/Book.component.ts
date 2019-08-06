import { Component, OnInit } from '@angular/core';
import { BookService } from '../_services/Book.service';
import { Observable } from 'rxjs';
import { Book } from '../_models/Book';

@Component({
  selector: 'app-Book',
  templateUrl: './Book.component.html',
  styleUrls: ['./Book.component.css']
})
export class BookComponent implements OnInit {

  books$: Observable<Book[]>;
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.books$ = this.bookService.books$;
  }

}
