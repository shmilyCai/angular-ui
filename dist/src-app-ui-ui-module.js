(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-ui-ui-module"],{

/***/ "./src/app/demo/hero-detail/hero-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/demo/hero-detail/hero-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  <h2>{{hero.name | uppercase}} Details</h2>\n  <div><span>id: </span>{{hero.id}}</div>\n  <div>\n    <label>name:\n      <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n    </label>\n  </div>\n  <button (click)=\"goBack()\">go back</button>\n</div>\n"

/***/ }),

/***/ "./src/app/demo/hero-detail/hero-detail.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/demo/hero-detail/hero-detail.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroDetailComponent's private CSS styles */\nlabel {\n  display: inline-block;\n  width: 3em;\n  margin: .5em 0;\n  color: #607D8B;\n  font-weight: bold; }\ninput {\n  height: 2em;\n  font-size: 1em;\n  padding-left: .4em; }\nbutton {\n  margin-top: 20px;\n  font-family: Arial;\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand; }\nbutton:hover {\n  background-color: #cfd8dc; }\nbutton:disabled {\n  background-color: #eee;\n  color: #ccc;\n  cursor: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWl5YWxpL2dpdC9naXRodWIvYW5ndWxhcjItdWkvc3JjL2FwcC9kZW1vL2hlcm8tZGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUFBO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGNBQWM7RUFDZCxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7QUFFbkI7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtFQUFFLFlBQVksRUFBQTtBQUUvQjtFQUNFLHlCQUF5QixFQUFBO0FBRTNCO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2hlcm8tZGV0YWlsL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogSGVyb0RldGFpbENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xubGFiZWwge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzZW07XG4gIG1hcmdpbjogLjVlbSAwO1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pbnB1dCB7XG4gIGhlaWdodDogMmVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZy1sZWZ0OiAuNGVtO1xufVxuYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjsgY3Vyc29yOiBoYW5kO1xufVxuYnV0dG9uOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZDhkYztcbn1cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGNvbG9yOiAjY2NjO1xuICBjdXJzb3I6IGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/demo/hero-detail/hero-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/demo/hero-detail/hero-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_hero_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/hero.service */ "./src/app/service/hero.service.ts");





var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(route, heroService, location) {
        this.route = route;
        this.heroService = heroService;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        this.getHero();
    };
    HeroDetailComponent.prototype.getHero = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(function (hero) { return _this.hero = hero; });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    HeroDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-hero-detail',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/demo/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.scss */ "./src/app/demo/hero-detail/hero-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_hero_service__WEBPACK_IMPORTED_MODULE_4__["HeroService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/demo/heroes/heroes.component.html":
/*!***************************************************!*\
  !*** ./src/app/demo/heroes/heroes.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>My Heroes</h2>\n\n<div>\n  <label>Hero name:\n    <input #heroName />\n  </label>\n  <!-- (click) passes input value to add() and then clears the input -->\n  <button (click)=\"add(heroName.value); heroName.value=''\">\n    add\n  </button>\n</div>\n\n<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\">\n    <a routerLink=\"/detail/{{hero.id}}\">\n      <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n    </a>\n    <button class=\"delete\" title=\"delete hero\"\n            (click)=\"delete(hero)\">x</button>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/demo/heroes/heroes.component.scss":
/*!***************************************************!*\
  !*** ./src/app/demo/heroes/heroes.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HeroesComponent's private CSS styles */\n.heroes {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em; }\n.heroes li {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px; }\n.heroes li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em; }\n.heroes a {\n  color: #888;\n  text-decoration: none;\n  position: relative;\n  display: block;\n  width: 250px; }\n.heroes a:hover {\n  color: #607D8B; }\n.heroes .badge {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWl5YWxpL2dpdC9naXRodWIvYW5ndWxhcjItdWkvc3JjL2FwcC9kZW1vL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUNBQUE7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVcsRUFBQTtBQUViO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7QUFHcEI7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTtBQUdaO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVksRUFBQTtBQUdkO0VBQ0UsY0FBYSxFQUFBO0FBR2Y7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMEJBQTBCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kZW1vL2hlcm9lcy9oZXJvZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZXJvZXNDb21wb25lbnQncyBwcml2YXRlIENTUyBzdHlsZXMgKi9cbi5oZXJvZXMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTVlbTtcbn1cbi5oZXJvZXMgbGkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgbWFyZ2luOiAuNWVtO1xuICBwYWRkaW5nOiAuM2VtIDA7XG4gIGhlaWdodDogMS42ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmhlcm9lcyBsaTpob3ZlciB7XG4gIGNvbG9yOiAjNjA3RDhCO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xuICBsZWZ0OiAuMWVtO1xufVxuXG4uaGVyb2VzIGEge1xuICBjb2xvcjogIzg4ODtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5oZXJvZXMgYTpob3ZlciB7XG4gIGNvbG9yOiM2MDdEOEI7XG59XG5cbi5oZXJvZXMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtaW4td2lkdGg6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/demo/heroes/heroes.component.ts":
/*!*************************************************!*\
  !*** ./src/app/demo/heroes/heroes.component.ts ***!
  \*************************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_hero_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/hero.service */ "./src/app/service/hero.service.ts");



