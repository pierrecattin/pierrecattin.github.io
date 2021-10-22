(self["webpackChunkroulette"] = self["webpackChunkroulette"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./board/board.component */ 63460);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);



class AppComponent {
    constructor() {
        this.title = 'roulette';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["role", "main", 1, "content"], [2, "width", "70%"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "The Strictly Positive Roulette");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-board");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "router-outlet");
    } }, directives: [_board_board_component__WEBPACK_IMPORTED_MODULE_0__.BoardComponent, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet], styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #d4d4d4;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBKQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUFDSjs7QUFFRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgXCJBcHBsZSBDb2xvciBFbW9qaVwiLCBcIlNlZ29lIFVJIEVtb2ppXCIsIFwiU2Vnb2UgVUkgU3ltYm9sXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogcmdiKDIxMiwgMjEyLCAyMTIpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICB9XHJcblxyXG4gIC5jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuIl19 */"] });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/grid-list */ 85937);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/table */ 54302);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board/board.component */ 63460);
/* harmony import */ var _bet_dialog_bet_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bet-dialog/bet-dialog.component */ 46830);
/* harmony import */ var _bet_table_bet_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bet-table/bet-table.component */ 3842);
/* harmony import */ var _payoff_dialog_payoff_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payoff-dialog/payoff-dialog.component */ 40340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridListModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _board_board_component__WEBPACK_IMPORTED_MODULE_2__.BoardComponent,
        _bet_dialog_bet_dialog_component__WEBPACK_IMPORTED_MODULE_3__.BetDialogComponent,
        _bet_table_bet_table_component__WEBPACK_IMPORTED_MODULE_4__.BetTableComponent,
        _payoff_dialog_payoff_dialog_component__WEBPACK_IMPORTED_MODULE_5__.PayoffDialogComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_8__.MatGridListModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialogModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormFieldModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormsModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_15__.MatTableModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_16__.MatProgressSpinnerModule] }); })();


/***/ }),

/***/ 46830:
/*!****************************************************!*\
  !*** ./src/app/bet-dialog/bet-dialog.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BetDialogComponent": () => (/* binding */ BetDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ 65788);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ 64742);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 70781);







class BetDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
BetDialogComponent.ɵfac = function BetDialogComponent_Factory(t) { return new (t || BetDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
BetDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BetDialogComponent, selectors: [["bet-dialog"]], decls: 14, vars: 3, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["appearance", "fill"], ["matInput", "", 3, "ngModel", "ngModelChange"], ["mat-dialog-action", ""], ["mat-button", "", 3, "click"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"]], template: function BetDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Place new bet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Bet amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BetDialogComponent_Template_input_ngModelChange_8_listener($event) { return ctx.data.betAmount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BetDialogComponent_Template_button_click_10_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Place bet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Betting on ", ctx.data.cellPicked.key, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.data.betAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", ctx.data.betAmount);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_3__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose], encapsulation: 2 });


/***/ }),

/***/ 3842:
/*!**************************************************!*\
  !*** ./src/app/bet-table/bet-table.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BetTableComponent": () => (/* binding */ BetTableComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ 54302);


function BetTableComponent_th_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cell ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetTableComponent_td_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bet_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bet_r6.cellKey, " ");
} }
function BetTableComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Amount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BetTableComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bet_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", bet_r7.amount, " ");
} }
function BetTableComponent_tr_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 9);
} }
function BetTableComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 10);
} }
class BetTableComponent {
    constructor(differs) {
        this.displayedColumns = ['cellKey', 'amount'];
        this.dataSource = [];
        this.differ = differs.find([]).create();
    }
    ngDoCheck() {
        const changes = this.differ.diff(this.bets);
        if (changes) {
            this.refreshBetsTable();
        }
    }
    refreshBetsTable() {
        this.dataSource = [];
        for (let bet of this.bets) {
            this.addBetToTable(bet);
        }
    }
    addBetToTable(bet) {
        let newEntry = [{ cellKey: bet.cell.key, amount: bet.amount }];
        this.dataSource.push(newEntry[0]);
    }
}
BetTableComponent.ɵfac = function BetTableComponent_Factory(t) { return new (t || BetTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.KeyValueDiffers)); };
BetTableComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BetTableComponent, selectors: [["app-bet-table"]], inputs: { bets: "bets" }, decls: 9, vars: 3, consts: [["mat-table", "", 1, "mat-elevation-z8", 3, "dataSource"], ["matColumnDef", "cellKey"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "amount"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function BetTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BetTableComponent_th_2_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BetTableComponent_td_3_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BetTableComponent_th_5_Template, 2, 0, "th", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BetTableComponent_td_6_Template, 2, 1, "td", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, BetTableComponent_tr_7_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BetTableComponent_tr_8_Template, 1, 0, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_1__.MatRow], styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJldC10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJiZXQtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9Il19 */"] });


/***/ }),

