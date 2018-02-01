webpackJsonp([0],{

/***/ 119:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 119;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		162
	],
	"../pages/list/list.module": [
		163
	],
	"../pages/login/login.module": [
		164
	],
	"../pages/profile/profile.module": [
		165
	],
	"../pages/report/print/print.module": [
		168
	],
	"../pages/report/report.module": [
		169
	],
	"../pages/scanner/scanner.module": [
		172
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_0__home__["a" /* HomePage */]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__list__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ListPageModule = (function () {
    function ListPageModule() {
    }
    ListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__list__["a" /* ListPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__list__["a" /* ListPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_0__list__["a" /* ListPage */]]
        })
    ], ListPageModule);
    return ListPageModule;
}());

//# sourceMappingURL=list.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__login__["a" /* LoginPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__login__["a" /* LoginPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_0__login__["a" /* LoginPage */]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__profile__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__profile__["a" /* ProfilePage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__profile__["a" /* ProfilePage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_0__profile__["a" /* ProfilePage */]]
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintPageModule", function() { return PrintPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__print__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PrintPageModule = (function () {
    function PrintPageModule() {
    }
    PrintPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__print__["a" /* PrintPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__print__["a" /* PrintPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_0__print__["a" /* PrintPage */]]
        })
    ], PrintPageModule);
    return PrintPageModule;
}());

//# sourceMappingURL=print.module.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__report__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__print_print_module__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ReportPageModule = (function () {
    function ReportPageModule() {
    }
    ReportPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__report__["a" /* ReportPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__print_print_module__["PrintPageModule"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__report__["a" /* ReportPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_0__report__["a" /* ReportPage */]]
        })
    ], ReportPageModule);
    return ReportPageModule;
}());

//# sourceMappingURL=report.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { RequestOptions } from '@angular/http/src/base_request_options';
var ReportServiceProvider = (function () {
    function ReportServiceProvider(storage, http) {
        this.storage = storage;
        this.http = http;
        this.data = [];
    }
    ReportServiceProvider.prototype.getToken = function () {
        return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["c" /* TOKEN */]);
    };
    ReportServiceProvider.prototype.getCurrentUser = function () {
        return this.storage.get(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* CURRENT_USER */]);
    };
    ReportServiceProvider.prototype.getData = function (id, disciplinas) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var uri = __WEBPACK_IMPORTED_MODULE_3__utils_constants__["e" /* URI_BASE */];
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
            var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
            _this.http.get(uri + "/presenca?usuario=" + id + "&disciplina=" + disciplinas[0], options)
                .subscribe(function (res) {
                _this.data.push(res.json());
                _this.http.get(uri + "/presenca?usuario=" + id + "&disciplina=" + disciplinas[1], options)
                    .subscribe(function (res) {
                    _this.data.push(res.json());
                    _this.http.get(uri + "/presenca?usuario=" + id + "&disciplina=" + disciplinas[2], options)
                        .subscribe(function (res) {
                        _this.data.push(res.json());
                        resolve([{
                                title: 'Angular',
                                detail: 'Presenças: 0',
                                logo: 'logo-angular',
                                icon: 'ios-add-circle-outline',
                                showDetail: false
                            },
                            {
                                title: 'Ionic',
                                detail: 'Presenças: 0',
                                logo: 'ios-ionic-outline',
                                icon: 'ios-add-circle-outline',
                                showDetail: false
                            },
                            {
                                title: 'Rest',
                                detail: 'Presenças: 0',
                                logo: 'logo-chrome',
                                icon: 'ios-add-circle-outline',
                                showDetail: false
                            }]);
                    });
                });
            });
        });
    };
    ReportServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ReportServiceProvider);
    return ReportServiceProvider;
}());

//# sourceMappingURL=report.service.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerPageModule", function() { return ScannerPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scanner__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScannerPageModule = (function () {
    function ScannerPageModule() {
    }
    ScannerPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_0__scanner__["a" /* ScannerPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_0__scanner__["a" /* ScannerPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_0__scanner__["a" /* ScannerPage */]]
        })
    ], ScannerPageModule);
    return ScannerPageModule;
}());

