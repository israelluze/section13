import { Component, OnInit } from '@angular/core';
import { ElectronicService } from 'src/app/_services/Electronic.service';
import { Observable } from 'rxjs';
import { Electronic } from 'src/app/_models/Electronic';

@Component({
  selector: 'app-ElectronicList',
  templateUrl: './ElectronicList.component.html',
  styleUrls: ['./ElectronicList.component.css']
})
export class ElectronicListComponent implements OnInit {

  electronics$: Observable<Electronic[]>;
  constructor(private electronicService: ElectronicService) { }

  ngOnInit() {
    this.electronics$ = this.electronicService.electronics$;
  }

}
