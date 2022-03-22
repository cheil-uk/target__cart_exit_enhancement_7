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
					main.addRemoveElements();


					/*main.tweakElements();

					main.insureButtons();
					main.freeInsurance();*/

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


		// ==========================================================================
		// When page is already loaded we need to add the new elements
		// ==========================================================================
		addRemoveElements: function () {

			console.log('XXX - addRemoveElements');


			const eligibleSkus = [

				"NP345XLA-KB6UK",
				"NP755XDA-KB3UK",
				"NP750XDA-KDAUK",
				"NP935XDB-KC3UK",
				"NP345XLA-KB5UK",
				"NP750XDA-KC3UK",
				"NP750XDA-KDBUK",
				"NP930QDB-KE3UK",
				"NP950XDB-KE2UK",
				"NP935QDB-KA2UK",

				"UE65TU7020KXXU",
				"QE43LS03AAUXXU",
				"QE65QN95AATXXU",
				"QE32LS03TCUXXU",
				"UE50TU7020KXXU",
				"UE43AU8000KXXU",
				"QE55LS03AAUXXU",
				"QE55QN95AATXXU",
				"QE50QN90AATXXU",

				"QE85QN900BTXXU",
				"QE75QN900BTXXU",
				"QE65QN900BTXXU",
				"QE85QN800BTXXU",
				"QE75QN800BTXXU",
				"QE65QN800BTXXU",
				"QE75QN700BTXXU",
				"QE65QN700BTXXU",
				"QE55QN700BTXXU",
				"QE85QN95BATXXU",
				"QE75QN95BATXXU",
				"QE65QN95BATXXU",
				"QE55QN95BATXXU",
				"QE85QN90BATXXU",
				"QE75QN90BATXXU",
				"QE65QN90BATXXU",
				"QE55QN90BATXXU",
				"QE50QN90BATXXU",
				"QE43QN90BATXXU",
				"QE85QN85BATXXU",
				"QE75QN85BATXXU",
				"QE65QN85BATXXU",
				"QE55QN85BATXXU",

				"WW90T684DLH/S1",
				"WW80TA046AX/EU",
				"WW90TA046AE/EU",
				"WW90TA046AX/EU",
				"WW90T4540AE/EU",
				"WW90T534DAN/S1",
				"DV90T6240LN/S1",
				"DV90T5240AW/S1",
				"DV90T5240AN/S1",
				"DV90T6240LH/S1",

				"RS54N3103SA/EU",
				"BRB26705DWW/EU",
				"RS67A8811S9/EU",
				"BRB26600FWW/EU",
				"RS67A8810S9/EU",
				"RS67A8810B1/EU",
				"RB38T633ESA/EU",
				"RB34T602EBN/EU",
				"RB34T632EBN/EU",
				"RF23R62E3SR/EU"
			];



			/** Take the product price Total amount from Cart **/
			let productPrice = parseInt($('.summary-total__amount').text().trim().replace(/\u00A3/g, ''));


			let financeContent = '';

			/** Showing different finance details for the product price in between 150 to 250 and  250 and above **/
			switch (true) {
							case productPrice >= 150 && productPrice <= 250:
								financeContent = `
									<div class="title">Discover a new way to pay with Samsung Finance</div>
									<div class="txt">Spread the cost of your order over 12 months at 0% APR representative.*</div>
								`;
								break;
							default:
								financeContent = `
									<div class="title">Flexible ways to pay with Samsung Finance</div>
									<div class="txt">Spread the cost of your order over 12 to 36 months at 0% APR representative.*</div>
								`;
			}



			const deliveryContent= `
				<div class="delivery-info-wrapp">
					<div class="delivery-info">
						<div class="title">Your order qualifies for:</div>
						<div class="info-list">
							<div class="txt">Next day delivery (<a href="#" class="delivey-popup-link">More info</a>) </div>
							<div class="price">FREE</div>
						</div>
						<div class="info-list">
							<div class="txt">Scheduled day delivery</div>
							<div class="price">FREE</div>
						</div>
						<div class="info-list">
							<div class="txt">Same day delivery</div>
							<div class="price">See checkout</div>
						</div>
						<div class="info-list">
							<div class="txt">Timed delivery</div>
							<div class="price">See checkout</div>
						</div>
						<div class="info-list">
							<div class="txt">21-day returns (<a href="#" class="delivey-popup-link">More info</a>)</div>
							<div class="price">FREE</div>
						</div>
						<div class="info-list">
							<div class="txt">Further delivery, installation, and recycling options are available when you check out.</div>
						</div>
					</div>

					<div class="finance-info">
						${financeContent}
					</div>
				</div>
			`;

			// Remove already added delivery elements first
	        main.removeDeliveryElements();


			let noOfEligibleSkus = 0;

			$(".cart-item").each(function (index, element) {

				if (eligibleSkus.filter((sku) => (element.querySelector(".cart-item__sku").innerText.includes(sku))).length) {
					//If sku matches the eligible Sku list

					noOfEligibleSkus = noOfEligibleSkus+1;
            		return false; // to break the loop

            	}


			});


			if (noOfEligibleSkus > 0) {

				/** Ensure that no Delivery details div already added to the cart **/
				if ($('#DeliveryDetails').length == 0) {
					let deliveryDetails = $("<p id='DeliveryDetails'></p>");
					document.body.contains(deliveryDetails[0]) || $( deliveryDetails ).insertAfter( "cx-cart-details" ), deliveryContent && deliveryDetails.html(deliveryContent);
					main.setEvents('deliveryPopup'); // More info link clicked to view delivery popup
					main.setEvents('itemRemovedFromCart'); // If a Item removed from cart
					main.processTermsFooter();
				}

			}

			/*else {
				 *Remove deleivery details when there is no eligible products in the cart *
				$('#DeliveryDetails').remove();
				$('#TradeInConditions').remove();

			}*/


			//this will add in tagging
			main.addTagging();
		},


		removeDeliveryElements: function() {

			$('#DeliveryDetails').remove();
			$('#TradeInConditions').remove();

		},


		// ==========================================================================
		// Set Events
		// ==========================================================================
		setEvents: function (elm = '') {

			console.log('XXX - setEvents: ' + elm);

			switch (elm) {
				case 'deliveryPopup':
					//code to open delivery popup;
					$('.delivey-popup-link').on('click', function(e){
						e.preventDefault();
						const popUpContent = new PopUpContent();
						popUpContent.addContent();
					});
					break;

				case 'itemRemovedFromCart':

					/*$('.cart-item__remove--btn').on('click', function(){
						main.addRemoveElements();
					});*/

					/** If the cart total order value changes and addRemoveElements method is called to update delivery details**/
					$('.summary-total__amount').on('DOMSubtreeModified', function(){
					  	main.addRemoveElements();
					});
					break;

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

		processTermsFooter: function () {
			let termsContent = `
				<div class="title">Terms and conditions</div>
    			<p class="txt">*All credit is subject to status and only available to UK residents over 18, with a UK Bank account and valid driver’s license, passport, or identity card. Credit duration is variable, and you could be offered credit at a higher rate than the representative APR set out above based on your personal financial circumstances and what you tell us. For smaller baskets of between £150 and £250 a minimum upfront payment of 20% is required and 12 months fixed monthly payments. For loans above £250, a 10% deposit is required and up to 36 months of fixed monthly payments. By accepting our credit you consent to a credit check being completed which will appear on your credit file.</p>
    			<div class="title">Samsung Finance</div>
    			<p class="txt">Samsung Electronics (UK) Limited (Registered no: 03086621), registered at Samsung House, 2000 Hillswood Drive, Chertsey, Surrey KT16 0RS, United Kingdom, acts as a credit broker and not as a lender. Samsung is authorised and regulated by the Financial Conduct Authority (FRN 727333). Credit is provided by Glow Financial Services Limited, 71 Queen Victoria Street, London EC4V 4BE. Registered in England No. 09127663. Glow Financial Services Limited is authorised and regulated by the Financial Conduct Authority (Reference No. 751308). Glow Financial Services acting as lender, under brand license as Samsung Finance (powered by Glow) through Samsung Electronics (UK) Limited. The Financial Services Register can be accessed through www.fca.org.uk</p>
			`;

			let Terms = $("<div id='TradeInConditions' class='delivery-terms'></div>");
			document.body.contains(Terms[0]) || $(".TermsConditionsSlotContent").append(Terms), termsContent && Terms.html(termsContent);

		},

		addTagging : function () {

		function tagging(el, attrs) {
    for(let key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }

		const moreInfoElements = document.querySelectorAll('.delivey-popup-link');

		moreInfoElements.forEach((moreInfoBtns) => {

				tagging(moreInfoBtns,
			{ "data-omni-type"  : "microsite",
					"data-omni"       : `uk:simple buying tool:your order qualifies for:more info`,
					"ga-ac"           : "order-qualifies-info",
					"ga-ca"           : "more info",
					"ga-la"           : `your order qualifies for:more info`
			})
		})
		}


	};
	return {
		main: main
	};

})();

cheillondon.targetBoilerplate.main.init();

