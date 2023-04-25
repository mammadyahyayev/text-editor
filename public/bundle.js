/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/blockComponent.ts":
/*!******************************************!*\
  !*** ./src/components/blockComponent.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BlockComponent\": () => (/* binding */ BlockComponent)\n/* harmony export */ });\n/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ \"./src/components/component.ts\");\n\nclass BlockComponent extends _component__WEBPACK_IMPORTED_MODULE_0__.Component {\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9ibG9ja0NvbXBvbmVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF3QztBQUVqQyxNQUFNLGNBQWUsU0FBUSxpREFBUztDQUM1QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RleHQtZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvYmxvY2tDb21wb25lbnQudHM/NWIyZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/blockComponent.ts\n");

/***/ }),

/***/ "./src/components/component.ts":
/*!*************************************!*\
  !*** ./src/components/component.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var _utils_uuidGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/uuidGenerator */ \"./src/utils/uuidGenerator.ts\");\n\nclass Component {\n    constructor() {\n        this._uuid = _utils_uuidGenerator__WEBPACK_IMPORTED_MODULE_0__.UUIDGenerator.generateUUID();\n    }\n    get name() {\n        return this._name;\n    }\n    set name(name) {\n        this._name = name;\n    }\n    get uuid() {\n        return this._uuid;\n    }\n    get htmlElement() {\n        return this._htmlElement;\n    }\n    set htmlElement(htmlElement) {\n        this._htmlElement = htmlElement;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUQ7QUFFaEQsTUFBTSxTQUFTO0lBS3BCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyw0RUFBMEIsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQVcsSUFBSSxDQUFDLElBQVk7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBVyxXQUFXLENBQUMsV0FBd0I7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDbEMsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC1lZGl0b3IvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnQudHM/Yzk4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVVUlER2VuZXJhdG9yIH0gZnJvbSBcIi4uL3V0aWxzL3V1aWRHZW5lcmF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gIHByaXZhdGUgX3V1aWQ6IHN0cmluZztcclxuICBwcml2YXRlIF9uYW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfaHRtbEVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMuX3V1aWQgPSBVVUlER2VuZXJhdG9yLmdlbmVyYXRlVVVJRCgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBuYW1lKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzZXQgbmFtZShuYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB1dWlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fdXVpZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXQgaHRtbEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2h0bWxFbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBodG1sRWxlbWVudChodG1sRWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2h0bWxFbGVtZW50ID0gaHRtbEVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/component.ts\n");

/***/ }),

