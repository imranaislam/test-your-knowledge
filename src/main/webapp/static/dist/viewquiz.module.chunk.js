webpackJsonp(["viewquiz.module"],{

/***/ "../../../../../src/app/pages/viewquiz/viewquiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n    background-color: #525252;\n    text-align:center;\n    margin-top: 20px;\n}\n.centered-form{\n\tmargin-top: 60px;\n}\n\n.centered-form .panel{\n    background: rgba(255, 255, 255, 0.8);\n}\nform {\n    display: inline-block;\n    text-align: center;\n    margin-top: 20px;\n}\ntable {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n}\ntable, th, td {\n  border: 1px solid grey;\n    border-collapse: collapse;\n    padding: 5px;\n    color: #ffffff;\n    \n  }\n  table th {\n    background-color:  #2980b9;\n    color: white;\n  }\n  table tr:nth-child(odd) {\n    background-color:  #3d3780;\n    color: #ffffff;\n  }\n  table tr:nth-child(even) {\n    background-color: #ffffff;\n    color: #ffffff;\n  }\n\n  button {\n    background: #035c97;\n    background-image: linear-gradient(to bottom, #3498db, #2980b9);\n    border-radius: 20px;\n    font-family: Arial;\n    color: #ffffff;\n    font-size: 14px;\n    padding: 4px 4px 4px 4px;\n    text-decoration: none;\n  }\n  \n  button:hover {\n    background: #3cb0fd;\n    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);\n    text-decoration: none;\n  }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/viewquiz/viewquiz.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n\n<br>\n<div class=\"container\">\n    <div class=\"row text-center\">\n        <div class=\"col-sm-12\">\n            <div class=\"panel panel-default\">\n\n                <div class=\"panel-heading\">\n                    <h4 class=\"panel-title\">\n                        <a data-toggle=\"collapse out\" data-parent=\"#accordion\" href=\"javascript:void(0)\">\n                            <span class=\"glyphicon glyphicon-th-list\">\n                            </span>List of your previously created knowledge Testers</a>\n                    </h4>\n                </div>\n\n                <br>\n                <br>\n                <div class=\"panel-body\">\n                    <table border=\"1\" class=\"allrequests-table\">\n                        <thead>\n                            <th width=\"20%\">Category</th>\n                            <th width=\"60%\">Title</th>\n                            <th width=\"20%\">View/Delete</th>\n                        </thead>\n                        <tbody *ngFor=\"let quiz of quizList \">\n                            <tr>\n                                <td>{{quiz.quiz_subject_area}}</td>\n                                <td>{{quiz.quiz_description}}</td>\n                                <td>\n                                    <button class=\"w3-button w3-border w3-small\" (click)=\"retrieveQuestions(quiz.quiz_id, quiz.quiz_description)\">Questions</button>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                    <br>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/pages/viewquiz/viewquiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewQuizComponent; });
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



var ViewQuizComponent = (function () {
    function ViewQuizComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    ViewQuizComponent.prototype.ngOnInit = function () {
        this.retrieveQuiz();
    };
    ViewQuizComponent.prototype.retrieveQuiz = function () {
        var _this = this;
        this.http.get('http://localhost:8080/test-your-knowledge/viewquiz').subscribe(function (resp) {
            if (resp.status === 200) {
                _this.quizList = resp.json();
                // console.log(this.quizList);
            }
        }, function (error) {
            if (error.status === 400) {
                _this.message = 'Our Application experienced an issue.  Please try again.';
            }
        });
    };
    ViewQuizComponent.prototype.retrieveQuestions = function (quizId, quizDescription) {
        localStorage.setItem('quiz_id', quizId);
        localStorage.setItem('quiz_description', quizDescription);
        this.router.navigate(['pages/updatequiz']);
    };
    return ViewQuizComponent;
}());
ViewQuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-view-quiz',
        template: __webpack_require__("../../../../../src/app/pages/viewquiz/viewquiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/viewquiz/viewquiz.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], ViewQuizComponent);

var _a, _b;
//# sourceMappingURL=viewquiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/viewquiz/viewquiz.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewQuizModule", function() { return ViewQuizModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__viewquiz_component__ = __webpack_require__("../../../../../src/app/pages/viewquiz/viewquiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewquiz_routing__ = __webpack_require__("../../../../../src/app/pages/viewquiz/viewquiz.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ViewQuizModule = (function () {
    function ViewQuizModule() {
    }
    return ViewQuizModule;
}());
ViewQuizModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__viewquiz_routing__["a" /* routing */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__viewquiz_component__["a" /* ViewQuizComponent */],
        ],
    })
], ViewQuizModule);

//# sourceMappingURL=viewquiz.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/viewquiz/viewquiz.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__viewquiz_component__ = __webpack_require__("../../../../../src/app/pages/viewquiz/viewquiz.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__viewquiz_component__["a" /* ViewQuizComponent */],
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=viewquiz.routing.js.map

/***/ })

});
//# sourceMappingURL=viewquiz.module.chunk.js.map