var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes()
            .subscribe(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.addHero({ name: name })
            .subscribe(function (hero) {
            _this.heroes.push(hero);
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        this.heroes = this.heroes.filter(function (h) { return h !== hero; });
        this.heroService.deleteHero(hero).subscribe();
    };
    HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/demo/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.scss */ "./src/app/demo/heroes/heroes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_hero_service__WEBPACK_IMPORTED_MODULE_2__["HeroService"]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/ui/chart/chart.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/chart/chart.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div style=\"display: block;\">\n      <canvas baseChart width=\"400\" height=\"400\"\n                  [datasets]=\"lineChartData\"\n                  [labels]=\"lineChartLabels\"\n                  [options]=\"lineChartOptions\"\n                  [colors]=\"lineChartColors\"\n                  [legend]=\"lineChartLegend\"\n                  [chartType]=\"lineChartType\"\n                  (chartHover)=\"chartHovered($event)\"\n                  (chartClick)=\"chartClicked($event)\"></canvas>\n      </div>\n    </div>\n    <div class=\"col-md-6\" style=\"margin-bottom: 10px\">\n      <table class=\"table table-responsive table-condensed\">\n        <tr>\n          <th *ngFor=\"let label of lineChartLabels\">{{label}}</th>\n        </tr>\n        <tr *ngFor=\"let d of lineChartData\">\n          <td *ngFor=\"let label of lineChartLabels; let j=index\">{{d && d.data[j]}}</td>\n        </tr>\n      </table>\n      <button (click)=\"randomize()\">CLICK</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/chart/chart.component.scss":
/*!***********************************************!*\
  !*** ./src/app/ui/chart/chart.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row {\n  width: 100%; }\n  .row .col-md-6 {\n    width: 50%;\n    display: block;\n    float: left; }\n  .row .col-sm {\n    float: left;\n    width: 33%;\n    text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWl5YWxpL2dpdC9naXRodWIvYW5ndWxhcjItdWkvc3JjL2FwcC91aS9jaGFydC9jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQVcsRUFBQTtFQURmO0lBR1EsVUFBVTtJQUNWLGNBQWM7SUFDZCxXQUFXLEVBQUE7RUFMbkI7SUFRUSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdWkvY2hhcnQvY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm93e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIC5jb2wtbWQtNntcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgIH1cbiAgICAuY29sLXNte1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/ui/chart/chart.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ui/chart/chart.component.ts ***!
  \*********************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChartComponent = /** @class */ (function () {
    function ChartComponent() {
        // lineChart
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    ChartComponent.prototype.ngOnInit = function () {
    };
    ChartComponent.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    ChartComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ChartComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chart',
            template: __webpack_require__(/*! ./chart.component.html */ "./src/app/ui/chart/chart.component.html"),
            styles: [__webpack_require__(/*! ./chart.component.scss */ "./src/app/ui/chart/chart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChartComponent);
    return ChartComponent;
}());



/***/ }),

/***/ "./src/app/ui/form/form.component.html":
/*!*********************************************!*\
  !*** ./src/app/ui/form/form.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  form works!\n</p>\n"

/***/ }),

/***/ "./src/app/ui/form/form.component.scss":
/*!*********************************************!*\
  !*** ./src/app/ui/form/form.component.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/form/form.component.ts":
/*!*******************************************!*\
  !*** ./src/app/ui/form/form.component.ts ***!
  \*******************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormComponent = /** @class */ (function () {
    function FormComponent() {
    }
    FormComponent.prototype.ngOnInit = function () {
    };
    FormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/ui/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/ui/form/form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/ui/table/table.component.html":
/*!***********************************************!*\
  !*** ./src/app/ui/table/table.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-normal\">\n  <button mat-raised-button (click)=\"addColumn()\"> Add column </button>\n  <button mat-raised-button (click)=\"removeColumn()\"> Remove column </button>\n  <button mat-raised-button (click)=\"shuffle()\"> Shuffle </button>\n\n  <!-- <table mat-table [dataSource]=\"data\" class=\"mat-elevation-z8\"> -->\n  <table mat-table [dataSource]=\"data\">\n    <ng-container [matColumnDef]=\"column\" *ngFor=\"let column of displayedColumns\">\n      <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: columnsToDisplay;\"></tr>\n  </table>\n\n</div>"

/***/ }),

/***/ "./src/app/ui/table/table.component.scss":
/*!***********************************************!*\
  !*** ./src/app/ui/table/table.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-normal table {\n  width: 100%; }\n\n.table-normal button {\n  margin-bottom: 20px;\n  margin-right: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9jYWl5YWxpL2dpdC9naXRodWIvYW5ndWxhcjItdWkvc3JjL2FwcC91aS90YWJsZS90YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQVcsRUFBQTs7QUFGZjtFQUtJLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3VpL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLW5vcm1hbHtcbiAgdGFibGV7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgYnV0dG9ue1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/ui/table/table.component.ts":
/*!*********************************************!*\
  !*** ./src/app/ui/table/table.component.ts ***!
  \*********************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
var TableComponent = /** @class */ (function () {
    function TableComponent() {
        this.displayedColumns = ['name', 'weight', 'symbol', 'position'];
        this.columnsToDisplay = this.displayedColumns.slice();
        this.data = ELEMENT_DATA;
    }
    TableComponent.prototype.ngOnInit = function () {
    };
    TableComponent.prototype.addColumn = function () {
        var randomColumn = Math.floor(Math.random() * this.displayedColumns.length);
        this.columnsToDisplay.push(this.displayedColumns[randomColumn]);
    };
    TableComponent.prototype.removeColumn = function () {
        if (this.columnsToDisplay.length) {
            this.columnsToDisplay.pop();
        }
    };
    TableComponent.prototype.shuffle = function () {
        var currentIndex = this.columnsToDisplay.length;
        while (0 !== currentIndex) {
            var randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // Swap
            var temp = this.columnsToDisplay[currentIndex];
            this.columnsToDisplay[currentIndex] = this.columnsToDisplay[randomIndex];
            this.columnsToDisplay[randomIndex] = temp;
        }
    };
    TableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table',
            template: __webpack_require__(/*! ./table.component.html */ "./src/app/ui/table/table.component.html"),
            styles: [__webpack_require__(/*! ./table.component.scss */ "./src/app/ui/table/table.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TableComponent);
    return TableComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui-element/ui-element.component.html":
/*!*********************************************************!*\
  !*** ./src/app/ui/ui-element/ui-element.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h3>Basic Buttons</h3>\n    <div class=\"example-button-row\">\n      <button mat-button>Basic</button>\n      <button mat-button color=\"primary\">Primary</button>\n      <button mat-button color=\"accent\">Accent</button>\n      <button mat-button color=\"warn\">Warn</button>\n      <button mat-button disabled>Disabled</button>\n      <a mat-button routerLink=\".\">Link</a>\n    </div>\n    \n    <h3>Raised Buttons</h3>\n    <div class=\"example-button-row\">\n      <button mat-raised-button>Basic</button>\n      <button mat-raised-button color=\"primary\">Primary</button>\n      <button mat-raised-button color=\"accent\">Accent</button>\n      <button mat-raised-button color=\"warn\">Warn</button>\n      <button mat-raised-button disabled>Disabled</button>\n      <a mat-raised-button routerLink=\".\">Link</a>\n    </div>\n    \n    <h3>Stroked Buttons</h3>\n    <div class=\"example-button-row\">\n      <button mat-stroked-button>Basic</button>\n      <button mat-stroked-button color=\"primary\">Primary</button>\n      <button mat-stroked-button color=\"accent\">Accent</button>\n      <button mat-stroked-button color=\"warn\">Warn</button>\n      <button mat-stroked-button disabled>Disabled</button>\n      <a mat-stroked-button routerLink=\".\">Link</a>\n    </div>\n    \n    <h3>Flat Buttons</h3>\n    <div class=\"example-button-row\">\n      <button mat-flat-button>Basic</button>\n      <button mat-flat-button color=\"primary\">Primary</button>\n      <button mat-flat-button color=\"accent\">Accent</button>\n      <button mat-flat-button color=\"warn\">Warn</button>\n      <button mat-flat-button disabled>Disabled</button>\n      <a mat-flat-button routerLink=\".\">Link</a>\n    </div>\n    \n    <h3>Icon Buttons</h3>\n    <div class=\"example-button-row\">\n      <button mat-icon-button>\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <button mat-icon-button color=\"primary\">\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <button mat-icon-button color=\"accent\">\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <button mat-icon-button color=\"warn\">\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <button mat-icon-button disabled>\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n    </div>\n    \n    <h3>Fab Buttons</h3>\n    <div class=\"example-button-row\">\n      <button mat-fab>Basic</button>\n      <button mat-fab color=\"primary\">Primary</button>\n      <button mat-fab color=\"accent\">Accent</button>\n      <button mat-fab color=\"warn\">Warn</button>\n      <button mat-fab disabled>Disabled</button>\n      <button mat-fab>\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <a mat-fab routerLink=\".\">Link</a>\n    </div>\n    \n    <h3>Mini Fab Buttons</h3>\n    <div class=\"example-button-row\">\n      <button mat-mini-fab>Basic</button>\n      <button mat-mini-fab color=\"primary\">Primary</button>\n      <button mat-mini-fab color=\"accent\">Accent</button>\n      <button mat-mini-fab color=\"warn\">Warn</button>\n      <button mat-mini-fab disabled>Disabled</button>\n      <button mat-mini-fab>\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n      </button>\n      <a mat-mini-fab routerLink=\".\">Link</a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/ui/ui-element/ui-element.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/ui/ui-element/ui-element.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3VpLWVsZW1lbnQvdWktZWxlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/ui/ui-element/ui-element.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/ui/ui-element/ui-element.component.ts ***!
  \*******************************************************/
/*! exports provided: UiElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiElementComponent", function() { return UiElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiElementComponent = /** @class */ (function () {
    function UiElementComponent() {
    }
    UiElementComponent.prototype.ngOnInit = function () {
    };
    UiElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ui-element',
            template: __webpack_require__(/*! ./ui-element.component.html */ "./src/app/ui/ui-element/ui-element.component.html"),
            styles: [__webpack_require__(/*! ./ui-element.component.scss */ "./src/app/ui/ui-element/ui-element.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UiElementComponent);
    return UiElementComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.component.html":
/*!**************************************!*\
  !*** ./src/app/ui/ui.component.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  <router-outlet></router-outlet>\n</p>\n"

/***/ }),

/***/ "./src/app/ui/ui.component.scss":
/*!**************************************!*\
  !*** ./src/app/ui/ui.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3VpLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/ui/ui.component.ts":
/*!************************************!*\
  !*** ./src/app/ui/ui.component.ts ***!
  \************************************/
/*! exports provided: UiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiComponent", function() { return UiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UiComponent = /** @class */ (function () {
    function UiComponent() {
    }
    UiComponent.prototype.ngOnInit = function () {
    };
    UiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ui',
            template: __webpack_require__(/*! ./ui.component.html */ "./src/app/ui/ui.component.html"),
            styles: [__webpack_require__(/*! ./ui.component.scss */ "./src/app/ui/ui.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UiComponent);
    return UiComponent;
}());



/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/shared/shared.module */ "./src/app/common/shared/shared.module.ts");
/* harmony import */ var src_app_material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _ui_route__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui.route */ "./src/app/ui/ui.route.ts");
/* harmony import */ var _demo_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../demo/heroes/heroes.component */ "./src/app/demo/heroes/heroes.component.ts");
/* harmony import */ var _demo_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../demo/hero-detail/hero-detail.component */ "./src/app/demo/hero-detail/hero-detail.component.ts");
/* harmony import */ var _ui_widget_widget_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/widget/widget.component */ "./src/app/ui/widget/widget.component.ts");
/* harmony import */ var _ui_ui_element_ui_element_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../ui/ui-element/ui-element.component */ "./src/app/ui/ui-element/ui-element.component.ts");
/* harmony import */ var _ui_form_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ui/form/form.component */ "./src/app/ui/form/form.component.ts");
/* harmony import */ var _ui_chart_chart_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../ui/chart/chart.component */ "./src/app/ui/chart/chart.component.ts");
/* harmony import */ var _ui_table_table_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ui/table/table.component */ "./src/app/ui/table/table.component.ts");
/* harmony import */ var _ui_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ui.component */ "./src/app/ui/ui.component.ts");

















