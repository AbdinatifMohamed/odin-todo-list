/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Jolly+Lodger&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family:  'Jolly Lodger', sans-serif;\n}\n\n\nbody {\n    min-height: 100vh;\n    background-color: #D1C4E9;\n    display: flex;\n    flex-direction: column;\n}\n\n\nheader {\n    padding: .5rem 4rem;\n    color: #673AB7;\n}\n\nheader h1 {\n    font-size: 3.5rem;\n}\n\nmain {\n    display: flex;\n    flex: 1;\n    padding: 0 4rem;\n    gap: 1.5rem;\n    padding-bottom: 2rem;\n}\n\n.projects {\n    background-color: #673AB7;\n    width: 300px;\n    border-radius: 10px;\n    padding: 1rem 1.5rem;\n}\n\n.projects h3 {\n    font-size: 1.5rem;\n    color: #fff;\n}\n\n.projects__topbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: .5rem;\n}\n\n.projects__topbar button {\n    background-color: transparent;\n    border: none;\n    font-size: 1.2rem;\n    color: #fff;\n}\n\n.projects__items {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.projects__item {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0 .5rem;\n    background-color: #fff;\n    height: 1.8rem;\n    border: none;\n    border-radius: 5px;\n    color: #673AB7;\n}\n\n.projects__item > * {\n    display: inline;\n}\n\n.projects__item i {\n    color: #FF0000;\n}\n\n.tasks {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n    /* background-color: #FF0000; */\n    min-height: 500px;\n    flex: 1;\n}\n\n.tasks__projectname {\n    display: flex;\n    align-items: center;\n    background-color: #673AB7;\n    padding: .5rem 1rem;\n    color: #fff;\n    border-radius: 10px;\n    align-self: flex-start;\n    gap: .5rem;\n}\n\n#tasks__new {\n    background-color: transparent;\n    color: #fff;\n    border: none;\n    font-size: 1rem;\n\n}\n\n.tasks__lists {\n    display: flex;\n    flex-wrap: wrap;\n    flex-grow: 1;\n    gap: .5rem;\n}\n\n.tasks__item {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: .1rem;\n    background-color: #fff;\n    color:#673AB7;\n    height: 150px;\n    width: 200px;\n    padding: 1rem;\n    border-radius: 5px;\n}\n\n\n.tasks__item > div {\n    display: flex;\n    justify-content: space-between;\n}\n\n.tasks__item > div > h4 {\n    max-width: 50%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n\n.tasks__item > p {\n    flex: 1;\n    word-wrap: break-word;\n    overflow: hidden;;\n}\n\n\n.tasks__item > div > div i:nth-child(1) {\n    color:#FF0000;\n}\n\n.tasks__item > div > div i:nth-child(2) {\n    color:#d0d3d1;\n}\n\n\n\n\n\n\n\n.projects__dialog {\n    position: absolute; \n    top:50%; \n    left:50%; \n    transform:translate(-50%, -50%); \n    background-color: #673AB7;\n    height: 100px;\n    width: 300px;\n    border: none;\n    border-radius: 10px;\n}\n\n\n.projects__form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    width: 100%;    \n    gap: .5rem;\n}\n\n.projects__form input {\n    height: 25px;\n    width: 200px;\n    border-radius: 3px;\n    border: none;\n    padding-left: .2rem;\n}\n\n\n.projects__form button {\n    padding: .2rem .5rem;\n    color: #673AB7;\n}\n\n.tasks__dialog {\n    position: absolute; \n    top:50%; \n    left:50%; \n    transform:translate(-50%, -50%); \n    background-color: #673AB7;\n    border: none;\n    height: 400px;\n    width: 300px;\n    border-radius: 10px;\n}\n\n\n.tasks__form {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.tasks__form h2, .tasks__form label {\n    color: #fff;\n}\n.taskTitle {\n    height: 25px;\n    width: 219px;\n}\n\n.taskDesc {\n    padding-top: .2rem;\n    resize: none;\n}\n\n.taskDesc, .taskTitle {\n    padding-left: .3rem;\n    border: none;\n    border-radius: 5px;\n}\n\n\n\n.tasks__form button {\n    padding: .3rem 1rem;\n    color: #673AB7;\n    border-radius: 4px;\n    border: none;\n}\n\n\n\n.high {\n    border-left: 3px solid red;\n}\n\n.medium {\n    border-left: 3px solid #ff9800;\n}\n\n.completed  {\n    border-left: 3px solid #09ff00;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\nconst projectdialog = document.querySelector('.projects__dialog');\nconst taskdialog = document.querySelector('.tasks__dialog');\nconst projectform = document.querySelector('.projects__form');\nconst taskform = document.querySelector('.tasks__form')\nconst projectbtn = document.querySelector('#projects__new');\nconst taskbtn = document.querySelector('#tasks__new');\nconst taskcancel = document.querySelector('.taskCancel');\nconst projectcancel = document.querySelector('.projectCancel');\nconst projecttitle = document.querySelector('.tasks__projectname').firstElementChild;\nconst projectlist = document.querySelector('.projects__items');\nconst tasklist = document.querySelector('.tasks__lists');\n\n\n/*\nTask Template:\n<div class=\"tasks__item\">\n    <div>\n        <h4>GYM</h4>\n        <div>\n            <i class=\"ri-delete-bin-7-fill\"></i>\n            <i class=\"ri-checkbox-circle-fill\"></i>\n        </div>\n    </div>\n    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem accusantium et labore ipsa, asperiores quisquam, totam explicabo harum ea, velit recusandae suscipit vel! Laboriosam consectetur eum illo aliquid distinctio libero.</p>\n</div>\n\nProject Template:\n<button class=\"projects__item\">\n    <p>Default</p>\n</button>\n<button class=\"projects__item\">\n    <p>Important</p>\n    <i class=\"ri-delete-bin-7-fill\"></i>\n</button>\n\n*/\n\nlet currentProject;\nlet projects = [];\n\n\nfunction updateTasks(){\n    if (currentProject == undefined) {\n        tasklist.innerHTML = '';\n        projecttitle.textContent = '';\n        return;\n    }\n    tasklist.innerHTML = '';\n    for (let i = 0; i < currentProject.getTasks().length; i++){\n        tasklist.appendChild(currentProject.getTasks()[i].getTaskElement());\n    }\n}\nfunction updateProjects(){\n    projectlist.innerHTML = '';\n\n    for (let i = 0; i < projects.length; i++){\n        projectlist.appendChild(projects[i].getProjectElement());\n    }\n}\n\n\nfunction createProject(name, deletable){\n    const div  = document.createElement('div');\n    const title = document.createElement('p');\n    const deleteBtn = document.createElement('i');\n\n    div.classList.add('projects__item');\n    title.textContent = name;\n    deleteBtn.classList.add('ri-delete-bin-7-fill');\n\n    div.appendChild(title);\n    deletable && div.appendChild(deleteBtn);\n    const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](name, div);\n\n    deleteBtn.addEventListener('click', (e) => {\n        e.stopPropagation();\n        console.log('clicked');\n        newProject.onDelete()\n        console.log(projects);\n        projects = projects.filter(project => project.getId() !== newProject.getId());\n        console.log(projects);\n        currentProject = undefined;\n        updateProjects();\n        updateTasks();\n    });\n    div.addEventListener('click', () => {\n        console.log('clicked2');\n        currentProject = newProject;\n        projecttitle.textContent = currentProject.getName();\n        updateProjects();\n        updateTasks();\n    });\n    projects.push(newProject);\n    updateProjects();\n}\n\nfunction createTask(project, name, desc, date, priority){\n    if (currentProject == undefined) return;\n    const div = document.createElement('div');\n    const p = document.createElement('p');\n    div.classList.add('tasks__item');\n    const seconddiv = document.createElement('div');\n    const h4 = document.createElement('h4');\n    const thirddiv = document.createElement('div');\n    const deleteBtn = document.createElement('i');\n    const completeBtn = document.createElement('i');\n    deleteBtn.classList.add('ri-delete-bin-7-fill');\n    completeBtn.classList.add('ri-checkbox-circle-fill')\n    h4.textContent = name;\n    thirddiv.appendChild(deleteBtn);\n    thirddiv.appendChild(completeBtn);\n    seconddiv.appendChild(h4);\n    seconddiv.appendChild(thirddiv);\n    div.appendChild(seconddiv);\n    p.textContent = desc;\n    div.appendChild(p);\n    const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](div, name, desc, date, priority);\n    deleteBtn.addEventListener('click', () => {\n        project.deleteTask(newTask.getId())\n        updateTasks();\n    }); \n    completeBtn.addEventListener('click', () => {\n        console.log('reached');\n        div.classList.toggle('completed');\n    })\n    switch (priority) {\n        case 'high':\n            div.classList.add('high');\n            break;\n        case 'medium':\n            div.classList.add('medium');\n            break;\n        default:\n            break;\n    }\n   \n    project.addTask(newTask);\n    updateTasks();\n}\n\n\nprojectbtn.addEventListener('click', () => projectdialog.showModal());\nprojectcancel.addEventListener('click', (e) => {\n    e.preventDefault();\n    projectdialog.close();\n});\nprojectform.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const form = new FormData(projectform);\n    const name = form.get('projectTitle');\n    createProject(name, true);\n    projectdialog.close();\n})\ntaskbtn.addEventListener('click', () => taskdialog.showModal());\ntaskcancel.addEventListener('click', (e) => {\n    e.preventDefault();\n    taskdialog.close();\n});\n\ntaskform.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const form = new FormData(taskform);\n    const name = form.get('taskTitle');\n    const desc = form.get('taskDesc');\n    const date = form.get('taskDate');\n    const priority = form.get('taskPriority');\n    createTask(currentProject, name, desc, date, priority);\n    taskdialog.close();\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    #name;\n    #tasks = [];\n    #projectelement;\n    #id;\n    constructor(name, projectelement) {\n      this.#name = name;\n      this.#projectelement = projectelement;\n      this.#id = crypto.randomUUID;\n    }\n    \n    addTask(task){\n        this.#tasks.push(task);\n    }\n\n    deleteTask(id){\n        const removingTask = this.#tasks.find(task => task.getId() === id);\n        removingTask.onDelete();\n        this.#tasks = this.#tasks.filter(task => task.getId() !== id);\n    }\n\n    getName(){\n        return this.#name;\n    }\n\n    getTasks(){\n        return this.#tasks;\n    }\n\n    getProjectElement(){\n        return this.#projectelement;\n    }\n\n    getId(){\n        return this.#id;\n    }\n\n    onDelete(){\n        this.#projectelement.remove();\n    }\n  }\n  \n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    #name;\n    #desc;\n    #date;\n    #priority;\n    #id;\n    #taskelement;\n\n    constructor(taskelement, name, desc, date, priority) {\n        this.#taskelement = taskelement\n        this.#name = name;\n        this.#desc = desc;\n        this.#date = date;\n        this.#priority = priority;\n        this.#id = crypto.randomUUID();\n    }\n\n    // Getter methods to access private fields\n    getName() {\n        return this.#name;\n    }\n\n    getDesc() {\n        return this.#desc;\n    }\n\n    getDate() {\n        return this.#date;\n    }\n\n    getPriority() {\n        return this.#priority;\n    }\n\n    getId() {\n        return this.#id;\n    }\n\n    getTaskElement(){\n        return this.#taskelement;\n    }\n\n    // Setter methods to set private fields;\n\n    setName(name) {\n        this.#name = name;\n    }\n\n    setDesc(desc) {\n        this.#desc = desc;\n    }\n\n    setDate(date) {\n        this.#date = date;\n    }\n\n    setPriority(priority) {\n        this.#priority = priority;\n    }\n\n\n    onDelete(){\n        this.#taskelement.remove();\n    }\n    \n  }\n  \n\n//# sourceURL=webpack:///./src/task.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;