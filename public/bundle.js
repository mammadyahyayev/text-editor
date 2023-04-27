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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var _utils_uuidGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/uuidGenerator */ \"./src/utils/uuidGenerator.ts\");\n\nclass Component {\n    constructor() {\n        this._uuid = _utils_uuidGenerator__WEBPACK_IMPORTED_MODULE_0__.UUIDGenerator.generateUUID();\n    }\n    get name() {\n        return this._name;\n    }\n    set name(name) {\n        this._name = name;\n    }\n    get uuid() {\n        return this._uuid;\n    }\n    get htmlElement() {\n        return this._htmlElement;\n    }\n    set htmlElement(htmlElement) {\n        this._htmlElement = htmlElement;\n    }\n    applyStyle(styleType, value) {\n        this._htmlElement.style.setProperty(styleType, value);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDdUQ7QUFFaEQsTUFBTSxTQUFTO0lBS3BCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyw0RUFBMEIsRUFBRSxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFXLElBQUk7UUFDYixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQVcsSUFBSSxDQUFDLElBQVk7UUFDMUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQVcsSUFBSTtRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDO0lBRUQsSUFBVyxXQUFXLENBQUMsV0FBd0I7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUM7SUFDbEMsQ0FBQztJQUVELFVBQVUsQ0FBQyxTQUFvQixFQUFFLEtBQWdCO1FBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDeEQsQ0FBQztDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC1lZGl0b3IvLi9zcmMvY29tcG9uZW50cy9jb21wb25lbnQudHM/Yzk4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHlsZVR5cGUgfSBmcm9tIFwiLi4vbW9kZWwvc3R5bGVUeXBlXCI7XHJcbmltcG9ydCB7IFVVSURHZW5lcmF0b3IgfSBmcm9tIFwiLi4vdXRpbHMvdXVpZEdlbmVyYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBfdXVpZDogc3RyaW5nO1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuICBwcml2YXRlIF9odG1sRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fdXVpZCA9IFVVSURHZW5lcmF0b3IuZ2VuZXJhdGVVVUlEKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IG5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHNldCBuYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgdGhpcy5fbmFtZSA9IG5hbWU7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZ2V0IHV1aWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl91dWlkO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCBodG1sRWxlbWVudCgpOiBIVE1MRWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5faHRtbEVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0IGh0bWxFbGVtZW50KGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgdGhpcy5faHRtbEVsZW1lbnQgPSBodG1sRWxlbWVudDtcclxuICB9XHJcblxyXG4gIGFwcGx5U3R5bGUoc3R5bGVUeXBlOiBTdHlsZVR5cGUsIHZhbHVlOiBTdHlsZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuX2h0bWxFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlVHlwZSwgdmFsdWUpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/component.ts\n");

/***/ }),

