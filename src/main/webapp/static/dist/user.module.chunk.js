webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/pages/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\n    padding-top: 1cm;\n    text-align: center;\n    padding-bottom: 1cm;\n}\nh3.header{\n    \ncolor: rgb(110, 212, 113);\n}\np {\n  text-indent: 50px;\n  color: rgba(23, 176, 214, 0.726);\n    font: 15px sans-serif;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <!-- <div class=\"header\">\n            <br>\n            <H3 class=header>Welcome to America's Premier Testing site</H3>\n        </div> -->\n\n    <div class=\"header\">\n        <br>\n        <H4 class=header>\n            <a data-toggle=\"collapse out\" data-parent=\"#accordion\" href=\"javascript:void(0)\">\n                <span class=\"glyphicon glyphicon-th-list\">\n                </span>Are you ready to test your knowledge {{firstName}} ? </a>\n        </H4>\n    </div>\n    <br>\n    <div class=\"body\">\n        <h6>We are happy to provide you a platform where you can verify your knowledge level in various subject areas and master\n            them.\n        </h6>\n        <h6>Our Subject Matter Experts (SMEs) are always working on creating new challenges to help you assess your skill levels.</h6>\n        <h6>Please select one of the available subject areas and expertise level to begin.</h6>\n    </div>\n    <br>\n    <br>\n    <div>\n        <div class=\"subjectArea\">\n            <strong>Subject Area: </strong>\n            <select id=\"subjectAreaSelection\" type=\"text\">\n                <option value={{subjectArea.quiz_id}} *ngFor=\"let subjectArea of subjectAreas\">{{subjectArea.quiz_subject_area}}</option>\n            </select>\n        </div>\n        <br>\n        <div class=\"questionComplexity\">\n            <strong>Expertise Level: </strong>\n            <select id=\"questionComplexitySelection\" type=\"text\">\n                <option *ngFor=\"let questionComplexity of questionComplexityList\" value={{questionComplexity.question_complexity_id}}>{{questionComplexity.question_complexity_level_description}}</option>\n            </select>\n        </div>\n\n    </div>\n    <br>\n    <br>\n    <button (click)=\"viewQuestions()\" class=\"btn btn-success\">View Questions</button>\n    <p>{{message}}</p>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = (function () {
    function UserComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    UserComponent.prototype.ngOnInit = function () {
        this.retrieveSubjectAreas();
        this.retrieveQuestionComplexityList();
        this.firstName = localStorage.getItem('firstName');
    };
    UserComponent.prototype.retrieveSubjectAreas = function () {
        var _this = this;
        this.http.get('http://localhost:8080/test-your-knowledge/subjectareas')
            .subscribe(function (subjectareas) {
            if (subjectareas.status === 200) {
                _this.subjectAreas = subjectareas.json();
                // console.log(this.subjectAreas);
            }
        }, function (error) {
            if (error.status === 400) {
                _this.message = 'Our Application experienced an issue.  Please try again.';
            }
        });
    };
    UserComponent.prototype.retrieveQuestionComplexityList = function () {
        var _this = this;
        this.http.get('http://localhost:8080/test-your-knowledge/questioncomplexitylist')
            .subscribe(function (questionComplexityList) {
            if (questionComplexityList.status === 200) {
                _this.questionComplexityList = questionComplexityList.json();
                // console.log(this.questionComplexityList[0]);
                // console.log(this.questionComplexityList[0].question_complexity_level_description);
            }
        }, function (error) {
            if (error.status === 400) {
                _this.message = 'Our Application experienced an issue.  Please try again.';
            }
        });
    };
    UserComponent.prototype.viewQuestions = function () {
        this.router.navigate(['pages/takequiz']);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-user',
        template: __webpack_require__("../../../../../src/app/pages/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/user/user.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], UserComponent);

var _a, _b;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_component__ = __webpack_require__("../../../../../src/app/pages/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_routing__ = __webpack_require__("../../../../../src/app/pages/user/user.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__user_routing__["a" /* routing */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__user_component__["a" /* UserComponent */],
        ],
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/user/user.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_component__ = __webpack_require__("../../../../../src/app/pages/user/user.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__user_component__["a" /* UserComponent */],
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=user.routing.js.map

/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map