/***/ "./src/components/textComponent.ts":
/*!*****************************************!*\
  !*** ./src/components/textComponent.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TextComponent\": () => (/* binding */ TextComponent)\n/* harmony export */ });\n/* harmony import */ var _utils_domApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domApi */ \"./src/utils/domApi.ts\");\n/* harmony import */ var _blockComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockComponent */ \"./src/components/blockComponent.ts\");\n\n\nclass TextComponent extends _blockComponent__WEBPACK_IMPORTED_MODULE_1__.BlockComponent {\n    constructor(tag) {\n        super();\n        this.create(tag);\n    }\n    create(htmlElement, editable = true) {\n        this.isValidHTMLElement(htmlElement);\n        this.htmlElement = _utils_domApi__WEBPACK_IMPORTED_MODULE_0__.DomApi.createElement(htmlElement);\n        this.htmlElement.className = TextComponent.TEXT_CLASSNAME;\n        this.htmlElement.contentEditable = editable ? \"true\" : \"false\";\n    }\n    isValidHTMLElement(htmlElement) {\n        return TextComponent.SUPPORTED_TEXT_ELEMENTS.includes(htmlElement);\n    }\n}\nTextComponent.SUPPORTED_TEXT_ELEMENTS = [\"p\"];\nTextComponent.TEXT_CLASSNAME = \"paragraph\";\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZXh0Q29tcG9uZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5QztBQUNTO0FBRWxELE1BQWEsYUFBYyxTQUFRLDJEQUFjO0lBSS9DLFlBQVksR0FBWTtRQUN0QixLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxXQUFvQixFQUFFLFFBQVEsR0FBRyxJQUFJO1FBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsV0FBVyxHQUFHLCtEQUFvQixDQUFDLFdBQVcsQ0FBeUIsQ0FBQztRQUM3RSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7SUFDakUsQ0FBQztJQUVPLGtCQUFrQixDQUFDLFdBQW1CO1FBQzVDLE9BQU8sYUFBYSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyRSxDQUFDOztBQW5CdUIscUNBQXVCLEdBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQyw0QkFBYyxHQUFHLFdBQVcsQ0FBQztBQUY3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3RleHQtZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvdGV4dENvbXBvbmVudC50cz9jMjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0bWxUYWcgfSBmcm9tIFwiLi4vbW9kZWwvaHRtbFRhZ1wiO1xyXG5pbXBvcnQgeyBEb21BcGkgfSBmcm9tIFwiLi4vdXRpbHMvZG9tQXBpXCI7XHJcbmltcG9ydCB7IEJsb2NrQ29tcG9uZW50IH0gZnJvbSBcIi4vYmxvY2tDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0Q29tcG9uZW50IGV4dGVuZHMgQmxvY2tDb21wb25lbnQge1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IFNVUFBPUlRFRF9URVhUX0VMRU1FTlRTOiBzdHJpbmdbXSA9IFtcInBcIl07XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgVEVYVF9DTEFTU05BTUUgPSBcInBhcmFncmFwaFwiO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0YWc6IEh0bWxUYWcpIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5jcmVhdGUodGFnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlKGh0bWxFbGVtZW50OiBIdG1sVGFnLCBlZGl0YWJsZSA9IHRydWUpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNWYWxpZEhUTUxFbGVtZW50KGh0bWxFbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmh0bWxFbGVtZW50ID0gRG9tQXBpLmNyZWF0ZUVsZW1lbnQoaHRtbEVsZW1lbnQpIGFzIEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5jbGFzc05hbWUgPSBUZXh0Q29tcG9uZW50LlRFWFRfQ0xBU1NOQU1FO1xyXG4gICAgdGhpcy5odG1sRWxlbWVudC5jb250ZW50RWRpdGFibGUgPSBlZGl0YWJsZSA/IFwidHJ1ZVwiIDogXCJmYWxzZVwiO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkSFRNTEVsZW1lbnQoaHRtbEVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFRleHRDb21wb25lbnQuU1VQUE9SVEVEX1RFWFRfRUxFTUVOVFMuaW5jbHVkZXMoaHRtbEVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/textComponent.ts\n");

/***/ }),