//# sourceMappingURL=scanner.module.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(237);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_imports__ = __webpack_require__(304);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__app_imports__["a" /* MODULES */],
                __WEBPACK_IMPORTED_MODULE_3__app_imports__["b" /* NATIVEMODULES */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list/list.module#ListPageModule', name: 'ListPage', segment: 'list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/print/print.module#PrintPageModule', name: 'PrintPage', segment: 'print', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/report/report.module#ReportPageModule', name: 'ReportPage', segment: 'report', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/scanner/scanner.module#ScannerPageModule', name: 'ScannerPage', segment: 'scanner', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__app_imports__["c" /* NATIVEPROVIDERS */],
                __WEBPACK_IMPORTED_MODULE_3__app_imports__["d" /* PROVIDERS */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utils_alert_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(82);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, alertService, authService) {
        this.navCtrl = navCtrl;
        this.alertService = alertService;
        this.authService = authService;
        this.authService.isAutorized();
        if (!this.authService.isAutorized()) {
            this.navCtrl.setRoot('LoginPage');
        }
    }
    HomePage.prototype.goToProfilePage = function () {
        // this.alertService.showAlert('Mudanca de pagina', 'ProfilePage');
        this.navCtrl.push('ProfilePage');
    };
    HomePage.prototype.goToReportPage = function () {
        //  this.alertService.showAlert('Mudanca de pagina', 'ReportPage');
        this.navCtrl.push('ReportPage');
    };
    HomePage.prototype.goToScannerPage = function () {
        //  this.alertService.showAlert('Mudanca de pagina', 'ScannerPage');
        this.navCtrl.push('ScannerPage');
    };
    HomePage.prototype.showError = function () {
        this.alertService.showError('Erro do click do botão');
    };
    HomePage.prototype.showErrorCallBack = function () {
        var _this = this;
        var promise = this.alertService.showAlertWithCallback('test', 'teste');
        promise.then(function (res) {
            if (res) {
                _this.alertService.showAlert('Promessa', 'titulo', 'apertou o yes');
            }
            else {
                _this.alertService.showAlert('Promessa', 'titulo', 'apertou o cancel');
            }
        }).catch(function (reason) {
            console.log('aaaa');
        });
        console.log('showErrorCallBack');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\eduardo\curso-ferias\myApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  \n\n  <ion-list>\n\n    <ion-row (click)="goToProfilePage()">\n\n      <ion-item>\n\n        <ion-label><ion-icon name="person"></ion-icon>&nbsp;Perfil</ion-label>\n\n      </ion-item>\n\n    </ion-row>\n\n    \n\n    <ion-row (click)="goToScannerPage()" class="botao">\n\n      <ion-item>\n\n        <ion-label><ion-icon name="qr-scanner"></ion-icon>&nbsp;Scanner</ion-label>\n\n      </ion-item>\n\n    </ion-row>\n\n    \n\n    <ion-row (click)="goToReportPage()">\n\n      <ion-item>\n\n        <ion-label><ion-icon name="document"></ion-icon>&nbsp;Relatório</ion-label>\n\n      </ion-item>\n\n    </ion-row>\n\n    \n\n    <button ion-button color="danger" (click)="showError()">showError</button>\n\n    <button ion-button color="danger" (click)="showErrorCallBack()">showErrorCallBack</button>\n\n    \n\n  </ion-list>\n\n  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\eduardo\curso-ferias\myApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_utils_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\eduardo\curso-ferias\myApp\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\eduardo\curso-ferias\myApp\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_alert_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = (function () {
    function LoginPage(navCtrl, authService, alertService, userService) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.alertService = alertService;
        this.userService = userService;
        this.loginForm = { login: "", senha: "" };
        if (this.authService.isAutorized()) {
            this.navCtrl.setRoot('HomePage');
        }
    }
    LoginPage.prototype.ngOnInit = function () {
        // this.userService.getCurrentUser().then( res => {
        //    this.currentUser = res;
        //    if (res)
        //       this.navCtrl.setRoot('HomePage');
        // });
    };
    LoginPage.prototype.login = function (loginForm) {
        var _this = this;
        var ob = this.authService.login(loginForm);
        ob.subscribe(function (res) {
            if (res) {
                _this.authService.saveAccessData(res);
                _this.navCtrl.setRoot('HomePage');
            }
            else {
                _this.alertService.showError('Erro ao tentar se autenticar');
            }
        }, function (error) {
            _this.alertService.showError('Erro fatal');
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"D:\eduardo\curso-ferias\myApp\src\pages\login\login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  \n\n  <ion-row>\n\n    <ion-item no-lines>\n\n      <ion-label>Login</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="login" [(ngModel)]="loginForm.login" ></ion-input>\n\n    </ion-item>\n\n  </ion-row>\n\n  <ion-row>\n\n    <ion-item no-lines>\n\n      <ion-label>Senha</ion-label>\n\n    </ion-item>\n\n    <ion-item>\n\n      <ion-input type="text" placeholder="senha" [(ngModel)]="loginForm.senha" ></ion-input>\n\n    </ion-item>\n\n  </ion-row>\n\n\n\n  <button ion-button color="default" (click)="login(loginForm)">login</button>\n\n  \n\n  \n\n</ion-content>'/*ion-inline-end:"D:\eduardo\curso-ferias\myApp\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_user_service_user_service__["a" /* UserServiceProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_model__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utils_toast_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProfilePage = (function () {
    function ProfilePage(navCtrl, toastService, camera, storage) {
        this.navCtrl = navCtrl;
        this.toastService = toastService;
        this.camera = camera;
        this.storage = storage;
        this.properties = new __WEBPACK_IMPORTED_MODULE_4__profile_model__["a" /* Profile */]();
        this.options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        };
    }
    ProfilePage.prototype.ngOnInit = function () {
        this.imgUrlDefaul = 'assets/imgs/male-profile-picture.png';
    };
    ProfilePage.prototype.changeView = function () {
        var _this = this;
        this.camera.getPicture(this.options).then(function (pictureUrl) {
            _this.updateImage(pictureUrl);
        }).catch(function (reason) {
            _this.toastService.create('Erro ao iniciar a camera do dispositivo.');
        });
        //this.showToast();
    };
    ProfilePage.prototype.updateImage = function (value) {
        this.imgUrl = "data:image/jpeg;base64," + value;
        localStorage.setItem('imgUrl', this.imgUrl);
        this.storage.set('imgUrl', this.imgUrl);
    };
    ProfilePage.prototype.showToast = function () {
        this.toastService.create('O usuário clicou na foto do perfil. Carregar imagem(suporte do cordova necessário)');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\eduardo\curso-ferias\myApp\src\pages\profile\profile.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Perfil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  \n\n  <ion-row>\n\n    \n\n    <ion-col col-4>\n\n      <ion-item no-lines>\n\n        <ion-img [src]="imgUrl ? imgUrl : imgUrlDefaul" (click)="changeView()"></ion-img>\n\n      </ion-item>\n\n    </ion-col>\n\n    \n\n    <ion-col col-8>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Nome"></ion-input>\n\n      </ion-item>\n\n    </ion-col>\n\n    \n\n  </ion-row>\n\n  \n\n  <ion-list padding >\n\n    \n\n    <ion-row padding>\n\n      <ion-icon name="happy"></ion-icon>\n\n      <ion-item>\n\n        <ion-input type="text" placeholder="Digite seu status"></ion-input>\n\n      </ion-item>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-icon name="call"></ion-icon>\n\n      <ion-item>\n\n        <ion-input type="tel" placeholder="Telefone"></ion-input>\n\n      </ion-item>\n\n    </ion-row>\n\n    <ion-row padding>\n\n      <ion-icon name="mail"></ion-icon>\n\n      <ion-item>\n\n        <ion-input type="email" placeholder="Email"></ion-input>\n\n      </ion-item>\n\n    </ion-row>\n\n    \n\n  </ion-list>\n\n  \n\n</ion-content>'/*ion-inline-end:"D:\eduardo\curso-ferias\myApp\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_utils_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Profile; });
var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());

//# sourceMappingURL=profile.model.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PrintPage = (function () {
    function PrintPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        if (navParams.get('reporParams')) {
        }
    }
    PrintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-print',template:/*ion-inline-start:"D:\eduardo\curso-ferias\myApp\src\pages\report\print\print.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Print</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n  \n\n\n\n</ion-content>'/*ion-inline-end:"D:\eduardo\curso-ferias\myApp\src\pages\report\print\print.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], PrintPage);
    return PrintPage;
}());

//# sourceMappingURL=print.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_alert_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_report_service_report_service__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportPage = (function () {
    function ReportPage(navCtrl, userService, alertService, reportService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.alertService = alertService;
        this.reportService = reportService;
        this.itens = [];
    }
    ReportPage.prototype.ngOnInit = function () {
        var _this = this;
        var user = this.userService.getCurrentUser().then(function (res) {
            console.log(res);
            _this.reportService.getData(res.id, [1, 2, 3]).then(function (itens) {
                console.log(itens);
                _this.itens = itens;
            }).catch(function (reason) { return _this.alertService.showError('Erro ' + reason); });
        });
    };
    ReportPage.prototype.showDetail = function (item) {
        item.showDetail = !item.showDetail;
        if (item.showDetail) {
            item.icon = 'ios-remove-circle-outline';
        }
        else {
            item.icon = 'ios-add-circle-outline';
        }
    };
    ReportPage.prototype.print = function () {
        this.navCtrl.push('PrintPage');
    };
    ReportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-report',template:/*ion-inline-start:"D:\eduardo\curso-ferias\myApp\src\pages\report\report.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Relatório</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  \n\n  <ion-card *ngFor="let item of itens">\n\n    <ion-card-header (click)="showDetail(item)">\n\n      <ion-item padding>\n\n        <ion-icon [name]="item.logo" item-start></ion-icon>\n\n        <ion-label>{{item.title}}</ion-label>\n\n        <ion-icon [name]="item.icon" item-end></ion-icon>\n\n      </ion-item>\n\n    </ion-card-header>\n\n    <ion-card-content [innerHtml]=item.detail *ngIf="item.showDetail">\n\n    </ion-card-content>\n\n  </ion-card>\n\n  \n\n  <button ion-button color="default" (click)="print()">Imprimir</button>\n\n  \n\n</ion-content>'/*ion-inline-end:"D:\eduardo\curso-ferias\myApp\src\pages\report\report.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_user_service_user_service__["a" /* UserServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_report_service_report_service__["a" /* ReportServiceProvider */]])
    ], ReportPage);
    return ReportPage;
}());

