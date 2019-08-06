import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-BookAuthors',
  templateUrl: './BookAuthors.component.html',
  styleUrls: ['./BookAuthors.component.css']
})
export class BookAuthorsComponent implements OnInit {

  authors$: Observable<string[]>;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.authors$ = this.route.paramMap
      .pipe(
        map((params: ParamMap) => (params.get('authors').split(',')))
      );
  }

}
