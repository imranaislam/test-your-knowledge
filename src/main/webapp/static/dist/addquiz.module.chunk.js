webpackJsonp(["addquiz.module"],{

/***/ "../../../../../src/app/pages/addquiz/addquiz.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">\n            <a class=\"offset-md-1\" data-toggle=\"collapse out\" data-parent=\"#accordion\" href=\"javascript:void(0)\" (click)=\"mycollapse('divq1')\">\n                <span class=\"glyphicon glyphicon-th-list\">\n                </span>Enter a New Question :</a>\n        </h4>\n        <h6 class=\"offset-md-1\">(Select Subject Area and Complexity Level to start)</h6>\n        <br>\n    </div>\n\n</div>\n\n<div class=\"row\">\n    <table align=\"left\" class=\"offset-md-2 col-md-8\">\n\n        <tr>\n            <td>\n                <label for=\"subject\">Subject:</label>\n                <select [(ngModel)]=\"subjectDrop\" id=\"subjectDrop\" name=\"subjectDrop\" required class=\"form-control col-md-6\">\n                    <option value=\"\" disabled selected>Select Subject Area</option>\n                    <option *ngFor=\"let subjectArea of subjectAreas\" value=\"{{subjectArea.quiz_id}}\">{{subjectArea.quiz_subject_area}}</option>\n                </select>\n                <span style=\"color: red\">{{validationSubject}}</span>\n            </td>\n        </tr>\n        <br>\n        <tr>\n            <td>\n                <label for=\"complex\">Complexity:</label>\n                <select id=\"complexDrop\" name=\"complexDrop\" [(ngModel)]=\"complexDrop\" required class=\"form-control col-md-4\">\n                    <option value=\"\" disabled selected>Select Complexity</option>\n                    <option *ngFor=\"let questionComplexity of questionComplexityList\" value=\"{{questionComplexity.question_complexity_id}}\">{{questionComplexity.question_complexity_level_description}}</option>\n                </select>\n                <span style=\"color: red\">{{validationComplex}}</span>\n            </td>\n        </tr>\n\n        <tr>\n            <td>\n                <label></label>\n                <input type=\"text\" id=\"q\" name=\"q\" [(ngModel)]=\"q\" required placeholder=\"Enter Question\" class=\"form-control col-md-10\" />\n            </td>\n        </tr>\n    </table>\n\n</div>\n<br>\n\n<br>\n<div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n        <h4 class=\"panel-title\">\n            <a class=\"offset-md-1\" data-toggle=\"collapse out\" data-parent=\"#accordion\" href=\"javascript:void(0)\" (click)=\"mycollapse('divq1')\">\n                <span class=\"glyphicon glyphicon-th-list\">\n                </span>Enter all four Answers and choose one of them as correct response :</a>\n        </h4>\n    </div>\n\n</div>\n\n<div id=\"divq1\" hidden class=\"input-group\">\n    <div class=\"row col-md-10\">\n\n        <table border=\"0\" class=\"offset-md-2 col-md-10\">\n            <tr>\n                <td></td>\n                <td>Correct ?</td>\n            </tr>\n            <tr>\n                <td>\n                    <div class=\"input-group\">\n                        <input type=\"text\" required id=\"a1\" name=\"a1\" [(ngModel)]=\"a1\" placeholder=\"Answer a.\" class=\"form-control\" />\n                    </div>\n                </td>\n                <td>\n                    &nbsp;&nbsp;\n                    <input value={{a1}} [(ngModel)]=\"radioQ1\" type=\"radio\" id=\"radioQ1\" name=\"radioQ1\" />\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <div class=\"input-group\">\n                        <input type=\"text\" required id=\"a2\" [(ngModel)]=\"a2\" placeholder=\"Answer b.\" class=\"form-control\" />\n                    </div>\n                </td>\n                <td>&nbsp;&nbsp;\n                    <input value={{a2}} [(ngModel)]=\"radioQ1\" type=\"radio\" id=\"radioQ1\" name=\"radioQ1\" />\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <div class=\"input-group\">\n                        <input type=\"text\" required id=\"a3\" name=\"a3\" [(ngModel)]=\"a3\" placeholder=\"Answer c.\" class=\"form-control\" />\n                    </div>\n                </td>\n                <td>&nbsp;&nbsp;\n                    <input value={{a3}} [(ngModel)]=\"radioQ1\" type=\"radio\" id=\"radioQ1\" name=\"radioQ1\" />\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <div class=\"input-group\">\n                        <input type=\"text\" required id=\"a4\" name=\"a4\" [(ngModel)]=\"a4\" placeholder=\"Answer d.\" class=\"form-control\" />\n                    </div>\n                </td>\n                <td>&nbsp;&nbsp;\n                    <input value={{a4}} [(ngModel)]=\"radioQ1\" type=\"radio\" id=\"radioQ1\" name=\"radioQ1\">\n                </td>\n            </tr>\n            <tr>&nbsp;</tr>\n            <tr>\n                <td>\n                    <span style=\"color: red\">{{validationAnswer}}&nbsp;&nbsp;\n                        <td>{{validationResult}}</span>\n                    </td>\n            </tr>\n\n        </table>\n    </div>\n\n</div>\n<br>\n<div class=\"row\">\n    <table align=\"right\" class=\"offset-md-4 col-md-8\">\n        <tr>\n            <td>\n                <button (click)=\"addQuizSubmit()\" class=\"btn btn-success\">Submit Question</button>&nbsp;&nbsp;\n                <span style=\"color: red\">{{message}}</span>\n            </td>\n        </tr>\n    </table>\n</div>\n<br>\n<br>"

/***/ }),

