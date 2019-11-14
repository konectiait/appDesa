webpackJsonp([0],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__password_password__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_autentication_service_autentication_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_global__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, authService, toastController, userService, user) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastController = toastController;
        this.userService = userService;
        this.user = user;
    }
    SigninPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    SigninPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    SigninPage.prototype.password = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__password_password__["a" /* PasswordPage */]);
    };
    SigninPage.prototype.IngresarUsuario = function () {
        var _this = this;
        var token = "";
        console.log("El mail es: " + this.user.Mail);
        console.log("El pass es: " + this.user.password);
        this.authService.loginUser(this.user.Mail, this.user.password)
            .then(function (info) {
            console.log('Usuario conectado');
            _this.user.Token = info.user.uid;
            _this.getUserByToken();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], { tokenU: token });
        })
            .catch(function (error) {
            _this.presentToast('Usuario o clave incorrecto');
            console.log("Errorororor......");
        });
    };
    SigninPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    SigninPage.prototype.getUserByToken = function () {
        var _this = this;
        this.userService.getUserByToken(this.user.Token)
            .subscribe(function (data) {
            _this.presentToast('OK');
            console.log(data);
            console.log("Usuario Id: " + data);
        }, function (error) { console.log(error); });
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\signin\signin.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span class="start" (click)="register()">\n\n                <span  style="font-size: 2.5rem;">+ </span>\n\n                {{\'register\' | translate}}\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="banner">\n\n        <img src="assets/imgs/fondo1-1.jpg" class="background">\n\n        <div class="logo">\n\n            <!--<img src="assets/imgs/logo.png"> -->\n\n            <img src="assets/imgs/Logomundo-canje.png">\n\n            \n\n        </div>\n\n    </div>\n\n    <div class="form">        \n\n        <ion-list no-lines padding-left padding-right>\n\n            <ion-item>\n\n                <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n\n                <ion-input type="email" [(ngModel)]="user.Mail" value="samanthasmith@mail.com"></ion-input>\n\n            </ion-item>\n\n            <ion-item class="password">\n\n                <ion-label floating>{{\'password\' | translate}}</ion-label>\n\n                <ion-input type="password" [(ngModel)]="user.password" class="password" value="******"></ion-input>\n\n                <h5 class="text-theme" item-end (click)="password()">{{\'forgot\' | translate}}</h5>\n\n            </ion-item>\n\n            <button ion-button block class="btn" (click)="IngresarUsuario()" round>{{\'Enter\' | translate}}</button>\n\n            <!--\n\n            <p text-center class="text-white">{{\'or_continue_with\' | translate}}</p>\n\n            -->\n\n            <button ion-button block class="btn-xs" (click)="tabs()" round>{{\'enter_invited\' | translate}}</button>\n\n            \n\n            <div class="socile d-flex">\n\n                <button ion-button icon-start block outline class="btn text-blue" round>\n\n                    <ion-icon> <img src="assets/imgs/ic_facebook.png"></ion-icon>\n\n                    {{\'facebook\' | translate}}\n\n                </button>\n\n                <button ion-button icon-start block outline class="btn text-blue" round>\n\n                    <ion-icon class="google"> <img src="assets/imgs/ic_google.png"></ion-icon>\n\n                    {{\'google\' | translate}}\n\n                </button>\n\n            </div>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_autentication_service_autentication_service__["a" /* AutenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_7__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_global_global__["a" /* GlobalProvider */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categoryresult_categoryresult__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, modalCtrl, serviceCat) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.serviceCat = serviceCat;
        this.ObtenerCategorias();
    }
    CategoriesPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    CategoriesPage.prototype.category_result = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__categoryresult_categoryresult__["a" /* CategoryresultPage */]);
    };
    CategoriesPage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.serviceCat.GetCategorias()
            .subscribe(function (data) {
            _this.categoriasLst = data;
            console.log(data);
            console.log("La categorìa 1: " + _this.categoriasLst[0].Nombre);
        }, function (error) { console.log(error); });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\categories\categories.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'categories\' | translate}}\n\n            <!-- <span class="end">\n\n                <img src="assets/imgs/ic_search.png" (click)="search()">\n\n            </span>-->\n\n        </ion-title> \n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <ion-list no-lines>\n\n        <!-- <ion-item (click)="category_result()">\n\n            <img src="assets/imgs/ca1.png" class="bg">\n\n            <div text-center class="text">\n\n                <h2 class="text-white">{{\'food_restaurants\' | translate}}</h2>\n\n                <p class="text-gray">150 Canjes</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="category_result()">\n\n            <img src="assets/imgs/ca2.png" class="bg">\n\n            <div text-center class="text">\n\n                <h2 class="text-white"> {{\'Moda\' | translate}}</h2>\n\n                <p class="text-gray">198 Canjes</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="category_result()">\n\n            <img src="assets/imgs/ca4.png" class="bg">\n\n            <div text-center class="text">\n\n                <h2 class="text-white">{{\'dairy_bakery\' | translate}}</h2>\n\n                <p class="text-gray">110 Canjes</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="category_result()">\n\n            <img src="assets/imgs/ca3.png" class="bg">\n\n            <div text-center class="text">\n\n                <h2 class="text-white">{{\'fashion_store\' | translate}}</h2>\n\n                <p class="text-gray">209 Canjes</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="category_result()">\n\n            <img src="assets/imgs/ca5.png" class="bg">\n\n            <div text-center class="text">\n\n                <h2 class="text-white">{{\'salon_spa\' | translate}}</h2>\n\n                <p class="text-gray">111 Canjes</p>\n\n            </div>\n\n        </ion-item> -->\n\n\n\n        <ion-item *ngFor="let d of categoriasLst; let i = index" (click)="category_result()">\n\n            <img [src]="d.Imagen" class="bg">\n\n            <div text-center class="text">\n\n                <h2 class="text-white">{{d.Nombre | translate}}</h2>\n\n                <p class="text-gray">{{d.Id}} Canjes</p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\categories\categories.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_category_service_category_service__["a" /* CategoryServiceProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChattingPage = /** @class */ (function () {
    function ChattingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ChattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chatting',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\chatting\chatting.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span class="text-white">Las Medialunas del Abuelo<small>online</small></span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <div class="banner">\n\n        <img src="assets/imgs/background.png" class="bg">\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="send chat-box" padding>\n\n        <h6>¿Qué tal?, buenas tardes. Que bueno que podemos concretar el canje</h6>\n\n        <p>11:58</p>\n\n    </div>\n\n    <div class="received chat-box" padding>\n\n        <h6>Si, buenísimo !<br>¿Las dos docenas de facturas van a ser mixtas o todas Medialunas?</h6>\n\n        <p>11:59</p>\n\n    </div>\n\n    <div class="send chat-box" padding>\n\n        <h6>Quisiera que sean mixtas. ¿En qué horario puedo ir a realizar el intercambio?</h6>\n\n        <p>12:00</p>\n\n    </div>\n\n    <div class="received chat-box" padding>\n\n        <h6>Hasta las 19.00 hs. estoy en el negocio. Te espero</h6>\n\n        <p>12:10</p>\n\n    </div>\n\n    <div class="send chat-box" padding>\n\n        <h6>Perfecto, llegaré en 1 hora. Muchas gracias por todo</h6>\n\n        <p>12:12</p>\n\n    </div>\n\n    <div class="received chat-box" padding>\n\n        <h6>Muy bien, nos vemos!</h6>\n\n        <p>12:20</p>\n\n    </div>\n\n</ion-content>\n\n<ion-footer no-border>\n\n    <div class="fixed-bottom form">\n\n        <ion-list class="" no-lines>\n\n            <ion-item>\n\n                <ion-input type="text" placeholder="{{\'type_your_message\' | translate}}"></ion-input>\n\n                <div class="" item-end>\n\n                    <ion-icon name="attach" class="attach"></ion-icon>\n\n                    <ion-icon name="md-send" class=""></ion-icon>\n\n                </div>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\chatting\chatting.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ChattingPage);
    return ChattingPage;
}());

//# sourceMappingURL=chatting.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_match__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canjes_canjes__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReviewPage = /** @class */ (function () {
    function ReviewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ReviewPage.prototype.ViewMatch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__match_match__["a" /* MatchPage */]);
    };
    ReviewPage.prototype.ViewCanjes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__canjes_canjes__["a" /* CanjesPage */]);
    };
    ReviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-review',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\review\review.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>{{\'notifications\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n    <div class="banner">\n\n        <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n\n        <h4 class="d-flex text-white">\n\n            <ion-badge item-end>{{\'4.3\' | translate}}\n\n                <ion-icon name="md-star"></ion-icon>\n\n            </ion-badge>\n\n            10 Notificaciones nuevas\n\n        </h4>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <ion-list no-lines>\n\n        <ion-item (click)="ViewMatch()">\n\n            <div class="item_header d-flex">\n\n                <div class="profile d-flex">\n\n                    <div class="profile-img">\n\n                        <img src="assets/imgs/dp1.png">\n\n                    </div>\n\n                    <h2>\n\n                        Martina Valdez\n\n                        <span class="text-gray">2 Horas</span>\n\n                    </h2>\n\n                </div>\n\n                <div class="rating end">\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                </div>\n\n            </div>\n\n            <p class="text-black text">\n\n                Hola tengo una bicicleta playera es muy bueno estado para intercambiar por las clases de Guitarra. Precio estimado $2500\n\n            </p>\n\n        </ion-item>\n\n        <ion-item (click)="ViewCanjes()">\n\n            <div class="item_header d-flex">\n\n                <div class="profile d-flex">\n\n                    <div class="profile-img">\n\n                        <img src="assets/imgs/dp2.png">\n\n                    </div>\n\n                    <h2>\n\n                        Yo - Canje Ofrecido\n\n                        <span class="text-gray">5 Horas</span>\n\n                    </h2>\n\n                </div>\n\n                <div class="rating end">\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                </div>\n\n            </div>\n\n            <p class="text-black text">\n\n                Martin, ¿cómo estás? Me gustaría canjear tu par de zapatillas All Star por servicio de Aire Acondicionado. Precio estimado $2000\n\n            </p>\n\n        </ion-item>\n\n        <ion-item (click)="ViewMatch()">\n\n            <div class="item_header d-flex">\n\n                <div class="profile d-flex">\n\n                    <div class="profile-img">\n\n                        <img src="assets/imgs/dp3.png">\n\n                    </div>\n\n                    <h2>\n\n                        Julia Mendes\n\n                        <span class="text-gray">15/10/2019</span>\n\n                    </h2>\n\n                </div>\n\n                <div class="rating end">\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                </div>\n\n            </div>\n\n            <p class="text-black text">\n\n                Hola tengo una cámara de fotos Kodak para cambiar por las clases de Guitarra. Precio estimado $1900\n\n            </p>\n\n        </ion-item>\n\n\n\n        <ion-item (click)="ViewMatch()">\n\n            <div class="item_header d-flex">\n\n                <div class="profile d-flex">\n\n                    <div class="profile-img">\n\n                        <img src="assets/imgs/user4.jpg">\n\n                    </div>\n\n                    <h2>\n\n                        Silvia Paez\n\n                        <span class="text-gray">15/10/2019</span>\n\n                    </h2>\n\n                </div>\n\n                <div class="rating end">\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                </div>\n\n            </div>\n\n            <p class="text-black text">\n\n                Quisiera cambiar un microondas por tus Anteojos Rayban. Precio estimado $3500\n\n            </p>\n\n        </ion-item>\n\n        <ion-item (click)="ViewCanjes()">\n\n            <div class="item_header d-flex">\n\n                <div class="profile d-flex">\n\n                    <div class="profile-img">\n\n                        <img src="assets/imgs/dp2.png">\n\n                    </div>\n\n                    <h2>\n\n                        Yo - Canje Ofrecido\n\n                        <span class="text-gray">14/10/2019</span>\n\n                    </h2>\n\n                </div>\n\n                <div class="rating end">\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                </div>\n\n            </div>\n\n            <p class="text-black text">\n\n                Quisiera la parrillada para dos personas. Ofrezco servicio de reparación de aire Acondicionado. Precio $2000\n\n            </p>\n\n        </ion-item>\n\n        <ion-item (click)="ViewMatch()">\n\n            <div class="item_header d-flex">\n\n                <div class="profile d-flex">\n\n                    <div class="profile-img">\n\n                        <img src="assets/imgs/user3.jpg">\n\n                    </div>\n\n                    <h2>\n\n                        Pablo Mesenas\n\n                        <span class="text-gray">10/10/2019</span>\n\n                    </h2>\n\n                </div>\n\n                <div class="rating end">\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                </div>\n\n            </div>\n\n            <p class="text-black text">\n\n                Quisiera cambiar servicios de páginas web por tus Anteojos Rayban. Precio estimado $3000\n\n            </p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\review\review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ReviewPage);
    return ReviewPage;
}());