/***/ "./src/components/textComponent.ts":
/*!*****************************************!*\
  !*** ./src/components/textComponent.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TextComponent\": () => (/* binding */ TextComponent)\n/* harmony export */ });\n/* harmony import */ var _utils_domApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/domApi */ \"./src/utils/domApi.ts\");\n/* harmony import */ var _blockComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blockComponent */ \"./src/components/blockComponent.ts\");\n\n\nclass TextComponent extends _blockComponent__WEBPACK_IMPORTED_MODULE_1__.BlockComponent {\n    constructor(tag) {\n        super();\n        this.create(tag);\n    }\n    create(htmlElement, editable = true) {\n        this.isValidHTMLElement(htmlElement);\n        this.htmlElement = _utils_domApi__WEBPACK_IMPORTED_MODULE_0__.DomApi.createElement(htmlElement);\n        this.htmlElement.className = TextComponent.TEXT_CLASSNAME;\n        this.htmlElement.contentEditable = editable ? \"true\" : \"false\";\n        this.htmlElement.id = this.uuid;\n    }\n    isValidHTMLElement(htmlElement) {\n        return TextComponent.SUPPORTED_TEXT_ELEMENTS.includes(htmlElement);\n    }\n}\nTextComponent.SUPPORTED_TEXT_ELEMENTS = [\"p\"];\nTextComponent.TEXT_CLASSNAME = \"paragraph\";\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90ZXh0Q29tcG9uZW50LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5QztBQUNTO0FBRWxELE1BQWEsYUFBYyxTQUFRLDJEQUFjO0lBSS9DLFlBQVksR0FBWTtRQUN0QixLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVPLE1BQU0sQ0FBQyxXQUFvQixFQUFFLFFBQVEsR0FBRyxJQUFJO1FBQ2xELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVyQyxJQUFJLENBQUMsV0FBVyxHQUFHLCtEQUFvQixDQUFDLFdBQVcsQ0FBeUIsQ0FBQztRQUM3RSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQzFELElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDL0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNsQyxDQUFDO0lBRU8sa0JBQWtCLENBQUMsV0FBbUI7UUFDNUMsT0FBTyxhQUFhLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7O0FBcEJ1QixxQ0FBdUIsR0FBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQzFDLDRCQUFjLEdBQUcsV0FBVyxDQUFDO0FBRjdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC1lZGl0b3IvLi9zcmMvY29tcG9uZW50cy90ZXh0Q29tcG9uZW50LnRzP2MyM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHRtbFRhZyB9IGZyb20gXCIuLi9tb2RlbC9odG1sVGFnXCI7XHJcbmltcG9ydCB7IERvbUFwaSB9IGZyb20gXCIuLi91dGlscy9kb21BcGlcIjtcclxuaW1wb3J0IHsgQmxvY2tDb21wb25lbnQgfSBmcm9tIFwiLi9ibG9ja0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHRDb21wb25lbnQgZXh0ZW5kcyBCbG9ja0NvbXBvbmVudCB7XHJcbiAgcHJpdmF0ZSBzdGF0aWMgcmVhZG9ubHkgU1VQUE9SVEVEX1RFWFRfRUxFTUVOVFM6IHN0cmluZ1tdID0gW1wicFwiXTtcclxuICBwcml2YXRlIHN0YXRpYyByZWFkb25seSBURVhUX0NMQVNTTkFNRSA9IFwicGFyYWdyYXBoXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRhZzogSHRtbFRhZykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZSh0YWcpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjcmVhdGUoaHRtbEVsZW1lbnQ6IEh0bWxUYWcsIGVkaXRhYmxlID0gdHJ1ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5pc1ZhbGlkSFRNTEVsZW1lbnQoaHRtbEVsZW1lbnQpO1xyXG5cclxuICAgIHRoaXMuaHRtbEVsZW1lbnQgPSBEb21BcGkuY3JlYXRlRWxlbWVudChodG1sRWxlbWVudCkgYXMgSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LmNsYXNzTmFtZSA9IFRleHRDb21wb25lbnQuVEVYVF9DTEFTU05BTUU7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LmNvbnRlbnRFZGl0YWJsZSA9IGVkaXRhYmxlID8gXCJ0cnVlXCIgOiBcImZhbHNlXCI7XHJcbiAgICB0aGlzLmh0bWxFbGVtZW50LmlkID0gdGhpcy51dWlkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZhbGlkSFRNTEVsZW1lbnQoaHRtbEVsZW1lbnQ6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIFRleHRDb21wb25lbnQuU1VQUE9SVEVEX1RFWFRfRUxFTUVOVFMuaW5jbHVkZXMoaHRtbEVsZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/textComponent.ts\n");

/***/ }),

