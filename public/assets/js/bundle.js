/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CPFClass.js":
/*!*************************!*\
  !*** ./src/CPFClass.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidaCPF)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var ValidaCPF = /*#__PURE__*/function () {
  function ValidaCPF(cpf) {
    _classCallCheck(this, ValidaCPF);
    Object.defineProperty(this, "cpflimpo", {
      writable: true,
      enumerable: true,
      configurable: true,
      value: cpf.replace(/\D+/g, "")
    });
  }
  _createClass(ValidaCPF, [{
    key: "valida",
    value: function valida() {
      var cpfarray = Array.from(this.cpflimpo);
      var cpf09 = this.calculo9digitos(cpfarray);
      var cpf10 = this.calculo10digitos(cpfarray);
      var digito1verdadeiro = cpfarray[9];
      var digito2verdadeiro = cpfarray[10];
      //validação do CPF
      if (this.sequenciacpf(this.cpflimpo) === true) return "CPF inválido!!";
      return cpf09 != digito1verdadeiro || cpf10 != digito2verdadeiro ? "CPF inválido!!" : "CPF Válido!!";
    }
  }, {
    key: "sequenciacpf",
    value: function sequenciacpf(cpfp) {
      var sequencia = cpfp[0].repeat(cpfp.length);
      return sequencia === cpfp;
    }
  }], [{
    key: "calculo9digitos",
    value: function calculo9digitos(cpfarray) {
      var cpf9 = cpfarray.slice(0, 9);
      var contadoor = cpf9.length + 2;
      cpf9 = cpf9.reduce(function (acul, valor) {
        contadoor = contadoor - 1;
        return acul + valor * contadoor; //mutiplicação e soma dos 9 digitos
      }, 0);
      cpf9 = cpf9 % 11;
      cpf9 < 2 ? cpf9 = 0 : cpf9 = 11 - cpf9; //verificando se é menor que 2 e retornando 0 se verdadeiro
      return cpf9;
    }
  }, {
    key: "calculo10digitos",
    value: function calculo10digitos(cpfarray) {
      var cpf10 = cpfarray.slice(0, 10);
      var contadoor = cpf10.length + 2;
      cpf10 = cpf10.reduce(function (acul, valor) {
        contadoor = contadoor - 1;
        return acul + valor * contadoor; //mutiplicação e soma dos 9 digitos
      }, 0);
      cpf10 = cpf10 % 11;
      cpf10 < 2 ? cpf10 = 0 : cpf10 = 11 - cpf10; //verificando se é menor que 2 e retornando 0 se verdadeiro
      return cpf10;
    }
  }]);
  return ValidaCPF;
}();


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/geracpf.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CPFClass_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CPFClass.js */ "./src/CPFClass.js");

function rand() {
  var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000000;
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 999999999;
  return String(Math.floor(Math.random() * (max - min) + min));
}
function geranovoCPF() {
  var cpfSemDigito = rand();
  var digito1 = _CPFClass_js__WEBPACK_IMPORTED_MODULE_0__["default"].calculo9digitos(Array.from(cpfSemDigito));
  var digito2 = _CPFClass_js__WEBPACK_IMPORTED_MODULE_0__["default"].calculo10digitos(Array.from(cpfSemDigito + digito1));
  var novoCPF = cpfSemDigito + digito1 + digito2;
  return novoCPF;
}
;
function formatCPF(cpf) {
  // Remove non-numeric characters from the CPF
  cpf = cpf.replace(/\D/g, '');

  // Apply the CPF mask
  cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
  return cpf;
}
function gera() {
  var gera2 = geranovoCPF();
  var CPFformatado = formatCPF(gera2);
  var cpfGerado = document.querySelector('.cpf-gerado');
  cpfGerado.innerHTML = CPFformatado;
}
;
gera();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map