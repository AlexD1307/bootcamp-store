import { Component, OnInit } from '@angular/core';
import { faTwitter, faFacebook, faLinkedin, faGoogle, faPinterest, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons/faRss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss'],
})
export class SubscribeComponent implements OnInit {
  icons = [faTwitter, faFacebook, faLinkedin, faGoogle, faPinterest, faYoutube, faRss];
  faEnveloper = faEnvelope;

  constructor() {
  }

  ngOnInit(): void {
  }

}