/***/ "./src/config/constants.ts":
/*!*********************************!*\
  !*** ./src/config/constants.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mode\": () => (/* binding */ mode)\n/* harmony export */ });\nconst mode = \"dev\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uZmlnL2NvbnN0YW50cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ08sTUFBTSxJQUFJLEdBQWdCLEtBQUssQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RleHQtZWRpdG9yLy4vc3JjL2NvbmZpZy9jb25zdGFudHMudHM/OTQ2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIEVOVklST05NRU5UID0gXCJwcm9kXCIgfCBcImRldlwiO1xyXG5leHBvcnQgY29uc3QgbW9kZTogRU5WSVJPTk1FTlQgPSBcImRldlwiO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/config/constants.ts\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_textComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/textComponent */ \"./src/components/textComponent.ts\");\n/* harmony import */ var _model_htmlTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model/htmlTag */ \"./src/model/htmlTag.ts\");\n/* harmony import */ var _model_styleType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model/styleType */ \"./src/model/styleType.ts\");\n/* harmony import */ var _tree_editorFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tree/editorFactory */ \"./src/tree/editorFactory.ts\");\n\n\n\n\n// DOM Elements\nconst insertTextElementBtn = document.getElementById(\"insert-text-btn\");\nconst leftAlignTextElementBtn = document.getElementById(\"left-align-text-btn\");\nconst centerAlignTextElementBtn = document.getElementById(\"center-align-text-btn\");\nconst rightAlignTextElementBtn = document.getElementById(\"right-align-text-btn\");\nfunction start() {\n    const editor = _tree_editorFactory__WEBPACK_IMPORTED_MODULE_3__.EditorFactory.createEditor(\"editor\");\n    const textComponent = new _components_textComponent__WEBPACK_IMPORTED_MODULE_0__.TextComponent(_model_htmlTag__WEBPACK_IMPORTED_MODULE_1__.HtmlTag.P);\n    editor.addComponent(textComponent);\n}\ninsertTextElementBtn.addEventListener(\"click\", () => {\n    const editor = _tree_editorFactory__WEBPACK_IMPORTED_MODULE_3__.EditorFactory.getEditor();\n    const textComponent = new _components_textComponent__WEBPACK_IMPORTED_MODULE_0__.TextComponent(_model_htmlTag__WEBPACK_IMPORTED_MODULE_1__.HtmlTag.P);\n    editor.addComponent(textComponent);\n});\nstart();\nleftAlignTextElementBtn.addEventListener(\"click\", () => {\n    const editor = _tree_editorFactory__WEBPACK_IMPORTED_MODULE_3__.EditorFactory.getEditor();\n    const focusedComponent = editor.getFocusedComponent();\n    focusedComponent.applyStyle(_model_styleType__WEBPACK_IMPORTED_MODULE_2__.StyleTypes.TEXT_ALIGN, _model_styleType__WEBPACK_IMPORTED_MODULE_2__.AlignmentTypes.LEFT);\n});\ncenterAlignTextElementBtn.addEventListener(\"click\", () => {\n    const editor = _tree_editorFactory__WEBPACK_IMPORTED_MODULE_3__.EditorFactory.getEditor();\n    const focusedComponent = editor.getFocusedComponent();\n    focusedComponent.applyStyle(_model_styleType__WEBPACK_IMPORTED_MODULE_2__.StyleTypes.TEXT_ALIGN, _model_styleType__WEBPACK_IMPORTED_MODULE_2__.AlignmentTypes.CENTER);\n});\nrightAlignTextElementBtn.addEventListener(\"click\", () => {\n    const editor = _tree_editorFactory__WEBPACK_IMPORTED_MODULE_3__.EditorFactory.getEditor();\n    const focusedComponent = editor.getFocusedComponent();\n    focusedComponent.applyStyle(_model_styleType__WEBPACK_IMPORTED_MODULE_2__.StyleTypes.TEXT_ALIGN, _model_styleType__WEBPACK_IMPORTED_MODULE_2__.AlignmentTypes.RIGHT);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMkQ7QUFDakI7QUFDcUI7QUFDVjtBQUVyRCxlQUFlO0FBQ2YsTUFBTSxvQkFBb0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUNsRCxpQkFBaUIsQ0FDRyxDQUFDO0FBRXZCLE1BQU0sdUJBQXVCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FDckQscUJBQXFCLENBQ0QsQ0FBQztBQUV2QixNQUFNLHlCQUF5QixHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQ3ZELHVCQUF1QixDQUNILENBQUM7QUFFdkIsTUFBTSx3QkFBd0IsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUN0RCxzQkFBc0IsQ0FDRixDQUFDO0FBRXZCLFNBQVMsS0FBSztJQUNaLE1BQU0sTUFBTSxHQUFHLDJFQUEwQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sYUFBYSxHQUFHLElBQUksb0VBQWEsQ0FBQyxxREFBUyxDQUFDLENBQUM7SUFDbkQsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBRUQsb0JBQW9CLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUNsRCxNQUFNLE1BQU0sR0FBRyx3RUFBdUIsRUFBRSxDQUFDO0lBQ3pDLE1BQU0sYUFBYSxHQUFHLElBQUksb0VBQWEsQ0FBQyxxREFBUyxDQUFDLENBQUM7SUFDbkQsTUFBTSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNyQyxDQUFDLENBQUMsQ0FBQztBQUVILEtBQUssRUFBRSxDQUFDO0FBRVIsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUNyRCxNQUFNLE1BQU0sR0FBRyx3RUFBdUIsRUFBRSxDQUFDO0lBQ3pDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdEQsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLG1FQUFxQixFQUFFLGlFQUFtQixDQUFDO0FBQ3pFLENBQUMsQ0FBQyxDQUFDO0FBRUgseUJBQXlCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUN2RCxNQUFNLE1BQU0sR0FBRyx3RUFBdUIsRUFBRSxDQUFDO0lBQ3pDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdEQsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLG1FQUFxQixFQUFFLG1FQUFxQixDQUFDO0FBQzNFLENBQUMsQ0FBQyxDQUFDO0FBRUgsd0JBQXdCLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRTtJQUN0RCxNQUFNLE1BQU0sR0FBRyx3RUFBdUIsRUFBRSxDQUFDO0lBQ3pDLE1BQU0sZ0JBQWdCLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDdEQsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLG1FQUFxQixFQUFFLGtFQUFvQixDQUFDO0FBQzFFLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC1lZGl0b3IvLi9zcmMvaW5kZXgudHM/ZmZiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0Q29tcG9uZW50IH0gZnJvbSBcIi4vY29tcG9uZW50cy90ZXh0Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEh0bWxUYWcgfSBmcm9tIFwiLi9tb2RlbC9odG1sVGFnXCI7XHJcbmltcG9ydCB7IEFsaWdubWVudFR5cGVzLCBTdHlsZVR5cGVzIH0gZnJvbSBcIi4vbW9kZWwvc3R5bGVUeXBlXCI7XHJcbmltcG9ydCB7IEVkaXRvckZhY3RvcnkgfSBmcm9tIFwiLi90cmVlL2VkaXRvckZhY3RvcnlcIjtcclxuXHJcbi8vIERPTSBFbGVtZW50c1xyXG5jb25zdCBpbnNlcnRUZXh0RWxlbWVudEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxyXG4gIFwiaW5zZXJ0LXRleHQtYnRuXCJcclxuKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbmNvbnN0IGxlZnRBbGlnblRleHRFbGVtZW50QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXHJcbiAgXCJsZWZ0LWFsaWduLXRleHQtYnRuXCJcclxuKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbmNvbnN0IGNlbnRlckFsaWduVGV4dEVsZW1lbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcImNlbnRlci1hbGlnbi10ZXh0LWJ0blwiXHJcbikgYXMgSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG5jb25zdCByaWdodEFsaWduVGV4dEVsZW1lbnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcclxuICBcInJpZ2h0LWFsaWduLXRleHQtYnRuXCJcclxuKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbmZ1bmN0aW9uIHN0YXJ0KCk6IHZvaWQge1xyXG4gIGNvbnN0IGVkaXRvciA9IEVkaXRvckZhY3RvcnkuY3JlYXRlRWRpdG9yKFwiZWRpdG9yXCIpO1xyXG4gIGNvbnN0IHRleHRDb21wb25lbnQgPSBuZXcgVGV4dENvbXBvbmVudChIdG1sVGFnLlApO1xyXG4gIGVkaXRvci5hZGRDb21wb25lbnQodGV4dENvbXBvbmVudCk7XHJcbn1cclxuXHJcbmluc2VydFRleHRFbGVtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZWRpdG9yID0gRWRpdG9yRmFjdG9yeS5nZXRFZGl0b3IoKTtcclxuICBjb25zdCB0ZXh0Q29tcG9uZW50ID0gbmV3IFRleHRDb21wb25lbnQoSHRtbFRhZy5QKTtcclxuICBlZGl0b3IuYWRkQ29tcG9uZW50KHRleHRDb21wb25lbnQpO1xyXG59KTtcclxuXHJcbnN0YXJ0KCk7XHJcblxyXG5sZWZ0QWxpZ25UZXh0RWxlbWVudEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gIGNvbnN0IGVkaXRvciA9IEVkaXRvckZhY3RvcnkuZ2V0RWRpdG9yKCk7XHJcbiAgY29uc3QgZm9jdXNlZENvbXBvbmVudCA9IGVkaXRvci5nZXRGb2N1c2VkQ29tcG9uZW50KCk7XHJcbiAgZm9jdXNlZENvbXBvbmVudC5hcHBseVN0eWxlKFN0eWxlVHlwZXMuVEVYVF9BTElHTiwgQWxpZ25tZW50VHlwZXMuTEVGVClcclxufSk7XHJcblxyXG5jZW50ZXJBbGlnblRleHRFbGVtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZWRpdG9yID0gRWRpdG9yRmFjdG9yeS5nZXRFZGl0b3IoKTtcclxuICBjb25zdCBmb2N1c2VkQ29tcG9uZW50ID0gZWRpdG9yLmdldEZvY3VzZWRDb21wb25lbnQoKTtcclxuICBmb2N1c2VkQ29tcG9uZW50LmFwcGx5U3R5bGUoU3R5bGVUeXBlcy5URVhUX0FMSUdOLCBBbGlnbm1lbnRUeXBlcy5DRU5URVIpXHJcbn0pO1xyXG5cclxucmlnaHRBbGlnblRleHRFbGVtZW50QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgY29uc3QgZWRpdG9yID0gRWRpdG9yRmFjdG9yeS5nZXRFZGl0b3IoKTtcclxuICBjb25zdCBmb2N1c2VkQ29tcG9uZW50ID0gZWRpdG9yLmdldEZvY3VzZWRDb21wb25lbnQoKTtcclxuICBmb2N1c2VkQ29tcG9uZW50LmFwcGx5U3R5bGUoU3R5bGVUeXBlcy5URVhUX0FMSUdOLCBBbGlnbm1lbnRUeXBlcy5SSUdIVClcclxufSk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ }),

