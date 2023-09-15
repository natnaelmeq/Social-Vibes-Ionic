import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term',
  templateUrl: './term.page.html',
  styleUrls: ['./term.page.scss'],
})
export class TermPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  agree() {
    alert('Thank you for joining us!');

    this.router.navigate(['home']);
  }
  cancel() {
    this.router.navigate(['home'])
  }
}
