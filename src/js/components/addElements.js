export default class AddElements {
 elementsAdded () {
			const cartOptions = document.querySelectorAll('.service-item__name');
			cartOptions.forEach(cartOption => {
				if (cartOption.innerText === "Insurance" || cartOption.innerText === "Protect your Galaxy with Samsung Care+") {
					const sku = cartOption.parentElement.parentElement.parentElement.parentElement.parentElement.children[2].children[4].innerText;
					const insuranceBtn = cartOption.parentElement.nextElementSibling.children[0].children[0].children[1]

					cartOption.innerText = "Protect your Galaxy with Samsung Care+";
					cartOption.nextElementSibling.style.display = 'none';
     cartOption.nextElementSibling.style.color = '#ffffff';
					const htmlContext = `<div class="ng-star-inserted service-item__description opti__div">
					${(sku.includes('SM-G99') ? `<p class="warning__policy">Try Samsung Care+ free for 30 days (does not renew)*</p>`: '')}
						<p>Up to 24 months of worldwide accidental damage insurance for complete peace of mind.</p>
						<p class="learn__more__popfeature">Learn more</p>
					</div>`
					cartOption.nextElementSibling.insertAdjacentHTML('afterend',htmlContext)
					cartOption.parentElement.nextElementSibling.children[0].children[0].children[1].innerText = 'Add Insurance';

					const learnmoreBtn = document.querySelector('.learn__more__popfeature')
					learnmoreBtn.onclick = () => {
						insuranceBtn.click();
					}
				}
			})
		}
}