/***/ 13348:
/*!************************!*\
  !*** ./src/app/bet.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bet": () => (/* binding */ Bet)
/* harmony export */ });
class Bet {
    constructor(cell, value) {
        this.cell = cell;
        this.amount = value;
    }
}


/***/ }),

/***/ 63460:
/*!******************************************!*\
  !*** ./src/app/board/board.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BoardComponent": () => (/* binding */ BoardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var _bet_dialog_bet_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bet-dialog/bet-dialog.component */ 46830);
/* harmony import */ var _payoff_dialog_payoff_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../payoff-dialog/payoff-dialog.component */ 40340);
/* harmony import */ var _bet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bet */ 13348);
/* harmony import */ var _dealer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dealer */ 43845);
/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cell */ 33084);
/* harmony import */ var _contract_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contract.service */ 21272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/grid-list */ 85937);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 70781);
/* harmony import */ var _bet_table_bet_table_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../bet-table/bet-table.component */ 3842);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 80181);















function BoardComponent_mat_grid_tile_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoardComponent_mat_grid_tile_1_Template_mat_grid_tile_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const cell_r4 = restoredCtx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.placeBet(cell_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r0.mapFillColor(cell_r4.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("colspan", cell_r4.colspan)("rowspan", cell_r4.rowspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cell_r4.key);
} }
function BoardComponent_mat_grid_tile_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-tile", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoardComponent_mat_grid_tile_3_Template_mat_grid_tile_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9); const cell_r7 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.placeBet(cell_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cell_r7 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("background", ctx_r1.mapFillColor(cell_r7.color));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("colspan", cell_r7.colspan)("rowspan", cell_r7.rowspan);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](cell_r7.key);
} }
function BoardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "app-bet-table", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoardComponent_div_6_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r10.clearBets(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Clear bets");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("bets", ctx_r2.bets);
} }
function BoardComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
class BoardComponent {
    constructor(dialog, contractService) {
        this.dialog = dialog;
        this.contractService = contractService;
        this.bets = [];
        this.userAddress = null;
        this.tokenBalance = null;
        this.tokenTotalSupply = null;
        this.loading = false;
        this.cells = [];
        // add cells in order they should be placed
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("1-18", 1, 2));
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("1-12", 1, 4));
        for (var num = 1; num <= 6; num++) {
            this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell(String(num), 1, 1));
        }
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("Even", 1, 2));
        for (var num = 7; num <= 12; num++) {
            this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell(String(num), 1, 1));
        }
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("Red", 1, 2));
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("13-24", 1, 4));
        for (var num = 13; num <= 18; num++) {
            this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell(String(num), 1, 1));
        }
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("Black", 1, 2));
        for (var num = 19; num <= 24; num++) {
            this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell(String(num), 1, 1));
        }
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("Odd", 1, 2));
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("25-36", 1, 4));
        for (var num = 25; num <= 30; num++) {
            this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell(String(num), 1, 1));
        }
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("19-36", 1, 2));
        for (var num = 31; num <= 36; num++) {
            this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell(String(num), 1, 1));
        }
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("1st col", 1, 1));
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("2nd col", 1, 1));
        this.cells.push(new _cell__WEBPACK_IMPORTED_MODULE_4__.Cell("3rd col", 1, 1));
    }
    ngOnInit() {
        this.refreshContractState();
    }
    refreshContractState() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.userAddress = yield this.contractService.getAccount();
            this.tokenTotalSupply = yield this.contractService.totalSupply();
            this.tokenBalance = yield this.contractService.balanceOf(this.userAddress);
        });
    }
    placeBet(cell) {
        const dialogRef = this.dialog.open(_bet_dialog_bet_dialog_component__WEBPACK_IMPORTED_MODULE_0__.BetDialogComponent, {
            data: {
                cellPicked: _cell__WEBPACK_IMPORTED_MODULE_4__.Cell,
                betAmount: ''
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (this.isNumber(result)) {
                this.saveBet(cell, Number(result));
            }
        });
    }
    saveBet(cell, amount) {
        this.bets.push(new _bet__WEBPACK_IMPORTED_MODULE_2__.Bet(cell, amount));
    }
    clearBets() {
        this.bets = [];
    }
    spin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.loading = true;
            let dealer = new _dealer__WEBPACK_IMPORTED_MODULE_3__.Dealer(this.contractService);
            let receiptId = yield dealer.pay(this.bets);
            const dialogRef = this.dialog.open(_payoff_dialog_payoff_dialog_component__WEBPACK_IMPORTED_MODULE_1__.PayoffDialogComponent, {
                data: {
                    receiptId: receiptId
                }
            });
            dialogRef.afterClosed().subscribe(results => {
                this.clearBets();
            });
            this.loading = false;
        });
    }
    isNumber(n) {
        return !isNaN(parseFloat(n)) && !isNaN(n - 0);
    }
    mapFillColor(keyColor) {
        switch (keyColor) {
            case _cell__WEBPACK_IMPORTED_MODULE_4__.Cell.Color.black: {
                return ("black");
            }
            case _cell__WEBPACK_IMPORTED_MODULE_4__.Cell.Color.green: {
                return ("darkgreen");
            }
            case (_cell__WEBPACK_IMPORTED_MODULE_4__.Cell.Color.red): {
                return ("darkred");
            }
        }
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_contract_service__WEBPACK_IMPORTED_MODULE_5__.ContractService)); };
BoardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["app-board"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_contract_service__WEBPACK_IMPORTED_MODULE_5__.ContractService])], decls: 27, vars: 9, consts: [["cols", "5", "rowHeight", "45px", "gutterSize", "10"], ["class", "clickable-tile", 3, "colspan", "rowspan", "background", "click", 4, "ngFor", "ngForOf"], [1, "invisible-tile", 3, "colspan", "rowspan"], ["style", "width:30%;", 4, "ngIf"], ["mat-raised-button", "", 3, "click"], [4, "ngIf"], [1, "clickable-tile", 3, "colspan", "rowspan", "click"], [1, "cell-label"], [2, "width", "30%"], [3, "bets"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-grid-list", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, BoardComponent_mat_grid_tile_1_Template, 3, 5, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "mat-grid-tile", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, BoardComponent_mat_grid_tile_3_Template, 3, 5, "mat-grid-tile", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, BoardComponent_div_6_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_11_listener() { return ctx.spin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Spin");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, BoardComponent_div_24_Template, 2, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.cells.slice(0, 45));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("colspan", 2)("rowspan", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.cells.slice(45, 48));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.bets.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Account: ", ctx.userAddress, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" DeCa Balance: ", ctx.tokenBalance, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Total DeCa supply: ", ctx.tokenTotalSupply, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridList, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_10__.MatGridTile, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _bet_table_bet_table_component__WEBPACK_IMPORTED_MODULE_6__.BetTableComponent, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatSpinner], styles: [".mat-grid-tile[_ngcontent-%COMP%] {\n  background-color: #045c04;\n}\n\n.clickable-tile[_ngcontent-%COMP%] {\n  border: solid 1px white;\n  padding: 0px !important;\n  padding-top: 0px !important;\n  border-spacing: 0px;\n  vertical-align: top;\n  transition: all 0.2s ease-in-out;\n  box-shadow: 5px 10px 20px rgba(0, 0, 0, 0.5);\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n.clickable-tile[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n  z-index: 1;\n  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.5);\n}\n\n.clickable-tile[_ngcontent-%COMP%]:active {\n  transform: scale(1.1);\n  transition: all 0.01s ease-in-out;\n  box-shadow: 15px 30px 20px rgba(0, 0, 0, 0.5);\n}\n\n.cell-label[_ngcontent-%COMP%] {\n  font-size: 2em !important;\n  color: #d4d4d4;\n  font-family: serif;\n}\n\n.invisible-tile[_ngcontent-%COMP%] {\n  border: none;\n  box-shadow: none;\n  background-color: #11ffee00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNJLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLDRDQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0VBQ0EsNkNBQUE7QUFDSjs7QUFFRTtFQUNFLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSw2Q0FBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBQ0YiLCJmaWxlIjoiYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWdyaWQtdGlsZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzA0NWMwNDtcclxufVxyXG5cclxuLmNsaWNrYWJsZS10aWxlIHtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHdoaXRlO1xyXG4gICAgcGFkZGluZzowcHggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOjBweCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXNwYWNpbmc6MHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDEwcHggMjBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZVxyXG59XHJcblxyXG4uY2xpY2thYmxlLXRpbGU6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMDUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJveC1zaGFkb3c6IDEwcHggMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcbiAgXHJcbiAgLmNsaWNrYWJsZS10aWxlOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjAxcyBlYXNlLWluLW91dDtcclxuICAgIGJveC1zaGFkb3c6IDE1cHggMzBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICB9XHJcblxyXG4gIC5jZWxsLWxhYmVse1xyXG4gICAgZm9udC1zaXplOiAyZW0gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiByZ2IoMjEyLCAyMTIsIDIxMik7XHJcbiAgICBmb250LWZhbWlseTpzZXJpZjtcclxufVxyXG5cclxuLmludmlzaWJsZS10aWxle1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjMTFmZmVlMDA7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 33084:
/*!*************************!*\
  !*** ./src/app/cell.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cell": () => (/* binding */ Cell)