/***/ "./src/model/htmlTag.ts":
/*!******************************!*\
  !*** ./src/model/htmlTag.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HtmlTag\": () => (/* binding */ HtmlTag)\n/* harmony export */ });\nvar HtmlTag;\n(function (HtmlTag) {\n    HtmlTag[\"P\"] = \"p\";\n    HtmlTag[\"A\"] = \"a\";\n    HtmlTag[\"Div\"] = \"div\";\n    HtmlTag[\"Span\"] = \"span\";\n    HtmlTag[\"Img\"] = \"img\";\n    HtmlTag[\"Strong\"] = \"strong\";\n})(HtmlTag || (HtmlTag = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwvaHRtbFRhZy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBWSxPQU9YO0FBUEQsV0FBWSxPQUFPO0lBQ2pCLGtCQUFPO0lBQ1Asa0JBQU87SUFDUCxzQkFBVztJQUNYLHdCQUFhO0lBQ2Isc0JBQVc7SUFDWCw0QkFBaUI7QUFDbkIsQ0FBQyxFQVBXLE9BQU8sS0FBUCxPQUFPLFFBT2xCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC1lZGl0b3IvLi9zcmMvbW9kZWwvaHRtbFRhZy50cz84NTYxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEh0bWxUYWcge1xyXG4gIFAgPSBcInBcIixcclxuICBBID0gXCJhXCIsXHJcbiAgRGl2ID0gXCJkaXZcIixcclxuICBTcGFuID0gXCJzcGFuXCIsXHJcbiAgSW1nID0gXCJpbWdcIixcclxuICBTdHJvbmcgPSBcInN0cm9uZ1wiXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/model/htmlTag.ts\n");

/***/ }),

