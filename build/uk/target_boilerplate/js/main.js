(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var AddElements=function(){function e(){_classCallCheck(this,e)}return e.prototype.elementsAdded=function(){document.querySelectorAll(".service-item__name").forEach(function(e){if("Insurance"===e.innerText||"Protect your Galaxy with Samsung Care+"===e.innerText){var n=e.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[4].innerText,t=e.parentElement.nextElementSibling.children[0].children[0].children[1];e.innerText="Protect your Galaxy with Samsung Care+",e.nextElementSibling.style.display="none",e.nextElementSibling.style.color="#ffffff";var r='<div class="ng-star-inserted service-item__description opti__div">\n\t\t\t\t\t'+(n.includes("SM-G99")?'<p class="warning__policy">Try Samsung Care+ free for 30 days (does not renew)*</p>':"")+'\n\t\t\t\t\t\t<p>Up to 24 months of worldwide accidental damage insurance for complete peace of mind.</p>\n\t\t\t\t\t\t<p class="learn__more__popfeature">Learn more</p>\n\t\t\t\t\t</div>';e.nextElementSibling.insertAdjacentHTML("afterend",r),e.parentElement.nextElementSibling.children[0].children[0].children[1].innerText="Add Insurance",document.querySelector(".learn__more__popfeature").onclick=function(){t.click()}}})},e}();exports.default=AddElements;

},{}],2:[function(require,module,exports){
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var _popUpContent=require("./popUpContent"),_popUpContent2=_interopRequireDefault(_popUpContent);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var NewElements=function(){function e(){_classCallCheck(this,e)}return e.prototype.addingNewElements=function(){var e=new _popUpContent2.default;document.querySelector(".opti__div").style.display="block",e.addConent(),window.innerWidth<=920&&e.iconBtnClick(),document.querySelectorAll(".opti__div").forEach(function(e){"Add Samsung Care+"===e.previousSibling.textContent&&(e.previousElementSibling,e.previousSibling.style.display="none",document.querySelector(".learn__more__popfeature").onclick=function(){document.querySelector("body > app-root > cx-storefront > main > cx-page-layout > cx-page-slot.TokoLeftContent.has-components.ng-star-inserted > cx-cart-details > div > cx-cart-item-list > div > div > cx-cart-item > div > div.cart-item__services > app-cart-added-services > div:nth-child(1) > div.service-item__actions > div > button > span.action-text.action-text--blue").click()})})},e}();exports.default=NewElements;

},{"./popUpContent":3}],3:[function(require,module,exports){
"use strict";function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0});var PopUpContent=function(){function e(){_classCallCheck(this,e)}return e.prototype.addConent=function(){document.querySelectorAll(".service-item__name").forEach(function(e){var n=e.parentElement.nextElementSibling.children[0].children[0].children[1],t=e.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[4].innerText;n.onclick=function(){console.log("pop n click"),setTimeout(function(){var e=document.getElementById("modal-title"),n=document.querySelector(".modal__description"),l=document.querySelector(".modal__radio"),o=document.querySelector(".modal__terms"),i=document.querySelector(".modal__footer");l.insertAdjacentHTML("afterend",'\n            <div class="samsung__care__details">\n                <h2 class="modal__title">Samsung Care+ includes:</h2>\n                <ul>\n                  <li>Fast and convenient expert repairs using genuine Samsung parts</li>\n                  <li>if your device isn\'t running smoothly, we\'ll check and fix any issues</li>\n                  <li>Stay powered up with hassle-free battery replacements</li>\n                  <li>Up to four claims within 24 months, or two within 12 months</li>\n                  <li><a href="https://www.samsung.com/uk/offer/samsung-care-plus/">See all benefits here.</a> Key details of your policy can be found in the <a href="https://images.samsung.com/is/content/samsung/p5/uk/samsung-mobile-care-ipid.pdf">Insurance Proudct Infomation Document(IPID)</a></li>\n                </ul>\n                <div class="samsung__care__details__30days" style="'+(t.includes("SM-G99")?"display: block":"display: none")+'">\n                  <h2 class="modal__title">Try Samsung Care+ free for 30 days</h2>\n                  <p class="hubble-product__options-content-text">Does not renew automatically. Cover terminates after 30 days unless renewed at samsungcareplus.com.\n                  Service fee per claim still applies. View the Insurance Product Information Pack(IPID) for full policy details.\n                  </p>\n                </div>\n              </div>\n            '),i.insertAdjacentElement("afterend",o);var r=document.querySelector(".modal__footer.modal__buttons--inline > button.button.pill-btn.pill-btn--white.reset"),a=document.querySelector(".modal__footer.modal__buttons--inline > button.button.primary.pill-btn.pill-btn--black.view-more");e.innerText="Protext your Galaxy with Samsung Care+",n.innerText="Up to 24 months of worldwide accidental damage insurance for complete peace of mind",document.querySelectorAll(".option-box__label").forEach(function(e){var n=e.firstChild.innerText;"1 year coverage"===n?e.lastElementChild.innerText="12-month policy":"2 year coverage"===n?e.lastElementChild.innerText="24-month policy":n.includes("Free")&&(e.lastElementChild.innerText="One month policy")}),document.querySelectorAll(".option-box__price").forEach(function(e){var n=parseInt(e.innerText.slice(1));if(e.style.textAlign="right",e.previousElementSibling.innerText.includes("1 year coverage")){var t=document.createElement("p"),l=n/12;t.innerText="(equilvalent to £"+l.toFixed(2)+" a month)",e.insertAdjacentElement("beforeend",t)}else if(e.previousElementSibling.innerText.includes("2 year coverage")){var o=document.createElement("p"),i=n/24;o.innerText="(equilvalent to £"+i.toFixed(2)+" a month)",e.insertAdjacentElement("beforeend",o)}}),document.querySelectorAll(".mat-radio-label").forEach(function(e){e.innerText.includes("2 year coverage")&&e.click()}),r.innerText="No Thanks",a.innerText="Add to order"},1500)}})},e.prototype.iconBtnClick=function(){document.querySelectorAll(".service-item__name").forEach(function(e){var n=e.parentElement.nextElementSibling.children[0].children[0].children[0],t=e.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[4].innerText;n.onclick=function(){console.log("pop n click icon"),setTimeout(function(){var e=document.getElementById("modal-title"),n=document.querySelector(".modal__description"),l=document.querySelector(".modal__radio"),o=document.querySelector(".modal__terms"),i=document.querySelector(".modal__footer");l.insertAdjacentHTML("afterend",'\n            <div class="samsung__care__details">\n                <h2 class="modal__title">Samsung Care+ includes:</h2>\n                <ul>\n                  <li>Fast and convenient expert repairs using genuine Samsung parts</li>\n                  <li>if your device isn\'t running smoothly, we\'ll check and fix any issues</li>\n                  <li>Stay powered up with hassle-free battery replacements</li>\n                  <li>Up to four claims within 24 months, or two within 12 months</li>\n                  <li><a href="https://www.samsung.com/uk/offer/samsung-care-plus/">See all benefits here.</a> Key details of your policy can be found in the <a href="https://images.samsung.com/is/content/samsung/p5/uk/samsung-mobile-care-ipid.pdf">Insurance Proudct Infomation Document(IPID)</a></li>\n                </ul>\n                <div class="samsung__care__details__30days" style="'+(t.includes("SM-G99")?"display: block":"display: none")+'">\n                  <h2 class="modal__title">Try Samsung Care+ free for 30 days</h2>\n                  <p class="hubble-product__options-content-text">Does not renew automatically. Cover terminates after 30 days unless renewed at samsungcareplus.com.\n                  Service fee per claim still applies. View the Insurance Product Information Pack(IPID) for full policy details.\n                  </p>\n                </div>\n              </div>\n            '),i.insertAdjacentElement("afterend",o);var r=document.querySelector(".modal__footer.modal__buttons--inline > button.button.pill-btn.pill-btn--white.reset"),a=document.querySelector(".modal__footer.modal__buttons--inline > button.button.primary.pill-btn.pill-btn--black.view-more");e.innerText="Protext your Galaxy with Samsung Care+",n.innerText="Up to 24 months of worldwide accidental damage insurance for complete peace of mind",document.querySelectorAll(".option-box__label").forEach(function(e){var n=e.firstChild.innerText;"1 year coverage"===n?e.lastElementChild.innerText="12-month policy":"2 year coverage"===n?e.lastElementChild.innerText="24-month policy":n.includes("Free")&&(e.lastElementChild.innerText="One month policy")}),document.querySelectorAll(".option-box__price").forEach(function(e){var n=parseInt(e.innerText.slice(1));if(e.style.textAlign="right",e.previousElementSibling.innerText.includes("1 year coverage")){var t=document.createElement("p"),l=n/12;t.innerText="(equilvalent to £"+l.toFixed(2)+" a month)",e.insertAdjacentElement("beforeend",t)}else if(e.previousElementSibling.innerText.includes("2 year coverage")){var o=document.createElement("p"),i=n/24;o.innerText="(equilvalent to £"+i.toFixed(2)+" a month)",e.insertAdjacentElement("beforeend",o)}}),document.querySelectorAll(".mat-radio-label").forEach(function(e){e.innerText.includes("2 year coverage")&&e.click()}),r.innerText="No Thanks",a.innerText="Add to order"},1500)}})},e}();exports.default=PopUpContent;

},{}],4:[function(require,module,exports){
"use strict";var _popUpContent=require("./components/popUpContent"),_popUpContent2=_interopRequireDefault(_popUpContent),_addElements=require("./components/addElements"),_addElements2=_interopRequireDefault(_addElements),_newElements=require("./components/newElements"),_newElements2=_interopRequireDefault(_newElements);function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}var cheillondon=cheillondon||{};cheillondon.targetBoilerplate=function(){var e={init:function(){e.doEverythingTimeout()},doEverythingTimeout:function(){var t=this;console.log("XXX - doEverythingTimeout"),setTimeout(function(){window.$?(console.log("doEverythingTimeout - jQuery loaded"),document.querySelectorAll(".cart-item__sku").forEach(function(t){if(t.innerText.includes("SM-G99")||t.innerText.includes("SM-F")){var n=new _popUpContent2.default,o=new _addElements2.default;e.appendNewStyle(),o.elementsAdded(),n.addConent(),e.elementObservation(),e.insureText(),n.iconBtnClick()}else console.log("not in range")})):(console.log("no jquery"),t.doEverythingTimeout())},1e3)},appendNewStyle:function(){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=".samsung__care__details a{text-decoration:underline;color:#006bea}.samsung__care__details ul{padding-left:20px}.modal__header{padding-bottom:0px}.modal__title{font-size:18px}.modal__terms{margin-bottom:0px;margin-top:30px}.modal__buttons--inline{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;width:50%}@media only screen and (max-width: 500px){.modal__buttons--inline{width:100%}}.modal__buttons--inline .modal__buttons--inline button:first-child{-webkit-margin-end:0px;margin-inline-end:0px}.modal__buttons--inline .modal__buttons--inline button{margin:0px 10px 0px 0px}.pill-btn--white{color:#1f78ec;background:white;border:1px solid #fff;text-decoration:underline}.pill-btn--black{background:#006bea}.pill-btn--black:hover{background:#006bea}.pill-btn--white:hover{color:#000}.warning__policy{color:red;font-weight:bold}.learn__more__popfeature{color:#006ff2;margin-top:5px;font-family:SamsungOne700, Arial, Helvetica, sans-serif;font-size:14px;font-weight:700;text-decoration:underline;display:inline;cursor:pointer}":t.appendChild(document.createTextNode(".samsung__care__details a{text-decoration:underline;color:#006bea}.samsung__care__details ul{padding-left:20px}.modal__header{padding-bottom:0px}.modal__title{font-size:18px}.modal__terms{margin-bottom:0px;margin-top:30px}.modal__buttons--inline{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;width:50%}@media only screen and (max-width: 500px){.modal__buttons--inline{width:100%}}.modal__buttons--inline .modal__buttons--inline button:first-child{-webkit-margin-end:0px;margin-inline-end:0px}.modal__buttons--inline .modal__buttons--inline button{margin:0px 10px 0px 0px}.pill-btn--white{color:#1f78ec;background:white;border:1px solid #fff;text-decoration:underline}.pill-btn--black{background:#006bea}.pill-btn--black:hover{background:#006bea}.pill-btn--white:hover{color:#000}.warning__policy{color:red;font-weight:bold}.learn__more__popfeature{color:#006ff2;margin-top:5px;font-family:SamsungOne700, Arial, Helvetica, sans-serif;font-size:14px;font-weight:700;text-decoration:underline;display:inline;cursor:pointer}")),e.appendChild(t)},removeStuff:function(){document.querySelectorAll(".opti__div").forEach(function(e){(e.innerText.includes("insurance")&&(e.previousElementSibling.style.display="block",e.previousSibling.style.color="#000000",e.style.display="none"),"Add Samsung Care+"===e.previousElementSibling.textContent)&&(new _newElements2.default).addingNewElements()})},elementObservation:function(){var e=this,t=document.querySelector(".service-item");document.querySelector("div:nth-child(2) > div > cx-cart-item > div > div.cart-item__services > app-cart-added-services > div:nth-child(1)");new MutationObserver(function(){console.log("trigger"),e.removeStuff()}).observe(t,{subtree:!0,childList:!0})},insureText:function(){var e=document.querySelector(".service-item__actions");new MutationObserver(function(){"Add"===document.querySelector(".action-text").innerText&&(document.querySelector(".action-text").innerText="Add insurance")}).observe(e,{subtree:!0,childList:!0})},setEvents:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";console.log("XXX - setEvents: "+e)},resizeWindow:function(){setTimeout(function(){$(window).resize(),console.log("window resized")},100)}};return{main:e}}(),cheillondon.targetBoilerplate.main.init();

},{"./components/addElements":1,"./components/newElements":2,"./components/popUpContent":3}]},{},[4])

//# sourceMappingURL=main.js.map