//# sourceMappingURL=review.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__newchatting_newchatting__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




//import { HomePage } from '../home/home';
var MatchPage = /** @class */ (function () {
    function MatchPage(navCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.gender = "female";
    }
    MatchPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    MatchPage.prototype.goToSlide = function () {
        this.slides.slideTo(2, 500);
    };
    MatchPage.prototype.AceptaMatch = function () {
        this.presentToast('La solicitud se aceptó');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__newchatting_newchatting__["a" /* NewchattingPage */]);
    };
    MatchPage.prototype.RechazaMatch = function () {
        //this.navCtrl.push(HomePage)
        this.presentToast('La solicitud fue rechazada');
        this.navCtrl.pop();
    };
    MatchPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
    ], MatchPage.prototype, "slides", void 0);
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\match\match.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <!--<ion-title>{{\'match\' | translate}}<span class="end text-theme" (click)="tabs() ">{{\'save\' | translate}}</span></ion-title>-->\n\n      <ion-title>{{\'match\' | translate}}</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-color">\n\n  <div class="form" padding-left padding-right>\n\n      <ion-list no-lines>          \n\n          <ion-slides pager="true" autoplay="3000" loop="true">\n\n              <ion-slide>\n\n                  <div class="store_img">\n\n                      <img src="assets/imgs/16.jpg">  \n\n                      <ion-badge item-end>$1.500</ion-badge>            \n\n                  </div>\n\n              </ion-slide>\n\n              <ion-slide>\n\n                  <div class="store_img">\n\n                      <img src="assets/imgs/cachafaz2.jpg">  \n\n                      <ion-badge item-end>$1.500</ion-badge>            \n\n                  </div>\n\n              </ion-slide>\n\n              <ion-slide>\n\n                  <div class="store_img">\n\n                      <img src="assets/imgs/cachafaz3.jpg">  \n\n                      <ion-badge item-end>$1.500</ion-badge>            \n\n                  </div>\n\n              </ion-slide>\n\n            </ion-slides>\n\n          <ion-item>\n\n              <ion-label floating>{{\'event_title\' | translate}}</ion-label>\n\n              <ion-textarea type="text" value="24 Alfajores Cachafaz sabor dulce de leche"></ion-textarea>\n\n          </ion-item>  \n\n      </ion-list>\n\n  </div>\n\n</ion-content>\n\n<ion-footer no-border class="d-flex">\n\n    <ion-icon class="material-icons text-white colorRed start" (click)="RechazaMatch()">thumb_down_alt</ion-icon>\n\n    <ion-icon class="material-icons text-white colorGreen end" (click)="AceptaMatch()">thumb_up_alt</ion-icon>\n\n  </ion-footer>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\match\match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCanjePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_product_global_product__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tabs_tabs__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var NewCanjePage = /** @class */ (function () {
    function NewCanjePage(navCtrl, toastController, productService, product) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.productService = productService;
        this.product = product;
        this.gender = "female";
    }
    NewCanjePage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__tabs_tabs__["a" /* TabsPage */]);
    };
    NewCanjePage.prototype.postCanje = function () {
        var _this = this;
        this.product.Id = '0';
        this.product.IdTipo = '1';
        this.product.IdUsuario = '3';
        this.product.IdEstado = '1';
        this.product.IdCategoria = '1';
        this.productService.postProduct(this.product)
            .subscribe(function (data) {
            _this.presentToast('OK');
            console.log(data);
            console.log("Usuario Id: " + data);
        }, function (error) { console.log("ERROR en Save to DB: " + error); });
    };
    NewCanjePage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    NewCanjePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-canje',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\new-canje\new-canje.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-title>{{\'new_canje\' | translate}}<span class="end text-theme" (click)="postCanje() ">{{\'save\' | translate}}</span></ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-color">\n\n  <div class="form" padding-left padding-right>\n\n      <ion-list no-lines padding-left padding-right>\n\n          <div class="store_img">\n\n              <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n\n          </div>\n\n          <ion-item>\n\n              <ion-label floating>{{\'event_title\' | translate}}</ion-label>\n\n              <ion-textarea type="text" value="" [(ngModel)]="product.Nombre"></ion-textarea>\n\n          </ion-item>           \n\n          <ion-item>\n\n                <ion-label floating>{{\'event_title\' | translate}}</ion-label>\n\n                <ion-textarea type="text" value="" [(ngModel)]="product.Descripcion"></ion-textarea>\n\n            </ion-item>            \n\n          <!--<ion-item>\n\n              <ion-label floating>{{\'address2\' | translate}}</ion-label>\n\n              <ion-input type="text" value=""></ion-input>\n\n          </ion-item>-->\n\n          <ion-item>\n\n              <ion-label floating>{{\'categories\' | translate}}</ion-label>\n\n              <ion-input type="text" value="Música"></ion-input>\n\n          </ion-item>\n\n          <ion-row>\n\n              <ion-col col-6>\n\n                  <ion-item>\n\n                      <ion-label item-start>{{\'settings\' | translate}}</ion-label>\n\n                      <div class="input_box d-flex" item-end>\n\n                          <ion-icon class="material-icons text-black">settings</ion-icon>\n\n                          <ion-input type="text" value="Manual"></ion-input>\n\n                      </div>\n\n                  </ion-item>\n\n              </ion-col>\n\n              <ion-col col-6>\n\n                  <ion-item>\n\n                      <ion-label item-start>{{\'price\' | translate}}</ion-label>\n\n                      <div class="input_box d-flex" item-end>\n\n                          <ion-icon class="text-black" name="cash"></ion-icon>\n\n                          <ion-input type="text" value="0" [(ngModel)]="product.Importe"></ion-input>\n\n                      </div>\n\n                  </ion-item>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\new-canje\new-canje.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_product_service_product_service__["a" /* ProductServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_product_global_product__["a" /* GlobalProductProvider */]])
    ], NewCanjePage);
    return NewCanjePage;
}());

//# sourceMappingURL=new-canje.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProductProvider = /** @class */ (function () {
    function GlobalProductProvider() {
    }
    GlobalProductProvider.prototype.getProduct = function () {
        return this.product;
    };
    GlobalProductProvider.prototype.setProduct = function (product) {
        this.product = product;
    };
    GlobalProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalProductProvider);
    return GlobalProductProvider;
}());

//# sourceMappingURL=global-product.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chatting_chatting__ = __webpack_require__(120);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ChatsPage = /** @class */ (function () {
    function ChatsPage(navCtrl, modalCtrl, serviceChat) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.serviceChat = serviceChat;
        this.getChats();
    }
    ChatsPage.prototype.chatting = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__chatting_chatting__["a" /* ChattingPage */]);
    };
    ChatsPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    ChatsPage.prototype.getChats = function () {
        var _this = this;
        this.serviceChat.getChats()
            .subscribe(function (data) {
            _this.chatLst = data;
        }, function (error) { console.log(error); });
    };
    ChatsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chats',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\chats\chats.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'chats_history\' | translate}}<span class="end">\n\n                <img src="assets/imgs/ic_search-4.png" (click)="search()">\n\n            </span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <ion-list no-lines *ngFor="let d of chatLst; let i = index">\n\n        <ion-item class="active" (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/background.png">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">Las Medialunas del Abuelo<span class="end">{{d.Fecha_Ultimo_Mensaje}}</span></h2>\n\n                <p class="text-white d-flex">{{d.Ultimo_Mensaje}}<span class="end notifications">1</span></p>\n\n            </div>\n\n        </ion-item>\n\n        <!--<ion-item (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/chat_2.jpg">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">María Sanchez<span class="end">12:30</span></h2>\n\n                <p class=" d-flex">Estamos en contacto.<span class="end"></span></p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/chat_3.jpg">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">Paula Paz<span class="end">10:23</span></h2>\n\n                <p class=" d-flex">Esta semana estoy hasta las 14.00 hs.<span class="end"></span></p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/chat_4.jpg">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">La Continental<span class="end"> 10:30</span></h2>\n\n                <p class="d-flex">El canje se realizó con éxito.<span class="end"></span></p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/chat_5.jpg">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">Peluquería Leo Paparella<span class="end">12:30</span></h2>\n\n                <p class=" d-flex">Te esperamos de 14 a 21 hs.<span class="end"></span></p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item (click)="chatting()">\n\n            <div class="img-box">\n\n                <img src="assets/imgs/chat_6.jpg">\n\n            </div>\n\n            <div class="details">\n\n                <h2 class="text-white d-flex">Dietética La Colmena<span class="end">Ayer</span></h2>\n\n                <p class=" d-flex">Muchas gracias, me quedó perfecto.<span class="end"></span></p>\n\n            </div>\n\n        </ion-item>-->\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\chats\chats.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]])
    ], ChatsPage);
    return ChatsPage;
}());

