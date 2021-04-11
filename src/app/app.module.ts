import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopHeaderComponent } from './top-header/top-header.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { FormsModule } from '@angular/forms';
import { StoreFeaturesComponent } from './store-features/store-features.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    PageHeaderComponent,
    WishListComponent,
    StoreFeaturesComponent,
    FooterComponent,
    SubscribeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    FormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