/***/ "./src/exception/illegalArgumentException.ts":
/*!***************************************************!*\
  !*** ./src/exception/illegalArgumentException.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"IllegalArgumentException\": () => (/* binding */ IllegalArgumentException)\n/* harmony export */ });\nclass IllegalArgumentException extends Error {\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZXhjZXB0aW9uL2lsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTSx3QkFBeUIsU0FBUSxLQUFLO0NBRWxEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC1lZGl0b3IvLi9zcmMvZXhjZXB0aW9uL2lsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbi50cz83MTU1Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/exception/illegalArgumentException.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_textComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/textComponent */ \"./src/components/textComponent.ts\");\n/* harmony import */ var _model_htmlTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/htmlTag */ \"./src/model/htmlTag.ts\");\n/* harmony import */ var _tree_editorFactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tree/editorFactory */ \"./src/tree/editorFactory.ts\");\n\n\n\n// DOM Elements\nconst insertTextElementBtn = document.getElementById(\"insert-text-btn\");\nfunction start() {\n    const editor = _tree_editorFactory__WEBPACK_IMPORTED_MODULE_2__.EditorFactory.createEditor(\"editor\");\n    const textComponent = new _components_textComponent__WEBPACK_IMPORTED_MODULE_0__.TextComponent(_model_htmlTag__WEBPACK_IMPORTED_MODULE_1__.HtmlTag.P);\n    editor.addComponent(textComponent);\n}\ninsertTextElementBtn.addEventListener(\"click\", () => {\n    const editor = _tree_editorFactory__WEBPACK_IMPORTED_MODULE_2__.EditorFactory.getEditor();\n    const textComponent = new _components_textComponent__WEBPACK_IMPORTED_MODULE_0__.TextComponent(_model_htmlTag__WEBPACK_IMPORTED_MODULE_1__.HtmlTag.P);\n    editor.addComponent(textComponent);\n    console.log(editor.size());\n});\nstart();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEyRDtBQUNqQjtBQUNXO0FBRXJELGVBQWU7QUFDZixNQUFNLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ2xELGlCQUFpQixDQUNHLENBQUM7QUFFdkIsU0FBUyxLQUFLO0lBQ1osTUFBTSxNQUFNLEdBQUcsMkVBQTBCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEQsTUFBTSxhQUFhLEdBQUcsSUFBSSxvRUFBYSxDQUFDLHFEQUFTLENBQUMsQ0FBQztJQUNuRCxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRCxvQkFBb0IsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFO0lBQ2xELE1BQU0sTUFBTSxHQUFHLHdFQUF1QixFQUFFLENBQUM7SUFDekMsTUFBTSxhQUFhLEdBQUcsSUFBSSxvRUFBYSxDQUFDLHFEQUFTLENBQUMsQ0FBQztJQUNuRCxNQUFNLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQzVCLENBQUMsQ0FBQyxDQUFDO0FBRUgsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LWVkaXRvci8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRDb21wb25lbnQgfSBmcm9tIFwiLi9jb21wb25lbnRzL3RleHRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSHRtbFRhZyB9IGZyb20gXCIuL21vZGVsL2h0bWxUYWdcIjtcclxuaW1wb3J0IHsgRWRpdG9yRmFjdG9yeSB9IGZyb20gXCIuL3RyZWUvZWRpdG9yRmFjdG9yeVwiO1xyXG5cclxuLy8gRE9NIEVsZW1lbnRzXHJcbmNvbnN0IGluc2VydFRleHRFbGVtZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJpbnNlcnQtdGV4dC1idG5cIlxyXG4pIGFzIEhUTUxCdXR0b25FbGVtZW50O1xyXG5cclxuZnVuY3Rpb24gc3RhcnQoKTogdm9pZCB7XHJcbiAgY29uc3QgZWRpdG9yID0gRWRpdG9yRmFjdG9yeS5jcmVhdGVFZGl0b3IoXCJlZGl0b3JcIik7XHJcbiAgY29uc3QgdGV4dENvbXBvbmVudCA9IG5ldyBUZXh0Q29tcG9uZW50KEh0bWxUYWcuUCk7XHJcbiAgZWRpdG9yLmFkZENvbXBvbmVudCh0ZXh0Q29tcG9uZW50KTtcclxufVxyXG5cclxuaW5zZXJ0VGV4dEVsZW1lbnRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBjb25zdCBlZGl0b3IgPSBFZGl0b3JGYWN0b3J5LmdldEVkaXRvcigpO1xyXG4gIGNvbnN0IHRleHRDb21wb25lbnQgPSBuZXcgVGV4dENvbXBvbmVudChIdG1sVGFnLlApO1xyXG4gIGVkaXRvci5hZGRDb21wb25lbnQodGV4dENvbXBvbmVudCk7XHJcbiAgY29uc29sZS5sb2coZWRpdG9yLnNpemUoKSlcclxufSk7XHJcblxyXG5zdGFydCgpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/model/htmlTag.ts":
/*!******************************!*\
  !*** ./src/model/htmlTag.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HtmlTag\": () => (/* binding */ HtmlTag)\n/* harmony export */ });\nvar HtmlTag;\n(function (HtmlTag) {\n    HtmlTag[\"P\"] = \"p\";\n    HtmlTag[\"A\"] = \"a\";\n    HtmlTag[\"Div\"] = \"div\";\n    HtmlTag[\"Span\"] = \"span\";\n    HtmlTag[\"Img\"] = \"img\";\n})(HtmlTag || (HtmlTag = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwvaHRtbFRhZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBWSxPQU1YO0FBTkQsV0FBWSxPQUFPO0lBQ2pCLGtCQUFPO0lBQ1Asa0JBQU87SUFDUCxzQkFBVztJQUNYLHdCQUFhO0lBQ2Isc0JBQVc7QUFDYixDQUFDLEVBTlcsT0FBTyxLQUFQLE9BQU8sUUFNbEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXh0LWVkaXRvci8uL3NyYy9tb2RlbC9odG1sVGFnLnRzPzg1NjEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gSHRtbFRhZyB7XHJcbiAgUCA9IFwicFwiLFxyXG4gIEEgPSBcImFcIixcclxuICBEaXYgPSBcImRpdlwiLFxyXG4gIFNwYW4gPSBcInNwYW5cIixcclxuICBJbWcgPSBcImltZ1wiLFxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/model/htmlTag.ts\n");

/***/ }),