//# sourceMappingURL=report.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScannerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utils_toast_service__ = __webpack_require__(86);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ScannerPage = (function () {
    function ScannerPage(navCtrl, barcodeScanner, toastService) {
        this.navCtrl = navCtrl;
        this.barcodeScanner = barcodeScanner;
        this.toastService = toastService;
    }
    ScannerPage.prototype.scan = function () {
        var _this = this;
        var options = {
            /**
            * Show flip camera button. Supported on iOS and Android.
            */
            showFlipCameraButton: true,
            /**
            * Disable animations. Supported on iOS only.
            */
            disableAnimations: true,
            /**
            * Disable success beep. Supported on iOS only.
            */
            disableSuccessBeep: true,
            /**
            * Prompt text. Supported on Android only.
            */
            prompt: 'Scanner presença',
            /**
            * Formats separated by commas. Defaults to all formats except `PDF_417` and `RSS_EXPANDED`.
            */
            formats: 'QR_CODE,PDF417',
            /**
            * Orientation. Supported on Android only. Can be set to `portrait` or `landscape`. Defaults to none so the user can rotate the phone and pick an orientation.
            */
            orientation: 'portrait',
        };
        this.barcodeScanner.scan(options).then(function (result) {
            _this.toastService.create(JSON.stringify(result));
        }).catch(function (reason) {
            console.log(reason);
        });
    };
    ScannerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-scanner',template:/*ion-inline-start:"D:\eduardo\curso-ferias\myApp\src\pages\scanner\scanner.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Scanner</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  \n\n  <button ion-button (click)="scan()">Scan</button>\n\n  \n\n</ion-content>'/*ion-inline-end:"D:\eduardo\curso-ferias\myApp\src\pages\scanner\scanner.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            __WEBPACK_IMPORTED_MODULE_3__providers_utils_toast_service__["a" /* ToastServiceProvider */]])
    ], ScannerPage);
    return ScannerPage;
}());