/* harmony export */ });
class Cell {
    constructor(key, colspan, rowspan) {
        this.key = key; // validity of key checked in getType()
        this.type = this.getType();
        this.color = this.getColor();
        this.winningNumbers = this.getWinningNumbers();
        this.payoffFactor = this.getPayoffFactor();
        this.colspan = colspan;
        this.rowspan = rowspan;
    }
    getType() {
        if (this.key.length <= 2) {
            return (Cell.Type.number);
        }
        switch (this.key) {
            case "Black":
            case "Red": {
                return (Cell.Type.color);
            }
            case "Even":
            case "Odd": {
                return (Cell.Type.parity);
            }
            case "1st col":
            case "2nd col":
            case "3rd col": {
                return (Cell.Type.column);
            }
            case "1-18":
            case "1-12":
            case "13-24":
            case "19-36":
            case "25-36": {
                return (Cell.Type.range);
            }
        }
        throw new Error('Invalid key: ' + this.key);
    }
    getWinningNumbers() {
        let winningNumbers = [];
        switch (this.type) {
            case (Cell.Type.number): {
                winningNumbers.push(this.getNumber());
                return (winningNumbers);
            }
            case Cell.Type.color: {
                for (let i = 1; i <= 36; i++) {
                    if (this.color == this.findNumberColor(i)) {
                        winningNumbers.push(i);
                    }
                }
                return (winningNumbers);
            }
            case Cell.Type.parity: {
                for (let i = 1; i <= 36; i++) {
                    if ((this.key == "Even" && (i % 2 == 0)) ||
                        this.key == "Odd" && (i % 2 == 1)) {
                        winningNumbers.push(i);
                    }
                }
                return (winningNumbers);
            }
            case Cell.Type.range: {
                let rangeBounds = this.key.split("-");
                if (rangeBounds.length != 2) {
                    throw new Error('Invalid key for Cell.Type.range: ' + this.key);
                }
                for (let i = +rangeBounds[0]; i <= +rangeBounds[1]; i++) {
                    winningNumbers.push(i);
                }
                return (winningNumbers);
            }
            case Cell.Type.column: {
                for (let i = 1; i <= 36; i++) {
                    if ((this.key == "1st col" && (i % 3 == 1)) ||
                        this.key == "2nd col" && (i % 3 == 2) ||
                        this.key == "3rd col" && (i % 3 == 0)) {
                        winningNumbers.push(i);
                    }
                }
                return (winningNumbers);
            }
        }
    }
    getPayoffFactor() {
        return (36 / (this.winningNumbers.length));
    }
    getSpan() {
        if (this.key.length <= 2) {
            this.rowspan = 1;
            this.colspan = 1;
            return;
        }
        switch (this.key) {
            case "Black":
            case "Red": {
                this.rowspan = 1;
                this.colspan = 1;
                return;
            }
            case "Even":
            case "Odd": {
                this.rowspan = 1;
                this.colspan = 1;
                return;
            }
            case "1st col":
            case "2nd col":
            case "3rd col": {
                this.rowspan = 1;
                this.colspan = 1;
                return;
            }
            case "1-18":
            case "1-12":
            case "13-24":
            case "19-36":
            case "25-36": {
                this.rowspan = 1;
                this.colspan = 1;
                return;
            }
        }
        throw new Error('Invalid key: ' + this.key);
    }
    getColor() {
        switch (this.type) {
            case Cell.Type.color: {
                if (this.key == "Black") {
                    return (Cell.Color.black);
                }
                else {
                    return (Cell.Color.red);
                }
            }
            case Cell.Type.number: {
                return this.getNumberColor();
            }
        }
        return (Cell.Color.green); // for type column and range 
    }
    getNumber() {
        this.checkTypeNumber();
        return (+this.key);
    }
    checkTypeNumber() {
        if (this.type != Cell.Type.number) {
            throw new Error('Not a Cell.Type.number');
        }
    }
    getNumberColor() {
        this.checkTypeNumber();
        return (this.findNumberColor(this.getNumber()));
    }
    findNumberColor(num) {
        let cellColor;
        if (num <= 10 || (num >= 19 && num <= 28)) {
            if (num % 2 == 1) {
                cellColor = Cell.Color.red;
            }
            else {
                cellColor = Cell.Color.black;
            }
        }
        else {
            if (num % 2 == 1) {
                cellColor = Cell.Color.black;
            }
            else {
                cellColor = Cell.Color.red;
            }
        }
        return (cellColor);
    }
    adaptForContract() {
        /*number, // 0
        red, // 1
        black, // 2
        odd, // 3
        even, // 4
        range_1_18, // 5
        range_19_36, // 6
        range_1_12, // 7
        range_13_24, // 8
        range_25_36, // 9
        column_1, // 10
        column_2, // 11
        column_3 // 12 */
        if (this.key.length <= 2) {
            return ([0, this.getNumber()]);
        }
        switch (this.key) {
            case "Red": return ([1, 0]);
            case "Black": return ([2, 0]);
            case "Odd": return ([3, 0]);
            case "Even": return ([4, 0]);
            case "1-18": return ([5, 0]);
            case "19-36": return ([6, 0]);
            case "1-12": return ([7, 0]);
            case "13-24": return ([8, 0]);
            case "25-36": return ([9, 0]);
            case "1st col": return ([10, 0]);
            case "2nd col": return ([11, 0]);
            case "3rd col": return ([12, 0]);
        }
        throw new Error('Invalid key: ' + this.key);
    }
}
(function (Cell) {
    let Type;
    (function (Type) {
        Type["number"] = "number";
        Type["color"] = "color";
        Type["range"] = "range";
        Type["column"] = "column";
        Type["parity"] = "parity";
    })(Type = Cell.Type || (Cell.Type = {}));
    let Color;
    (function (Color) {
        Color["green"] = "green";
        Color["red"] = "red";
        Color["black"] = "black";
    })(Color = Cell.Color || (Cell.Color = {}));
})(Cell || (Cell = {}));


