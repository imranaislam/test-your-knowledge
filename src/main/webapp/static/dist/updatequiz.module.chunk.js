webpackJsonp(["updatequiz.module"],{

/***/ "../../../../../src/app/pages/updatequiz/updatequiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n    background-color: #525252;\n    text-align:center;\n    margin-top: 20px;\n}\n.centered-form{\n\tmargin-top: 60px;\n}\n\n.centered-form .panel{\n    background: rgba(255, 255, 255, 0.8);\n}\nform {\n    display: inline-block;\n    text-align: center;\n    margin-top: 20px;\n}\ntable {\n    width: 50%;\n    margin-left: auto;\n    margin-right: auto;\n}\ntable, th, td {\n  border: 1px solid grey;\n    border-collapse: collapse;\n    padding: 5px;\n    color: #ffffff;\n    \n  }\n  table th {\n    background-color:  #2980b9;\n    color: white;\n  }\n  table tr:nth-child(odd) {\n    background-color: #0d2c70;\n    color: #ffffff;\n  }\n  table tr:nth-child(even) {\n    background-color: #ffffff;\n    color: #ffffff;\n  }\n\n  button {\n    background: #3498db;\n    background-image: linear-gradient(to bottom, #3498db, #2980b9);\n    border-radius: 20px;\n    font-family: Arial;\n    color: #ffffff;\n    font-size: 14px;\n    padding: 6px 6px 6px 6px;\n    text-decoration: none;\n  }\n  \n  button:hover {\n    background: #3cb0fd;\n    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);\n    text-decoration: none;\n  }\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/updatequiz/updatequiz.component.html":
/***/ (function(module, exports) {

module.exports = "<br><br>\n<div class=\"container\">\n    <div class=\"row text-center\">\n        <div class=\"col-lg-12\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">\n                        <a class=\"ion-navicon-round\" data-toggle=\"collapse out\" data-parent=\"#accordion\" href=\"javascript:void(0)\"><span class=\"glyphicon glyphicon-th-list\">\n                            </span>List of available questions for quiz : {{quizDescription}} </a>  \n\n                </h4>\n                <h6>You can delete one question at a time.</h6>\n            </div>\n            <br><br>\n            <div class=\"panel-body\" >\n                    <table border=\"1\" class=\"allrequests-table\">\n                        <thead>\n                          <!--<th width=\"10%\">ID</th>-->\n                          <th width=\"85%\">Question</th>\n                          <th >Delete</th>\n                          \n                        </thead>    \n                    <tbody *ngFor=\"let questions of questionList \" >\n                          <tr>\n                            <!--<td>{{questions.question_id}}</td>-->\n                            <td align = \"left\">{{questions.question_text}}</td>\n                            <td><button class=\"w3-button w3-border w3-small\" (click)=\"deleteQuestion(questions.question_id, questions.question_text)\">X</button></td>                            \n                          </tr>\n                        </tbody>\n                    </table>\n                    <br>\n                    <h6>{{message}}</h6>\n                    <h6>{{questionText}}</h6>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/updatequiz/updatequiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateQuizComponent; });
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



var UpdateQuizComponent = (function () {
    function UpdateQuizComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    UpdateQuizComponent.prototype.ngOnInit = function () {
        // alert('quiz_id:' + localStorage.getItem('quiz_id'));
        this.retrieveQuestions();
    };
    UpdateQuizComponent.prototype.retrieveQuestions = function () {
        var _this = this;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/test-your-knowledge/quizquestionlist', "quiz_id=" + localStorage.getItem('quiz_id'), { headers: this.headers })
            .subscribe(function (questions) {
            if (questions.status === 200) {
                _this.router.navigate(['pages/updatequiz']);
                _this.questionList = questions.json();
                _this.quizDescription = localStorage.getItem('quiz_description');
            }
        }, function (error) {
            if (error.status === 400) {
                _this.message = 'Our Application experienced an issue.  Please try again.';
            }
        });
    };
    UpdateQuizComponent.prototype.deleteQuestion = function (questionId, questionText) {
        var _this = this;
        localStorage.setItem('question_id', questionId);
        localStorage.setItem('question_text', questionText);
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/test-your-knowledge/delete', "questionId=" + localStorage.getItem('question_id'), { headers: this.headers })
            .subscribe(function (data) {
            if (data.status === 200) {
                _this.questionText = localStorage.getItem('question_text');
                _this.message = "Following question has been deleted: ";
                _this.ngOnInit();
            }
        }, function (error) {
            if (error.status === 400) {
                _this.message = 'Our Application experienced an issue.  Please try again.';
            }
        });
    };
    return UpdateQuizComponent;
}());
UpdateQuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-view-quiz',
        template: __webpack_require__("../../../../../src/app/pages/updatequiz/updatequiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/updatequiz/updatequiz.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], UpdateQuizComponent);

var _a, _b;
//# sourceMappingURL=updatequiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/updatequiz/updatequiz.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateQuizModule", function() { return UpdateQuizModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__updatequiz_component__ = __webpack_require__("../../../../../src/app/pages/updatequiz/updatequiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__updatequiz_routing__ = __webpack_require__("../../../../../src/app/pages/updatequiz/updatequiz.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UpdateQuizModule = (function () {
    function UpdateQuizModule() {
    }
    return UpdateQuizModule;
}());
UpdateQuizModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__updatequiz_routing__["a" /* routing */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__updatequiz_component__["a" /* UpdateQuizComponent */],
        ],
    })
], UpdateQuizModule);

//# sourceMappingURL=updatequiz.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/updatequiz/updatequiz.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__updatequiz_component__ = __webpack_require__("../../../../../src/app/pages/updatequiz/updatequiz.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__updatequiz_component__["a" /* UpdateQuizComponent */],
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=updatequiz.routing.js.map

/***/ })

});
//# sourceMappingURL=updatequiz.module.chunk.js.map