/***/ "./src/model/styleType.ts":
/*!********************************!*\
  !*** ./src/model/styleType.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"AlignmentTypes\": () => (/* binding */ AlignmentTypes),\n/* harmony export */   \"StyleTypes\": () => (/* binding */ StyleTypes)\n/* harmony export */ });\nvar StyleTypes;\n(function (StyleTypes) {\n    StyleTypes[\"TEXT_ALIGN\"] = \"text-align\";\n})(StyleTypes || (StyleTypes = {}));\nvar AlignmentTypes;\n(function (AlignmentTypes) {\n    AlignmentTypes[\"LEFT\"] = \"left\";\n    AlignmentTypes[\"CENTER\"] = \"center\";\n    AlignmentTypes[\"RIGHT\"] = \"right\";\n})(AlignmentTypes || (AlignmentTypes = {}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWwvc3R5bGVUeXBlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBWSxVQUVYO0FBRkQsV0FBWSxVQUFVO0lBQ3BCLHVDQUF5QjtBQUMzQixDQUFDLEVBRlcsVUFBVSxLQUFWLFVBQVUsUUFFckI7QUFFRCxJQUFZLGNBSVg7QUFKRCxXQUFZLGNBQWM7SUFDeEIsK0JBQWE7SUFDYixtQ0FBaUI7SUFDakIsaUNBQWU7QUFDakIsQ0FBQyxFQUpXLGNBQWMsS0FBZCxjQUFjLFFBSXpCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC1lZGl0b3IvLi9zcmMvbW9kZWwvc3R5bGVUeXBlLnRzPzkwNDkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gU3R5bGVUeXBlcyB7XHJcbiAgVEVYVF9BTElHTiA9IFwidGV4dC1hbGlnblwiLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBbGlnbm1lbnRUeXBlcyB7XHJcbiAgTEVGVCA9IFwibGVmdFwiLFxyXG4gIENFTlRFUiA9IFwiY2VudGVyXCIsXHJcbiAgUklHSFQgPSBcInJpZ2h0XCIsXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN0eWxlVHlwZSA9IFN0eWxlVHlwZXMgfCBBbGlnbm1lbnRUeXBlczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/model/styleType.ts\n");

