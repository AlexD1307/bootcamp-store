import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import WishList from 'src/app/wish-list/wish-list';
import { WishItemInterface } from 'src/app/types/wish-item';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss'],
})
export class WishListComponent implements OnInit {
  wishList: WishItemInterface[] = WishList;
  wishListView: WishItemInterface[];
  wishListInputValue = '';
  faTrashAlt = faTrashAlt;
  faShoppingCart = faShoppingCart;
  pages: number[];
  pagesCount;
  limit = 8;
  currentPage = 1;

  constructor() {}

  ngOnInit(): void {
    this.initPages(this.wishList);
  }

  filterWishList(): void {
    this.wishListView = this.wishList.filter(wishItem =>
      wishItem.name.toLowerCase().includes(this.wishListInputValue.toLowerCase()),
    );
    this.currentPage = 1;
    this.initPages(this.wishListView);
  }

  removeWishItem(id): void {
    this.wishListView = this.wishListView.filter(wishItem => wishItem.id !== id);
    this.wishList = this.wishList.filter(wishItem => wishItem.id !== id);
    this.initPages(this.wishList);
  }

  clearFilter(): void {
    this.wishListInputValue = '';
    this.wishListView = JSON.parse(JSON.stringify(this.wishList));
    this.initPages(this.wishListView);
  }

  goToPage(page): void {
    this.currentPage = page;
    this.wishListView = this.paginate(this.wishList, this.limit, page);
  }

  initPages(wishList): void {
    this.pagesCount = Math.ceil(wishList.length / this.limit);
    this.pages = [...Array(this.pagesCount).keys()].map(el => el + 1);
    this.wishListView = this.paginate(wishList, this.limit, this.currentPage);
  }

  paginate<T>(array: T[], pageSize: number, pageNumber: number): T[] {
    return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  }
}