/***/ }),

/***/ 21272:
/*!*************************************!*\
  !*** ./src/app/contract.service.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractService": () => (/* binding */ ContractService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 3786);
/* harmony import */ var Web3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Web3 */ 62992);
/* harmony import */ var Web3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Web3__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



const ABI = __webpack_require__(/*! ../../../contract/abi.json */ 68082);
const ADDRESS = "0x552399c58DCDEfa20dFf38914ceC8bdC31734F2C";
class ContractService {
    constructor() {
        this.account = null;
        this.contract = null;
        this.connect();
    }
    connect() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            //TODO: https://betterprogramming.pub/ethereum-dapps-how-to-load-the-blockchain-8756ca0fa0d1
            if (window.ethereum) {
                window.web3 = new (Web3__WEBPACK_IMPORTED_MODULE_0___default())(window.ethereum);
                yield window.ethereum.send('eth_requestAccounts');
                var accounts = yield window.web3.eth.getAccounts();
                this.account = accounts[0];
                console.log('contract.service :: account');
                console.log(this.account);
                this.contract = new window.web3.eth.Contract(ABI, ADDRESS);
                console.log('contract.service :: contract');
                console.log(this.contract);
            }
        });
    }
    getAccount() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.connect();
            return (this.account);
        });
    }
    totalSupply() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.connect();
            let supply = yield this.contract.methods.totalSupply().call();
            return (supply / Math.pow(10, 18));
        });
    }
    balanceOf(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            yield this.connect();
            let balance = yield this.contract.methods.balanceOf(address).call();
            return (balance / Math.pow(10, 18));
        });
    }
    spin(bets) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const receipt = yield this.contract.methods.spin(bets).send({ from: this.account });
            return (receipt.events.VRFRequested.returnValues.requestId);
        });
    }
}
ContractService.ɵfac = function ContractService_Factory(t) { return new (t || ContractService)(); };
ContractService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ContractService, factory: ContractService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 43845:
/*!***************************!*\
  !*** ./src/app/dealer.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dealer": () => (/* binding */ Dealer)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 3786);

