import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  sponsors = ['./assets/sponsor1.png', './assets/sponsor2.png', './assets/sponsor3.png', './assets/sponsor4.png', './assets/sponsor5.png', './assets/sponsor6.png'];
  constructor() { }

  ngOnInit(): void {
  }

}
