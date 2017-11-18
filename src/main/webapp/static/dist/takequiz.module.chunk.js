webpackJsonp(["takequiz.module"],{

/***/ "../../../../../src/app/pages/takequiz/takequiz.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/takequiz/takequiz.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n      <div class=\"header\">\n            <h4 class=\"panel-title\">\n                        <a class=\"ion-navicon-round\" data-toggle=\"collapse out\" data-parent=\"#accordion\" href=\"javascript:void(0)\"><span class=\"glyphicon glyphicon-th-list\">\n                            </span>Following Questionnaire is prepared based on your selection: </a>  \n    \n                </h4>\n      </div>\n      <br>\n      <br>\n\n      <div *ngFor=\"let question of questionanswers; let i = index\">{{i+1}}. {{question.question_text}}\n            <div *ngFor=\"let answer of question.answers\">\n                  <input name={{question.question_id}} type=\"radio\" (click)=\"saveresponse(question.question_id, answer.answer_id)\"> {{answer.answer_option_text}}\n            </div>\n            <br>\n      </div>\n      <br> {{databaseErrorMessage}}\n      <button class=\"btn btn-success\" (click)=\"validateAnswers()\">Validate Responses</button>\n      <br>\n      <br>\n      <div *ngFor=\"let validationResult of validationResults\">{{validationResult}}</div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/takequiz/takequiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TakeQuizComponent; });
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



var TakeQuizComponent = (function () {
    function TakeQuizComponent(router, http) {
        this.router = router;
        this.http = http;
        this.databaseErrorMessage = '';
        this.questionanswers = [];
        this.expectedAnswers = [];
        this.expectedAnswersOptionText = [];
        this.userAnswers = [];
        this.validationResults = [];
    }
    TakeQuizComponent.prototype.ngOnInit = function () {
        this.retrieveQuestions();
    };
    TakeQuizComponent.prototype.retrieveQuestions = function () {
        var _this = this;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/test-your-knowledge/takequiz', "subjectArea=" + document.getElementById('subjectAreaSelection').value + "&expertiseLevel=" + document.getElementById('questionComplexitySelection').value, { headers: this.headers })
            .subscribe(function (data) {
            if (data.status === 200) {
                _this.router.navigate(['pages/takequiz']);
                _this.questionanswers = data.json();
                for (var _i = 0, _a = _this.questionanswers; _i < _a.length; _i++) {
                    var question = _a[_i];
                    for (var _b = 0, _c = question.answers; _b < _c.length; _b++) {
                        var answer = _c[_b];
                        if (answer.answer_option_validity_flag === 'Y') {
                            _this.expectedAnswers[question.question_id] = answer.answer_id;
                            _this.expectedAnswersOptionText[question.question_id] = answer.answer_option_text;
                        }
                    }
                }
            }
        }, function (error) {
            if (error.status === 400) {
                _this.router.navigate(['pages/takequiz']);
                _this.databaseErrorMessage = 'Our Sincere Apologies.  We are working on creating challenges in the subject area you chose.  Please come back soon and try again.';
            }
        });
    };
    TakeQuizComponent.prototype.saveresponse = function (question_id, answer_id) {
        this.userAnswers[question_id] = answer_id;
    };
    TakeQuizComponent.prototype.validateAnswers = function () {
        for (var i in this.expectedAnswers) {
            if (this.expectedAnswers[i] !== null) {
                if (this.expectedAnswers[i] === this.userAnswers[i]) {
                    this.validationResults[i] = 'Answer for the question ' + i + ' is Correct.';
                }
                else {
                    this.validationResults[i] = 'Answer for the question ' + i + ' is Wrong.  Correct Answer is ' + this.expectedAnswersOptionText[i] + '.';
                }
            }
        }
    };
    return TakeQuizComponent;
}());
TakeQuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-takequiz',
        template: __webpack_require__("../../../../../src/app/pages/takequiz/takequiz.component.html"),
        styles: [__webpack_require__("../../../../../src/app/pages/takequiz/takequiz.component.css")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], TakeQuizComponent);

var _a, _b;
//# sourceMappingURL=takequiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/takequiz/takequiz.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TakeQuizModule", function() { return TakeQuizModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__takequiz_component__ = __webpack_require__("../../../../../src/app/pages/takequiz/takequiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__takequiz_routing__ = __webpack_require__("../../../../../src/app/pages/takequiz/takequiz.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TakeQuizModule = (function () {
    function TakeQuizModule() {
    }
    return TakeQuizModule;
}());
TakeQuizModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__takequiz_routing__["a" /* routing */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__takequiz_component__["a" /* TakeQuizComponent */],
        ],
    })
], TakeQuizModule);

//# sourceMappingURL=takequiz.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/takequiz/takequiz.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__takequiz_component__ = __webpack_require__("../../../../../src/app/pages/takequiz/takequiz.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__takequiz_component__["a" /* TakeQuizComponent */],
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=takequiz.routing.js.map

/***/ })

});
//# sourceMappingURL=takequiz.module.chunk.js.map