//# sourceMappingURL=chats.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_profile__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__review_review__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__condition_condition__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__help_help__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AccountPage.prototype.profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__profile_profile__["a" /* ProfilePage */]);
    };
    AccountPage.prototype.review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__review_review__["a" /* ReviewPage */]);
    };
    AccountPage.prototype.condition = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__condition_condition__["a" /* ConditionPage */]);
    };
    AccountPage.prototype.help = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__help_help__["a" /* HelpPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\account\account.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>{{\'account\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n    <div class="banner">\n\n        <img src="assets/imgs/Fondo2_1080.jpg" class="bg">\n\n        <div class="profile d-flex" (click)="profile()">\n\n            <div class="profile-img">\n\n                <img src="assets/imgs/dp2.png">\n\n            </div>\n\n            <h2>\n\n                Sergio Castiglia\n\n                <span class="text-gray">{{\'view_profile\' | translate}}</span>\n\n            </h2>\n\n        </div>\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <ion-list no-lines>\n\n        <ion-item (click)="review()">\n\n            <img src="assets/imgs/ic_notification-1.png" item-start>\n\n            <h2 class="text-blue">{{\'notifications\' | translate}}</h2>\n\n            <p class="text-gray">{{\'view_all_notifications\' | translate}}</p>\n\n            <ion-badge item-end>\n\n                10\n\n                <ion-icon name="md-notifications"></ion-icon>\n\n            </ion-badge>\n\n        </ion-item>\n\n        <ion-item>\n\n            <img src="assets/imgs/ic_share-1.png" item-start>\n\n            <h2 class="text-blue">{{\'share_app\' | translate}}</h2>\n\n            <p class="text-gray">{{\'invite_frindes_family\' | translate}}</p>\n\n        </ion-item>\n\n        <ion-item (click)="help()">\n\n            <img src="assets/imgs/ic_help-1.png" item-start>\n\n            <h2 class="text-blue">{{\'need_help\' | translate}}</h2>\n\n            <p class="text-gray">{{\'faq\' | translate}}</p>\n\n        </ion-item>\n\n        <ion-item>\n\n            <img src="assets/imgs/ic_thumbs-up-hand-1.png" item-start>\n\n            <h2 class="text-blue">{{\'rate_app\' | translate}}</h2>\n\n            <p class="text-gray">{{\'rate_us\' | translate}}</p>\n\n        </ion-item>\n\n        <ion-item (click)="condition()">\n\n            <img src="assets/imgs/ic-term-condition-1.png" item-start>\n\n            <h2 class="text-blue">{{\'terms_conditions\' | translate}}</h2>\n\n            <p class="text-gray">{{\'our_terms_conditions\' | translate}}</p>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CategoryServiceProvider = /** @class */ (function () {
    function CategoryServiceProvider(http) {
        this.http = http;
        this.apiUrl = 'http://mundocanje.tk/api/';
        //console.log('Hello CategoryServiceProvider Provider');
    }
    CategoryServiceProvider.prototype.GetCategorias = function () {
        return this.http.get(this.apiUrl + 'categorias/');
    };
    CategoryServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], CategoryServiceProvider);
    return CategoryServiceProvider;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutenticationServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AutenticationServiceProvider = /** @class */ (function () {
    function AutenticationServiceProvider(http) {
        this.http = http;
        console.log('Hello AutenticationServiceProvider Provider');
    }
    AutenticationServiceProvider.prototype.registerUser = function (usuario, clave) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().createUserWithEmailAndPassword(usuario, clave)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AutenticationServiceProvider.prototype.loginUser = function (usuario, clave) {
        return new Promise(function (resolve, reject) {
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().signInWithEmailAndPassword(usuario, clave)
                .then(function (res) { return resolve(res); }, function (err) { return reject(err); });
        });
    };
    AutenticationServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], AutenticationServiceProvider);
    return AutenticationServiceProvider;
}());

//# sourceMappingURL=autentication-service.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_global__ = __webpack_require__(68);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UserServiceProvider = /** @class */ (function () {
    function UserServiceProvider(http, user) {
        this.http = http;
        this.user = user;
        this.apiUrl = 'http://localhost:51199/api/';
    }
    UserServiceProvider.prototype.postUser = function (user) {
        user.Id = "0";
        console.log(user);
        return this.http.post(this.apiUrl + 'Usuarios/', user);
    };
    UserServiceProvider.prototype.getUserByToken = function (token) {
        return this.http.get(this.apiUrl + 'Usuarios/GetUsuarioByToken?Token=' + token);
    };
    UserServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__providers_global_global__["a" /* GlobalProvider */]])
    ], UserServiceProvider);
    return UserServiceProvider;
}());

//# sourceMappingURL=user-service.js.map

/***/ }),

/***/ 141:
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
webpackEmptyAsyncContext.id = 141;

/***/ }),

/***/ 184:
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
webpackEmptyAsyncContext.id = 184;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewchattingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewchattingPage = /** @class */ (function () {
    function NewchattingPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    NewchattingPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewchattingPage');
    };
    NewchattingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-newchatting',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\newchatting\newchatting.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <span class="text-white">Luciano Fernandez<small>online</small></span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    <div class="banner">\n\n        <img src="assets/imgs/16.jpg" class="bg">\n\n    </div>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="send chat-box" padding>\n\n        <h6>Buen día, acepté la solicitud. Estarían faltando $350 para completar el total</h6>\n\n        <p>11:58</p>\n\n    </div>\n\n    \n\n    \n\n</ion-content>\n\n<ion-footer no-border>\n\n    <div class="fixed-bottom form">\n\n        <ion-list class="" no-lines>\n\n            <ion-item>\n\n                <ion-input type="text" placeholder="{{\'type_your_message\' | translate}}"></ion-input>\n\n                <div class="" item-end>\n\n                    <ion-icon name="attach" class="attach"></ion-icon>\n\n                    <ion-icon name="md-send" class=""></ion-icon>\n\n                </div>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\newchatting\newchatting.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], NewchattingPage);
    return NewchattingPage;
}());

//# sourceMappingURL=newchatting.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatServiceProvider = /** @class */ (function () {
    function ChatServiceProvider(http) {
        this.http = http;
        this.apiUrl = 'http://localhost:51199/api/';
    }
    ChatServiceProvider.prototype.getChats = function () {
        return this.http.get(this.apiUrl + 'chats');
    };
    ChatServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ChatServiceProvider);
    return ChatServiceProvider;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signin_signin__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.shaop_category = "Dairy";
    }
    ProfilePage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__signin_signin__["a" /* SigninPage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\profile\profile.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'my_profile\' | translate}}<span class="end text-theme">{{\'save\' | translate}}</span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="form" padding-left padding-right>\n\n        <ion-list no-lines padding-left padding-right>\n\n            <div class="store_img">\n\n                <!--        <img src="assets/imgs/profile.png">-->\n\n                <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n\n            </div>\n\n            <ion-item>\n\n                <ion-label floating>{{\'shop_name\' | translate}}</ion-label>\n\n                <ion-input type="text" value="Golden Bakery"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label>{{\'shaop_category\' | translate}}</ion-label>\n\n                <ion-select [(ngModel)]="shaop_category">\n\n                    <ion-option value="Dairy">{{\'Dairy & Bakery\' | translate}}</ion-option>\n\n                    <ion-option value="Bakery">{{\'Bakery\' | translate}}</ion-option>\n\n                </ion-select>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>{{\'phone_number\' | translate}}</ion-label>\n\n                <ion-input type="text" value="+1 987 654 3210"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n                <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n\n                <ion-input type="text" value="goldenbakery@mail.com"></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item class="about_offer">\n\n                <ion-label floating>{{\'about_shop\' | translate}}</ion-label>\n\n                <ion-textarea type="text" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,"></ion-textarea>t>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>{{\'address2\' | translate}}</ion-label>\n\n                <ion-input type="text" value="1124, Old Church Street (250m)"></ion-input>\n\n            </ion-item>\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <ion-item>\n\n                        <ion-label item-start>{{\'shop_openiing_time\' | translate}}</ion-label>\n\n                        <div class="input_box d-flex" item-end>\n\n                            <ion-icon class="material-icons text-white">access_time</ion-icon>\n\n                            <ion-input type="text" value="08:00"></ion-input>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <ion-item>\n\n                        <ion-label item-start>{{\'shop_closing_time\' | translate}}</ion-label>\n\n                        <div class="input_box d-flex" item-end>\n\n                            <ion-icon class="material-icons text-white">access_time</ion-icon>\n\n                            <ion-input type="text" value="22:00"></ion-input>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_terminos_service_terminos_service__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ConditionPage = /** @class */ (function () {
    function ConditionPage(navCtrl, serviceTerminos) {
        this.navCtrl = navCtrl;
        this.serviceTerminos = serviceTerminos;
        this.GetTerminos();
    }
    ConditionPage.prototype.GetTerminos = function () {
        var _this = this;
        this.serviceTerminos.GetTerminos()
            .subscribe(function (data) {
            for (var i in data) {
                if (data[i].Titulo == "Terminos") {
                    _this.vTerminos = data[i].Descripcion;
                    console.log("El termino es: " + _this.vTerminos);
                }
                if (data[i].Titulo == "TerminosDeUso") {
                    _this.vTerminosDeUso = data[i].Descripcion;
                    console.log("El TerminosDeUso es: " + _this.vTerminosDeUso);
                }
            }
        }, function (error) { console.log(error); });
    };
    ConditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-condition',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\condition\condition.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'terms_conditions\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <p class="text-black">\n\n            {{vTerminos}}\n\n\n\n    </p>\n\n    <h2 class="text-blue">{{\'terms_of_use\' | translate}}</h2>\n\n    <p class="text-black">\n\n            {{vTerminosDeUso}}\n\n    </p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\condition\condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_terminos_service_terminos_service__["a" /* TerminosServiceProvider */]])
    ], ConditionPage);
    return ConditionPage;
}());

//# sourceMappingURL=condition.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TerminosServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TerminosServiceProvider = /** @class */ (function () {
    function TerminosServiceProvider(http) {
        this.http = http;
        this.favoriteCounter = 0;
        this.favorites = [];
        this.apiUrl = 'http://mundocanje.tk/api/';
        //console.log('Hello TerminosServiceProvider Provider');
    }
    TerminosServiceProvider.prototype.GetTerminos = function () {
        return this.http.get(this.apiUrl + 'terminos/');
    };
    TerminosServiceProvider.prototype.findAll = function () {
        //return Promise.resolve(restaurants);
        return Promise.resolve(this.GetTerminos());
    };
    TerminosServiceProvider.prototype.findByName = function (searchKey) {
        var key = searchKey.toUpperCase();
        return Promise.resolve(this.GetDatosParams(key));
    };
    TerminosServiceProvider.prototype.getFavorites = function () {
        return Promise.resolve(this.favorites);
    };
    TerminosServiceProvider.prototype.obtenerDatos = function () {
        return this.http.get(this.apiUrl + 'terminos');
    };
    //GetDatosId(id) {
    //return this.http.get(this.apiUrl+'clientes/'+id);
    //}
    TerminosServiceProvider.prototype.GetDatosParams = function (searchKey) {
        var key = searchKey;
        var postData2 = {
            "NombreFantasia": key,
            "Direccion": ""
        };
        return this.http.post(this.apiUrl + 'clientes/clientesbyfiltros', postData2, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } });
    };
    TerminosServiceProvider.prototype.SendComentarios = function (restaurant, usuarioID, comentario, rating1, rating2, rating3, rating4) {
        console.log("ID de comecio2:" + restaurant.Id);
        console.log("El usuaroID es :" + usuarioID);
        var postData2 = {
            "Id": 0,
            "IdCliente": restaurant.Id,
            "IdUsuario": usuarioID,
            "FechaAlta": "",
            "Comentario": comentario,
            "rating1": rating1,
            "rating2": rating2,
            "rating3": rating3,
            "rating4": rating4
        };
        console.log("va a mandar alto pos3");
        return this.http.post(this.apiUrl + 'Clientes_Comentarios', postData2, { headers: { 'Accept': 'application/json', 'Content-Type': 'application/json', } });
    };
    TerminosServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], TerminosServiceProvider);
    return TerminosServiceProvider;
}());