/***/ "./src/tree/editor.ts":
/*!****************************!*\
  !*** ./src/tree/editor.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Editor\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var _exception_illegalArgumentException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/illegalArgumentException */ \"./src/exception/illegalArgumentException.ts\");\n\nclass Editor {\n    constructor(editorId) {\n        this.components = [];\n        this._size = 0;\n        if (!editorId && editorId.trim() === \"\") {\n            throw new _exception_illegalArgumentException__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException(\"Please specify editor element in your HTML file!\");\n        }\n        const editorEl = document.getElementById(editorId);\n        if (!editorEl) {\n            throw new _exception_illegalArgumentException__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException(\"There is no element with id => \" + editorId);\n        }\n        this.editorHtmlElement = editorEl;\n    }\n    first() {\n        if (this.components.length == 0) {\n            return null;\n        }\n        return this.components[0];\n    }\n    last() {\n        if (this.components.length == 0) {\n            return null;\n        }\n        return this.components[this.components.length - 1];\n    }\n    addComponent(component) {\n        var _a;\n        if (!component) {\n            throw new _exception_illegalArgumentException__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException(\"component cannot be null!\");\n        }\n        (_a = this._currentComponent) === null || _a === void 0 ? void 0 : _a.htmlElement.classList.remove(\"current\");\n        component.htmlElement.focus();\n        component.htmlElement.classList.add(\"current\"); //TODO: Move this lines into component itself to ensure encapsulation\n        this._currentComponent = component;\n        this.components.push(this._currentComponent);\n        this.editorHtmlElement.appendChild(this._currentComponent.htmlElement);\n        this._size++;\n    }\n    size() {\n        return this._size;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlZS9lZGl0b3IudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDaUY7QUFHMUUsTUFBTSxNQUFNO0lBT2pCLFlBQVksUUFBZ0I7UUFOWCxlQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUl0QyxVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBR3hCLElBQUksQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN2QyxNQUFNLElBQUkseUZBQXdCLENBQ2hDLGtEQUFrRCxDQUNuRCxDQUFDO1NBQ0g7UUFFRCxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBbUIsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2IsTUFBTSxJQUFJLHlGQUF3QixDQUNoQyxpQ0FBaUMsR0FBRyxRQUFRLENBQzdDLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUM7SUFDcEMsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQsWUFBWSxDQUFDLFNBQW9COztRQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsTUFBTSxJQUFJLHlGQUF3QixDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDakU7UUFFRCxVQUFJLENBQUMsaUJBQWlCLDBDQUFFLFdBQVcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWhFLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsU0FBUyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMscUVBQXFFO1FBRXJILElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUM7UUFFbkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDdkUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVELElBQUk7UUFDRixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC1lZGl0b3IvLi9zcmMvdHJlZS9lZGl0b3IudHM/NjQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uIH0gZnJvbSBcIi4uL2V4Y2VwdGlvbi9pbGxlZ2FsQXJndW1lbnRFeGNlcHRpb25cIjtcclxuaW1wb3J0IHsgVHJlZSB9IGZyb20gXCIuL3RyZWVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3IgaW1wbGVtZW50cyBUcmVlIHtcclxuICBwcml2YXRlIHJlYWRvbmx5IGNvbXBvbmVudHM6IENvbXBvbmVudFtdID0gW107XHJcbiAgcHJpdmF0ZSByZWFkb25seSBlZGl0b3JIdG1sRWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIHByaXZhdGUgX2N1cnJlbnRDb21wb25lbnQ6IENvbXBvbmVudDtcclxuICBwcml2YXRlIF9zaXplOiBudW1iZXIgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcihlZGl0b3JJZDogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWVkaXRvcklkICYmIGVkaXRvcklkLnRyaW0oKSA9PT0gXCJcIikge1xyXG4gICAgICB0aHJvdyBuZXcgSWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uKFxyXG4gICAgICAgIFwiUGxlYXNlIHNwZWNpZnkgZWRpdG9yIGVsZW1lbnQgaW4geW91ciBIVE1MIGZpbGUhXCJcclxuICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBlZGl0b3JFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVkaXRvcklkKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgIGlmICghZWRpdG9yRWwpIHtcclxuICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbihcclxuICAgICAgICBcIlRoZXJlIGlzIG5vIGVsZW1lbnQgd2l0aCBpZCA9PiBcIiArIGVkaXRvcklkXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5lZGl0b3JIdG1sRWxlbWVudCA9IGVkaXRvckVsO1xyXG4gIH1cclxuXHJcbiAgZmlyc3QoKTogQ29tcG9uZW50IHwgbnVsbCB7XHJcbiAgICBpZiAodGhpcy5jb21wb25lbnRzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHNbMF07XHJcbiAgfVxyXG5cclxuICBsYXN0KCk6IENvbXBvbmVudCB8IG51bGwge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzW3RoaXMuY29tcG9uZW50cy5sZW5ndGggLSAxXTtcclxuICB9XHJcblxyXG4gIGFkZENvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCFjb21wb25lbnQpIHtcclxuICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbihcImNvbXBvbmVudCBjYW5ub3QgYmUgbnVsbCFcIik7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY3VycmVudENvbXBvbmVudD8uaHRtbEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImN1cnJlbnRcIik7XHJcblxyXG4gICAgY29tcG9uZW50Lmh0bWxFbGVtZW50LmZvY3VzKCk7XHJcbiAgICBjb21wb25lbnQuaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7IC8vVE9ETzogTW92ZSB0aGlzIGxpbmVzIGludG8gY29tcG9uZW50IGl0c2VsZiB0byBlbnN1cmUgZW5jYXBzdWxhdGlvblxyXG5cclxuICAgIHRoaXMuX2N1cnJlbnRDb21wb25lbnQgPSBjb21wb25lbnQ7XHJcblxyXG4gICAgdGhpcy5jb21wb25lbnRzLnB1c2godGhpcy5fY3VycmVudENvbXBvbmVudCk7XHJcbiAgICB0aGlzLmVkaXRvckh0bWxFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX2N1cnJlbnRDb21wb25lbnQuaHRtbEVsZW1lbnQpO1xyXG4gICAgdGhpcy5fc2l6ZSsrO1xyXG4gIH1cclxuXHJcbiAgc2l6ZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tree/editor.ts\n");

