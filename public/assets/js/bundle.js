/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/CPFClass.mjs":
/*!**************************!*\
  !*** ./src/CPFClass.mjs ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ValidaCPF)
/* harmony export */ });
class ValidaCPF {
  constructor(cpf) {
    Object.defineProperty(this, "cpflimpo", {
      writable: true,
      enumerable: true,
      configurable: true,
      value: cpf.replace(/\D+/g, ""),
    });
  }
     valida() {
    const cpfarray = Array.from(this.cpflimpo);
    let cpf09 = this.calculo9digitos(cpfarray);
    let cpf10 = this.calculo10digitos(cpfarray);
    const digito1verdadeiro = cpfarray[9];
    const digito2verdadeiro = cpfarray[10];
    //validação do CPF
    if (this.sequenciacpf(this.cpflimpo) === true) return "CPF inválido!!";
    return cpf09 != digito1verdadeiro || cpf10 != digito2verdadeiro
      ? "CPF inválido!!"
      : "CPF Válido!!";
  }
  static calculo9digitos(cpfarray) {
    let cpf9 = cpfarray.slice(0, 9);
    let contadoor = cpf9.length + 2;
    cpf9 = cpf9.reduce(function (acul, valor) {
      contadoor = contadoor - 1;
      return acul + valor * contadoor; //mutiplicação e soma dos 9 digitos
    }, 0);
    cpf9 = cpf9 % 11;
    cpf9 < 2 ? (cpf9 = 0) : (cpf9 = 11 - cpf9); //verificando se é menor que 2 e retornando 0 se verdadeiro
    return cpf9;
  }
 static  calculo10digitos(cpfarray) {
    let cpf10 = cpfarray.slice(0, 10);
    let contadoor = cpf10.length + 2;
    cpf10 = cpf10.reduce(function (acul, valor) {
      contadoor = contadoor - 1;
      return acul + valor * contadoor; //mutiplicação e soma dos 9 digitos
    }, 0);
    cpf10 = cpf10 % 11;
    cpf10 < 2 ? (cpf10 = 0) : (cpf10 = 11 - cpf10); //verificando se é menor que 2 e retornando 0 se verdadeiro
    return cpf10;
  }
  sequenciacpf(cpfp) {
    const sequencia = cpfp[0].repeat(cpfp.length);
    return sequencia === cpfp;
  }
}

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
/*!*************************!*\
  !*** ./src/geracpf.mjs ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CPFClass_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CPFClass.mjs */ "./src/CPFClass.mjs");


  function  rand (min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min))
    }
function    geranovoCPF() {
        const cpfSemDigito = rand();
        const digito1 = _CPFClass_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].calculo9digitos(Array.from(cpfSemDigito));
        const digito2 = _CPFClass_mjs__WEBPACK_IMPORTED_MODULE_0__["default"].calculo10digitos(Array.from(cpfSemDigito+digito1));
        const novoCPF = cpfSemDigito + digito1 + digito2;
        return novoCPF;
    };

function gera() {
    const gera2 =  geranovoCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera2;
};

gera();


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map