//# sourceMappingURL=terminos-service.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_faq_faq__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, serviceFaq) {
        this.navCtrl = navCtrl;
        this.serviceFaq = serviceFaq;
        this.GetFaq();
    }
    HelpPage.prototype.GetFaq = function () {
        var _this = this;
        this.serviceFaq.GetPreguntas_Frecuentes()
            .subscribe(function (data) {
            _this.pregFrec = data;
            console.log(data);
            console.log("La faq 1: " + _this.pregFrec[0].Pregunta);
        }, function (error) { console.log(error); });
    };
    HelpPage.prototype.toggleDetails = function (data) {
        if (data.showDetails) {
            data.showDetails = false;
        }
        else {
            data.showDetails = true;
        }
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\help\help.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'help\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <ion-list no-lines>\n\n        <!--\n\n        <ion-item [ngClass]="faqExpand1 ? \'active\' : \'\' " (click)="faqExpandToggle1()">\n\n            <h2 class="text-blue d-flex">{{\'what_is_neargo\' | translate}}\n\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <div class="text_box">\n\n                <p class="text-violet"> Primera plataforma y App de canje para usuarios, comercios y servicios. Mundo Canje es una opción rápida y eficiente de optimizar recursos en un mundo cada vez más conectado. </p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand2 ? \'active\' : \'\' " (click)="faqExpandToggle2()">\n\n            <h2 class="text-blue d-flex">{{\'can_l_list_my_store_on_neargo\' | translate}}\n\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <div class="text_box">\n\n                <p class="text-blue"> MundoCanje dispone de 3 planes para los socios. Plan Basico: Puede generar hasta 5 canjes mensuales. El plan intermedio posibilita la generación de hasta 15 canjes mensuales y el Plan Full posibilita canjes ilimitados.</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand3 ? \'active\' : \'\' " (click)="faqExpandToggle3()">\n\n            <h2 class="text-blue d-flex">{{\'how_to_complain_about_services\' | translate}}\n\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <div class="text_box">\n\n                <p class="text-black"> Los canjes se generan entre los usuarios, previamente aceptado el importe estimado. Puede ser por el total, o realizando la diferencia del importe a la otra parte.</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand4 ? \'active\' : \'\' " (click)="faqExpandToggle4()">\n\n            <h2 class="text-blue d-flex">{{\'wahat_is_service_charnge\' | translate}}\n\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <div class="text_box">\n\n                <p class="text-black"> La app cuenta con diversas categorías, como ser: Indumentaria, Moda, Gastronomía, Música, Cursos, etc. Todas las semanas se siguen agregando nuevas categorías.</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand5 ? \'active\' : \'\' " (click)="faqExpandToggle5()">\n\n            <h2 class="text-blue d-flex">{{\'user_data_pol\' | translate}}\n\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <div class="text_box">\n\n                <p class="text-black"> Todos los datos de los usuarios son privados y no pueden ser visualizados al navegar la app. Solamente se envían al usuario al momento de realizar el canje, con previa aceptación del usuario.</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand6 ? \'active\' : \'\' " (click)="faqExpandToggle6()">\n\n            <h2 class="text-blue d-flex">{{\'are_those_services_are_free\' | translate}}\n\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <div class="text_box ">\n\n                <p class="text-black"> MundoCanje no cobra por transacción o pago en linea. Solamente recibe créditos por los planes de socios.</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand7 ? \'active\' : \'\' " (click)="faqExpandToggle7()">\n\n            <h2 class="text-blue d-flex">{{\'can_i_create_event\' | translate}}\n\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <div class="text_box">\n\n                <p class="text-black"> Los canjes se pueden crear en cualquier momento y al mismo tiempo son compartidos por toda la comunidad.</p>\n\n            </div>\n\n        </ion-item>\n\n        <ion-item [ngClass]="faqExpand8 ? \'active\' : \'\' " (click)="faqExpandToggle8()">\n\n            <h2 class="text-blue d-flex">{{\'i_want_to_create_an_offer\' | translate}}\n\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <div class="text_box">\n\n                <p class="text-black"> La diferencia de los canjes pueden abonarse en Efectivo al retirar el producto o por pagos eléctronicos mediante Mercadopago. El usuario deberá elegir el método de pago que más le convenga.</p>\n\n            </div>\n\n        </ion-item>\n\n-->\n\n\n\n        <ion-item *ngFor="let d of pregFrec; let i = index"  (click)="toggleDetails(d)" [ngClass]="{\'active\': d.showDetails }">\n\n            <h2 class="text-blue d-flex">{{d.Pregunta | translate}}\n\n                <ion-icon class="material-icons end text-theme">keyboard_arrow_down</ion-icon>\n\n            </h2>\n\n            <div class="text_box">\n\n                <p class="text-violet"> {{d.Respuesta}} </p>\n\n            </div>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\help\help.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_faq_faq__["a" /* FaqProvider */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FaqProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FaqProvider = /** @class */ (function () {
    function FaqProvider(http) {
        this.http = http;
        this.favoriteCounter = 0;
        this.favorites = [];
        this.apiUrl = 'http://mundocanje.tk/api/';
        //console.log('Hello FaqProvider Provider');
    }
    FaqProvider.prototype.GetPreguntas_Frecuentes = function () {
        return this.http.get(this.apiUrl + 'preguntas_frecuentes/');
    };
    FaqProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], FaqProvider);
    return FaqProvider;
}());

//# sourceMappingURL=faq.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__map_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__categories_categories__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__categoryresult_categoryresult__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__account_account__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__new_canje_new_canje__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_category_service_category_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_product_service_product_service__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import { ChatsPage } from '../chats/chats';







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalCtrl, navParams, serviceCat, serviceProd) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.serviceCat = serviceCat;
        this.serviceProd = serviceProd;
        this.near = "offers";
        this.tokenUsuario = this.navParams.get('tokenU');
        this.ObtenerCategorias();
        this.getHome();
        console.log("EL token del usuario es:" + this.tokenUsuario);
    }
    HomePage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    HomePage.prototype.NuevoCanje = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__new_canje_new_canje__["a" /* NewCanjePage */]);
    };
    HomePage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    HomePage.prototype.offerdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */]);
    };
    HomePage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    HomePage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__map_map__["a" /* MapPage */]);
    };
    HomePage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__account_account__["a" /* AccountPage */]);
    };
    HomePage.prototype.VerCategorias = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__categories_categories__["a" /* CategoriesPage */]);
    };
    HomePage.prototype.VerMasCanjes = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__categoryresult_categoryresult__["a" /* CategoryresultPage */]);
    };
    HomePage.prototype.category_result = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__categoryresult_categoryresult__["a" /* CategoryresultPage */]);
    };
    HomePage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    HomePage.prototype.ObtenerCategorias = function () {
        var _this = this;
        this.serviceCat.GetCategorias()
            .subscribe(function (data) {
            _this.categoriasLst = data;
            console.log("La categorìa 1: " + _this.categoriasLst[0].Nombre);
        }, function (error) { console.log(error); });
    };
    HomePage.prototype.getHome = function () {
        var _this = this;
        this.serviceProd.getHome()
            .subscribe(function (data) {
            _this.result = data; // get data in result variable
            _this.bannersLst = data.Banners;
            _this.canjesLst = data.Canjes;
            _this.descuentosLst = data.Descuentos;
        }, function (error) { console.log(error); });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\home\home.html"*/'<ion-header class="bg-color">\n\n    <ion-navbar>\n\n        <ion-title class="text-theme">  \n\n            <img src="assets/imgs/banner_mc.png" width="50%" height="50%" (click)="search()">\n\n            <span class="end">                \n\n                <img src="assets/imgs/ic_search-4.png" (click)="search()">\n\n                <img src="assets/imgs/ic_account-4.png" (click)="perfil()">\n\n\n\n            </span>\n\n        </ion-title>\n\n    </ion-navbar>\n\n    \n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <!--    \n\n    <image-gallery-layout-1>\n\n                <ion-grid card-background-page no-padding>\n\n                  <ion-row>\n\n                      <ion-col col-12 col-sm-4 col-md-6 col-lg-4 col-xl-3>\n\n                          <ion-card background-size style="background-image: url(\'assets/imgs/9-2.png\')">\n\n                          </ion-card>    \n\n                      </ion-col>\n\n                  </ion-row>			\n\n              </ion-grid>\n\n          </image-gallery-layout-1>\n\n        -->\n\n        <div class="banner"  *ngFor="let d of bannersLst; let i = index">\n\n            <img [src]="d.Imagen" class="bg">                \n\n       </div>\n\n       \n\n       <div class="categories">\n\n            <h2 (click)="VerCategorias()" class="text-gray d-flex">{{\'Categorias\' | translate}}<span  class="text-violet end">{{\'view_all\' | translate}}</span></h2>\n\n        </div>\n\n        <div class="fixed-bottom">\n\n                <ion-scroll scrollX="true" style="height: 108px;white-space: nowrap;">\n\n                    \n\n                    <ion-card *ngFor="let d of categoriasLst; let i = index" >\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img [src]="d.Imagen">\n\n                            </ion-avatar>\n\n                            <h2>{{d.Nombre}}</h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{d.Productos.length}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <!--<ion-card>\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img src="assets/imgs/3.png">\n\n                            </ion-avatar>\n\n                            <h2>Restaurants</h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{\'15\' | translate}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card>\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img src="assets/imgs/6.png">\n\n                            </ion-avatar>\n\n                            <h2>Moda</h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{\'150\' | translate}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card>\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img src="assets/imgs/8.png">\n\n                            </ion-avatar>\n\n                            <h2>Calzados</h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{\'50\' | translate}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card>\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img src="assets/imgs/9.png">\n\n                            </ion-avatar>\n\n                            <h2>Decoración</h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{\'10\' | translate}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>\n\n                    <ion-card>\n\n                        <ion-item (click)="category_result()">\n\n                            <ion-avatar item-start>\n\n                                <img src="assets/imgs/10.png">\n\n                            </ion-avatar>\n\n                            <h2>Música</h2>                                \n\n                            <h3 class="d-flex">\n\n                                <ion-badge item-end>{{\'10\' | translate}}\n\n                                    <ion-icon name="md-star"></ion-icon>\n\n                                </ion-badge>\n\n                                <span>Productos</span>\n\n                            </h3>\n\n                        </ion-item>\n\n                    </ion-card>-->\n\n                    \n\n                </ion-scroll>\n\n            </div>\n\n\n\n            <div class="categories">\n\n                <h2 class="text-gray d-flex">{{\'Últimos canjes\' | translate}}</h2>\n\n            </div>\n\n            <div>\n\n                <ion-list class="offers" *ngFor="let d of canjesLst; let i = index">\n\n                            <ion-row>\n\n                                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6>\n\n                                        <ion-item (click)="offerdetail()" class="itemGrilla"  >\n\n                                                <img [src]="d.Imagen" class="bg">\n\n                                                <ion-badge item-end>\n\n                                                    <ion-icon name="md-stopwatch"></ion-icon>\n\n                                                  {{d.Ult_Dias}}\n\n                                                </ion-badge>\n\n                                                <div class="text">\n\n                                                    <h2 class="H2Grilla">{{d.Nombre}}</h2>\n\n                                                </div>\n\n                                            </ion-item>\n\n                                    </ion-col>\n\n                                    <!--<ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n                                        <ion-item (click)="offerdetail()" class="itemGrilla" >\n\n                                                <img src="assets/imgs/10.png" class="bg">\n\n                                                <ion-badge item-end>\n\n                                                    <ion-icon name="md-stopwatch"></ion-icon>\n\n                                                    6 Dias\n\n                                                </ion-badge>\n\n                                                <div class="text">\n\n                                                    <h2 class="H2Grilla">10 Clases de Guitarra acústica </h2>\n\n                                                \n\n                                                    \n\n                                                </div>\n\n                                            </ion-item>\n\n                                    </ion-col>\n\n                                </ion-row>			\n\n                            \n\n                                <ion-row>\n\n                                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n                                        <ion-item (click)="offerdetail()" class="itemGrilla" >\n\n                                            <img src="assets/imgs/3.png" class="bg">\n\n                                            <ion-badge item-end>\n\n                                                <ion-icon name="md-stopwatch"></ion-icon>\n\n                                                5 Hrs\n\n                                            </ion-badge>\n\n                                            <div class="text">\n\n                                                <h2 class="H2Grilla">Desayuno completo para 2 personas</h2>\n\n                                              \n\n                                            </div>\n\n                                        </ion-item>\n\n                                    </ion-col>\n\n                                    <ion-col col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6>\n\n                                        <ion-item (click)="offerdetail()" class="itemGrilla" >\n\n                                            <img src="assets/imgs/20.jpg" class="bg">\n\n                                            <ion-badge item-end>\n\n                                                <ion-icon name="md-stopwatch"></ion-icon>\n\n                                                2 Dias\n\n                                            </ion-badge>\n\n                                            <div class="text">\n\n                                                <h2 class="H2Grilla">Servicios de Gasista matriculado</h2>\n\n                                              \n\n                                               \n\n                                            </div>\n\n                                        </ion-item>\n\n                                    </ion-col>-->\n\n                        </ion-row>		\n\n                </ion-list>\n\n            </div>\n\n\n\n            \n\n\n\n            <div class="categories">\n\n                    <h2 class="text-gray d-flex">{{\'Cupones\' | translate}}</h2>\n\n                </div>\n\n            <div>\n\n                <ion-list class="offers"  *ngFor="let d of descuentosLst; let i = index">\n\n                    <ion-item (click)="offerdetail()">\n\n                        <img [src]="d.Imagen" class="bg">\n\n                        <ion-badge item-end>\n\n                            <ion-icon name="md-stopwatch"></ion-icon>\n\n                            {{d.Ult_Dias}}\n\n                        </ion-badge>\n\n                        <div class="text">\n\n                            <h2>{{d.Nombre}}</h2>\n\n                            <p class="d-flex text-theme">\n\n                                {{d.Descripcion}}\n\n                            </p>\n\n                        </div>\n\n                    </ion-item>\n\n                   <!--<ion-item (click)="offerdetail()">\n\n                        <img src="assets/imgs/6.png" class="bg">\n\n                        <ion-badge item-end>\n\n                            <ion-icon name="md-stopwatch"></ion-icon>\n\n                            5 Hrs\n\n                        </ion-badge>\n\n                        <div class="text">\n\n                            <h2>Voucher 50% de descuento en Stone</h2>\n\n                            <p class="d-flex text-theme">\n\n                                Stone Shopping Abasto\n\n                            </p>\n\n                        </div>\n\n                    </ion-item>-->\n\n                </ion-list>\n\n        \n\n        \n\n            </div>\n\n            <ion-list no-lines padding-left padding-right>\n\n                <div class="socile d-flex">\n\n                    <button ion-button icon-start block class="btn text-white" round (click)="VerMasCanjes()">\n\n                        <ion-icon class="material-icons text-white">add</ion-icon>\n\n                        Ver Más Canjes\n\n                    </button>\n\n                </div>\n\n            </ion-list>\n\n</ion-content>\n\n<ion-footer no-border class="d-flex">\n\n    <ion-icon class="material-icons text-white bg-theme end" (click)="NuevoCanje()">add</ion-icon>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_12__providers_category_service_category_service__["a" /* CategoryServiceProvider */], __WEBPACK_IMPORTED_MODULE_13__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_autentication_service_autentication_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_global__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, authService, toastController, userService, user) {
        this.navCtrl = navCtrl;
        this.authService = authService;
        this.toastController = toastController;
        this.userService = userService;
        this.user = user;
    }
    RegisterPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    RegisterPage.prototype.RegistrarUsuario = function () {
        var _this = this;
        var tokenFb = "";
        this.authService.registerUser(this.user.Mail, this.user.password)
            .then(function (info) {
            console.log('usuario registrado');
            _this.presentToast('Registrado correctamente');
            tokenFb = info.user.uid;
            _this.user.Token = tokenFb;
            _this.user.Imagen = "";
            _this.user.IdPlan = "1"; //Se registra con plan básico por default.
            console.log('Token ' + tokenFb);
            _this.registerToDB();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], { tokenU: tokenFb });
        })
            .catch(function (error) {
            _this.presentToast(error);
            console.log("ERror......");
        });
    };
    RegisterPage.prototype.getUserByToken = function (token) {
    };
    RegisterPage.prototype.registerToDB = function () {
        var _this = this;
        this.userService.postUser(this.user)
            .subscribe(function (data) {
            _this.presentToast('OK');
            console.log(data);
            console.log("Usuario Id: " + data);
        }, function (error) { console.log("ERROR en Save to DB: " + error); });
    };
    RegisterPage.prototype.presentToast = function (texto) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: texto,
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\register\register.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>{{\'register\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="bg-color">\n\n    <div class="profile-img">\n\n        <div class="img-box">\n\n            <!--            <img src="assets/imgs/dp1.png">-->\n\n            <ion-icon name="md-person" class="text-white"></ion-icon>\n\n        </div>\n\n        <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n\n    </div>\n\n    <div class="form" padding-left padding-right>\n\n        <ion-list no-lines padding-left padding-right>\n\n            <ion-item>\n\n                <ion-label floating>{{\'user_name\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Nombre" type="email" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>{{\'user_business_name\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Razon_Social" type="text" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>{{\'user_telephone\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Telefono" type="number" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>{{\'user_cuit\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Cuit" type="number" value="" maxlength="11"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>{{\'user_address\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Direccion" type="text" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>{{\'email_address\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.Mail" type="email" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item class="password">\n\n                <ion-label floating>{{\'set_password\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.password" type="password" class="password" value=""></ion-input>\n\n            </ion-item>\n\n            <ion-item class="password">\n\n                <ion-label floating>{{\'confirm_password\' | translate}}</ion-label>\n\n                <ion-input [(ngModel)]="user.password" type="password" class="password" value=""></ion-input>\n\n            </ion-item>\n\n            <button ion-button block class="btn" (click)="RegistrarUsuario()" round>{{\'register_now\' | translate}}</button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_autentication_service_autentication_service__["a" /* AutenticationServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_user_service_user_service__["a" /* UserServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_global__["a" /* GlobalProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PasswordPage = /** @class */ (function () {
    function PasswordPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    PasswordPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    PasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-password',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\password\password.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>{{\'forgot_password\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="bg-color">\n\n    <div class="banner">\n\n        <img src="assets/imgs/background.png" class="background">\n\n        <div class="text">\n\n            <p class="text-white"><strong>{{\'it_will_take_less_than_a_minutes\' | translate}}</strong></p>\n\n            <p class="text-white">{{\'let_us_know_your_registered_email_address\' | translate}}</p>\n\n        </div>\n\n    </div>\n\n    <div class="form">\n\n        <ion-list no-lines padding-left padding-right>\n\n            <ion-item>\n\n                <ion-input type="email" placeholder="{{\'registered_email_eddress\' | translate}}"></ion-input>\n\n            </ion-item>\n\n            <button ion-button block class="btn" (click)="tabs()" round>{{\'submit\' | translate}}</button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\password\password.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], PasswordPage);
    return PasswordPage;
}());