//# sourceMappingURL=scanner.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = 'LoginPage';
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: 'HomePage' },
            { title: 'List', component: 'ListPage' },
            { title: 'Perfil', component: 'ProfilePage' },
            { title: 'Relatório', component: 'ReportPage' },
            { title: 'Scanner', component: 'ScannerPage' },
            { title: 'Login', component: 'LoginPage' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\eduardo\curso-ferias\myApp\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"D:\eduardo\curso-ferias\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NATIVEMODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PROVIDERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NATIVEPROVIDERS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login_module__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home_module__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_list_list_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_report_report_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_scanner_scanner_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_http__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_utils_alert_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_utils_toast_service__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_auth_service__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_user_service_user_service__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_report_service_report_service__ = __webpack_require__(170);
//MODULES






//NATIVEMODULES


//NATIVEPROVIDERS






//PROVIDERS





var MODULES = [
    __WEBPACK_IMPORTED_MODULE_0__pages_login_login_module__["LoginPageModule"],
    __WEBPACK_IMPORTED_MODULE_1__pages_home_home_module__["HomePageModule"],
    __WEBPACK_IMPORTED_MODULE_2__pages_list_list_module__["ListPageModule"],
    __WEBPACK_IMPORTED_MODULE_4__pages_profile_profile_module__["ProfilePageModule"],
    __WEBPACK_IMPORTED_MODULE_3__pages_report_report_module__["ReportPageModule"],
    __WEBPACK_IMPORTED_MODULE_5__pages_scanner_scanner_module__["ScannerPageModule"]
];
var NATIVEMODULES = [
    __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
    __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
    __WEBPACK_IMPORTED_MODULE_13__angular_http__["c" /* HttpModule */],
    __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["a" /* IonicStorageModule */].forRoot()
];
var PROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_15__providers_utils_toast_service__["a" /* ToastServiceProvider */],
    __WEBPACK_IMPORTED_MODULE_14__providers_utils_alert_service__["a" /* AlertServiceProvider */],
    __WEBPACK_IMPORTED_MODULE_16__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
    __WEBPACK_IMPORTED_MODULE_17__providers_user_service_user_service__["a" /* UserServiceProvider */],
    __WEBPACK_IMPORTED_MODULE_18__providers_report_service_report_service__["a" /* ReportServiceProvider */]
];
var NATIVEPROVIDERS = [
    __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
    __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
    __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
    __WEBPACK_IMPORTED_MODULE_11__ionic_native_barcode_scanner__["a" /* BarcodeScanner */]
];
//# sourceMappingURL=app.imports.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertServiceProvider = (function () {
    function AlertServiceProvider(alertController) {
        this.alertController = alertController;
    }
    AlertServiceProvider.prototype.showAlert = function (title, subTitle, message, buttons) {
        if (title === void 0) { title = 'title'; }
        if (subTitle === void 0) { subTitle = 'subTitle'; }
        if (message === void 0) { message = 'message'; }
        if (buttons === void 0) { buttons = ['close']; }
        var alert = this.alertController.create({
            title: title,
            subTitle: subTitle,
            buttons: buttons,
            message: message,
        });
        alert.present();
    };
    AlertServiceProvider.prototype.showError = function (errorMessage) {
        if (errorMessage === void 0) { errorMessage = 'Erro desconhecido'; }
        this.showAlert('Erro', 'Ocorreu um erro', errorMessage);
    };
    AlertServiceProvider.prototype.showAlertWithCallback = function (title, message) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var confirm = _this.alertController.create({
                title: title,
                message: message,
                buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        handler: function () {
                            confirm.dismiss().then(function (res) {
                                resolve(false);
                            });
                            return false;
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            confirm.dismiss().then(function (res) {
                                resolve(true);
                            });
                            return false;
                        }
                    }]
            });
            confirm.present();
        });
        return promise;
    };
    AlertServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlertServiceProvider);
    return AlertServiceProvider;
}());

