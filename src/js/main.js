// ==========================================================================
//  This is a boilerplate to use for target activities
//
//	URL example: add in url of project for visibility here
// ==========================================================================

// ==========================================================================
// Scripts, helper widgets - import below
// ==========================================================================
import PopUpContent from "./components/popUpContent";

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
					main.appendNewStyle();
					main.tweakElements();
					main.addElements();
					main.insureButtons();
					main.freeInsurance();

				} else {
					console.log('no jquery')
					_self.doEverythingTimeout();
				}
			}, 900)
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

		tweakElements: function () {

			const testedDevices = ["S21", "S21+", "S21 Ultra", "Note 20", "Note20", "A72", "A52 5G", "Tab S7", "Z Flip3 5G"];
			var priceFormatter = new Intl.NumberFormat("en-UK", { style: "currency", currency: "GBP" });

			 var termsAsterisks = 0;
    var terms = [];

    $(".cart-item").each(function (index, element) {
        if(testedDevices.filter((device) => (element.querySelector(".cart-item__name").innerText.includes(device))) && ($(element).find(".service-item:contains(Insurance)").length > 0)) {//If device name matches and has trade in text
            //for whatever reason, do another loop to get the matched device keyword e.g. "S21+", but that makes the order of the testedDevices important
            //for instance, if S21 was after S21 Ultra, S21 Ultra would be counted as S21 (because of the for loop below)
            var matchedDevice;
            testedDevices.forEach(function (device) {
                if(element.querySelector(".cart-item__name").innerText.includes(device)) matchedDevice = device;
            });

            var $tradeInElement = $(element).find(".service-item:contains(Insurance)"),
                $details = $tradeInElement.find(".service-item__details"),
                $learnMoreButton = $("<p class='tradein__learnmore'>Learn More</p>");

														let firstLoadDetails = new Array ($details[0].children);


            if (!$tradeInElement.find(".action-text.action-text--mobile.ng-star-inserted").text().includes("-£")) { //avoid repeats
                termsAsterisks += 1;
                $details.children()[0].innerText = "Add Samsung Care+";
                var copy;
                var legal;
                switch (matchedDevice) {
                    case "S21+":
                    case "S21 Ultra":
                        (copy = "Up to 24 months of worldwide accidental damage insurance for complete peace of mind." );
                        break;
                    case "S21":
                        (copy = "Up to 24 months of worldwide accidental damage insurance for complete peace of mind.");
                        break;
                    case "Note 20":
                    case "Note20":
                        (copy = "Up to 24 months of worldwide accidental damage insurance for complete peace of mind.");
                        break;
                    case "A72":
                    case "A52 5G":
                        (copy = "Up to 24 months of worldwide accidental damage insurance for complete peace of mind.");
                        break;
                    case "Tab S7":
                        (copy = "Up to 24 months of worldwide accidental damage insurance for complete peace of mind.");
                        break;
                    case "Z Flip3 5G":
                        (copy = "Up to 24 months of worldwide accidental damage insurance for complete peace of mind.");
                        break;
                    default:
                        (copy = "Trade In product"), (legal = ""), console.error("Product outside expected product range.");
                }
																(element.querySelector('.service-item__insurance-copy') === null ) ? $details.children().children().hide()  : $details.children().children().show();
																$details.children()[1].insertAdjacentHTML('afterend', `<div class="service-item__insurance-copy"><p>${copy}</p></div>`)
                // terms.push(legal);
                $details.append($learnMoreButton);

																const popUpContent = new PopUpContent();
                $learnMoreButton.on("click", function () {
                    $tradeInElement.find(".action-button.ng-star-inserted").click();
																				popUpContent.addContent();
                });

                $tradeInElement.find(".action-text.action-text--blue").text("Add Insurance");

                var priceElement = $(element).find(".price__current")[0];
                var Observer = window.MutationObserver || window.WebKitMutationObserver;

                new Observer(function (n) {
                    var modelPrice = element.getAttribute("data-modelprice");
                    var price = Number(priceElement.innerText.replace(/[^0-9.-]+/g, ""));
                    modelPrice == price || isNaN(price)
                        ? ($learnMoreButton.show(), $(element).find(".price__current > div").length > 0 && $(element).find(".price__current > div").remove(), $tradeInElement.find(".action-text.action-text--blue").text("Add Insurance"))
                        : ($learnMoreButton.hide(),
                            $(element)
                                .find(".price__current")
                                .append('<div class="tradein__oldprice">' + priceFormatter.format(modelPrice) + "</div>"));
                }).observe(priceElement, { childList: !1, characterData: !0, attributes: !0, subtree: !0 });

                new Observer(function () {
                    $tradeInElement.find(".service-item__applied-message.ng-star-inserted:contains(been successfully applied)").text($tradeInElement);
                }).observe($tradeInElement[0], { childList: !0, characterData: !0, attributes: !0, subtree: !0 });

																new Observer(function () {
																	console.log('observations here')
																	$details.children()[1].nextSibling.style.display = 'none';
																	$learnMoreButton.hide();
																	if ($details.children()[1].innerText.includes('Add Samsung Care+')) {
																		console.log('we have now entered here')
																		$details.children()[1].nextSibling.style.display = 'block';
																		$learnMoreButton.show();
																		$details.children()[1].childNodes[0].style.color = 'white';
																		$details.children()[1].childNodes[0].style.height = '0px';
																		$tradeInElement.find(".action-text.action-text--blue").text("Add Insurance");
																	}
																}).observe($details.children()[1], {attributes: true, childList: true, subtree: true})

            }

        }

    })

   main.processTermsFooter(terms);


		},

		insureButtons: function () {

			const allbtns = document.querySelectorAll('.action-text');
			const popUpContent = new PopUpContent();
									allbtns.forEach((insureBtn) => {
									if (insureBtn.innerText.includes('Add Insurance')){
												insureBtn.onclick = () => {
													popUpContent.addContent();
												}
										}
									})

		},

		freeInsurance: function () {
			const cartNames = document.querySelectorAll('.cart-item__name');

			cartNames.forEach((cartName) => {
				if (cartName.innerText.includes('Galaxy S21 5G')) {
					const cartservicesContainer = cartName.parentElement.parentElement.parentElement.children[6]
					const insuranceCopyContainer = cartservicesContainer.querySelector('.service-item__insurance-copy')
					const paragraph = `<p class="warning__policy">Try Samsung Care+ free for 30 days (does not renew)</p>`
					insuranceCopyContainer.insertAdjacentHTML('afterbegin', paragraph)
				}
			})

		},



		// ==========================================================================
		// When page is already loaded we need to add the new elements
		// ==========================================================================
		addElements: function () {

			console.log('XXX - addElements');



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
		},

		processTermsFooter: function (n) {
				let Terms = $("<p id='TradeInConditions'></p>");
							document.body.contains(Terms[0]) || $(".TermsConditionsSlotContent").append(Terms), n && Terms.html(n.join("<br/>"));
			},
			Terms: $("<p id='TradeInConditions'></p>"),


	};
	return {
		main: main
	};

})();

cheillondon.targetBoilerplate.main.init();