//# sourceMappingURL=password.js.map

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chats_chats__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__canjes_canjes__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__canjes_canjes__["a" /* CanjesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__chats_chats__["a" /* ChatsPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__map_map__["a" /* MapPage */];
        this.tokenUsuario = this.navParams.get('tokenU');
        console.log("El token del usuario es:" + this.tokenUsuario);
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="tab1Root" [rootParams]="navParams.data" tabTitle="{{\'navigate\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n\n    <ion-tab [root]="tab2Root" [rootParams]="navParams.data" tabTitle="{{\'canje_title\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n\n    <ion-tab [root]="tab3Root" [rootParams]="navParams.data" tabTitle="{{\'chats\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n\n    <ion-tab [root]="tab4Root" [rootParams]="navParams.data" tabTitle="{{\'map\' | translate}}" tabsHideOnSubPages="true"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["f" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(260);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_account_account__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_addreview_addreview__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_chats_chats__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_offer_edit_offer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_edit_event_edit_event__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_eventdetail_eventdetail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_help_help__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_map_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_offerdetail_offerdetail__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_password_password__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_register_register__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_review_review__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_search_search__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_categories_categories__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_categoryresult_categoryresult__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_canjes_canjes__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_new_canje_new_canje__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_match_match__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_newchatting_newchatting__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__providers_terminos_service_terminos_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__providers_faq_faq__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_category_service_category_service__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__providers_autentication_service_autentication_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__providers_user_service_user_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_firebase__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_39_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__providers_global_global__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__providers_product_service_product_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_global_product_global_product__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_chat_service_chat_service__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}





__WEBPACK_IMPORTED_MODULE_39_firebase__["initializeApp"]({
    apiKey: "AIzaSyB1V9Scjuy2FzVELWlycpjYoUxnqoqrP2w",
    authDomain: "mundo-canje-app.firebaseapp.com",
    databaseURL: "https://mundo-canje-app.firebaseio.com",
    projectId: "mundo-canje-app",
    storageBucket: "mundo-canje-app.appspot.com",
    messagingSenderId: "943473640737",
    appId: "1:943473640737:web:522571b9430f56fcb22a60"
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addreview_addreview__["a" /* AddreviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_offer_edit_offer__["a" /* Edit_offerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_event_edit_event__["a" /* Edit_eventPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_eventdetail_eventdetail__["a" /* EventdetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_offerdetail_offerdetail__["a" /* OfferdetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_categoryresult_categoryresult__["a" /* CategoryresultPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_canjes_canjes__["a" /* CanjesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_new_canje_new_canje__["a" /* NewCanjePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_newchatting_newchatting__["a" /* NewchattingPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_addreview_addreview__["a" /* AddreviewPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_chats_chats__["a" /* ChatsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_chatting_chatting__["a" /* ChattingPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_offer_edit_offer__["a" /* Edit_offerPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_edit_event_edit_event__["a" /* Edit_eventPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_eventdetail_eventdetail__["a" /* EventdetailPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_help_help__["a" /* HelpPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_map_map__["a" /* MapPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_offerdetail_offerdetail__["a" /* OfferdetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_password_password__["a" /* PasswordPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_review_review__["a" /* ReviewPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_categories_categories__["a" /* CategoriesPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_categoryresult_categoryresult__["a" /* CategoryresultPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_canjes_canjes__["a" /* CanjesPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_new_canje_new_canje__["a" /* NewCanjePage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_newchatting_newchatting__["a" /* NewchattingPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_32__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_34__providers_terminos_service_terminos_service__["a" /* TerminosServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_35__providers_faq_faq__["a" /* FaqProvider */],
                __WEBPACK_IMPORTED_MODULE_36__providers_category_service_category_service__["a" /* CategoryServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_37__providers_autentication_service_autentication_service__["a" /* AutenticationServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_38__providers_user_service_user_service__["a" /* UserServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_40__providers_global_global__["a" /* GlobalProvider */],
                __WEBPACK_IMPORTED_MODULE_41__providers_product_service_product_service__["a" /* ProductServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_global_product_global_product__["a" /* GlobalProductProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, translate) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_signin_signin__["a" /* SigninPage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translate.setDefaultLang('en');
            _this.translate.use('en');
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__review_review__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorePage = /** @class */ (function () {
    function StorePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [
            {
                image: "assets/imgs/background.png",
            },
            {
                image: "assets/imgs/2.png",
            },
            {
                image: "assets/imgs/3.png",
            }
        ];
    }
    StorePage.prototype.review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__review_review__["a" /* ReviewPage */]);
    };
    StorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-store',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\store\store.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="banner">\n\n        <img src="assets/imgs/background.png">\n\n    </div>\n\n    <div class="details">\n\n        <div class="store-name">\n\n            <h2 class="text-white">Golden Bakery</h2>\n\n            <p class="d-flex text-gray">Dairy & Bakery </p>\n\n            <h4 class="d-flex text-white">\n\n                <ion-badge item-end class="bg-theme text-white">4.3\n\n                    <ion-icon name="md-star"></ion-icon>\n\n                </ion-badge>\n\n                {{\'98_people_rated\' | translate}}<span class="end text-theme" (click)="review()">{{\'read_all\' | translate}}</span>\n\n            </h4>\n\n        </div>\n\n        <div class="about">\n\n            <h3 class="text-white">{{\'aboput\' | translate}}</h3>\n\n            <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s</p>\n\n        </div>\n\n        <div class="contact d-flex">\n\n            <div class="opening">\n\n                <h3 class="text-white">{{\'opening_hours\' | translate}}</h3>\n\n                <p class="text-theme">{{\'open_now\' | translate}}<span class="text-white">(08:00 - 22:00)</span></p>\n\n            </div>\n\n            <div text-end class="end">\n\n                <ion-icon name="md-heart" class="text-white bg-theme fevret"></ion-icon>\n\n                <ion-icon name="md-chatboxes" class="heart text-white bg-theme"></ion-icon>\n\n                <ion-icon name="md-call" class="text-white bg-theme"></ion-icon>\n\n            </div>\n\n        </div>\n\n        <div class="address">\n\n            <h3 class="text-white d-flex">{{\'address\' | translate}}\n\n                <span class="text-theme end ">{{\'get_direction\' | translate}}</span>\n\n            </h3>\n\n            <p class="text-white">1124, Old Church Street (250m)</p>\n\n            <div class="map">\n\n                <img src="assets/imgs/map-location.png">\n\n            </div>\n\n            <img src="assets/imgs/ic_pin.png" class="location">\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\store\store.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], StorePage);
    return StorePage;
}());

//# sourceMappingURL=store.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddreviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddreviewPage = /** @class */ (function () {
    function AddreviewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AddreviewPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    AddreviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-addreview',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\addreview\addreview.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>{{\'add_review\' | translate}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="banner">\n\n        <img src="assets/imgs/background.png" class="bg">\n\n        <div class="rating">\n\n            <ion-icon name="md-star-outline"></ion-icon>\n\n            <ion-icon name="md-star-outline"></ion-icon>\n\n            <ion-icon name="md-star-outline"></ion-icon>\n\n            <ion-icon name="md-star-outline"></ion-icon>\n\n            <ion-icon name="md-star-outline"></ion-icon>\n\n        </div>\n\n    </div>\n\n    <div class="form">\n\n        <ion-list no-lines padding-left padding-right>\n\n            <ion-item>\n\n                <ion-input type="email" placeholder="{{\'let_us_know\' | translate}}"></ion-input>\n\n            </ion-item>\n\n            <button ion-button block class="btn" (click)="tabs()" round>{{\'submit_review\' | translate}}</button>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\addreview\addreview.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AddreviewPage);
    return AddreviewPage;
}());

