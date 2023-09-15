import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daycounter',
  templateUrl: './daycounter.page.html',
  styleUrls: ['./daycounter.page.scss'],
})
export class DaycounterPage implements OnInit {
  dayCount: number = 1;
  incrementDay(day: string) {
    this.dayCount++;
  }
  closeCard() {
    this.router.navigate(['home']);
  }

  constructor(private router: Router) {}

  ngOnInit() {}
  
}
