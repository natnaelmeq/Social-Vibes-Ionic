import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenge',
  templateUrl: './challenge.page.html',
  styleUrls: ['./challenge.page.scss'],
})
export class ChallengePage implements OnInit {
  showFullText = false;
  truncatedText: string = '';
  fullText: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.fullText = `Bask in the warmth of the sun while enjoying unforgettable moments with
        your friends. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Beatae mollitia ducimus praesentium eaque, reprehenderit quidem ea
        obcaecati ut! Hic voluptatibus eligendi sit laboriosam pariatur iste
        placeat ea. Repellat, doloremque ratione!Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Beatae mollitia ducimus praesentium eaque,
        reprehenderit quidem ea obcaecati ut! Hic voluptatibus eligendi sit
        laboriosam pariatur iste placeat ea. Repellat, doloremque ratione!`;
    this.truncatedText = this.truncate(this.fullText, 100);
  }

  truncate(str: string, n: number): string {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  }

  toggleShowFullText() {
    this.showFullText = !this.showFullText;
  }
  gotoHome() {
    this.router.navigate(['home']);
  }
}
