(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-layout-layout-module"],{

/***/ "./src/app/layout/content/content.component.html":
/*!*******************************************************!*\
  !*** ./src/app/layout/content/content.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/layout/content/content.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/layout/content/content.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  position: absolute;\n  left: 220px;\n  top: 60px;\n  padding: 20px;\n  width: calc(100% - 300px);\n  height: auto;\n  background: #ffffff;\n  margin: 20px;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWl5YWxpL2dpdC9naXRodWIvYW5ndWxhcjItdWkvc3JjL2FwcC9sYXlvdXQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixZQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29udGVudC9jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjIwcHg7XG4gIHRvcDogNjBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcbiAgaGVpZ2h0OmF1dG87XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIG1hcmdpbjogMjBweDtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/layout/content/content.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/content/content.component.ts ***!
  \*****************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/layout/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/layout/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <span class=\"right\">\n    <button mat-buttons [matMenuTriggerFor]=\"message\" class=\"m-r-20\">\n      <span matBadge=\"{{nums}}\" matBadgeOverlap=\"false\" matBadgeColor=\"warn\">\n        <i class=\"fa fa-bell\"></i>\n      </span>\n    </button>\n    <mat-menu #message=\"matMenu\">\n       <ul class=\"padding-10 font-12\" style=\"width: 250px;\">\n         <li>消息列表</li>\n       </ul>\n      </mat-menu>\n    <button mat-button [matMenuTriggerFor]=\"user\">\n      caicai\n    </button>\n    <mat-menu #user=\"matMenu\">\n      <button mat-menu-item>个人信息</button>\n      <button mat-menu-item>密码设置</button>\n      <button mat-menu-item>退 出</button>\n    </mat-menu>\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: absolute;\n  height: 60px;\n  line-height: 60px;\n  background: #fff;\n  width: calc(100% - 40px);\n  padding: 0 20px; }\n  .header .right {\n    float: right; }\n  .header .left {\n    float: left;\n    font-size: 24px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWl5YWxpL2dpdC9naXRodWIvYW5ndWxhcjItdWkvc3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZUFBZSxFQUFBO0VBTmpCO0lBU0ksWUFBWSxFQUFBO0VBVGhCO0lBYUksV0FBVztJQUNYLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlcntcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGhlaWdodDo2MHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICBwYWRkaW5nOiAwIDIwcHg7XG5cbiAgLnJpZ2h0e1xuICAgIGZsb2F0OiByaWdodDtcbiAgfVxuXG4gIC5sZWZ0e1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/message.service */ "./src/app/service/message.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(messageService) {
        this.messageService = messageService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.getNums();
    };
    HeaderComponent.prototype.getNums = function () {
        this.nums = this.messageService.get();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav>\n<app-header></app-header>\n<app-content></app-content>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.scss":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.scss */ "./src/app/layout/layout.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _layout_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout.route */ "./src/app/layout/layout.route.ts");
/* harmony import */ var _common_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/shared/shared.module */ "./src/app/common/shared/shared.module.ts");
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/layout/nav/nav.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./content/content.component */ "./src/app/layout/content/content.component.ts");
/* harmony import */ var _service_message_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../service/message.service */ "./src/app/service/message.service.ts");












/**
 * 整个项目的布局组件*/