//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserServiceProvider = (function () {
    function UserServiceProvider(storage) {
        this.storage = storage;
    }
    UserServiceProvider.prototype.setToken = function (token) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2__utils_constants__["c" /* TOKEN */], token);
    };
    UserServiceProvider.prototype.getToken = function () {
        return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2__utils_constants__["c" /* TOKEN */]);
    };
    UserServiceProvider.prototype.getCurrentUser = function () {
        return this.storage.get(__WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* CURRENT_USER */]);
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_constants__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service_user_service__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, storage, userService) {
        this.http = http;
        this.storage = storage;
        this.userService = userService;
    }
    AuthServiceProvider.prototype.buildToken = function (credentials) {
        var token = btoa(credentials.login + ":" + credentials.senha);
        return token;
    };
    AuthServiceProvider.prototype.login = function (credentials) {
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpParams */]()
            .set('username', 'usuario')
            .append('password', 'password')
            .append('grant_type', 'password');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["e" /* URI_BASE */] + "/oauth/token", params.toString(), httpOptions);
    };
    AuthServiceProvider.prototype.isAutorized = function () {
        var returnValue = localStorage.getItem(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["b" /* IS_AUTORIZED */]) === __WEBPACK_IMPORTED_MODULE_3__utils_constants__["d" /* TRUE */];
        console.log(returnValue);
        return returnValue;
    };
    AuthServiceProvider.prototype.saveAccessData = function (res) {
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["b" /* IS_AUTORIZED */], __WEBPACK_IMPORTED_MODULE_3__utils_constants__["d" /* TRUE */]);
        this.currentUser = res;
        this.storage.set(__WEBPACK_IMPORTED_MODULE_3__utils_constants__["a" /* CURRENT_USER */], res);
        this.userService.setToken('teste');
    };
    AuthServiceProvider.prototype.getHeader = function () {
        var credentials = this.currentUser;
        var token = this.buildToken(credentials);
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: "Basic " + token
            })
        };
        return httpOptions;
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__user_service_user_service__["a" /* UserServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service_user_service__["a" /* UserServiceProvider */]) === "function" && _c || Object])
    ], AuthServiceProvider);
    return AuthServiceProvider;
    var _a, _b, _c;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return URI_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return IS_AUTORIZED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return TRUE; });
var TOKEN = 'token';
var CURRENT_USER = 'currentUser';
var URI_BASE = 'https://curso-ferias-matera.herokuapp.com';
var IS_AUTORIZED = 'IS_AUTORIZED';
var TRUE = 'TRUE';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToastServiceProvider = (function () {
    function ToastServiceProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastServiceProvider.prototype.create = function (message, duration, showCloseButton) {
        if (duration === void 0) { duration = 3000; }
        if (showCloseButton === void 0) { showCloseButton = true; }
        if (this.toast) {
            this.toast.dismiss();
        }
        this.toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: 'middle',
            showCloseButton: showCloseButton
        });
        this.toast.present();
    };
    ToastServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], ToastServiceProvider);
    return ToastServiceProvider;
}());

//# sourceMappingURL=toast.service.js.map

/***/ })

},[215]);
//# sourceMappingURL=main.js.map