/**
 * 该模块放各种ui元素的demo展示
 * 该模块的展示结合angular-material和工作实践常用的ui展示*/
var UiModule = /** @class */ (function () {
    function UiModule() {
    }
    UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _demo_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_9__["HeroesComponent"],
                _demo_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_10__["HeroDetailComponent"],
                _ui_widget_widget_component__WEBPACK_IMPORTED_MODULE_11__["WidgetComponent"],
                _ui_ui_element_ui_element_component__WEBPACK_IMPORTED_MODULE_12__["UiElementComponent"],
                _ui_form_form_component__WEBPACK_IMPORTED_MODULE_13__["FormComponent"],
                _ui_chart_chart_component__WEBPACK_IMPORTED_MODULE_14__["ChartComponent"],
                _ui_table_table_component__WEBPACK_IMPORTED_MODULE_15__["TableComponent"],
                _ui_component__WEBPACK_IMPORTED_MODULE_16__["UiComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _common_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                src_app_material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_ui_route__WEBPACK_IMPORTED_MODULE_8__["uiRoutes"])
            ],
            exports: []
        })
    ], UiModule);
    return UiModule;
}());



/***/ }),

/***/ "./src/app/ui/ui.route.ts":
/*!********************************!*\
  !*** ./src/app/ui/ui.route.ts ***!
  \********************************/