var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_8__["NavComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"],
                _content_content_component__WEBPACK_IMPORTED_MODULE_10__["ContentComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _common_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_layout_route__WEBPACK_IMPORTED_MODULE_5__["layoutRoutes"])
            ],
            exports: [],
            providers: [_service_message_service__WEBPACK_IMPORTED_MODULE_11__["MessageService"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/layout.route.ts":
/*!****************************************!*\
  !*** ./src/app/layout/layout.route.ts ***!
  \****************************************/
/*! exports provided: layoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layoutRoutes", function() { return layoutRoutes; });
/* harmony import */ var _layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component */ "./src/app/layout/layout.component.ts");

var layoutRoutes = [
    {
        path: '',
        component: _layout_component__WEBPACK_IMPORTED_MODULE_0__["LayoutComponent"],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            {
                path: 'dashboard',
                loadChildren: 'src/app/dashboard/dashboard.module#DashboardModule'
            },
            {
                path: 'ui',
                loadChildren: 'src/app/ui/ui.module#UiModule'
            },
            {
                path: 'system',
                loadChildren: 'src/app/system/system.module#SystemModule'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/layout/nav/nav.component.html":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav\">\n\n  <div class=\"logo\">\n    <img src=\"../../../assets/img/logo_cai.png\" width=\"100%\" />\n  </div>\n  <mat-nav-list>\n    <a mat-list-item routerLink=\"/shmilycai/dashboard\" routerLinkActive=\"active\">\n      <!-- <mat-icon>dialpad</mat-icon> -->\n      首 页\n    </a>\n    <a mat-list-item routerLink=\"/shmilycai/system/user\" routerLinkActive=\"active\">\n      <!-- <mat-icon>voicemail</mat-icon> -->\n      用户管理\n    </a>\n    <!-- <a mat-list-item routerLink=\"/shmilycai/system/role\" routerLinkActive=\"active\">\n      <mat-icon>notifications_off</mat-icon>\n      角色管理\n    </a> -->\n\n  </mat-nav-list>\n\n  <!-- <mat-list role=\"list\">\n    <mat-list-item role=\"listitem\">\n      <a routerLink=\"/shmilycai/dashboard\" routerLinkActive=\"active\"><mat-icon>home</mat-icon> Dashboard</a>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n      <a routerLink=\"/shmilycai/ui/widget\" routerLinkActive=\"active\"><mat-icon></mat-icon> Widget</a>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n      <a routerLink=\"/shmilycai/ui/uiElement\" routerLinkActive=\"active\"><mat-icon></mat-icon> UI element</a>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n      <a routerLink=\"/shmilycai/ui/table\" routerLinkActive=\"active\"><mat-icon></mat-icon> table</a>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n      <a routerLink=\"/shmilycai/ui/form\" routerLinkActive=\"active\"><mat-icon></mat-icon> form</a>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n      <a routerLink=\"/shmilycai/ui/chart\" routerLinkActive=\"active\"><mat-icon></mat-icon> chart</a>\n    </mat-list-item>\n    <mat-list-item role=\"listitem\">\n      <a routerLink=\"/shmilycai/heroes\" routerLinkActive=\"active\"><mat-icon></mat-icon> Heroes</a>\n    </mat-list-item>\n  </mat-list> -->\n</nav>"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.scss":
/*!***********************************************!*\
  !*** ./src/app/layout/nav/nav.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav {\n  position: fixed;\n  top: 0;\n  height: 100%;\n  width: 220px;\n  background: #4054b2;\n  color: #fff;\n  z-index: 100; }\n  .nav h1, .nav h2, .nav h3, .nav h4, .nav h5, .nav h6 {\n    height: 60px;\n    line-height: 60px;\n    text-align: center; }\n  .nav a {\n    color: #ffffff;\n    text-decoration: none;\n    line-height: 48px;\n    width: 100%;\n    font-size: 14px; }\n  .nav a:hover, .nav a:active {\n      color: #fafafa; }\n  .logo {\n  height: 20px;\n  /* line-height: 60px; */\n  border-bottom: #3f51b5 1px solid;\n  padding: 20px 10px;\n  background: #4157af; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWl5YWxpL2dpdC9naXRodWIvYW5ndWxhcjItdWkvc3JjL2FwcC9sYXlvdXQvbmF2L25hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWM7RUFDZCxNQUFLO0VBQ0wsWUFBVztFQUNYLFlBQVc7RUFFWCxtQkFBa0I7RUFDbEIsV0FBVTtFQUNWLFlBQVksRUFBQTtFQVJkO0lBV0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0IsRUFBQTtFQWJ0QjtJQWdCSSxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZSxFQUFBO0VBcEJuQjtNQXNCTSxjQUFhLEVBQUE7RUFLbkI7RUFFRSxZQUFZO0VBQ1osdUJBQUE7RUFDQSxnQ0FBZ0M7RUFDaEMsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L25hdi9uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2e1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgdG9wOjA7XG4gIGhlaWdodDoxMDAlO1xuICB3aWR0aDoyMjBweDtcbiAgLy8gYmFja2dyb3VuZDojNjczZmI0O1xuICBiYWNrZ3JvdW5kOiM0MDU0YjI7XG4gIGNvbG9yOiNmZmY7XG4gIHotaW5kZXg6IDEwMDtcblxuICBoMSxoMixoMyxoNCxoNSxoNntcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDYwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIGF7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAmOmhvdmVyLCAmOmFjdGl2ZXtcbiAgICAgIGNvbG9yOiNmYWZhZmE7XG4gICAgfVxuICB9XG59XG5cbi5sb2dve1xuXG4gIGhlaWdodDogMjBweDtcbiAgLyogbGluZS1oZWlnaHQ6IDYwcHg7ICovXG4gIGJvcmRlci1ib3R0b206ICMzZjUxYjUgMXB4IHNvbGlkO1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICM0MTU3YWY7XG59Il19 */"

/***/ }),

/***/ "./src/app/layout/nav/nav.component.ts":
/*!*********************************************!*\
  !*** ./src/app/layout/nav/nav.component.ts ***!
  \*********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/layout/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.scss */ "./src/app/layout/nav/nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-layout-layout-module.js.map