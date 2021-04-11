(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/alexdang/Desktop/it/bootcamp/bootcamp-store/src/main.ts */"zUnb");


/***/ }),

/***/ "3MnX":
/*!****************************************************!*\
  !*** ./src/app/top-header/top-header.component.ts ***!
  \****************************************************/
/*! exports provided: TopHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopHeaderComponent", function() { return TopHeaderComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faSearch */ "Gt99");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShoppingBag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShoppingBag */ "PqpD");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShoppingBag__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faShoppingBag__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");




class TopHeaderComponent {
    constructor() {
        this.faSearch = _fortawesome_free_solid_svg_icons_faSearch__WEBPACK_IMPORTED_MODULE_0__["faSearch"];
        this.faShoppingBag = _fortawesome_free_solid_svg_icons_faShoppingBag__WEBPACK_IMPORTED_MODULE_1__["faShoppingBag"];
    }
    ngOnInit() {
    }
}
TopHeaderComponent.ɵfac = function TopHeaderComponent_Factory(t) { return new (t || TopHeaderComponent)(); };
TopHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TopHeaderComponent, selectors: [["app-top-header"]], decls: 36, vars: 2, consts: [[1, "header", "container"], [1, "row", "w-100"], [1, "logo-wrapper", "col-4"], ["href", "javascript:void(0)", 1, "logo"], [1, "logo-title"], [1, "logo_title-red"], [1, "logo_title-black"], [1, "logo_subtitle"], [1, "list", "col-6"], [1, "list-item", "active"], [1, "list-item"], [3, "icon"], [1, "basket", "col-2"], [1, "basket-button"], [1, "basket-bag", 3, "icon"], [1, "basket-text"], [1, "badge-wrapper"], [1, "basket-badge"]], template: function TopHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Code ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "IT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "STORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "ALL BRANDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "LATEST");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "FEATURED");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "ABOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "BLOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "fa-icon", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](30, "fa-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "$ 460.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", ctx.faShoppingBag);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FaIconComponent"]], styles: [".header[_ngcontent-%COMP%] {\n  height: 160px;\n  display: flex;\n  align-items: center;\n}\n\n.logo[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: -webkit-max-content;\n  width: max-content;\n}\n\n.logo[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n}\n\n.logo-title[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.logo_title-red[_ngcontent-%COMP%], .logo_title-black[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: bold;\n}\n\n.logo_title-red[_ngcontent-%COMP%] {\n  color: #e24545;\n}\n\n.logo_title-red[_ngcontent-%COMP%]:before {\n  content: \"_\";\n  letter-spacing: -8px;\n  position: relative;\n  bottom: -2px;\n  font-weight: bolder;\n}\n\n.logo_title-black[_ngcontent-%COMP%] {\n  color: #222222;\n}\n\n.logo_subtitle[_ngcontent-%COMP%] {\n  color: #444444;\n  position: relative;\n  bottom: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  letter-spacing: 12px;\n}\n\n.list[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 13px;\n  font-weight: bold;\n  color: #444444;\n  cursor: pointer;\n}\n\n.list-item.active[_ngcontent-%COMP%] {\n  color: #e24545;\n}\n\n.list-item.active[_ngcontent-%COMP%]:before {\n  content: \"_\";\n  position: absolute;\n  bottom: 18px;\n  left: 2px;\n}\n\n.basket[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n.basket-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  padding: 8px 14px;\n  border-color: #434343;\n}\n\n.basket-bag[_ngcontent-%COMP%] {\n  color: #e24545;\n  margin-right: 10px;\n}\n\n.basket-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: bold;\n  color: #444444;\n}\n\n.badge-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: absolute;\n  right: 8px;\n  height: 32px;\n  background-color: #fff;\n}\n\n.basket-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  background-color: #444444;\n  color: #fff;\n  width: 20px;\n  height: 20px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RvcC1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUFBLGtCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxxQkFBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUdBO0VBQ0UsY0FBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBQUY7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxjQUFBO0FBQUY7O0FBRUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFERjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFERiIsImZpbGUiOiJ0b3AtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGhlaWdodDogMTYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sb2dvIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IG1heC1jb250ZW50O1xuICAmOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbn1cblxuLmxvZ28tdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubG9nb190aXRsZS1yZWQsIC5sb2dvX3RpdGxlLWJsYWNrIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ29fdGl0bGUtcmVkIHtcbiAgY29sb3I6ICNlMjQ1NDU7XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiX1wiO1xuICAgIGxldHRlci1zcGFjaW5nOiAtOHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3R0b206IC0ycHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxufVxuXG4ubG9nb190aXRsZS1ibGFjayB7XG4gIGNvbG9yOiAjMjIyMjIyO1xufVxuXG4ubG9nb19zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvdHRvbTogNnB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxldHRlci1zcGFjaW5nOiAxMnB4O1xufVxuXG4ubGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLmxpc3QtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5saXN0LWl0ZW0uYWN0aXZlIHtcbiAgY29sb3I6ICNlMjQ1NDU7XG5cbiAgJjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdfJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxOHB4O1xuICAgIGxlZnQ6IDJweDtcbiAgfVxufVxuXG4uYmFza2V0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJhc2tldC1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiA4cHggMTRweDtcbiAgYm9yZGVyLWNvbG9yOiAjNDM0MzQzO1xufVxuXG4uYmFza2V0LWJhZyB7XG4gIGNvbG9yOiAjZTI0NTQ1O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5iYXNrZXQtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xufVxuXG4uYmFkZ2Utd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDhweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYmFza2V0LWJhZGdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDQ0NDtcbiAgY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "KM//":
/*!**************************************************!*\
  !*** ./src/app/store-features/store-features.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");

/* harmony default export */ __webpack_exports__["default"] = ([
    {
        title: 'FULL WARRENTY',
        subtitle: 'Read About Our Warrenty',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faThumbsUp"]
    },
    {
        title: 'EXPRESS SHIPPING',
        subtitle: 'Local & International Shipping',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTruck"]
    },
    {
        title: 'MOBILE BLOG',
        subtitle: 'Discuss Your Favourite Phone',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faCommentDots"]
    },
    {
        title: '24/7 SUPPORT',
        subtitle: 'Get Full Support via Chat',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faHeadphonesAlt"]
    },
]);


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _top_header_top_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./top-header/top-header.component */ "3MnX");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-header/page-header.component */ "zAId");
/* harmony import */ var _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wish-list/wish-list.component */ "oR1u");
/* harmony import */ var _store_features_store_features_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store-features/store-features.component */ "llsF");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "YU10");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");