//# sourceMappingURL=addreview.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories_categories__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categoryresult_categoryresult__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
    }
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.VerCategorias = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__categories_categories__["a" /* CategoriesPage */]);
    };
    SearchPage.prototype.category_result = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__categoryresult_categoryresult__["a" /* CategoryresultPage */]);
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\search\search.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <ion-icon name="md-close" class="text-theme" (click)="dismiss()"></ion-icon>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="form">\n\n        <ion-searchbar (ionInput)="getItems($event)" placeholder="{{\'what_are_you_searching_for\' | translate}}" class="text-white"></ion-searchbar>\n\n        <ion-list no-lines>\n\n            <ion-item *ngFor="let item of items">\n\n                {{ item }}\n\n            </ion-item>\n\n        </ion-list>\n\n<!--\n\n        <div class="recent-serch">\n\n            <h2 class="text-gray">{{\'recent_earches\' | translate}}</h2>\n\n            <p class="text-white">Chinese Restaurant</p>\n\n            <p class="text-white">Formal Clothes</p>\n\n            <p class="text-white">Baked Cake</p>\n\n        </div>\n\n    -->\n\n    </div>\n\n    <div class="categories">\n\n        <h2 (click)="VerCategorias()" class="text-gray d-flex">{{\'choose_categories\' | translate}}<span class="text-theme end">{{\'view_all\' | translate}}</span></h2>\n\n        <ion-list no-lines>\n\n            <ion-item (click)="category_result()">\n\n                <img src="assets/imgs/ca1.png" class="bg">\n\n                <div text-center class="text">\n\n                    <h2 class="text-white">{{\'food_restaurants\' | translate}}</h2>\n\n                    <p class="text-gray">150 Canjes</p>\n\n                </div>\n\n            </ion-item>\n\n            <ion-item (click)="category_result()">\n\n                <img src="assets/imgs/ca2.png" class="bg">\n\n                <div text-center class="text">\n\n                    <h2 class="text-white"> {{\'Moda\' | translate}}</h2>\n\n                    <p class="text-gray">198 Canjes</p>\n\n                </div>\n\n            </ion-item>\n\n            <ion-item (click)="category_result()">\n\n                <img src="assets/imgs/ca4.png" class="bg">\n\n                <div text-center class="text">\n\n                    <h2 class="text-white">{{\'dairy_bakery\' | translate}}</h2>\n\n                    <p class="text-gray">110 Canjes</p>\n\n                </div>\n\n            </ion-item>\n\n            <ion-item (click)="category_result()">\n\n                <img src="assets/imgs/ca3.png" class="bg">\n\n                <div text-center class="text">\n\n                    <h2 class="text-white">{{\'fashion_store\' | translate}}</h2>\n\n                    <p class="text-gray">209 Canjes</p>\n\n                </div>\n\n            </ion-item>\n\n            <ion-item (click)="category_result()">\n\n                <img src="assets/imgs/ca5.png" class="bg">\n\n                <div text-center class="text">\n\n                    <h2 class="text-white">{{\'salon_spa\' | translate}}</h2>\n\n                    <p class="text-gray">111 Canjes</p>\n\n                </div>\n\n            </ion-item>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(33);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MapPage = /** @class */ (function () {
    function MapPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    MapPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    MapPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-map',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\map\map.html"*/'<ion-header class="">\n\n    <ion-navbar>\n\n        <ion-title>{{\'find_in_map\' | translate}}\n\n            <span class="end"><img src="assets/imgs/ic_search-4.png" (click)="search()"></span>\n\n        </ion-title>\n\n\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="map">\n\n        <img src="assets/imgs/mapa2.jpg">\n\n    </div>\n\n    <div class="near-you">\n\n        <img src="assets/imgs/ic_pin.png" style="top:30%; left: 10%">\n\n        <img src="assets/imgs/ic_pin.png" style="top:50%; left: 20%">\n\n        <img src="assets/imgs/ic_pin.png" style="top:40%; left: 40%">\n\n        <img src="assets/imgs/ic_pin.png" style="top:60%; left: 50%">\n\n    </div>\n\n    <div class="your_location">\n\n        <ion-icon class="material-icons">brightness_1</ion-icon>\n\n    </div>\n\n    <div class="location">\n\n        <img src="assets/imgs/ic_pin-3.png" style="top:45%; left: 45%">\n\n    </div>\n\n</ion-content>\n\n<ion-footer no-border>\n\n    <div class="fixed-bottom">\n\n        <ion-scroll scrollX="true" style="height: 108px;white-space: nowrap;">\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/12.jpg">\n\n                    </ion-avatar>\n\n                    <h2>1 Parrillada completa para 4 personas</h2>\n\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Av. Cabildo 669 (250m)</p>\n\n                    <h3 class="d-flex">\n\n                        <ion-badge item-end>{{\'4.3\' | translate}}\n\n                            <ion-icon name="md-star"></ion-icon>\n\n                        </ion-badge>\n\n                        <span>Gastronomía</span>\n\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n\n                    </h3>\n\n                </ion-item>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/2.png">\n\n                    </ion-avatar>\n\n                    <h2>2 Kg de Bananas + 1 Kg Manzana</h2>\n\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Echeverría 2602</p>\n\n                    <h3 class="d-flex">\n\n                        <ion-badge item-end>{{\'4.3\' | translate}}\n\n                            <ion-icon name="md-star"></ion-icon>\n\n                        </ion-badge>\n\n                        <span>Verdulería</span>\n\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n\n                    </h3>\n\n                </ion-item>\n\n            </ion-card>\n\n            <ion-card>\n\n                <ion-item>\n\n                    <ion-avatar item-start>\n\n                        <img src="assets/imgs/10.png">\n\n                    </ion-avatar>\n\n                    <h2>10 Clases de Guitarra Acústica</h2>\n\n                    <p class="d-flex"><img src="assets/imgs/ic_neargo-5.png">Juramento 561</p>\n\n                    <h3 class="d-flex">\n\n                        <ion-badge item-end>{{\'4.5\' | translate}}\n\n                            <ion-icon name="md-star"></ion-icon>\n\n                        </ion-badge>\n\n                        <span>Música</span>\n\n                        <span class="end"><img src="assets/imgs/ic_direction.png"></span>\n\n                    </h3>\n\n                </ion-item>\n\n            </ion-card>\n\n        </ion-scroll>\n\n    </div>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\map\map.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], MapPage);
    return MapPage;
}());

//# sourceMappingURL=map.js.map

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Edit_eventPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Edit_eventPage = /** @class */ (function () {
    function Edit_eventPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.gender = "female";
    }
    Edit_eventPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Edit_eventPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit_event',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\edit_event\edit_event.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'edit_event\' | translate}}<span class="end text-theme" (click)="tabs() ">{{\'save\' | translate}}</span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="form" padding-left padding-right>\n\n        <ion-list no-lines padding-left padding-right>\n\n            <div class="store_img">\n\n                  <img src="assets/imgs/10.png">\n\n                <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n\n            </div>\n\n            <ion-item>\n\n                <ion-label floating>{{\'event_title\' | translate}}</ion-label>\n\n                <ion-textarea type="text" value="10 Clases de Guitarra acústica"></ion-textarea>\n\n            </ion-item>            \n\n            <ion-item>\n\n                <ion-label floating>{{\'address2\' | translate}}</ion-label>\n\n                <ion-input type="text" value="Palermo. Buenos Aires"></ion-input>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>{{\'categories\' | translate}}</ion-label>\n\n                <ion-input type="text" value="Música"></ion-input>\n\n            </ion-item>\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <ion-item>\n\n                        <ion-label item-start>{{\'settings\' | translate}}</ion-label>\n\n                        <div class="input_box d-flex" item-end>\n\n                            <ion-icon class="material-icons text-black">settings</ion-icon>\n\n                            <ion-input type="text" value="Manual"></ion-input>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <ion-item>\n\n                        <ion-label item-start>{{\'price\' | translate}}</ion-label>\n\n                        <div class="input_box d-flex" item-end>\n\n                            <ion-icon class="text-black" name="cash"></ion-icon>\n\n                            <ion-input type="text" value="2.300"></ion-input>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\edit_event\edit_event.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Edit_eventPage);
    return Edit_eventPage;
}());

//# sourceMappingURL=edit_event.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryresultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_search__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chats_chats__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__map_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__account_account__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CategoryresultPage = /** @class */ (function () {
    function CategoryresultPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
    }
    CategoryresultPage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    CategoryresultPage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    CategoryresultPage.prototype.offerdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__offerdetail_offerdetail__["a" /* OfferdetailPage */]);
    };
    CategoryresultPage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    CategoryresultPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__map_map__["a" /* MapPage */]);
    };
    CategoryresultPage.prototype.map22 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__chats_chats__["a" /* ChatsPage */]);
    };
    CategoryresultPage.prototype.perfil = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__account_account__["a" /* AccountPage */]);
    };
    CategoryresultPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    CategoryresultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categoryresult',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\categoryresult\categoryresult.html"*/'<ion-header class="bg-color">\n\n  <ion-navbar>\n\n      <ion-title class="text-theme">{{\'app_title\' | translate}}\n\n          <span class="end">\n\n              \n\n              <img src="assets/imgs/ic_search-4.png" (click)="search()">\n\n              <img src="assets/imgs/ic_account-4.png" (click)="perfil()">\n\n          </span>\n\n      </ion-title>\n\n  </ion-navbar>  \n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n  <div>\n\n      <ion-list  class="offers">\n\n          <ion-item (click)="offerdetail()">\n\n              <img src="assets/imgs/12.jpg" class="bg">\n\n              <ion-badge item-end>\n\n                  <ion-icon name="md-stopwatch"></ion-icon>\n\n                  2 Días\n\n              </ion-badge>\n\n              <div class="text">\n\n                  <h2>1 Parrillada completa para 4 personas</h2>\n\n                  <p class="d-flex text-theme">\n\n                      5 {{\'people_send\' | translate}}\n\n                  </p>\n\n              </div>\n\n          </ion-item>\n\n          <ion-item (click)="offerdetail()">\n\n              <img src="assets/imgs/13.jpg" class="bg">\n\n              <ion-badge item-end>\n\n                  <ion-icon name="md-stopwatch"></ion-icon>\n\n                  6 Días\n\n              </ion-badge>\n\n              <div class="text">\n\n                  <h2>1 Docena de empanadas de carne </h2>\n\n                  <p class="d-flex text-theme">\n\n                      10 {{\'people_send\' | translate}}\n\n                  </p>\n\n              </div>\n\n          </ion-item>\n\n          <ion-item (click)="offerdetail()">\n\n              <img src="assets/imgs/14.jpg" class="bg">\n\n              <ion-badge item-end>\n\n                  <ion-icon name="md-stopwatch"></ion-icon>\n\n                  5 Hrs\n\n              </ion-badge>\n\n              <div class="text">\n\n                  <h2>Menú del día completo para dos personas</h2>\n\n                  <p class="d-flex text-theme">\n\n                      1 {{\'people_send\' | translate}}\n\n                  </p>\n\n              </div>\n\n          </ion-item>\n\n\n\n          <ion-item (click)="offerdetail()">\n\n              <img src="assets/imgs/16.jpg" class="bg">\n\n              <ion-badge item-end>\n\n                  <ion-icon name="md-stopwatch"></ion-icon>\n\n                  2 Días\n\n              </ion-badge>\n\n              <div class="text">\n\n                  <h2>12 Alfajores Cachafaz dulce de leche</h2>\n\n                  <p class="d-flex text-theme">\n\n                      2 {{\'people_send\' | translate}}\n\n                  </p>\n\n              </div>\n\n          </ion-item>\n\n          <ion-item (click)="offerdetail()">\n\n              <img src="assets/imgs/17.jpg" class="bg">\n\n              <ion-badge item-end>\n\n                  <ion-icon name="md-stopwatch"></ion-icon>\n\n                  6 Días\n\n              </ion-badge>\n\n              <div class="text">\n\n                  <h2>Choripan + gaseosa para llevar </h2>\n\n                  <p class="d-flex text-theme">\n\n                      3 {{\'people_send\' | translate}}\n\n                  </p>\n\n              </div>\n\n          </ion-item>\n\n          <ion-item (click)="offerdetail()">\n\n              <img src="assets/imgs/18.jpg" class="bg">\n\n              <ion-badge item-end>\n\n                  <ion-icon name="md-stopwatch"></ion-icon>\n\n                  5 Hrs\n\n              </ion-badge>\n\n              <div class="text">\n\n                  <h2>24 Facturas mixtas</h2>\n\n                  <p class="d-flex text-theme">\n\n                      4 {{\'people_send\' | translate}}\n\n                  </p>\n\n              </div>\n\n          </ion-item>\n\n      </ion-list>\n\n\n\n  </div>\n\n</ion-content>\n\n<ion-footer no-border class="d-flex">\n\n  <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'offers\'" (click)="edit_offer()">add</ion-icon>\n\n  <ion-icon class="material-icons text-white bg-theme end" *ngIf="near == \'events\'" (click)="edit_event()">add</ion-icon>\n\n</ion-footer>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\categoryresult\categoryresult.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]])
    ], CategoryresultPage);
    return CategoryresultPage;
}());