/***/ "../../../../../src/app/pages/addquiz/addquiz.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddQuizComponent; });
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



var AddQuizComponent = (function () {
    function AddQuizComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    AddQuizComponent.prototype.ngOnInit = function () {
        document.getElementById('divq1').hidden = false;
        this.retrieveSubjectAreas();
        this.retrieveQuestionComplexityList();
    };
    AddQuizComponent.prototype.mycollapse = function (q) {
        var myvar = document.getElementById(q).hidden;
        if (myvar === false) {
            document.getElementById(q).hidden = true;
        }
        else {
            document.getElementById(q).hidden = false;
        }
    };
    AddQuizComponent.prototype.retrieveSubjectAreas = function () {
        var _this = this;
        this.http.get('http://localhost:8080/test-your-knowledge/subjectareas')
            .subscribe(function (subjectareas) {
            if (subjectareas.status === 200) {
                _this.subjectAreas = subjectareas.json();
                // console.log(this.subjectAreas[0].quiz_subject_area);
            }
        }, function (error) {
            if (error.status === 400) {
                _this.message = 'Our Application experienced an issue.  Please try again.';
            }
        });
    };
    AddQuizComponent.prototype.retrieveQuestionComplexityList = function () {
        var _this = this;
        this.http.get('http://localhost:8080/test-your-knowledge/questioncomplexitylist')
            .subscribe(function (questionComplexityList) {
            if (questionComplexityList.status === 200) {
                _this.questionComplexityList = questionComplexityList.json();
                // console.log(this.questionComplexityList[0].question_complexity_level_description);
            }
        }, function (error) {
            if (error.status === 400) {
                _this.message = 'Our Application experienced an issue.  Please try again.';
            }
        });
    };
    AddQuizComponent.prototype.addQuizSubmit = function () {
        var _this = this;
        var e = (document.getElementById('subjectDrop'));
        var sel = e.selectedIndex;
        var complex = (document.getElementById('complexDrop'));
        var complexVal = complex.selectedIndex;
        var quest = (document.getElementById('q'));
        var questVal = quest.value;
        var a1 = (document.getElementById('a1'));
        var a1Val = a1.value;
        var a2 = (document.getElementById('a2'));
        var a2Val = a2.value;
        var a3 = (document.getElementById('a3'));
        var a3Val = a3.value;
        var a4 = (document.getElementById('a4'));
        var a4Val = a4.value;
        var res = (document.getElementById('radioQ1'));
        var resVal = res.checked;
        if (sel < 0) {
            this.validationSubject = 'Must choose a Subject';
            return;
        }
        if (complexVal < 0) {
            this.validationComplex = 'Must choose complexity';
            return;
        }
        if (questVal === '') {
            // alert('You must specify a question');
            this.validationQuestion = 'Must Enter a Question';
            return;
        }
        if (a1Val === '' || a2Val === '' || a3Val === '' || a4Val === '') {
            // alert('Please complete All Answer Fields');
            this.validationAnswer = 'Must Complete All Answers';
            return;
        }
        if (this.radioQ1 === undefined) {
            // alert('Please Choose a Correct Answer');
            this.validationResult = 'Must Select a Correct Answer';
            return;
        }
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost:8080/test-your-knowledge/add', "q=" + this.q + "&subject=" + this.subjectDrop + "&complexity=" + this.complexDrop + "&a1=" + this.a1 + "&a2=" + this.a2 + "&a3=" + this.a3 + "&a4=" + this.a4 + "&result=" + this.radioQ1, { headers: this.headers })
            .subscribe(function (data) {
            if (data.status === 200) {
                _this.message = "Successfully added the new Question and Answers!";
                sleep(2000).then(function () {
                    location.reload();
                });
            }
            else {
                _this.message = "Question creation failed. Try again...";
            }
            function sleep(time) {
                return new Promise(function (resolve) { return setTimeout(resolve, time); });
            }
        });
    };
    return AddQuizComponent;
}());
AddQuizComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-add-quiz',
        template: __webpack_require__("../../../../../src/app/pages/addquiz/addquiz.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _b || Object])
], AddQuizComponent);

