import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { Book } from '../_models/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

private bookSubject$: BehaviorSubject<Book[]> = new BehaviorSubject<Book[]>([]);
public books$ = this.bookSubject$.asObservable();

constructor() {
  timer(2000)
    .subscribe((v) => this.bookSubject$.next([
      {title: 'Book 1', pages: 200, authors: ['John', 'Nicole']},
      {title: 'Book 2', pages: 100, authors: ['Mathew']},
      {title: 'Book 3', pages: 300, authors: ['Joshua', 'Marck']},
      {title: 'Book 4', pages: 215, authors: ['Nathanael']},
      {title: 'Book 5', pages: 94,  authors: ['Zion', 'Been']}
    ]));
}

add(b: Book) {
  let books = this.bookSubject$.getValue().push(b);
}

remove(i: number) {
  let books = this.bookSubject$.getValue();
  if (i >= 0 && i < books.length) {
    books.splice(i, 1);
  }
}

get(i: number): Observable<Book> {
  return this.books$.pipe(
    map(books => (i >= 0 && i < books.length) ? books[i] : null ),
    delay(200)
  );
}

}
