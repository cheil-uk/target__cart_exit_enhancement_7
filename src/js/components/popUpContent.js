export default class PopUpContent {
  addContent() {
    
    
    const popupContent= `
            <div class="delivery-popup__dimmed"></div>
            <div class="delivery-popup-wrap">
              <div class="delivery-popup-layer popup">
                 <div class="delivery-popup-inner popup-inner">
                    <button class="close-btn"></button>
                    <div class="Container  Container--mobile-margins">

                       <h4 class="title">Free next day delivery</h1>
                       <p class="txt">All items are eligible for free next day delivery (not at a specified time) to mainland UK, 7 days a week.</p>

                       <h4 class="title">Free scheduled day delivery</h1>
                       <p class="txt">Choose the day (but not the time) your delivery arrives, Monday to Saturday, free of charge.</p>

                       <h4 class="title">Free returns within 21 days</h1>
                       <p class="txt">You may return your products for any reason within 21 days of delivery. Visit the Shop FAQs for more information about returning a product.</p>
                       <p class="txt">Further delivery, installation, and recycling options are available when you check out. <a href="https://www.samsung.com/uk/shop-faq/delivery-and-installations/" target="_blank" id="leanr-more-link" class='link' data-omni-type="microsite" data-omni="simple buying tool:delivery popup:learn more" data-an-tr="order-qualifies-info:delivery-popup" data-an-la="simple buying tool:delivery popup:learn more">Learn more</a></p>
                    </div>
                 </div>
              </div>
            </div>
        `;

    let deliveryPopup = $("<div class='delivery-popup'></div>");

    document.body.contains(deliveryPopup[0]) || $('body').append(deliveryPopup), popupContent && deliveryPopup.html(popupContent);

    $('.delivery-popup .close-btn').on('click', function(e){
      e.preventDefault();
      $('.delivery-popup').remove();
    });

    $('.delivery-popup #leanr-more-link').on('click', function(e){
      $('.delivery-popup').remove();
    });

  }


  

}