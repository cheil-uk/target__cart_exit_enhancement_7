// ==========================================================================
//  This is a boilerplate to use for target activities
//
//	URL example: add in url of project for visibility here
// ==========================================================================

// ==========================================================================
// Scripts, helper widgets - import below
// ==========================================================================
import PopUpContent from "./components/popUpContent";
import AddElements from "./components/addElements";
import NewElements from "./components/newElements";
var cheillondon = cheillondon || {};

cheillondon.targetBoilerplate = (function () {

	'use strict';

	var main = {

		// ==========================================================================
		// Variables and config Properties add below
		// ==========================================================================


		//Init
		init: function () {
			main.doEverythingTimeout();
		},


		// ==========================================================================
		// Checking jQuery
		// ==========================================================================
		doEverythingTimeout: function () {
			var _self = this;

			console.log('XXX - doEverythingTimeout');

			setTimeout(function () {
				if (window.$) {
					console.log('doEverythingTimeout - jQuery loaded');
					const popUpContent = new PopUpContent();
					const addElements = new AddElements();
					main.appendNewStyle();
					addElements.elementsAdded();
					popUpContent.addConent();
					main.elementObservation();
					main.insureText();
				} else {
					console.log('no jquery')
					_self.doEverythingTimeout();
				}
			}, 1000)
		},


		// ==========================================================================
		// Adding style
		// ==========================================================================
		appendNewStyle: function () {

			/* FYI: the CSS code is in separated file, in SCSS format that generates the CSS file. After, the gulp file finds the [CSS] and replaces with minified code from file */

			//To insert minified inline string uncomment this variable and paste here
			//Else, use default uncommented variable
			// var _css = '';

			var _css = '[[CSS]]';

			//
			// Adding style definitions to DOM
			// --------------------------------------------------------------------------
			var _head = document.head || document.getElementsByTagName('head')[0],
				_style = document.createElement('style');

			_style.type = 'text/css';
			if (_style.styleSheet) { // This is required for IE8 and below.
				_style.styleSheet.cssText = _css;
			} else {
				_style.appendChild(document.createTextNode(_css));
			}
			_head.appendChild(_style);

		},

		removeStuff: function () {
			const description = document.querySelectorAll('.opti__div');
			description.forEach((desc) => {
				if (desc.innerText.includes('insurance')) {
					desc.previousElementSibling.style.display = 'block';
					desc.previousSibling.style.color = '#000000'
					desc.style.display = 'none'
				}
				if (desc.previousElementSibling.innerText === 'Add Samsung Care+') {
					// console.log('got in here as well')
					const addingNewElements = new NewElements();
					addingNewElements.addingNewElements();
				}
			})
		},

		elementObservation: function () {
				const eleToObserve = document.querySelector('.service-item');
					const observer = new MutationObserver(() => {
						// console.log('trigger')
						this.removeStuff();
					});
					observer.observe(eleToObserve, {subtree: true, childList: true})
		},

		insureText: function () {
			const insurance = document.querySelector('.service-item__actions');
			const observer = new MutationObserver(() => {
				// console.log(document.querySelector('.action-text').innerText)
				if (document.querySelector('.action-text').innerText === "Add") {
					document.querySelector('.action-text').innerText = "Add insurance"
				}
			});
			observer.observe(insurance, {subtree: true, childList: true});
		},



		// ==========================================================================
		// Set Events
		// ==========================================================================
		setEvents: function (elm = '') {

			console.log('XXX - setEvents: ' + elm);

			switch (elm) {
				case 'modal':
					//code to open modal;
					break;
				case 'financePopup':
				//code to open something else;
				default:
					break;
			}



		},

		resizeWindow: function () {
			// as new elements added to panel we need to resize window to activate amend height of Product Panels
			setTimeout(function () {
				$(window).resize();
				console.log('window resized');
			}, 100);
		}


	};
	return {
		main: main
	};

})();

cheillondon.targetBoilerplate.main.init();

