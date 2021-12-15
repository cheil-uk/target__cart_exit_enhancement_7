export default class PopUpContent {
  addConent() {
    const cartOptions = document.querySelectorAll('.service-item__name');

    cartOptions.forEach(cartOption => {
      const insuranceBtn = cartOption.parentElement.nextElementSibling.children[0].children[0].children[1];
      const sku = cartOption.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[4].innerText;
      insuranceBtn.onclick = () => {
        console.log('pop n click')

        setTimeout(() => {
            const title = document.getElementById('modal-title');
            const description = document.querySelector('.modal__description')
            const modelContainer = document.querySelector('.modal__radio');
            const termsContainer = document.querySelector('.modal__terms');
            const footerContainer  = document.querySelector('.modal__footer');
						modelContainer.insertAdjacentHTML('afterend', `
            <div class="samsung__care__details">
                <h2 class="modal__title">Samsung Care+ includes:</h2>
                <ul>
                  <li>Fast and convenient expert repairs using genuine Samsung parts</li>
                  <li>if your device isn't running smoothly, we'll check and fix any issues</li>
                  <li>Stay powered up with hassle-free battery replacements</li>
                  <li>Up to four claims within 24 months, or two within 12 months</li>
                  <li><a href="https://www.samsung.com/uk/offer/samsung-care-plus/">See all benefits here.</a> Key details of your policy can be found in the <a href="https://images.samsung.com/is/content/samsung/p5/uk/samsung-mobile-care-ipid.pdf">Insurance Proudct Infomation Document(IPID)</a></li>
                </ul>
                <div class="samsung__care__details__30days" style="${(sku.includes('SM-G99')) ? "display: block" : "display: none"}">
                  <h2 class="modal__title">Try Samsung Care+ free for 30 days</h2>
                  <p class="hubble-product__options-content-text">Does not renew automatically. Cover terminates after 30 days unless renewed at samsungcareplus.com.
                  Service fee per claim still applies. View the Insurance Product Information Pack(IPID) for full policy details.
                  </p>
                </div>
              </div>
            `);
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

            const priceTags = document.querySelectorAll('.option-box__price');
            priceTags.forEach((prices) => {
              const price = parseInt(prices.innerText.slice(1));
              prices.style.textAlign = 'right';
              if (prices.previousElementSibling.innerText.includes('1 year coverage')) {
                const p = document.createElement('p');
                const monthlyPrice = price / 12;
                p.innerText = `(equilvalent to £${monthlyPrice.toFixed(2)} a month)`;
                prices.insertAdjacentElement('beforeend',p);
              } else if (prices.previousElementSibling.innerText.includes('2 year coverage')){
                const p = document.createElement('p');
                const monthlyPrice = price / 24;
                p.innerText = `(equilvalent to £${monthlyPrice.toFixed(2)} a month)`;
                prices.insertAdjacentElement('beforeend',p);
              }
            })
            const coverOptions = document.querySelectorAll('.mat-radio-label');
            coverOptions.forEach((options) => {
              if (options.innerText.includes('2 year coverage')) {
                options.click()
              }
            })
            cancelBtn.innerText = "No Thanks";
            addToBasket.innerText = "Add to order";
					},1500)
      }
    });
  }

  iconBtnClick() {
    const cartOptions = document.querySelectorAll('.service-item__name');
    cartOptions.forEach(cartOption => {
      const iconInsureBtn = cartOption.parentElement.nextElementSibling.children[0].children[0].children[0];
      const sku = cartOption.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[4].innerText;
      iconInsureBtn.onclick = () => {
        console.log('pop n click icon')
        setTimeout(() => {
            const title = document.getElementById('modal-title');
            const description = document.querySelector('.modal__description')
            const modelContainer = document.querySelector('.modal__radio');
            const termsContainer = document.querySelector('.modal__terms');
            const footerContainer  = document.querySelector('.modal__footer');
						modelContainer.insertAdjacentHTML('afterend', `
            <div class="samsung__care__details">
                <h2 class="modal__title">Samsung Care+ includes:</h2>
                <ul>
                  <li>Fast and convenient expert repairs using genuine Samsung parts</li>
                  <li>if your device isn't running smoothly, we'll check and fix any issues</li>
                  <li>Stay powered up with hassle-free battery replacements</li>
                  <li>Up to four claims within 24 months, or two within 12 months</li>
                  <li><a href="https://www.samsung.com/uk/offer/samsung-care-plus/">See all benefits here.</a> Key details of your policy can be found in the <a href="https://images.samsung.com/is/content/samsung/p5/uk/samsung-mobile-care-ipid.pdf">Insurance Proudct Infomation Document(IPID)</a></li>
                </ul>
                <div class="samsung__care__details__30days" style="${(sku.includes('SM-G99')) ? "display: block" : "display: none"}">
                  <h2 class="modal__title">Try Samsung Care+ free for 30 days</h2>
                  <p class="hubble-product__options-content-text">Does not renew automatically. Cover terminates after 30 days unless renewed at samsungcareplus.com.
                  Service fee per claim still applies. View the Insurance Product Information Pack(IPID) for full policy details.
                  </p>
                </div>
              </div>
            `);
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

            const priceTags = document.querySelectorAll('.option-box__price');
            priceTags.forEach((prices) => {
              const price = parseInt(prices.innerText.slice(1));
              prices.style.textAlign = 'right';
              if (prices.previousElementSibling.innerText.includes('1 year coverage')) {
                const p = document.createElement('p');
                const monthlyPrice = price / 12;
                p.innerText = `(equilvalent to £${monthlyPrice.toFixed(2)} a month)`;
                prices.insertAdjacentElement('beforeend',p);
              } else if (prices.previousElementSibling.innerText.includes('2 year coverage')){
                const p = document.createElement('p');
                const monthlyPrice = price / 24;
                p.innerText = `(equilvalent to £${monthlyPrice.toFixed(2)} a month)`;
                prices.insertAdjacentElement('beforeend',p);
              }
            })
            const coverOptions = document.querySelectorAll('.mat-radio-label');
            coverOptions.forEach((options) => {
              if (options.innerText.includes('2 year coverage')) {
                options.click()
              }
            })
            cancelBtn.innerText = "No Thanks";
            addToBasket.innerText = "Add to order";
					},1500)
      }
    });
  }
}