/***/ }),

/***/ "./src/tree/editor.ts":
/*!****************************!*\
  !*** ./src/tree/editor.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Editor\": () => (/* binding */ Editor)\n/* harmony export */ });\n/* harmony import */ var _exception_illegalArgumentException__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exception/illegalArgumentException */ \"./src/exception/illegalArgumentException.ts\");\n/* harmony import */ var _utils_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/logger */ \"./src/utils/logger.ts\");\n\n\nclass Editor {\n    constructor(editorId) {\n        this.components = [];\n        this._size = 0;\n        if (!editorId && editorId.trim() === \"\") {\n            throw new _exception_illegalArgumentException__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException(\"Please specify editor element in your HTML file!\");\n        }\n        const editorEl = document.getElementById(editorId);\n        if (!editorEl) {\n            throw new _exception_illegalArgumentException__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException(\"There is no element with id => \" + editorId);\n        }\n        this.editorHtmlElement = editorEl;\n        this.click();\n        this.arrowKeywords();\n        this.enterKeyword();\n    }\n    first() {\n        if (this.components.length == 0) {\n            return null;\n        }\n        return this.components[0];\n    }\n    last() {\n        if (this.components.length == 0) {\n            return null;\n        }\n        return this.components[this.components.length - 1];\n    }\n    addComponent(component) {\n        var _a;\n        if (!component) {\n            throw new _exception_illegalArgumentException__WEBPACK_IMPORTED_MODULE_0__.IllegalArgumentException(\"component cannot be null!\");\n        }\n        (_a = this._currentComponent) === null || _a === void 0 ? void 0 : _a.htmlElement.classList.remove(\"current\");\n        component.htmlElement.focus();\n        component.htmlElement.classList.add(\"current\"); //TODO: Move this lines into component itself to ensure encapsulation\n        this._currentComponent = component;\n        this.components.push(this._currentComponent);\n        this.editorHtmlElement.appendChild(this._currentComponent.htmlElement);\n        this._size++;\n    }\n    findComponent(componentId) {\n        return this.components.find((c) => c.uuid == componentId);\n    }\n    getFocusedComponent() {\n        return this._currentComponent;\n    }\n    size() {\n        return this._size;\n    }\n    click() {\n        this.editorHtmlElement.addEventListener(\"click\", (e) => {\n            const clickedElement = e.target;\n            const clickedComponent = this.components.find((c) => c.uuid == clickedElement.id);\n            if (clickedComponent && clickedComponent == this._currentComponent) {\n                return;\n            }\n            if (clickedComponent) {\n                this._currentComponent.htmlElement.classList.remove(\"current\");\n                clickedComponent.htmlElement.focus();\n                clickedComponent.htmlElement.classList.add(\"current\");\n                this._currentComponent = clickedComponent;\n            }\n        });\n    }\n    arrowKeywords() {\n        this.editorHtmlElement.addEventListener(\"keydown\", (e) => {\n            if (e.code == \"ArrowUp\") {\n                _utils_logger__WEBPACK_IMPORTED_MODULE_1__.logger.debug(\"keydown event: \", e);\n            }\n        });\n    }\n    enterKeyword() {\n        this.editorHtmlElement.addEventListener(\"keydown\", (e) => {\n            if (e.key == \"Enter\" && !e.shiftKey) {\n                e.preventDefault();\n            }\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24gfSBmcm9tIFwiLi4vZXhjZXB0aW9uL2lsbGVnYWxBcmd1bWVudEV4Y2VwdGlvblwiO1xyXG5pbXBvcnQgeyBsb2dnZXIgfSBmcm9tIFwiLi4vdXRpbHMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi90cmVlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yIGltcGxlbWVudHMgVHJlZSB7XHJcbiAgcHJpdmF0ZSByZWFkb25seSBjb21wb25lbnRzOiBDb21wb25lbnRbXSA9IFtdO1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZWRpdG9ySHRtbEVsZW1lbnQ6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBwcml2YXRlIF9jdXJyZW50Q29tcG9uZW50OiBDb21wb25lbnQ7XHJcbiAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgY29uc3RydWN0b3IoZWRpdG9ySWQ6IHN0cmluZykge1xyXG4gICAgaWYgKCFlZGl0b3JJZCAmJiBlZGl0b3JJZC50cmltKCkgPT09IFwiXCIpIHtcclxuICAgICAgdGhyb3cgbmV3IElsbGVnYWxBcmd1bWVudEV4Y2VwdGlvbihcclxuICAgICAgICBcIlBsZWFzZSBzcGVjaWZ5IGVkaXRvciBlbGVtZW50IGluIHlvdXIgSFRNTCBmaWxlIVwiXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZWRpdG9yRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlZGl0b3JJZCkgYXMgSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBpZiAoIWVkaXRvckVsKSB7XHJcbiAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24oXHJcbiAgICAgICAgXCJUaGVyZSBpcyBubyBlbGVtZW50IHdpdGggaWQgPT4gXCIgKyBlZGl0b3JJZFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZWRpdG9ySHRtbEVsZW1lbnQgPSBlZGl0b3JFbDtcclxuICAgIHRoaXMuY2xpY2soKTtcclxuICAgIHRoaXMuYXJyb3dLZXl3b3JkcygpO1xyXG4gICAgdGhpcy5lbnRlcktleXdvcmQoKTtcclxuICB9XHJcblxyXG4gIGZpcnN0KCk6IENvbXBvbmVudCB8IG51bGwge1xyXG4gICAgaWYgKHRoaXMuY29tcG9uZW50cy5sZW5ndGggPT0gMCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzWzBdO1xyXG4gIH1cclxuXHJcbiAgbGFzdCgpOiBDb21wb25lbnQgfCBudWxsIHtcclxuICAgIGlmICh0aGlzLmNvbXBvbmVudHMubGVuZ3RoID09IDApIHtcclxuICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY29tcG9uZW50c1t0aGlzLmNvbXBvbmVudHMubGVuZ3RoIC0gMV07XHJcbiAgfVxyXG5cclxuICBhZGRDb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGlmICghY29tcG9uZW50KSB7XHJcbiAgICAgIHRocm93IG5ldyBJbGxlZ2FsQXJndW1lbnRFeGNlcHRpb24oXCJjb21wb25lbnQgY2Fubm90IGJlIG51bGwhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2N1cnJlbnRDb21wb25lbnQ/Lmh0bWxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJjdXJyZW50XCIpO1xyXG5cclxuICAgIGNvbXBvbmVudC5odG1sRWxlbWVudC5mb2N1cygpO1xyXG4gICAgY29tcG9uZW50Lmh0bWxFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjdXJyZW50XCIpOyAvL1RPRE86IE1vdmUgdGhpcyBsaW5lcyBpbnRvIGNvbXBvbmVudCBpdHNlbGYgdG8gZW5zdXJlIGVuY2Fwc3VsYXRpb25cclxuXHJcbiAgICB0aGlzLl9jdXJyZW50Q29tcG9uZW50ID0gY29tcG9uZW50O1xyXG5cclxuICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKHRoaXMuX2N1cnJlbnRDb21wb25lbnQpO1xyXG4gICAgdGhpcy5lZGl0b3JIdG1sRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9jdXJyZW50Q29tcG9uZW50Lmh0bWxFbGVtZW50KTtcclxuICAgIHRoaXMuX3NpemUrKztcclxuICB9XHJcblxyXG4gIGZpbmRDb21wb25lbnQoY29tcG9uZW50SWQ6IHN0cmluZyk6IENvbXBvbmVudCB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmZpbmQoKGMpID0+IGMudXVpZCA9PSBjb21wb25lbnRJZCk7XHJcbiAgfVxyXG5cclxuICBnZXRGb2N1c2VkQ29tcG9uZW50KCk6IENvbXBvbmVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudENvbXBvbmVudDtcclxuICB9XHJcblxyXG4gIHNpemUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGljaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdG9ySHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGNvbnN0IGNsaWNrZWRDb21wb25lbnQgPSB0aGlzLmNvbXBvbmVudHMuZmluZChcclxuICAgICAgICAoYykgPT4gYy51dWlkID09IGNsaWNrZWRFbGVtZW50LmlkXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBpZiAoY2xpY2tlZENvbXBvbmVudCAmJiBjbGlja2VkQ29tcG9uZW50ID09IHRoaXMuX2N1cnJlbnRDb21wb25lbnQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChjbGlja2VkQ29tcG9uZW50KSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudENvbXBvbmVudC5odG1sRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiY3VycmVudFwiKTtcclxuXHJcbiAgICAgICAgY2xpY2tlZENvbXBvbmVudC5odG1sRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIGNsaWNrZWRDb21wb25lbnQuaHRtbEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRcIik7XHJcblxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRDb21wb25lbnQgPSBjbGlja2VkQ29tcG9uZW50O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXJyb3dLZXl3b3JkcygpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdG9ySHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUuY29kZSA9PSBcIkFycm93VXBcIikge1xyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcImtleWRvd24gZXZlbnQ6IFwiLCBlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGVudGVyS2V5d29yZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZWRpdG9ySHRtbEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09IFwiRW50ZXJcIiAmJiAhZS5zaGlmdEtleSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/tree/editor.ts\n");

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