class AppComponent {
    constructor() {
        this.title = 'bootcamp-store';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-wish-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-store-features");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "v");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-subscribe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-footer");
    } }, directives: [_top_header_top_header_component__WEBPACK_IMPORTED_MODULE_1__["TopHeaderComponent"], _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_3__["WishListComponent"], _store_features_store_features_component__WEBPACK_IMPORTED_MODULE_4__["StoreFeaturesComponent"], _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_5__["SubscribeComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ "YU10":
/*!**************************************************!*\
  !*** ./src/app/subscribe/subscribe.component.ts ***!
  \**************************************************/
/*! exports provided: SubscribeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscribeComponent", function() { return SubscribeComponent; });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faRss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faRss */ "SMA/");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faRss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faRss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






function SubscribeComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "fa-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", icon_r1);
} }
class SubscribeComponent {
    constructor() {
        this.icons = [_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faTwitter"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faFacebook"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faLinkedin"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faGoogle"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faPinterest"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__["faYoutube"], _fortawesome_free_solid_svg_icons_faRss__WEBPACK_IMPORTED_MODULE_1__["faRss"]];
        this.faEnveloper = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEnvelope"];
    }
    ngOnInit() {
    }
}
SubscribeComponent.ɵfac = function SubscribeComponent_Factory(t) { return new (t || SubscribeComponent)(); };
SubscribeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SubscribeComponent, selectors: [["app-subscribe"]], decls: 12, vars: 1, consts: [[1, "subscribe-section"], [1, "container", "h-100"], [1, "row", "h-100"], [1, "block", "col-3"], [1, "title"], [1, "block", "block-email", "col-5"], ["type", "text", "placeholder", "ENTER YOUR EMAIL ADDRESS ...", 1, "input-text"], ["aria-hidden", "true", "focusable", "false", "data-prefix", "far", "data-icon", "envelope", "role", "img", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 512 512", 1, "svg-inline--fa", "fa-envelope", "fa-w-12", "fa-2x", "icon-envelope"], ["fill", "currentColor", "d", "M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"], [1, "block", "social-list", "col-4"], ["class", "social-item", 4, "ngFor", "ngForOf"], [1, "social-item"], [3, "icon"]], template: function SubscribeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "SUBSCRIBE TO LATEST SMARTPHONES NEWS & GREAT DEALS WE OFFER");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SubscribeComponent_li_11_Template, 2, 1, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.icons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".subscribe-section[_ngcontent-%COMP%] {\n  height: 200px;\n  background-color: #f6f6f6;\n  border-top: 2px solid #dddddd;\n}\n\n.title[_ngcontent-%COMP%] {\n  color: #444444;\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.block-email[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.input-text[_ngcontent-%COMP%] {\n  font-size: 11px;\n  width: 100%;\n  padding: 10px 34px 10px 10px;\n  border: 2px solid #cbcbcb;\n}\n\n.input-text[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.input-text[_ngcontent-%COMP%]::placeholder {\n  color: #979797;\n  font-weight: bold;\n}\n\n.icon-envelope[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #cbcbcb;\n  right: 24px;\n}\n\n.social-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  width: 100%;\n  margin: 0;\n}\n\n.social-item[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #999;\n  cursor: pointer;\n  border: 2px solid #ccc;\n  border-right: 1px;\n  padding: 10px;\n  transition: background-color 0.2s;\n}\n\n.social-item[_ngcontent-%COMP%]:last-child {\n  border: 2px solid #ccc;\n}\n\n.social-item[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background-color: #e24545;\n  outline: 1px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N1YnNjcmliZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUFFO0VBQ0UsYUFBQTtBQUVKOztBQUFFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FBRUo7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUNBQUE7QUFDRjs7QUFDRTtFQUNFLHNCQUFBO0FBQ0o7O0FBRUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQUFKIiwiZmlsZSI6InN1YnNjcmliZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJzY3JpYmUtc2VjdGlvbiB7XG4gIGhlaWdodDogMjAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGRkZGRkO1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogIzQ0NDQ0NDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ibG9jay1lbWFpbCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlucHV0LXRleHQge1xuICBmb250LXNpemU6IDExcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMHB4IDM0cHggMTBweCAxMHB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjY2JjYmNiO1xuICAmOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICB9XG4gICY6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogIzk3OTc5NztcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuXG4uaWNvbi1lbnZlbG9wZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6ICNjYmNiY2I7XG4gIHJpZ2h0OiAyNHB4O1xufVxuXG4uc29jaWFsLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uc29jaWFsLWl0ZW0ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjOTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yaWdodDogMXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG5cbiAgJjpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICB9XG5cbiAgJjpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyNDU0NTtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI2NjYztcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _top_header_top_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./top-header/top-header.component */ "3MnX");
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-header/page-header.component */ "zAId");
/* harmony import */ var _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wish-list/wish-list.component */ "oR1u");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _store_features_store_features_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store-features/store-features.component */ "llsF");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./subscribe/subscribe.component */ "YU10");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ "fXoL");













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            swiper_angular__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"],
        _top_header_top_header_component__WEBPACK_IMPORTED_MODULE_4__["TopHeaderComponent"],
        _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_5__["PageHeaderComponent"],
        _wish_list_wish_list_component__WEBPACK_IMPORTED_MODULE_6__["WishListComponent"],
        _store_features_store_features_component__WEBPACK_IMPORTED_MODULE_8__["StoreFeaturesComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _subscribe_subscribe_component__WEBPACK_IMPORTED_MODULE_10__["SubscribeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        swiper_angular__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"]] }); })();


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function FooterComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sponsor_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", sponsor_r1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class FooterComponent {
    constructor() {
        this.sponsors = ['./assets/sponsor1.png', './assets/sponsor2.png', './assets/sponsor3.png', './assets/sponsor4.png', './assets/sponsor5.png', './assets/sponsor6.png'];
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 9, vars: 1, consts: [[1, "footer"], [1, "container", "footer-block"], [1, "copyright"], [1, "sponsors-list"], ["class", "sponsor-item", 4, "ngFor", "ngForOf"], [1, "sponsor-item"], ["alt", "sponsor", 3, "src"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "COPYRIGHT \u00A9 2015 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CODEITSTORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " ALL RIGHTS RESERVED.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, FooterComponent_li_8_Template, 2, 1, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sponsors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".footer[_ngcontent-%COMP%] {\n  height: 90px;\n  background-color: #e6e6e6;\n}\n\n.footer-block[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n}\n\n.copyright[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #444;\n}\n\n.sponsors-list[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.sponsor-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin-right: 10px;\n}\n\n.sponsor-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUFFO0VBQ0UsV0FBQTtBQUVKOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxlQUFBO0FBRUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XG4gIGhlaWdodDogOTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbn1cblxuLmZvb3Rlci1ibG9jayB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzg4ODtcbiAgc3Ryb25nIHtcbiAgICBjb2xvcjogIzQ0NFxuICB9XG59XG5cbi5zcG9uc29ycy1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnNwb25zb3ItaXRlbSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "llsF":
/*!************************************************************!*\
  !*** ./src/app/store-features/store-features.component.ts ***!
  \************************************************************/
/*! exports provided: StoreFeaturesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreFeaturesComponent", function() { return StoreFeaturesComponent; });
/* harmony import */ var _store_features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-features */ "KM//");
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/core */ "TaHA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/angular */ "UMfn");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");






function StoreFeaturesComponent_3_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "fa-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "h3", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const feature_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", feature_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](feature_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](feature_r1.subtitle);
} }
function StoreFeaturesComponent_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, StoreFeaturesComponent_3_ng_template_0_Template, 7, 3, "ng-template", 4);
} }
swiper_core__WEBPACK_IMPORTED_MODULE_1__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_1__["Autoplay"]]);
class StoreFeaturesComponent {
    constructor() {
        this.storeFeatures = _store_features__WEBPACK_IMPORTED_MODULE_0__["default"];
        this.autoplay = {
            delay: 2000,
        };
    }
    ngOnInit() {
    }
}
StoreFeaturesComponent.ɵfac = function StoreFeaturesComponent_Factory(t) { return new (t || StoreFeaturesComponent)(); };
StoreFeaturesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StoreFeaturesComponent, selectors: [["app-store-features"]], decls: 4, vars: 4, consts: [[1, "store-features"], [1, "container", "store-features-block"], [1, "h-100", 3, "slidesPerView", "loop", "autoplay"], [4, "ngFor", "ngForOf"], ["swiperSlide", ""], [1, "store-features-item"], [1, "icon", 3, "icon"], [1, "title-block"], [1, "title"], [1, "subtitle"]], template: function StoreFeaturesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "swiper", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, StoreFeaturesComponent_3_Template, 1, 0, undefined, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("slidesPerView", 4)("loop", true)("autoplay", ctx.autoplay);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.storeFeatures);
    } }, directives: [swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], swiper_angular__WEBPACK_IMPORTED_MODULE_3__["SwiperSlideDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FaIconComponent"]], styles: [".store-features[_ngcontent-%COMP%] {\n  height: 320px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-top: 1px solid #eee;\n}\n\n.store-features-block[_ngcontent-%COMP%] {\n  position: relative;\n  height: 120px;\n  border: 2px solid #434343;\n}\n\n.store-features-block[_ngcontent-%COMP%]:after {\n  content: \"\";\n  top: -4px;\n  position: absolute;\n  width: 1100px;\n  height: 10px;\n  background: #fff;\n  left: calc(50% - 550px);\n}\n\n.carousel[_ngcontent-%COMP%] {\n  max-height: 110px;\n}\n\n.store-features-item[_ngcontent-%COMP%] {\n  display: flex !important;\n  justify-content: center !important;\n  align-items: center !important;\n  height: 116px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-right: 10px;\n}\n\n.icon-truck[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n.title-block[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.title-block[_ngcontent-%COMP%]:after {\n  content: \"_\";\n  position: absolute;\n  bottom: -16px;\n}\n\n.title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #444444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3N0b3JlLWZlYXR1cmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7QUFDRjs7QUFFQTtFQUdFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBREY7O0FBRUU7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBQUo7O0FBSUE7RUFDRSxpQkFBQTtBQURGOztBQUlBO0VBQ0Usd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUE7RUFDRSwwQkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7QUFERjs7QUFFRTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUFERiIsImZpbGUiOiJzdG9yZS1mZWF0dXJlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yZS1mZWF0dXJlcyB7XG4gIGhlaWdodDogMzIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTtcbn1cblxuLnN0b3JlLWZlYXR1cmVzLWJsb2NrIHtcbiAgLy9kaXNwbGF5OiBncmlkO1xuICAvL2dyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgYm9yZGVyOiAycHggc29saWQgIzQzNDM0MztcbiAgJjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0b3A6IC00cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMTAwcHg7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbGVmdDogY2FsYyg1MCUgLSA1NTBweClcbiAgfVxufVxuXG4uY2Fyb3VzZWwge1xuICBtYXgtaGVpZ2h0OiAxMTBweDtcbn1cblxuLnN0b3JlLWZlYXR1cmVzLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMTZweDtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmljb24tdHJ1Y2sge1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbn1cblxuLnRpdGxlLWJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAmOmFmdGVyIHtcbiAgICBjb250ZW50OiBcIl9cIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAtMTZweDtcbiAgfVxufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uc3VidGl0bGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xufVxuIl19 */"] });


