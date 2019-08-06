import { Component, OnInit } from '@angular/core';
import { DvdService } from '../_services/Dvd.service';
import { Observable } from 'rxjs';
import { Dvd } from '../_models/Dvd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Dvd',
  templateUrl: './Dvd.component.html',
  styleUrls: ['./Dvd.component.css']
})
export class DvdComponent implements OnInit {

  dvds$: Observable<Dvd[]>;

  constructor(private dvdService: DvdService, private router: Router) { }

  ngOnInit() {
    this.dvds$ = this.dvdService.dvds$;
  }

  goDetails(i: number, dvd: Dvd) {
    this.router.navigate([`dvds/${i}`, {title: dvd.title}]);
  }

  remove(i: number) {
    this.dvdService.remove(i);
  }

}