//# sourceMappingURL=categoryresult.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Edit_offerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(24);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Edit_offerPage = /** @class */ (function () {
    function Edit_offerPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.gender = "female";
    }
    Edit_offerPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Edit_offerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit_offer',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\edit_offer\edit_offer.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>{{\'edit_offer\' | translate}}<span class="end text-theme" (click)="tabs() ">{{\'save\' | translate}}</span></ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="form" padding-left padding-right>\n\n        <ion-list no-lines padding-left padding-right>\n\n            <div class="store_img">\n\n                <!--        <img src="assets/imgs/profile.png">-->\n\n                <ion-icon name="md-camera" class="text-white bg-theme add-pic"></ion-icon>\n\n            </div>\n\n            <ion-item>\n\n                <ion-label floating>{{\'offer_title\' | translate}}</ion-label>\n\n                <ion-textarea type="text" value="Buy 2 pair of jens and get 2 for absolutel free. HURRY !"></ion-textarea>\n\n            </ion-item>\n\n            <ion-item class="about_offer">\n\n                <ion-label floating>{{\'about_offer2\' | translate}}</ion-label>\n\n                <ion-textarea type="text" value="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,"></ion-textarea>t>\n\n            </ion-item>\n\n            <ion-item>\n\n                <ion-label floating>{{\'address2\' | translate}}</ion-label>\n\n                <ion-input type="text" value="1124, Old Church Street (250m)"></ion-input>\n\n            </ion-item>\n\n            <ion-row>\n\n                <ion-col col-6>\n\n                    <ion-item>\n\n                        <ion-label item-start>{{\'offer_start_date\' | translate}}</ion-label>\n\n                        <div class="input_box d-flex" item-end>\n\n                            <ion-icon class="material-icons text-white">event</ion-icon>\n\n                            <ion-input type="text" value="25 - June - 18"></ion-input>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-col>\n\n                <ion-col col-6>\n\n                    <ion-item>\n\n                        <ion-label item-start>{{\'offer_end_date\' | translate}}</ion-label>\n\n                        <div class="input_box d-flex" item-end>\n\n                            <ion-icon class="material-icons text-white">event</ion-icon>\n\n                            <ion-input type="text" value="29 - June - 18"></ion-input>\n\n                        </div>\n\n                    </ion-item>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-list>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\edit_offer\edit_offer.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Edit_offerPage);
    return Edit_offerPage;
}());

//# sourceMappingURL=edit_offer.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatting_chatting__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__ = __webpack_require__(48);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventdetailPage = /** @class */ (function () {
    function EventdetailPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    EventdetailPage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    EventdetailPage.prototype.VerChat = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__chatting_chatting__["a" /* ChattingPage */]);
    };
    EventdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-eventdetail',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\eventdetail\eventdetail.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <ion-badge class="end">\n\n                <ion-icon name="md-calendar"></ion-icon>\n\n                14/10/2019\n\n            </ion-badge>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="banner">\n\n        <img src=\'assets/imgs/12.jpg\'>\n\n        <div class="store-name">\n\n            <h2 class="text-white d-flex">1 Parrillada completa para 4 personas</h2>\n\n        </div>\n\n    </div>\n\n    <div class="details">\n\n        <div class="about">\n\n            <h3 class="text-black">{{\'about_event2\' | translate}}</h3>\n\n            <p class="text-black">Parrilla Locos de Asar. El comercio intercambia 1 parrillada para 4 personas que consta de: Vacío, Asado, Chorizos, Morcillas y achuras. No incluye bebidas o entradas. Por un valor de $3.100</p>\n\n        </div>\n\n        <div class="interested d-flex">\n\n            <h3 class="d-flex text-black">\n\n                12 <small class="text-black">{{\'people_send\' | translate}}</small>\n\n            </h3>\n\n            <button ion-button block icon-start class="btn text-white end"  round (click)="VerChat()">\n\n                <ion-icon class="material-icons">chat</ion-icon>\n\n                {{\'chats_view\' | translate}}\n\n            </button>\n\n        </div>\n\n        <div class="address">\n\n            <h3 class="text-white d-flex">{{\'address\' | translate}}\n\n             <!--   <span class="text-theme end ">{{\'get_direction\' | translate}}</span> -->\n\n            </h3>\n\n            <p class="text-white">Belgrano. Buenos Aires</p>\n\n            <div class="map">\n\n                <img src="assets/imgs/mapa3.jpg">\n\n            </div>\n\n            <img src="assets/imgs/ic_pin.png" class="location">\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\eventdetail\eventdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], EventdetailPage);
    return EventdetailPage;
}());

