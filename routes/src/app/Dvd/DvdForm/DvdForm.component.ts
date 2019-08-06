import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DvdService } from 'src/app/_services/Dvd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-DvdForm',
  templateUrl: './DvdForm.component.html',
  styleUrls: ['./DvdForm.component.css']
})
export class DvdFormComponent implements OnInit {

  formDvd = this.fb.group({
    title : [''],
    year: [''],
    gender: ['']
  });

  constructor(private fb: FormBuilder, 
    private dvdService: DvdService,
    private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.dvdService.add(this.formDvd.value);
    this.router.navigate(['/dvds']);
  }

  goBack() {
    this.router.navigate(['/dvds']);
  }

}
