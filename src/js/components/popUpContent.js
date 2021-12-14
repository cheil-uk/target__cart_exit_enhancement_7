export default class PopUpContent {
 addConent() {
    const cartOptions = document.querySelectorAll('.service-item__name');

    const ourContentHtml = `
    <div class="samsung__care__details">
          <h2 class="modal__title">Samsung Care+ includes:</h2>
          <ul>
            <li>Fast and convenient expert repairs using genuine Samsung parts</li>
            <li>if your device isn't running smoothly, we'll check and fix any issues</li>
            <li>Stay powered up with hassle-free battery replacements</li>
            <li>Up to four claims within 24 months, or two within 12 months</li>
            <li><a href="https://www.samsung.com/uk/offer/samsung-care-plus/">See all benefits here.</a> Key details of your policy can be found in the <a href="https://images.samsung.com/is/content/samsung/p5/uk/samsung-mobile-care-ipid.pdf">Insurance Proudct Infomation Document(IPID)</a></li>
          </ul>
          <div class="samsung__care__details__30days">
            <h2 class="modal__title">Try Samsung Care+ free for 30 days</h2>
            <p class="hubble-product__options-content-text">Does not renew automatically. Cover terminates after 30 days unless renewed at samsungcareplus.com.
            Service fee per claim still applies. View the Insurance Product Information Pack(IPID) for full policy details.
            </p>
          </div>
        </div>
    `
    cartOptions.forEach(cartOption => {
      const insuranceBtn = cartOption.parentElement.nextElementSibling.children[0].children[0].children[1];
      insuranceBtn.onclick = () => {
        setTimeout(() => {
            const title = document.getElementById('modal-title');
            const description = document.querySelector('.modal__description')
            const modelContainer = document.querySelector('.modal__radio');
            const termsContainer = document.querySelector('.modal__terms');
            const footerContainer  = document.querySelector('.modal__footer');
						modelContainer.insertAdjacentHTML('afterend', ourContentHtml);
            footerContainer.insertAdjacentElement('afterend', termsContainer);
            const cancelBtn = document.querySelector(".modal__footer.modal__buttons--inline > button.button.pill-btn.pill-btn--white.reset");
            const addToBasket = document.querySelector(".modal__footer.modal__buttons--inline > button.button.primary.pill-btn.pill-btn--black.view-more");

            title.innerText = 'Protext your Galaxy with Samsung Care+';
            description.innerText = 'Up to 24 months of worldwide accidental damage insurance for complete peace of mind';

            const labels = document.querySelectorAll('.option-box__label');
            labels.forEach((label) => {
              const name = label.firstChild.innerText;
              if (name === '1 year coverage') {
                label.lastElementChild.innerText = '12-month policy'
              } else if (name === '2 year coverage') {
                label.lastElementChild.innerText = '24-month policy'
              } else if (name.includes('Free')) {
                label.lastElementChild.innerText = 'One month policy'
              }
            })

            cancelBtn.innerText = "No Thanks";
            addToBasket.innerText = "Add to order";
					},1500)
      }
    });
  }
}