class Dealer {
    constructor(contractService) {
        this.contractService = contractService;
    }
    simulateSpin() {
        let outcome = Math.ceil(Math.random() * 36);
        console.info("Simulated spin outcome= " + outcome);
        return outcome;
    }
    betPayoff(spinOutcome, bet) {
        if (bet.cell.winningNumbers.includes(spinOutcome)) {
            return (bet.cell.payoffFactor * bet.amount);
        }
        else {
            return (0);
        }
    }
    adaptBets(bets) {
        let adaptedBets = [];
        for (let bet of bets) {
            let cellAdaptedForContract = bet.cell.adaptForContract();
            adaptedBets.push({ betType: cellAdaptedForContract[0],
                cellNumber: cellAdaptedForContract[1],
                amount: bet.amount });
            console.log("adaptBets: " + cellAdaptedForContract[0] + "; " + cellAdaptedForContract[1] + "; " + bet.amount);
        }
        return (adaptedBets);
    }
    pay(bets) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let receiptId = yield this.contractService.spin(this.adaptBets(bets));
            return (receiptId);
        });
    }
}


/***/ }),

/***/ 40340:
/*!**********************************************************!*\
  !*** ./src/app/payoff-dialog/payoff-dialog.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayoffDialogComponent": () => (/* binding */ PayoffDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 22213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 70781);




class PayoffDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    onNoClick() {
        this.dialogRef.close();
    }
}
PayoffDialogComponent.ɵfac = function PayoffDialogComponent_Factory(t) { return new (t || PayoffDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA)); };
PayoffDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PayoffDialogComponent, selectors: [["app-payoff-dialog"]], decls: 8, vars: 1, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-action", ""], ["mat-button", "", 3, "click"]], template: function PayoffDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Spin request sent");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PayoffDialogComponent_Template_button_click_6_listener() { return ctx.onNoClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Receipt ID: ", ctx.data.receiptId, "");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogTitle, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogContent, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXlvZmYtZGlhbG9nLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46601:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 71922:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 2363:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 27790:
/*!************************!*\
  !*** buffer (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 52361:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 94616:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 68082:
/*!****************************!*\
  !*** ../contract/abi.json ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint8","name":"spinResult","type":"uint8"},{"indexed":false,"internalType":"int256","name":"netProfit","type":"int256"}],"name":"Payoff","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":true,"internalType":"bytes32","name":"requestId","type":"bytes32"},{"indexed":false,"internalType":"uint8","name":"spinResult","type":"uint8"}],"name":"SpinCompleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":true,"internalType":"bytes32","name":"requestId","type":"bytes32"}],"name":"VRFRequested","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"uint256","name":"randomness","type":"uint256"}],"name":"rawFulfillRandomness","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"enum DeCa.BetType","name":"betType","type":"uint8"},{"internalType":"uint8","name":"cellNumber","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct DeCa.Bet[]","name":"bets","type":"tuple[]"}],"name":"spin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map