import { Component, OnInit } from '@angular/core';
import StoreFeatures from './store-features';
import { StoreFeatureInterface } from 'src/app/types/store-feature';
import { SwiperOptions } from 'swiper/types';
import SwiperCore, { Autoplay } from 'swiper/core';

SwiperCore.use([Autoplay]);

@Component({
  selector: 'app-store-features',
  templateUrl: './store-features.component.html',
  styleUrls: ['./store-features.component.scss'],
})

export class StoreFeaturesComponent implements OnInit {
  storeFeatures: StoreFeatureInterface[] = StoreFeatures;
  autoplay: SwiperOptions['autoplay'] = {
    delay: 2000,
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
