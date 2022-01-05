import PopUpContent from "./popUpContent";
export default class NewElements {
 addingNewElements() {
  const popUpContent = new PopUpContent();
  document.querySelector('.opti__div').style.display = 'block';

  (window.innerWidth <= 920) ? popUpContent.iconBtnClick() : '';
  const samsungCare = document.querySelectorAll('.opti__div');
			samsungCare.forEach(samsungCare => {
    if (samsungCare.previousSibling.textContent === 'Add Samsung Care+') {
        samsungCare.previousSibling.style.display = 'none';
        const learnmoreBtn = document.querySelector('.learn__more__popfeature');

        learnmoreBtn.onclick = () => {
          document.querySelector("body > app-root > cx-storefront > main > cx-page-layout > cx-page-slot.TokoLeftContent.has-components.ng-star-inserted > cx-cart-details > div > cx-cart-item-list > div > div > cx-cart-item > div > div.cart-item__services > app-cart-added-services > div:nth-child(1) > div.service-item__actions > div > button > span.action-text.action-text--blue").click();
          }
        }

			});
      popUpContent.addConent();
 }
}