/***/ }),

/***/ "muRu":
/*!****************************************!*\
  !*** ./src/app/wish-list/wish-list.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([
    { name: 'HUAWEI G8 4G', price: 350, id: 1, imgSrc: './assets/wish-item4.png' },
    { name: 'Apple iPhone 6S', price: 550, id: 2, imgSrc: './assets/wish-item2.png' },
    { name: 'HUAWEI G8 4G', price: 350, id: 3, imgSrc: './assets/wish-item4.png' },
    { name: 'SONY XPERIA Z5', price: 550, id: 4, imgSrc: './assets/wish-item5.png' },
    { name: 'Apple iPhone 6S', price: 550, id: 5, imgSrc: './assets/wish-item2.png' },
    { name: 'Galaxy Core Prime ', price: 399, id: 6, imgSrc: './assets/wish-item7.png' },
    { name: 'HUAWEI G8 4G', price: 350, id: 7, imgSrc: './assets/wish-item4.png' },
    { name: 'Galaxy Core Prime ', price: 399, id: 8, imgSrc: './assets/wish-item7.png' },
    { name: 'Huawei Mate S', price: 280, id: 9, imgSrc: './assets/wish-item1.png' },
    { name: 'Galaxy Core Prime ', price: 399, id: 10, imgSrc: './assets/wish-item7.png' },
    { name: 'Xiaomi Mi 4i', price: 350, id: 11, imgSrc: './assets/wish-item3.png' },
    { name: 'Xiaomi Mi 4i', price: 350, id: 12, imgSrc: './assets/wish-item3.png' },
    { name: 'Huawei Mate S', price: 280, id: 13, imgSrc: './assets/wish-item1.png' },
    { name: 'iPhone Rose Gold', price: 280, id: 14, imgSrc: './assets/wish-item2.png' },
    { name: 'iPhone Rose Gold', price: 280, id: 15, imgSrc: './assets/wish-item2.png' },
    { name: 'iPhone Rose Gold', price: 280, id: 16, imgSrc: './assets/wish-item2.png' },
    { name: 'HUAWEI G8 4G', price: 350, id: 17, imgSrc: './assets/wish-item6.png' },
    { name: 'SONY XPERIA Z5', price: 550, id: 18, imgSrc: './assets/wish-item5.png' },
    { name: 'Xiaomi Mi 4i', price: 350, id: 19, imgSrc: './assets/wish-item3.png' },
    { name: 'SONY XPERIA Z5', price: 550, id: 20, imgSrc: './assets/wish-item5.png' },
    { name: 'Huawei Mate S', price: 280, id: 21, imgSrc: './assets/wish-item1.png' },
    { name: 'HUAWEI G8 4G', price: 350, id: 22, imgSrc: './assets/wish-item6.png' },
    { name: 'HUAWEI G8 4G', price: 350, id: 23, imgSrc: './assets/wish-item6.png' },
    { name: 'Apple iPhone 6S', price: 550, id: 24, imgSrc: './assets/wish-item2.png' },
]);


/***/ }),

