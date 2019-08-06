import { Injectable } from '@angular/core';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { Dvd } from '../_models/Dvd';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DvdService {

  private dvdSubject$: BehaviorSubject<Dvd[]> = new BehaviorSubject<Dvd[]>([]);
  public dvds$ = this.dvdSubject$.asObservable();

constructor() { 
  timer(2000)
    .subscribe((v) => this.dvdSubject$.next([
      {title: 'Prayer and Love', year: 1998, gender: 'Worship' },
      {title: 'Alabansa y Celebración', year: 2010, gender: 'Worship' },
      {title: 'Beyond Believe', year: 1994, gender: 'Rock' },
      {title: 'Dios de Pactos', year: 2005, gender: 'Chistian' },
      {title: 'Dime lo que no se', year: 2019, gender: 'Dudas' }
    ]));
}

add(d: Dvd) {
  let dvds = this.dvdSubject$.getValue().push(d);
}

remove(i: number) {
  let dvds = this.dvdSubject$.getValue();
  if (i >= 0 && i < dvds.length) {
    dvds.splice(i, 1);
  }
}

get(i: number): Observable<Dvd> {
  return this.dvds$.pipe(
    map(dvds => (i >= 0 && i < dvds.length) ? dvds[i] : null ),
    delay(1000)
  );
}

}