/***/ }),

/***/ "./src/tree/editorFactory.ts":
/*!***********************************!*\
  !*** ./src/tree/editorFactory.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"EditorFactory\": () => (/* binding */ EditorFactory)\n/* harmony export */ });\n/* harmony import */ var _editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor */ \"./src/tree/editor.ts\");\n\nclass EditorFactory {\n    static createEditor(editorId) {\n        if (!this.editorInstance) {\n            this.editorInstance = new _editor__WEBPACK_IMPORTED_MODULE_0__.Editor(editorId);\n        }\n        return this.editorInstance;\n    }\n    static getEditor() {\n        if (!this.editorInstance) {\n            throw new Error(\"There is no editor available!\");\n        }\n        return this.editorInstance;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlZS9lZGl0b3JGYWN0b3J5LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtDO0FBRTNCLE1BQU0sYUFBYTtJQUdqQixNQUFNLENBQUMsWUFBWSxDQUFDLFFBQWdCO1FBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwyQ0FBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO1FBRUQsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzdCLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBUztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7U0FDbEQ7UUFFRCxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC1lZGl0b3IvLi9zcmMvdHJlZS9lZGl0b3JGYWN0b3J5LnRzPzkyZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdG9yIH0gZnJvbSBcIi4vZWRpdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yRmFjdG9yeSB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgZWRpdG9ySW5zdGFuY2U6IEVkaXRvcjtcclxuXHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVFZGl0b3IoZWRpdG9ySWQ6IHN0cmluZyk6IEVkaXRvciB7XHJcbiAgICBpZiAoIXRoaXMuZWRpdG9ySW5zdGFuY2UpIHtcclxuICAgICAgdGhpcy5lZGl0b3JJbnN0YW5jZSA9IG5ldyBFZGl0b3IoZWRpdG9ySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLmVkaXRvckluc3RhbmNlO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXRpYyBnZXRFZGl0b3IoKTogRWRpdG9yIHtcclxuICAgIGlmICghdGhpcy5lZGl0b3JJbnN0YW5jZSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBpcyBubyBlZGl0b3IgYXZhaWxhYmxlIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5lZGl0b3JJbnN0YW5jZTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tree/editorFactory.ts\n");