/***/ "./src/utils/logger.ts":
/*!*****************************!*\
  !*** ./src/utils/logger.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"logger\": () => (/* binding */ logger)\n/* harmony export */ });\n/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.ts\");\n\nclass DefaultLogger {\n    debug(...args) {\n        const [message, ...params] = args;\n        if (_config_constants__WEBPACK_IMPORTED_MODULE_0__.mode == \"dev\") {\n            console.log(`%cDEBUG: ${message}`, \"color: #FF4500\", params);\n        }\n    }\n}\nconst logger = new DefaultLogger();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvbG9nZ2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTJDO0FBVzNDLE1BQU0sYUFBYTtJQUdqQixLQUFLLENBQUMsR0FBRyxJQUFXO1FBQ2xCLE1BQU0sQ0FBQyxPQUFPLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxtREFBSSxJQUFJLEtBQUssRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksT0FBTyxFQUFFLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0NBQ0Y7QUFFTSxNQUFNLE1BQU0sR0FBRyxJQUFJLGFBQWEsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGV4dC1lZGl0b3IvLi9zcmMvdXRpbHMvbG9nZ2VyLnRzPzhkNmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW9kZSB9IGZyb20gXCIuLi9jb25maWcvY29uc3RhbnRzXCI7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIExvZ2dlciB7XHJcbiAgICBkZWJ1ZyguLi5wYXJhbXM6IGFueVtdKTogdm9pZDtcclxuICAgIGRlYnVnKG1lc3NhZ2U6IHN0cmluZywgLi4ucGFyYW1zOiBhbnlbXSk6IHZvaWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge307XHJcblxyXG5jbGFzcyBEZWZhdWx0TG9nZ2VyIGltcGxlbWVudHMgTG9nZ2VyIHtcclxuICBkZWJ1ZyguLi5wYXJhbXM6IGFueVtdKTogdm9pZDtcclxuICBkZWJ1ZyhtZXNzYWdlOiBzdHJpbmcsIC4uLnBhcmFtczogYW55W10pOiB2b2lkO1xyXG4gIGRlYnVnKC4uLmFyZ3M6IGFueVtdKTogdm9pZCB7XHJcbiAgICBjb25zdCBbbWVzc2FnZSwgLi4ucGFyYW1zXSA9IGFyZ3M7XHJcbiAgICBpZiAobW9kZSA9PSBcImRldlwiKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGAlY0RFQlVHOiAke21lc3NhZ2V9YCwgXCJjb2xvcjogI0ZGNDUwMFwiLCBwYXJhbXMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ2dlciA9IG5ldyBEZWZhdWx0TG9nZ2VyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/utils/logger.ts\n");

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
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
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
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
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
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0b4f08d0eee7f6c8342e")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "text-editor:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "public";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatetext_editor"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;