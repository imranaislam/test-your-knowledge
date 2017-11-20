webpackJsonp(["pages.module"],{

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n\n<div *ngIf=\"usertype; else elseblock\">\n\n  <div class=\"col-md-10\">\n    <h3 class=\"panel-title\">\n      <a data-toggle=\"collapse out\" data-parent=\"#accordion\" href=\"javascript:void(0)\">\n        <span class=\"glyphicon glyphicon-th-list\">\n        </span>Welcome to America's Premier Testing Site - Admin</a>\n    </h3>\n    <br>\n    <br>\n    <br>\n    <h4>Welcome back, {{firstName}}!! </h4>\n    <br>\n    <br>\n    <h6> As a Subject Matter Expert(SME), you can create new challenges to help assess skill level of the users.\n      <br>\n      <br> You have the previledge to view existing subject areas, their related questions and manage them.\n      <br>\n      <br> You can also add new questions to a subject area of your choice.\n      <br>\n      <br> Please select an option from 'Quiz SME' menu to start.</h6>\n    <br>\n  </div>\n</div>\n\n<ng-template #elseblock>\n  <div class=\"col-md-12\">\n    <div class=\"container-fluid\">\n      <h3 class=\"panel-title\">\n        <a data-toggle=\"collapse out\" data-parent=\"#accordion\" href=\"javascript:void(0)\">\n          <span class=\"glyphicon glyphicon-th-list\">\n          </span>Welcome to America's Premier Testing Site - User</a>\n      </h3>\n      <table border=\"0\">\n        <tr>\n          <br>\n          <br>\n          <h4>Welcome back, {{firstName}}!! </h4>\n          <br>\n        </tr>\n        <tr>\n          <td valign=\"top\" width=\"550px\">\n            <br>\n            <h6>Thank you for choosing our applicaiton to Test Your Knowledge Level.</h6>\n            <br>\n            <h6>We are happy to provide you a platform where you can verify your knowledge level in various subject areas and master\n              them.\n            </h6>\n            <br>\n            <h6>Our Subject Matter Experts (SMEs) are always working on creating new challenges to help you assess your skill levels.</h6>\n            <br>\n            <h6> As a User, you can create and anwser a questionnaire to assess your skill level in the chosen subject area.</h6>\n            <br>\n            <h6>Please select an option from 'Quiz User' menu to start.</h6>\n          </td>\n          <td width=\"250px\">\n          </td>\n          <td width=\"350px\">\n            <ngx-player></ngx-player>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n@media (max-width: 575px) {\n  /deep/ nb-card.large-card {\n    height: 456px; } }\n\nh3 {\n  padding-top: 1 cm;\n  text-align: center;\n  padding-bottom: 1 cm; }\n\np {\n  text-indent: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.userString = localStorage.getItem('theUser');
        if (this.userString === 'sme') {
            this.usertype = true;
        }
        else {
            this.usertype = false;
        }
        this.firstName = localStorage.getItem('firstName');
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-dashboard',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.html"),
    })
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_player_player_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/home/player/player.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__theme_theme_module__["a" /* ThemeModule */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_3__home_player_player_component__["a" /* PlayerComponent */],
        ],
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/home/player/player.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">Songs of The Day</div>\n\n<div class=\"body\">\n\n  <div class=\"track-info\">\n    <div class=\"cover\" style.background-image=\"url('{{track.cover}}')\"></div>\n    <div class=\"details\">\n      <h4>{{ track.name }}</h4>\n      <span>{{ track.artist }}</span>\n    </div>\n  </div>\n<!--\n  <div class=\"progress-wrap\">\n    <input type=\"range\" class=\"progress\" [value]=\"getProgress()\" min=\"0\" max=\"100\" step=\"0.01\"\n           (input)=\"setProgress(duration.value)\" #duration>\n    <div class=\"progress-foreground\" [style.width.%]=\"getProgress()\"></div>\n  </div>\n\n  <div class=\"timing\">\n    <small class=\"current\">{{ player.currentTime | timing }}</small>\n    <small class=\"remaining\">- {{ player.duration - player.currentTime | timing }}</small>\n  </div> -->\n\n  <div class=\"controls\">\n    <i class=\"nb-shuffle shuffle\" [class.active]=\"shuffle\" (click)=\"toggleShuffle()\"></i>\n    <i class=\"nb-skip-backward prev\" (click)=\"prev()\"></i>\n    <i class=\"play\" [class.nb-play]=\"player.paused\" [class.nb-pause]=\"!player.paused\" (click)=\"playPause()\"></i>\n    <i class=\"nb-skip-forward next\" (click)=\"next()\"></i>\n    <i class=\"nb-loop loop\" [class.active]=\"player.loop\" (click)=\"toggleLoop()\"></i>\n  </div>\n\n</div>\n\n<div class=\"footer\">\n\n  <div class=\"volume\">\n    <i class=\"nb-volume-mute\"></i>\n    <div class=\"progress-wrap\">\n      <input type=\"range\" class=\"progress\" [value]=\"getVolume()\" max=\"100\"\n             (input)=\"setVolume(volume.value)\" #volume>\n      <div class=\"progress-foreground\" [style.width.%]=\"getVolume()\"></div>\n    </div>\n    <i class=\"nb-volume-high\"></i>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/home/player/player.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This is a starting point where we declare the maps of themes and globally available functions/mixins\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */\n/**\n * This mixin generates keyfames.\n * Because of all keyframes can't be scoped,\n * we need to puts unique name in each btn-pulse call.\n */\n:host-context(.nb-theme-default) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%; }\n  :host-context(.nb-theme-default) .header {\n    padding: 1.25rem;\n    border-bottom: 1px solid #ebeef2;\n    border-top-left-radius: 0.375rem;\n    border-top-right-radius: 0.375rem;\n    color: #2a2a2a;\n    font-family: Exo;\n    font-size: 1.125rem;\n    font-weight: 600; }\n    :host-context(.nb-theme-default) .header h1 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h2 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h3 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h4 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h5 {\n      margin: 0; }\n    :host-context(.nb-theme-default) .header h6 {\n      margin: 0; }\n  :host-context(.nb-theme-default) .body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  :host-context(.nb-theme-default) .footer {\n    padding: 1.25rem;\n    border-top: 1px solid #ebeef2; }\n  :host-context(.nb-theme-default) .track-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n    :host-context(.nb-theme-default) .track-info .cover {\n      border-radius: 0.1875rem;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 10rem;\n      height: 10rem; }\n    :host-context(.nb-theme-default) .track-info .details {\n      text-align: center;\n      padding-top: 1.5rem; }\n      :host-context(.nb-theme-default) .track-info .details span {\n        color: black; }\n  :host-context(.nb-theme-default) .progress-wrap {\n    position: relative;\n    height: 1rem; }\n    :host-context(.nb-theme-default) .progress-wrap .progress-foreground {\n      background-color: #40dc7e;\n      height: 2px;\n      position: absolute;\n      margin-top: calc(0.75rem - 1px);\n      width: 100px; }\n    :host-context(.nb-theme-default) .progress-wrap .progress {\n      -webkit-appearance: none;\n      width: 100%;\n      background: transparent;\n      height: 1.5rem;\n      outline: none;\n      position: absolute; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #40dc7e;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #40dc7e;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #40dc7e;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-webkit-slider-runnable-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-moz-range-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n      :host-context(.nb-theme-default) .progress-wrap .progress::-ms-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #ebeef2; }\n  :host-context(.nb-theme-default) .timing {\n    padding-top: 0.5rem;\n    margin: 0 0.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    color: black; }\n  :host-context(.nb-theme-default) .controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0.25rem 2rem 1rem;\n    max-width: 400px;\n    width: 100%;\n    margin: 0 auto; }\n    :host-context(.nb-theme-default) .controls i {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer; }\n    :host-context(.nb-theme-default) .controls .shuffle, :host-context(.nb-theme-default) .controls .loop {\n      font-size: 1.5rem;\n      color: black; }\n      :host-context(.nb-theme-default) .controls .shuffle.active, :host-context(.nb-theme-default) .controls .loop.active {\n        color: #40dc7e; }\n    :host-context(.nb-theme-default) .controls .prev, :host-context(.nb-theme-default) .controls .next {\n      width: 3.5rem;\n      height: 3.5rem;\n      border: 2px solid #ebeef2;\n      border-radius: 50%;\n      font-size: 1.75rem; }\n    :host-context(.nb-theme-default) .controls .play {\n      font-size: 2rem; }\n  :host-context(.nb-theme-default) .volume {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 auto;\n    position: relative;\n    max-width: 400px; }\n    :host-context(.nb-theme-default) .volume i {\n      font-size: 1.5rem;\n      margin: 0.25rem;\n      color: black; }\n    :host-context(.nb-theme-default) .volume .progress-wrap {\n      height: 2.25rem;\n      margin: 0;\n      width: 80%; }\n      :host-context(.nb-theme-default) .volume .progress-wrap .progress-foreground {\n        margin-top: calc(1rem + 1px);\n        z-index: 0; }\n      :host-context(.nb-theme-default) .volume .progress-wrap .progress {\n        height: 2.25rem; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-webkit-slider-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.4);\n          border: solid 1px rgba(0, 0, 0, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-moz-range-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.4);\n          border: solid 1px rgba(0, 0, 0, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-default) .volume .progress-wrap .progress::-ms-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(0, 0, 0, 0.4);\n          border: solid 1px rgba(0, 0, 0, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n  :host-context(.nb-theme-default).collapsed {\n    border: none;\n    height: 4.5rem; }\n    :host-context(.nb-theme-default).collapsed .header {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .body {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0; }\n    :host-context(.nb-theme-default).collapsed .footer {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .track-info {\n      height: 4.5rem;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding: 0;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n      :host-context(.nb-theme-default).collapsed .track-info .cover {\n        height: 4.5rem;\n        width: 4.5rem;\n        border-radius: 0 0 0 0.375rem;\n        -webkit-box-flex: 0;\n            -ms-flex: none;\n                flex: none; }\n      :host-context(.nb-theme-default).collapsed .track-info .details {\n        margin-left: 0.875rem;\n        text-align: left;\n        padding: 0; }\n        :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n          margin-bottom: 0.125rem; }\n    :host-context(.nb-theme-default).collapsed .progress-wrap {\n      width: calc(100% - 6rem);\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n      position: absolute;\n      left: 0;\n      margin-top: calc(-0.75rem + 1px);\n      margin-left: calc(4.5rem + 0.75rem); }\n    :host-context(.nb-theme-default).collapsed .timing {\n      display: none; }\n    :host-context(.nb-theme-default).collapsed .controls {\n      padding: 0 1rem 0 0;\n      max-width: inherit;\n      width: inherit;\n      margin: 0; }\n      :host-context(.nb-theme-default).collapsed .controls i {\n        width: inherit;\n        height: inherit; }\n      :host-context(.nb-theme-default).collapsed .controls .prev, :host-context(.nb-theme-default).collapsed .controls .shuffle, :host-context(.nb-theme-default).collapsed .controls .loop {\n        display: none; }\n      :host-context(.nb-theme-default).collapsed .controls .play, :host-context(.nb-theme-default).collapsed .controls .next {\n        font-size: 2rem;\n        border: none; }\n    :host-context(.nb-theme-default).collapsed .volume {\n      display: none; }\n    @media (max-width: 767px) {\n      :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n        font-size: 1.25rem; }\n      :host-context(.nb-theme-default).collapsed .track-info .details span {\n        font-size: 0.875rem; } }\n    @media (max-width: 575px) {\n      :host-context(.nb-theme-default).collapsed .track-info .details h4 {\n        font-size: 1rem; }\n      :host-context(.nb-theme-default).collapsed .track-info .details span {\n        font-size: 0.75rem;\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: calc(0.75rem * 1.25); } }\n\n:host-context(.nb-theme-cosmic) {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  height: 100%; }\n  :host-context(.nb-theme-cosmic) .header {\n    padding: 1.25rem;\n    border-bottom: 1px solid #342e73;\n    border-top-left-radius: 0.5rem;\n    border-top-right-radius: 0.5rem;\n    color: #ffffff;\n    font-family: Exo;\n    font-size: 1.125rem;\n    font-weight: 500; }\n    :host-context(.nb-theme-cosmic) .header h1 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h2 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h3 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h4 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h5 {\n      margin: 0; }\n    :host-context(.nb-theme-cosmic) .header h6 {\n      margin: 0; }\n  :host-context(.nb-theme-cosmic) .body {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1; }\n  :host-context(.nb-theme-cosmic) .footer {\n    padding: 1.25rem;\n    border-top: 1px solid #342e73; }\n  :host-context(.nb-theme-cosmic) .track-info {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    padding: 1.25rem; }\n    :host-context(.nb-theme-cosmic) .track-info .cover {\n      border-radius: 0.25rem;\n      background-size: cover;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 10rem;\n      height: 10rem; }\n    :host-context(.nb-theme-cosmic) .track-info .details {\n      text-align: center;\n      padding-top: 1.5rem; }\n      :host-context(.nb-theme-cosmic) .track-info .details span {\n        color: #fbfbff; }\n  :host-context(.nb-theme-cosmic) .progress-wrap {\n    position: relative;\n    height: 1rem; }\n    :host-context(.nb-theme-cosmic) .progress-wrap .progress-foreground {\n      background-color: #00d977;\n      height: 2px;\n      position: absolute;\n      margin-top: calc(0.75rem - 1px);\n      width: 100px;\n      background-color: #00f9a6; }\n    :host-context(.nb-theme-cosmic) .progress-wrap .progress {\n      -webkit-appearance: none;\n      width: 100%;\n      background: transparent;\n      height: 1.5rem;\n      outline: none;\n      position: absolute; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #00d977;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #00d977;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 1rem;\n        height: 1rem;\n        border-radius: 50%;\n        background: #00d977;\n        cursor: pointer;\n        margin-top: calc(-0.5rem + 1px);\n        border: none; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-runnable-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-track {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        width: 100%;\n        height: 2px;\n        cursor: pointer;\n        background: #342e73; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-webkit-slider-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-moz-range-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n      :host-context(.nb-theme-cosmic) .progress-wrap .progress::-ms-thumb {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        background: #00f9a6; }\n  :host-context(.nb-theme-cosmic) .timing {\n    padding-top: 0.5rem;\n    margin: 0 0.5rem;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    color: #fbfbff; }\n  :host-context(.nb-theme-cosmic) .controls {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 0.25rem 2rem 1rem;\n    max-width: 400px;\n    width: 100%;\n    margin: 0 auto; }\n    :host-context(.nb-theme-cosmic) .controls i {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: center;\n          -ms-flex-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      cursor: pointer; }\n    :host-context(.nb-theme-cosmic) .controls .shuffle, :host-context(.nb-theme-cosmic) .controls .loop {\n      font-size: 1.5rem;\n      color: #fbfbff; }\n      :host-context(.nb-theme-cosmic) .controls .shuffle.active, :host-context(.nb-theme-cosmic) .controls .loop.active {\n        color: #00d977;\n        color: #00f9a6; }\n    :host-context(.nb-theme-cosmic) .controls .prev, :host-context(.nb-theme-cosmic) .controls .next {\n      width: 3.5rem;\n      height: 3.5rem;\n      border: 2px solid #342e73;\n      border-radius: 50%;\n      font-size: 1.75rem; }\n    :host-context(.nb-theme-cosmic) .controls .play {\n      font-size: 2rem; }\n  :host-context(.nb-theme-cosmic) .volume {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    margin: 0 auto;\n    position: relative;\n    max-width: 400px; }\n    :host-context(.nb-theme-cosmic) .volume i {\n      font-size: 1.5rem;\n      margin: 0.25rem;\n      color: #fbfbff; }\n    :host-context(.nb-theme-cosmic) .volume .progress-wrap {\n      height: 2.25rem;\n      margin: 0;\n      width: 80%; }\n      :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress-foreground {\n        margin-top: calc(1rem + 1px);\n        z-index: 0; }\n      :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress {\n        height: 2.25rem; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-webkit-slider-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(251, 251, 255, 0.4);\n          border: solid 1px rgba(251, 251, 255, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-moz-range-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(251, 251, 255, 0.4);\n          border: solid 1px rgba(251, 251, 255, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n        :host-context(.nb-theme-cosmic) .volume .progress-wrap .progress::-ms-thumb {\n          -webkit-appearance: none;\n          -moz-appearance: none;\n          width: 1.5rem;\n          height: 1.5rem;\n          background-color: #ffffff;\n          box-shadow: 0 0.125rem 0.5rem 0 rgba(251, 251, 255, 0.4);\n          border: solid 1px rgba(251, 251, 255, 0.4);\n          margin-top: calc(-0.875rem + 1px);\n          position: relative;\n          z-index: 10; }\n  :host-context(.nb-theme-cosmic).collapsed {\n    border: none;\n    height: 4.5rem; }\n    :host-context(.nb-theme-cosmic).collapsed .header {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .body {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      -webkit-box-pack: justify;\n          -ms-flex-pack: justify;\n              justify-content: space-between;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      padding: 0; }\n    :host-context(.nb-theme-cosmic).collapsed .footer {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .track-info {\n      height: 4.5rem;\n      -webkit-box-orient: horizontal;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: row;\n              flex-direction: row;\n      padding: 0;\n      -webkit-box-flex: 0;\n          -ms-flex: none;\n              flex: none; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .cover {\n        height: 4.5rem;\n        width: 4.5rem;\n        border-radius: 0 0 0 0.5rem;\n        -webkit-box-flex: 0;\n            -ms-flex: none;\n                flex: none; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details {\n        margin-left: 0.875rem;\n        text-align: left;\n        padding: 0; }\n        :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n          margin-bottom: 0.125rem; }\n    :host-context(.nb-theme-cosmic).collapsed .progress-wrap {\n      width: calc(100% - 6rem);\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n      position: absolute;\n      left: 0;\n      margin-top: calc(-0.75rem + 1px);\n      margin-left: calc(4.5rem + 0.75rem); }\n    :host-context(.nb-theme-cosmic).collapsed .timing {\n      display: none; }\n    :host-context(.nb-theme-cosmic).collapsed .controls {\n      padding: 0 1rem 0 0;\n      max-width: inherit;\n      width: inherit;\n      margin: 0; }\n      :host-context(.nb-theme-cosmic).collapsed .controls i {\n        width: inherit;\n        height: inherit; }\n      :host-context(.nb-theme-cosmic).collapsed .controls .prev, :host-context(.nb-theme-cosmic).collapsed .controls .shuffle, :host-context(.nb-theme-cosmic).collapsed .controls .loop {\n        display: none; }\n      :host-context(.nb-theme-cosmic).collapsed .controls .play, :host-context(.nb-theme-cosmic).collapsed .controls .next {\n        font-size: 2rem;\n        border: none; }\n    :host-context(.nb-theme-cosmic).collapsed .volume {\n      display: none; }\n    @media (max-width: 767px) {\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n        font-size: 1.25rem; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details span {\n        font-size: 0.875rem; } }\n    @media (max-width: 575px) {\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details h4 {\n        font-size: 1rem; }\n      :host-context(.nb-theme-cosmic).collapsed .track-info .details span {\n        font-size: 0.75rem;\n        display: inline-block;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        max-height: calc(0.75rem * 1.25); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/dashboard/home/player/player.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_data_player_service__ = __webpack_require__("../../../../../src/app/@core/data/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerComponent = (function () {
    function PlayerComponent(playerService) {
        this.playerService = playerService;
        this.track = this.playerService.random();
        this.createPlayer();
    }
    PlayerComponent.prototype.ngOnDestroy = function () {
        this.player.pause();
        this.player.src = '';
        this.player.load();
    };
    PlayerComponent.prototype.prev = function () {
        if (!this.player.loop) {
            if (this.shuffle) {
                this.track = this.playerService.random();
            }
            else {
                this.track = this.playerService.prev();
            }
        }
        this.reload();
    };
    PlayerComponent.prototype.next = function () {
        if (!this.player.loop) {
            if (this.shuffle) {
                this.track = this.playerService.random();
            }
            else {
                this.track = this.playerService.next();
            }
        }
        this.reload();
    };
    PlayerComponent.prototype.playPause = function () {
        if (this.player.paused) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    PlayerComponent.prototype.toggleShuffle = function () {
        this.shuffle = !this.shuffle;
    };
    PlayerComponent.prototype.toggleLoop = function () {
        this.player.loop = !this.player.loop;
    };
    PlayerComponent.prototype.setVolume = function (volume) {
        this.player.volume = volume / 100;
    };
    PlayerComponent.prototype.getVolume = function () {
        return this.player.volume * 100;
    };
    PlayerComponent.prototype.setProgress = function (duration) {
        this.player.currentTime = this.player.duration * duration / 100;
    };
    PlayerComponent.prototype.getProgress = function () {
        return this.player.currentTime / this.player.duration * 100 || 0;
    };
    PlayerComponent.prototype.createPlayer = function () {
        var _this = this;
        this.player = new Audio();
        this.player.onended = function () { return _this.next(); };
        this.setTrack();
    };
    PlayerComponent.prototype.reload = function () {
        this.setTrack();
        this.player.play();
    };
    PlayerComponent.prototype.setTrack = function () {
        this.player.src = this.track.url;
        this.player.load();
    };
    return PlayerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.collapsed'),
    __metadata("design:type", Boolean)
], PlayerComponent.prototype, "collapsed", void 0);
PlayerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-player',
        styles: [__webpack_require__("../../../../../src/app/pages/dashboard/home/player/player.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/dashboard/home/player/player.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_data_player_service__["a" /* PlayerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_data_player_service__["a" /* PlayerService */]) === "function" && _a || Object])
], PlayerComponent);

var _a;
//# sourceMappingURL=player.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-menu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return USER_MENU_ITEMS; });
var MENU_ITEMS = [
    {
        title: 'Home',
        icon: 'nb-home',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'FEATURES',
        group: true,
    },
    {
        title: 'Quiz SME',
        icon: 'nb-keypad',
        children: [
            {
                title: 'View available Quizzes',
                link: '/pages/viewquiz',
            },
            {
                title: 'Create a new Quiz',
                link: '/pages/addquiz',
            },
        ],
    },
    {
        title: 'Auth',
        icon: 'nb-locked',
        children: [
            {
                title: 'Reset Password',
                link: '/auth/reset-password',
            },
            {
                title: 'Logout',
                link: '/auth/login',
            },
        ],
    },
];
var USER_MENU_ITEMS = [
    {
        title: 'Home',
        icon: 'nb-home',
        link: '/pages/dashboard',
        home: true,
    },
    {
        title: 'FEATURES',
        group: true,
    },
    {
        title: 'Quiz User',
        icon: 'nb-keypad',
        children: [
            {
                title: 'View available Quizzes',
                link: '/pages/user',
            },
            {
                title: 'Take a Quiz',
                link: '/pages/takequiz',
            },
        ],
    },
    {
        title: 'Auth',
        icon: 'nb-locked',
        children: [
            {
                title: 'Reset Password',
                link: '/auth/reset-password',
            },
            {
                title: 'Logout',
                link: '/auth/login',
            },
        ],
    },
];
//# sourceMappingURL=pages-menu.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__pages_component__["a" /* PagesComponent */],
        children: [{
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */],
            }, {
                path: 'login',
                loadChildren: './login/login.module#LoginModule',
            }, {
                path: 'registration',
                loadChildren: './registration/registration.module#RegistrationModule',
            }, {
                path: 'viewquiz',
                loadChildren: './viewquiz/viewquiz.module#ViewQuizModule',
            }, {
                path: 'updatequiz',
                loadChildren: './updatequiz/updatequiz.module#UpdateQuizModule',
            }, {
                path: 'addquiz',
                loadChildren: './addquiz/addquiz.module#AddQuizModule',
            }, {
                path: 'takequiz',
                loadChildren: './takequiz/takequiz.module#TakeQuizModule',
            }, {
                path: 'user',
                loadChildren: './user/user.module#UserModule',
            }, {
                path: 'ui-features',
                loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule',
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule',
            }, {
                path: 'editors',
                loadChildren: './editors/editors.module#EditorsModule',
            }, {
                path: 'forms',
                loadChildren: './forms/forms.module#FormsModule',
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule',
            }, {
                path: '',
                redirectTo: '/auth/login',
                pathMatch: 'full',
            }],
    }];
