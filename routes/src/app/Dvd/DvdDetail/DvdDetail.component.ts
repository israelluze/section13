import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { DvdService } from 'src/app/_services/Dvd.service';
import { Observable } from 'rxjs';
import { Dvd } from 'src/app/_models/Dvd';

@Component({
  selector: 'app-DvdDetail',
  templateUrl: './DvdDetail.component.html',
  styleUrls: ['./DvdDetail.component.css']
})
export class DvdDetailComponent implements OnInit {
  dvd$: Observable<Dvd>;
  title = null;
  constructor(private route: ActivatedRoute, private dvdService: DvdService, private router: Router) { }

  ngOnInit() {
    let index = +this.route.snapshot.paramMap.get('index');
    this.dvd$ = this.dvdService.get(index);
    this.route.paramMap.subscribe((x:ParamMap) => {
      if (x.has('title')) {
        this.title = x.get('title');
      }
    });
    // this.route.paramMap
    //               .subscribe((x: ParamMap) => console.log('Index map:', x.get('index')));
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }

}