/*! exports provided: uiRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uiRoutes", function() { return uiRoutes; });
/* harmony import */ var _ui_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui.component */ "./src/app/ui/ui.component.ts");
/* harmony import */ var _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart/chart.component */ "./src/app/ui/chart/chart.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/form.component */ "./src/app/ui/form/form.component.ts");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table/table.component */ "./src/app/ui/table/table.component.ts");
/* harmony import */ var _widget_widget_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widget/widget.component */ "./src/app/ui/widget/widget.component.ts");
/* harmony import */ var _ui_element_ui_element_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ui-element/ui-element.component */ "./src/app/ui/ui-element/ui-element.component.ts");






var uiRoutes = [{
        path: '',
        component: _ui_component__WEBPACK_IMPORTED_MODULE_0__["UiComponent"],
        children: [
            { path: '', redirectTo: 'uiElement', pathMatch: 'full' },
            { path: 'chart', component: _chart_chart_component__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"] },
            { path: 'form', component: _form_form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"] },
            { path: 'table', component: _table_table_component__WEBPACK_IMPORTED_MODULE_3__["TableComponent"] },
            { path: 'widget', component: _widget_widget_component__WEBPACK_IMPORTED_MODULE_4__["WidgetComponent"] },
            { path: 'uiElement', component: _ui_element_ui_element_component__WEBPACK_IMPORTED_MODULE_5__["UiElementComponent"] },
        ]
    }];


/***/ }),

/***/ "./src/app/ui/widget/widget.component.html":
/*!*************************************************!*\
  !*** ./src/app/ui/widget/widget.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  widget works!\n</p>\n"

/***/ }),

/***/ "./src/app/ui/widget/widget.component.scss":
/*!*************************************************!*\
  !*** ./src/app/ui/widget/widget.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL3dpZGdldC93aWRnZXQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/ui/widget/widget.component.ts":
/*!***********************************************!*\
  !*** ./src/app/ui/widget/widget.component.ts ***!
  \***********************************************/
/*! exports provided: WidgetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetComponent", function() { return WidgetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var WidgetComponent = /** @class */ (function () {
    function WidgetComponent() {
    }
    WidgetComponent.prototype.ngOnInit = function () {
    };
    WidgetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-widget',
            template: __webpack_require__(/*! ./widget.component.html */ "./src/app/ui/widget/widget.component.html"),
            styles: [__webpack_require__(/*! ./widget.component.scss */ "./src/app/ui/widget/widget.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WidgetComponent);
    return WidgetComponent;
}());



/***/ })

}]);
//# sourceMappingURL=src-app-ui-ui-module.js.map