//# sourceMappingURL=eventdetail.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferdetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__canjes_canjes__ = __webpack_require__(66);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var OfferdetailPage = /** @class */ (function () {
    function OfferdetailPage(navCtrl, toastController) {
        this.navCtrl = navCtrl;
        this.toastController = toastController;
    }
    OfferdetailPage.prototype.edit_offer = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__edit_offer_edit_offer__["a" /* Edit_offerPage */]);
    };
    OfferdetailPage.prototype.SendRequest = function () {
        this.presentToast();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__canjes_canjes__["a" /* CanjesPage */]);
    };
    OfferdetailPage.prototype.presentToast = function () {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Se envió la solicitud.',
                            duration: 3000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    OfferdetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offerdetail',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\offerdetail\offerdetail.html"*/'<ion-header class="bg-transparent">\n\n    <ion-navbar>\n\n        <ion-title>\n\n            <!--\n\n            <ion-badge class="end">\n\n                <ion-icon name="md-stopwatch"></ion-icon>\n\n                {{\'2_days\' | translate}}\n\n            </ion-badge>\n\n-->\n\n            <ion-badge class="end">\n\n                <ion-icon name="md-stopwatch"></ion-icon>\n\n                2 Días\n\n            </ion-badge>\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n    <div class="banner">\n\n        <img src=\'assets/imgs/8.png\'>\n\n        <div class="store-name">\n\n            <h2 class="text-white d-flex">Zapatillas All Star gris 43" !\n\n            </h2>\n\n        </div>\n\n    </div>\n\n    <div class="details">\n\n        <div class="about">\n\n            <h3 class="text-black">{{\'about_offer\' | translate}}</h3>\n\n            <p class="text-black">Un par de Zapatillas marca All Star color gris claro, talle 43". Muy poco uso. Por un valor de $1.000 </p>\n\n        </div>\n\n        <div class="interested d-flex">\n\n            <h3 class="d-flex text-black">\n\n                12\n\n                <small class="text-black">{{\'people_send\' | translate}}</small>\n\n            </h3>\n\n            <button ion-button block icon-start class="btn text-white end" round (click)="SendRequest()">\n\n                <ion-icon class="material-icons">notifications</ion-icon>\n\n                {{\'send_invitation\' | translate}}\n\n            </button>\n\n            \n\n        </div>\n\n        <div class="address">\n\n            <h3 class="text-white d-flex">{{\'address\' | translate}}\n\n               <!-- <span class="text-theme end ">{{\'get_direction\' | translate}}</span> -->\n\n               <!--\n\n               <span icon-start class="text-theme end ">\n\n                    <ion-icon  class="material-icons">perm_identity</ion-icon>\n\n                    Chistian Arcuri\n\n                </span>\n\n            -->\n\n            </h3>\n\n            <p class="text-white">Barrio Belgrano. Capital Federal</p>\n\n            <div class="map">\n\n                <img src="assets/imgs/mapa3.jpg">\n\n            </div>\n\n            <img src="assets/imgs/ic_pin.png" class="location">\n\n        </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\offerdetail\offerdetail.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], OfferdetailPage);
    return OfferdetailPage;
}());

//# sourceMappingURL=offerdetail.js.map

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanjesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__eventdetail_eventdetail__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__offerdetail_offerdetail__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__map_map__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__edit_event_edit_event__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__new_canje_new_canje__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__match_match__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__ = __webpack_require__(67);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CanjesPage = /** @class */ (function () {
    function CanjesPage(navCtrl, modalCtrl, serviceProd) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.serviceProd = serviceProd;
        this.near = "Ofrecidos";
        this.getOfrecidos();
    }
    CanjesPage.prototype.NuevoCanje = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__new_canje_new_canje__["a" /* NewCanjePage */]);
    };
    CanjesPage.prototype.store = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* StorePage */]);
    };
    CanjesPage.prototype.offerdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__offerdetail_offerdetail__["a" /* OfferdetailPage */]);
    };
    CanjesPage.prototype.eventdetail = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__eventdetail_eventdetail__["a" /* EventdetailPage */]);
    };
    CanjesPage.prototype.map = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__map_map__["a" /* MapPage */]);
    };
    CanjesPage.prototype.search = function () {
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__search_search__["a" /* SearchPage */]);
        modal.present();
    };
    CanjesPage.prototype.edit_event = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__edit_event_edit_event__["a" /* Edit_eventPage */]);
    };
    CanjesPage.prototype.ViewMatch = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__match_match__["a" /* MatchPage */]);
    };
    CanjesPage.prototype.getOfrecidos = function () {
        var _this = this;
        this.serviceProd.getProductByUser('3')
            .subscribe(function (data) {
            _this.canjesLst = data; // get data in result variable
        }, function (error) { console.log(error); });
    };
    CanjesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-canjes',template:/*ion-inline-start:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\canjes\canjes.html"*/'<ion-header class="bg-color">\n\n  <ion-navbar>\n\n      <ion-title class="text-theme">{{\'canje_title\' | translate}}         \n\n      </ion-title>\n\n  </ion-navbar>\n\n  <ion-segment [(ngModel)]="near">\n\n      <ion-segment-button value="Ofrecidos">\n\n          {{\'offers\' | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="Recibidos">\n\n          {{\'requested\' | translate}}\n\n      </ion-segment-button>\n\n      <ion-segment-button value="Canjeados">\n\n          {{\'redeemed\' | translate}}\n\n      </ion-segment-button>\n\n  </ion-segment>\n\n</ion-header>\n\n\n\n<ion-content class="bg-color">\n\n  <div [ngSwitch]="near">\n\n      <!--*ngSwitchCase="\'Ofrecidos\'" No funciona con 2 *ng-->\n\n      <ion-list *ngFor="let d of canjesLst; let i = index" no-lines>\n\n        <ng-container *ngSwitchCase="\'Ofrecidos\'">\n\n        <ion-item (click)="edit_event()">   \n\n          <img src="assets/imgs/10.png" class="bg">\n\n          \n\n          <ion-badge item-end>\n\n              <ion-icon name="md-stopwatch"></ion-icon>\n\n              6 Dias\n\n          </ion-badge>\n\n          <div class="text">\n\n              <h2>{{d.Nombre}}</h2>\n\n              <p class="d-flex">\n\n                  <span class="text-theme">Palermo. Buenos Aires</span>\n\n                  <span class=""> | Música</span>\n\n                  <span class="end">$ {{d.Importe}}</span>\n\n              </p>                  \n\n          </div>\n\n        </ion-item>\n\n        <!--<ion-item (click)="edit_event()">\n\n          <img src="assets/imgs/3.png" class="bg">\n\n          \n\n          <ion-badge item-end>\n\n              <ion-icon name="md-stopwatch"></ion-icon>\n\n              2 Dias\n\n          </ion-badge>\n\n          <div class="text">\n\n              <h2>Mesa dulce para eventos hasta 20 personas </h2>\n\n              <p class="d-flex">\n\n                  <span class="text-theme">Palermo. Buenos Aires</span>\n\n                  <span class=""> | Gastronomía</span>\n\n                  <span class="end">$5.600</span>\n\n              </p>                  \n\n          </div>\n\n        </ion-item>\n\n        <ion-item (click)="edit_event()">\n\n          <img src="assets/imgs/6.png" class="bg">\n\n          \n\n          <ion-badge item-end>\n\n              <ion-icon name="md-stopwatch"></ion-icon>\n\n              10 Horas\n\n          </ion-badge>\n\n          <div class="text">\n\n              <h2>5 Remeras manga corta marca Narrow </h2>\n\n              <p class="d-flex">\n\n                  <span class="text-theme">Palermo. Buenos Aires</span>\n\n                  <span class=""> | Moda</span>\n\n                  <span class="end">$1.800</span>\n\n              </p>                  \n\n          </div>\n\n        </ion-item>-->\n\n    </ng-container>\n\n      </ion-list>      \n\n      <ion-list class="ListReview" no-lines *ngSwitchCase="\'Recibidos\'">\n\n        <ion-item  (click)="ViewMatch()">\n\n            <div class="item_header d-flex">\n\n                <div class="profile d-flex">\n\n                    <div class="profile-img">\n\n                        <img src="assets/imgs/dp1.png">\n\n                    </div>\n\n                    <h2 class="text-black">\n\n                        Martina Valdez\n\n                        <span class="text-gray">3 Horas</span>\n\n                    </h2>\n\n                </div>\n\n                <div class="rating end">\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                </div>\n\n            </div>\n\n            <p class="text-white text">\n\n                Hola tengo una bicicleta playera es muy bueno estado para intercambiar por las clases de Guitarra. Precio estimado $2500\n\n            </p>\n\n        </ion-item>\n\n        \n\n        <ion-item  (click)="ViewMatch()"> \n\n            <div class="item_header d-flex">\n\n                <div class="profile d-flex">\n\n                    <div class="profile-img">\n\n                        <img src="assets/imgs/dp3.png">\n\n                    </div>\n\n                    <h2 class="text-black">\n\n                        Julia Mendes\n\n                        <span class="text-gray">15/10/2019</span>\n\n                    </h2>\n\n                </div>\n\n                <div class="rating end">\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                </div>\n\n            </div>\n\n            <p class="text-white text">\n\n                Hola tengo una cámara de fotos Kodak para cambiar por las clases de Guitarra. Precio estimado $1900\n\n            </p>\n\n        </ion-item>\n\n\n\n        <ion-item  (click)="ViewMatch()">\n\n            <div class="item_header d-flex">\n\n                <div class="profile d-flex">\n\n                    <div class="profile-img">\n\n                        <img src="assets/imgs/user4.jpg">\n\n                    </div>\n\n                    <h2 class="text-black">\n\n                        Silvia Paez\n\n                        <span class="text-gray">15/10/2019</span>\n\n                    </h2>\n\n                </div>\n\n                <div class="rating end">\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                </div>\n\n            </div>\n\n            <p class="text-white text">\n\n                Quisiera cambiar un microondas por tus Anteojos Rayban. Precio estimado $3500\n\n            </p>\n\n        </ion-item>\n\n        \n\n        <ion-item  (click)="ViewMatch()">\n\n            <div class="item_header d-flex">\n\n                <div class="profile d-flex">\n\n                    <div class="profile-img">\n\n                        <img src="assets/imgs/user3.jpg">\n\n                    </div>\n\n                    <h2 class="text-black">\n\n                        Pablo Mesenas\n\n                        <span class="text-gray">10/10/2019</span>\n\n                    </h2>\n\n                </div>\n\n                <div class="rating end">\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class="acteive"></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                    <ion-icon name="md-star" class=""></ion-icon>\n\n                </div>\n\n            </div>\n\n            <p class="text-white text">\n\n                Quisiera cambiar servicios de páginas web por tus Anteojos Rayban. Precio estimado $3000\n\n            </p>\n\n        </ion-item>\n\n    </ion-list>\n\n      <ion-list *ngSwitchCase="\'Canjeados\'">\n\n          <ion-item (click)="eventdetail()">\n\n              <img src="assets/imgs/12.jpg" class="bg">\n\n              <ion-badge item-end>\n\n                  <ion-icon name="md-calendar"></ion-icon>\n\n                  14/10/2019\n\n              </ion-badge>\n\n              <div class="text">\n\n                  <h2>1 Parrillada completa para 4 personas</h2>\n\n                  <p class="d-flex">\n\n                      <span class="text-theme">Parrilla Locos de Asar</span>\n\n                      <span class="">| Gastronomía</span>\n\n                  </p>\n\n              </div>\n\n          </ion-item>\n\n          <ion-item (click)="eventdetail()">\n\n              <img src="assets/imgs/18.jpg" class="bg">\n\n              <ion-badge item-end>\n\n                  <ion-icon name="md-calendar"></ion-icon>\n\n                  10/10/2019\n\n              </ion-badge>\n\n              <div class="text">\n\n                  <h2>2 Docenas de facturas mixtas </h2>\n\n                  <p class="d-flex">\n\n                      <span class="text-theme">Las Medialunas del Abuelo</span>\n\n                      <span class="">| Gastronomía</span>\n\n                  </p>\n\n              </div>\n\n          </ion-item>\n\n        \n\n      </ion-list>\n\n  </div>\n\n  \n\n</ion-content>\n\n<ion-footer no-border class="d-flex">\n\n  <ion-icon class="material-icons text-white bg-theme end" (click)="NuevoCanje()">add</ion-icon>\n\n</ion-footer>'/*ion-inline-end:"C:\workspace\Konectia\Mobile\MundoCanjeApp\src\pages\canjes\canjes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_10__providers_product_service_product_service__["a" /* ProductServiceProvider */]])
    ], CanjesPage);
    return CanjesPage;
}());

//# sourceMappingURL=canjes.js.map

/***/ }),

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_product_global_product__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the CategoryServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductServiceProvider = /** @class */ (function () {
    function ProductServiceProvider(http, product) {
        this.http = http;
        this.product = product;
        this.apiUrl = 'http://localhost:51199/api/';
    }
    ProductServiceProvider.prototype.getHome = function () {
        return this.http.get(this.apiUrl + 'productos/HomeApp');
    };
    ProductServiceProvider.prototype.getProductByUser = function (idUsuario) {
        return this.http.get(this.apiUrl + 'productos/ProductsByUser/' + idUsuario);
    };
    ProductServiceProvider.prototype.postProduct = function (product) {
        product.Id = "0";
        console.log(product);
        return this.http.post(this.apiUrl + 'Productos/', product);
    };
    var _a, _b;
    ProductServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]) === "function" ? _a : Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__providers_global_product_global_product__["a" /* GlobalProductProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_global_product_global_product__["a" /* GlobalProductProvider */]) === "function" ? _b : Object])
    ], ProductServiceProvider);
    return ProductServiceProvider;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalProvider = /** @class */ (function () {
    function GlobalProvider() {
    }
    GlobalProvider.prototype.getUser = function () {
        return this.user;
    };
    GlobalProvider.prototype.setUser = function (user) {
        this.user = user;
    };
    GlobalProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalProvider);
    return GlobalProvider;
}());

//# sourceMappingURL=global.js.map

/***/ })

},[242]);
//# sourceMappingURL=main.js.map