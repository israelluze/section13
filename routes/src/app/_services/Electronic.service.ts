import { Injectable } from '@angular/core';
import { Electronic } from '../_models/Electronic';
import { BehaviorSubject, timer, Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ElectronicService {

  private electronicSubject$: BehaviorSubject<Electronic[]> = new BehaviorSubject<Electronic[]>([]);
  public electronics$ = this.electronicSubject$.asObservable();

constructor() {
  timer(1000)
  .subscribe((v) => this.electronicSubject$.next([
    {name: 'Headphone', brand: 'Bose', price: 200, description: 'Noise cancelling'},
    {name: 'Portable HD', brand: 'Samsung', price: 100, description: '2TB HD'},
    {name: 'Monitor23\*', brand: 'AOC', price: 200, description: 'HDMI/VGA'},
    {name: 'Processor i7-8700k', brand: 'Intel', price: 400, description: 'For Gamers'},
    {name: 'Mouse Wireless', brand: 'Logitech', price: 50, description: 'For Gamers'}
  ]));
 }

add(e: Electronic) {
  let electronics = this.electronicSubject$.getValue().push(e);
}

remove(i: number) {
  let electronics = this.electronicSubject$.getValue();
  if (i >= 0 && i < electronics.length) {
    electronics.splice(i, 1);
  }
}

get(i: number): Observable<Electronic> {
  return this.electronics$.pipe(
    map(electronics => (i >= 0 && i < electronics.length) ? electronics[i] : null ),
    delay(1000)
  );
}

}
