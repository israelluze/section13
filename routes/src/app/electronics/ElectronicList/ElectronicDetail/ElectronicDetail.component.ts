import { Component, OnInit } from '@angular/core';
import { ElectronicService } from 'src/app/_services/Electronic.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Electronic } from 'src/app/_models/Electronic';

@Component({
  selector: 'app-ElectronicDetail',
  templateUrl: './ElectronicDetail.component.html',
  styleUrls: ['./ElectronicDetail.component.css']
})
export class ElectronicDetailComponent implements OnInit {

  electronic$: Observable<Electronic>
  constructor(private electronisService: ElectronicService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let i = this.route.snapshot.paramMap.get('index');
    this.electronic$ = this.electronisService.get(+i);
  }

  back() {
    this.router.navigate(['..'], {relativeTo: this.route}); //retorna um nível acima
  }

}