/***/ "oR1u":
/*!**************************************************!*\
  !*** ./src/app/wish-list/wish-list.component.ts ***!
  \**************************************************/
/*! exports provided: WishListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishListComponent", function() { return WishListComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTrashAlt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faTrashAlt */ "gVtJ");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faTrashAlt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faTrashAlt__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShoppingCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faShoppingCart */ "sep+");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faShoppingCart__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faShoppingCart__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_wish_list_wish_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/wish-list/wish-list */ "muRu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");







function WishListComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WishListComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const wishListItem_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.removeWishItem(wishListItem_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "REMOVE FROM LIST");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h3", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WishListComponent_div_6_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const wishListItem_r2 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.removeWishItem(wishListItem_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "fa-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const wishListItem_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", wishListItem_r2.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](wishListItem_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("$", wishListItem_r2.price, ".00");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r0.faTrashAlt);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx_r0.faShoppingCart);
} }
const _c0 = function (a0) { return { active: a0 }; };
function WishListComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WishListComponent_li_8_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const page_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r7.goToPage(page_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const page_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](2, _c0, ctx_r1.currentPage === page_r6));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](page_r6);
} }
class WishListComponent {
    constructor() {
        this.wishList = src_app_wish_list_wish_list__WEBPACK_IMPORTED_MODULE_2__["default"];
        this.wishListInputValue = '';
        this.faTrashAlt = _fortawesome_free_solid_svg_icons_faTrashAlt__WEBPACK_IMPORTED_MODULE_0__["faTrashAlt"];
        this.faShoppingCart = _fortawesome_free_solid_svg_icons_faShoppingCart__WEBPACK_IMPORTED_MODULE_1__["faShoppingCart"];
        this.limit = 8;
        this.currentPage = 1;
    }
    ngOnInit() {
        this.initPages(this.wishList);
    }
    filterWishList() {
        this.wishListView = this.wishList.filter(wishItem => wishItem.name.toLowerCase().includes(this.wishListInputValue.toLowerCase()));
        this.currentPage = 1;
        this.initPages(this.wishListView);
    }
    removeWishItem(id) {
        this.wishListView = this.wishListView.filter(wishItem => wishItem.id !== id);
        this.wishList = this.wishList.filter(wishItem => wishItem.id !== id);
        this.initPages(this.wishList);
    }
    clearFilter() {
        this.wishListInputValue = '';
        this.wishListView = JSON.parse(JSON.stringify(this.wishList));
        this.initPages(this.wishListView);
    }
    goToPage(page) {
        this.currentPage = page;
        this.wishListView = this.paginate(this.wishList, this.limit, page);
    }
    initPages(wishList) {
        this.pagesCount = Math.ceil(wishList.length / this.limit);
        this.pages = [...Array(this.pagesCount).keys()].map(el => el + 1);
        this.wishListView = this.paginate(wishList, this.limit, this.currentPage);
    }
    paginate(array, pageSize, pageNumber) {
        return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    }
}
WishListComponent.ɵfac = function WishListComponent_Factory(t) { return new (t || WishListComponent)(); };
WishListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: WishListComponent, selectors: [["app-wish-list"]], decls: 9, vars: 4, consts: [[1, "container"], [1, "list-filter"], ["type", "text", "placeholder", "Apple", 1, "list-input", 3, "ngModel", "ngModelChange", "keyup"], [1, "btn-clear-list", 3, "disabled", "click"], [1, "wish-list"], ["class", "wish-list-card", 4, "ngFor", "ngForOf"], [1, "pagination"], ["class", "page", 4, "ngFor", "ngForOf"], [1, "wish-list-card"], [1, "card-image-wrapper"], ["alt", "wish item", 1, "card-image", 3, "src"], [1, "card-remove"], [1, "card-remove-btn", 3, "click"], [1, "card-body", "text-center"], [1, "card-title"], [1, "card-subtitle"], [1, "wish-card-footer"], [1, "card-btn", 3, "click"], [1, "card-btn-icon", 3, "icon"], [1, "card-btn"], [1, "page"], [1, "btn-page", 3, "ngClass", "click"]], template: function WishListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function WishListComponent_Template_input_ngModelChange_2_listener($event) { return ctx.wishListInputValue = $event; })("keyup", function WishListComponent_Template_input_keyup_2_listener() { return ctx.filterWishList(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function WishListComponent_Template_button_click_3_listener() { return ctx.clearFilter(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " CLEAR LIST ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, WishListComponent_div_6_Template, 16, 5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, WishListComponent_li_8_Template, 3, 4, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.wishListInputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.wishListInputValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.wishListView);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.pages);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: [".btn-clear-list[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  font-size: 12px;\n  font-weight: 500;\n  background: none;\n  border: 2px solid #434343;\n  padding: 8px 16px;\n  transition: 0.2s;\n}\n.btn-clear-list[_ngcontent-%COMP%]:disabled {\n  border-color: #ccc;\n}\n.btn-clear-list[_ngcontent-%COMP%]:enabled:hover {\n  color: #fff;\n  background-color: #e24545;\n  border: 2px solid #e24545;\n}\n.list-filter[_ngcontent-%COMP%] {\n  height: 130px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.list-input[_ngcontent-%COMP%] {\n  width: 300px;\n  border-color: #444444;\n  border-width: 0 0 2px;\n  outline: none;\n  padding: 0 2px;\n}\n.wish-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  grid-row-gap: 50px;\n  grid-column-gap: 30px;\n}\n.wish-list-card[_ngcontent-%COMP%] {\n  border: 1px solid #ededed;\n}\n.card-image-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 265px;\n  position: relative;\n}\n.card-image-wrapper[_ngcontent-%COMP%]:after {\n  content: \"_\";\n  color: #e24545;\n  position: absolute;\n  bottom: 0;\n  font-weight: bolder;\n}\n.card-image-wrapper[_ngcontent-%COMP%]:hover   .card-remove[_ngcontent-%COMP%] {\n  display: flex;\n}\n.card-image[_ngcontent-%COMP%] {\n  max-height: 265px;\n}\n.card-remove[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(49, 49, 49, 0.5);\n}\n.card-remove-btn[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: bold;\n  color: #ffffff;\n  background: none;\n  border: 2px solid #ffffff;\n  padding: 8px 10px;\n}\n.card-title[_ngcontent-%COMP%], .card-subtitle[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n.card-title[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.card-subtitle[_ngcontent-%COMP%] {\n  color: #e24545;\n  font-size: 16px;\n}\n.wish-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.card-btn[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  background: none;\n  border: 1px solid #ededed;\n  transition: background 0.2s;\n}\n.card-btn[_ngcontent-%COMP%]:hover {\n  background: #e24545;\n}\n.card-btn[_ngcontent-%COMP%]:hover   .card-btn-icon[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.card-btn-icon[_ngcontent-%COMP%] {\n  color: #444444;\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 80px;\n  margin-bottom: 110px;\n}\n.page[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.btn-page[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  background: none;\n  font-size: 12px;\n  color: #888888;\n  border: 2px solid #dddddd;\n  transition: 0.15s;\n}\n.btn-page.active[_ngcontent-%COMP%], .btn-page[_ngcontent-%COMP%]:hover {\n  color: #e24545;\n  border-color: #434343;\n}\n.btn-page[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3dpc2gtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7QUFBRTtFQUNFLGtCQUFBO0FBRUo7QUFDRTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FBQ0o7QUFHQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQUY7QUFHQTtFQUNFLFlBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFBRjtBQUdBO0VBQ0UsYUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUFGO0FBR0E7RUFDRSx5QkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBQUY7QUFFRTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUdFO0VBQ0UsYUFBQTtBQURKO0FBS0E7RUFDRSxpQkFBQTtBQUZGO0FBS0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLHVDQUFBO0FBRkY7QUFLQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFGRjtBQUtBO0VBQ0UsbUJBQUE7QUFGRjtBQUtBO0VBQ0UsZUFBQTtBQUZGO0FBS0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUZGO0FBS0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFGRjtBQUtBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUFGRjtBQUdFO0VBQ0UsbUJBQUE7QUFESjtBQUlFO0VBQ0UsV0FBQTtBQUZKO0FBTUE7RUFDRSxjQUFBO0FBSEY7QUFNQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFIRjtBQU1BO0VBQ0UsaUJBQUE7QUFIRjtBQU1BO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQUhGO0FBS0U7RUFDRSxjQUFBO0VBQ0EscUJBQUE7QUFISjtBQU1FO0VBQ0UsZUFBQTtBQUpKIiwiZmlsZSI6Indpc2gtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4tY2xlYXItbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgIzQzNDM0MztcbiAgcGFkZGluZzogOHB4IDE2cHg7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gICY6ZGlzYWJsZWQge1xuICAgIGJvcmRlci1jb2xvcjogI2NjYztcbiAgfVxuXG4gICY6ZW5hYmxlZDpob3ZlciB7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyNDU0NTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZTI0NTQ1O1xuICB9XG59XG5cbi5saXN0LWZpbHRlciB7XG4gIGhlaWdodDogMTMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5saXN0LWlucHV0IHtcbiAgd2lkdGg6IDMwMHB4O1xuICBib3JkZXItY29sb3I6ICM0NDQ0NDQ7XG4gIGJvcmRlci13aWR0aDogMCAwIDJweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogMCAycHg7XG59XG5cbi53aXNoLWxpc3Qge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjtcbiAgZ3JpZC1yb3ctZ2FwOiA1MHB4O1xuICBncmlkLWNvbHVtbi1nYXA6IDMwcHg7XG59XG5cbi53aXNoLWxpc3QtY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZGVkZWQ7XG59XG5cbi5jYXJkLWltYWdlLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDI2NXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgJjphZnRlciB7XG4gICAgY29udGVudDogJ18nO1xuICAgIGNvbG9yOiAjZTI0NTQ1O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuXG4gICY6aG92ZXIgLmNhcmQtcmVtb3ZlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG59XG5cbi5jYXJkLWltYWdlIHtcbiAgbWF4LWhlaWdodDogMjY1cHg7XG59XG5cbi5jYXJkLXJlbW92ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQ5LCA0OSwgNDksIDAuNSk7XG59XG5cbi5jYXJkLXJlbW92ZS1idG4ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZmZmZmZjtcbiAgcGFkZGluZzogOHB4IDEwcHg7XG59XG5cbi5jYXJkLXRpdGxlLCAuY2FyZC1zdWJ0aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uY2FyZC1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjZTI0NTQ1O1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi53aXNoLWNhcmQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYXJkLWJ0biB7XG4gIHBhZGRpbmc6IDhweCAxNHB4O1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWRlZGVkO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlMjQ1NDU7XG4gIH1cblxuICAmOmhvdmVyIC5jYXJkLWJ0bi1pY29uIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxufVxuXG4uY2FyZC1idG4taWNvbiB7XG4gIGNvbG9yOiAjNDQ0NDQ0O1xufVxuXG4ucGFnaW5hdGlvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA4MHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMTBweDtcbn1cblxuLnBhZ2Uge1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbn1cblxuLmJ0bi1wYWdlIHtcbiAgcGFkZGluZzogNnB4IDEycHg7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZGRkZGQ7XG4gIHRyYW5zaXRpb246IDAuMTVzO1xuXG4gICYuYWN0aXZlLCAmOmhvdmVyIHtcbiAgICBjb2xvcjogI2UyNDU0NTtcbiAgICBib3JkZXItY29sb3I6ICM0MzQzNDM7XG4gIH1cblxuICAmOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ "zAId":
/*!******************************************************!*\
  !*** ./src/app/page-header/page-header.component.ts ***!
  \******************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faChevronRight */ "muhD");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");



class PageHeaderComponent {
    constructor() {
        this.faChevronRight = _fortawesome_free_solid_svg_icons_faChevronRight__WEBPACK_IMPORTED_MODULE_0__["faChevronRight"];
    }
    ngOnInit() {
    }
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(); };
PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["app-page-header"]], decls: 12, vars: 1, consts: [[1, "page-header"], [1, "container"], [1, "page-header-title"], [1, "page-header-breadcrumb"], [1, "list"], [1, "list-item", "list-item-text", "active"], [1, "list-item"], [3, "icon"], [1, "list-item", "list-item-text"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "MY WISHLIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "HOME");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "fa-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "MY WISHLIST");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx.faChevronRight);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: [".page-header[_ngcontent-%COMP%] {\n  height: 150px;\n  background: url('page-header.png');\n}\n\n.container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 100%;\n  font-size: 26px;\n}\n\n.list[_ngcontent-%COMP%] {\n  background: inherit;\n  display: flex;\n  padding: 0;\n  margin: 0;\n}\n\n.list-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-right: 10px;\n  color: #888888;\n  font-weight: 500;\n}\n\n.list-item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n\n.list-item.active[_ngcontent-%COMP%] {\n  color: #444444;\n}\n\n.list-item-text[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3BhZ2UtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBQUU7RUFDRSxlQUFBO0FBRUo7O0FBQUU7RUFDRSxjQUFBO0FBRUo7O0FBRUE7RUFDRSxlQUFBO0FBQ0YiLCJmaWxlIjoicGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvcGFnZS1oZWFkZXIucG5nXCIpO1xufVxuXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMjZweDtcbn1cblxuLmxpc3Qge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5saXN0LWl0ZW0ge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICM4ODg4ODg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICY6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gICYuYWN0aXZlIHtcbiAgICBjb2xvcjogIzQ0NDQ0NDtcbiAgfVxufVxuXG4ubGlzdC1pdGVtLXRleHQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4iXX0= */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map