var _a, _b;
//# sourceMappingURL=addquiz.component.js.map

/***/ }),

/***/ "../../../../../src/app/pages/addquiz/addquiz.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuizModule", function() { return AddQuizModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addquiz_component__ = __webpack_require__("../../../../../src/app/pages/addquiz/addquiz.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__addquiz_routing__ = __webpack_require__("../../../../../src/app/pages/addquiz/addquiz.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mymodals_component__ = __webpack_require__("../../../../../src/app/pages/addquiz/mymodals.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AddQuizModule = (function () {
    function AddQuizModule() {
    }
    return AddQuizModule;
}());
AddQuizModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__addquiz_routing__["a" /* routing */],
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__addquiz_component__["a" /* AddQuizComponent */],
            __WEBPACK_IMPORTED_MODULE_5__mymodals_component__["a" /* MyModalsComponent */],
        ],
    })
], AddQuizModule);

//# sourceMappingURL=addquiz.module.js.map

/***/ }),

/***/ "../../../../../src/app/pages/addquiz/addquiz.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__addquiz_component__ = __webpack_require__("../../../../../src/app/pages/addquiz/addquiz.component.ts");


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__addquiz_component__["a" /* AddQuizComponent */],
    },
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forChild(routes);
//# sourceMappingURL=addquiz.routing.js.map

/***/ }),

/***/ "../../../../../src/app/pages/addquiz/mymodals.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n  <!--<nb-card>\n      <nb-card-header>Modals</nb-card-header>\n      <nb-card-body>\n        <button class=\"btn btn-success\" (click)=\"showLargeModal()\">Create Quiz</button>\n       <button class=\"btn btn-warning\" (click)=\"showSmallModal()\">Small modal</button>\n        <button class=\"btn btn-primary\" (click)=\"showStaticModal()\">Static modal</button>\n      </nb-card-body>\n    </nb-card> -->\n   <button class=\"btn btn-success\" (click)=\"showLargeModal()\">Create Quiz</button> \n    \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/addquiz/mymodals.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button {\n  margin: 0 0.75rem 2rem 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/addquiz/mymodals.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyModalsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mymodal__ = __webpack_require__("../../../../../src/app/pages/addquiz/mymodal.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyModalsComponent = (function () {
    function MyModalsComponent(modalService) {
        this.modalService = modalService;
    }
    MyModalsComponent.prototype.showLargeModal = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__mymodal__["a" /* MyModalComponent */], { size: 'lg', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Quiz Name';
    };
    MyModalsComponent.prototype.showSmallModal = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__mymodal__["a" /* MyModalComponent */], { size: 'sm', container: 'nb-layout' });
        activeModal.componentInstance.modalHeader = 'Small Modal';
    };
    MyModalsComponent.prototype.showStaticModal = function () {
        var activeModal = this.modalService.open(__WEBPACK_IMPORTED_MODULE_2__mymodal__["a" /* MyModalComponent */], {
            size: 'sm',
            backdrop: 'static',
            container: 'nb-layout',
        });
        activeModal.componentInstance.modalHeader = 'Static modal';
        activeModal.componentInstance.modalContent = "This is static modal, backdrop click\n                                                    will not close it. Click \u00D7 or confirmation button to close modal.";
    };
    return MyModalsComponent;
}());
MyModalsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ngx-mymodals',
        styles: [__webpack_require__("../../../../../src/app/pages/addquiz/mymodals.component.scss")],
        template: __webpack_require__("../../../../../src/app/pages/addquiz/mymodals.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbModal */]) === "function" && _a || Object])
], MyModalsComponent);

var _a;
//# sourceMappingURL=mymodals.component.js.map

/***/ })

});
//# sourceMappingURL=addquiz.module.chunk.js.map