/***/ }),

/***/ "./src/utils/domApi.ts":
/*!*****************************!*\
  !*** ./src/utils/domApi.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"DomApi\": () => (/* binding */ DomApi)\n/* harmony export */ });\n/* harmony import */ var _exception_illegalArgumentException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/illegalArgumentException */ \"./src/exception/illegalArgumentException.ts\");\n\nclass DomApi {\n    static createElement(tag) {\n        if (!tag) {\n            throw new _exception_illegalArgumentException__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException(\"tag cannot be null or empty\");\n        }\n        const element = document.createElement(tag.toString());\n        return element;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvZG9tQXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWlGO0FBRzFFLE1BQU0sTUFBTTtJQUNWLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBWTtRQUN0QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsTUFBTSxJQUFJLHlGQUF3QixDQUFDLDZCQUE2QixDQUFDLENBQUM7U0FDbkU7UUFFRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3RleHQtZWRpdG9yLy4vc3JjL3V0aWxzL2RvbUFwaS50cz9lOTkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbiB9IGZyb20gXCIuLi9leGNlcHRpb24vaWxsZWdhbEFyZ3VtZW50RXhjZXB0aW9uXCI7XHJcbmltcG9ydCB7IEh0bWxUYWcgfSBmcm9tIFwiLi4vbW9kZWwvaHRtbFRhZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERvbUFwaSB7XHJcbiAgcHVibGljIHN0YXRpYyBjcmVhdGVFbGVtZW50KHRhZzogSHRtbFRhZyk6IEhUTUxFbGVtZW50IHtcclxuICAgIGlmICghdGFnKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24oXCJ0YWcgY2Fubm90IGJlIG51bGwgb3IgZW1wdHlcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnLnRvU3RyaW5nKCkpO1xyXG4gICAgcmV0dXJuIGVsZW1lbnQ7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/domApi.ts\n");

/***/ }),

/***/ "./src/utils/uuidGenerator.ts":
/*!************************************!*\
  !*** ./src/utils/uuidGenerator.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UUIDGenerator\": () => (/* binding */ UUIDGenerator)\n/* harmony export */ });\nclass UUIDGenerator {\n    static generateUUID() {\n        let uuid = \"\";\n        while (uuid.length < 20) {\n            const min = 0;\n            const max = UUIDGenerator.letters.length;\n            const randNum = Math.floor(Math.random() * (max - min)) + min;\n            uuid += UUIDGenerator.letters[randNum];\n        }\n        return uuid;\n    }\n}\nUUIDGenerator.letters = \"abcdefghijklmnopqrstuwxvyz\";\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvdXVpZEdlbmVyYXRvci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsTUFBYSxhQUFhO0lBR2pCLE1BQU0sQ0FBQyxZQUFZO1FBQ3hCLElBQUksSUFBSSxHQUFXLEVBQUUsQ0FBQztRQUV0QixPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUFFO1lBQ3ZCLE1BQU0sR0FBRyxHQUFHLENBQUMsQ0FBQztZQUNkLE1BQU0sR0FBRyxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1lBQ3pDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQzlELElBQUksSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3hDO1FBRUQsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOztBQWJ1QixxQkFBTyxHQUFXLDRCQUE0QixDQUFDO0FBRC9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC1lZGl0b3IvLi9zcmMvdXRpbHMvdXVpZEdlbmVyYXRvci50cz80NmUzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVVUlER2VuZXJhdG9yIHtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBsZXR0ZXJzOiBzdHJpbmcgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXd4dnl6XCI7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZ2VuZXJhdGVVVUlEKCk6IHN0cmluZyB7XHJcbiAgICBsZXQgdXVpZDogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICB3aGlsZSAodXVpZC5sZW5ndGggPCAyMCkge1xyXG4gICAgICBjb25zdCBtaW4gPSAwO1xyXG4gICAgICBjb25zdCBtYXggPSBVVUlER2VuZXJhdG9yLmxldHRlcnMubGVuZ3RoO1xyXG4gICAgICBjb25zdCByYW5kTnVtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xyXG4gICAgICB1dWlkICs9IFVVSURHZW5lcmF0b3IubGV0dGVyc1tyYW5kTnVtXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdXVpZDtcclxuICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/uuidGenerator.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;