var PagesRoutingModule = (function () {
    function PagesRoutingModule() {
    }
    return PagesRoutingModule;
}());
PagesRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */]],
    })
], PagesRoutingModule);

//# sourceMappingURL=pages-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.html":
/***/ (function(module, exports) {

module.exports = "<ngx-sample-layout>\n\n        <nb-menu *ngIf=\"usertype; else elseblock\" [items]=\"menu\"></nb-menu>\n       <ng-template #elseblock>\n        <nb-menu [items]=\"menub\"></nb-menu></ng-template>\n   \n        <router-outlet></router-outlet>\n      </ngx-sample-layout>\n    \n"

/***/ }),

/***/ "../../../../../src/app/pages/pages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_menu__ = __webpack_require__("../../../../../src/app/pages/pages-menu.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PagesComponent = (function () {
    function PagesComponent() {
        this.menu = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["a" /* MENU_ITEMS */];
        this.menub = __WEBPACK_IMPORTED_MODULE_1__pages_menu__["b" /* USER_MENU_ITEMS */];
    }
    PagesComponent.prototype.ngOnInit = function () {
        this.userString = localStorage.getItem('theUser');
        if (this.userString === 'sme') {
            this.usertype = true;
        }
        else {
            this.usertype = false;
        }
    };
    return PagesComponent;
}());
PagesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-pages',
        template: __webpack_require__("../../../../../src/app/pages/pages.component.html"),
    })
], PagesComponent);

//# sourceMappingURL=pages.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_component__ = __webpack_require__("../../../../../src/app/pages/pages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/pages/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__ = __webpack_require__("../../../../../src/app/pages/pages-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__ = __webpack_require__("../../../../../src/app/@theme/theme.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PAGES_COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_1__pages_component__["a" /* PagesComponent */],
];
var PagesModule = (function () {
    function PagesModule() {
    }
    return PagesModule;
}());
PagesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__pages_routing_module__["a" /* PagesRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__theme_theme_module__["a" /* ThemeModule */],
            __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_module__["a" /* DashboardModule */],
        ],
        declarations: PAGES_COMPONENTS.slice(),
    })
], PagesModule);

//# sourceMappingURL=pages.module.js.map

/***/ })

});
//# sourceMappingURL=pages.module.chunk.js.map