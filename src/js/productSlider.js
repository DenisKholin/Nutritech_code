
//******СЛАЙДЕР*******/

let positionProduct = 0;
let slidesToShowProduct;

if (window.matchMedia('(min-width: 1216px)').matches) {
	slidesToShowProduct = 4;
} else if (window.matchMedia('(min-width: 896px)').matches) {
	slidesToShowProduct = 3;
} else if (window.matchMedia('(min-width: 464px)').matches) {
	slidesToShowProduct = 2;
} else if (window.matchMedia('(min-width: 1px)').matches) {
	slidesToShowProduct = 1;
}

const slidesToScrollProduct = 1;
const containerProduct = document.querySelector('.product__slider_container');
const trackProduct = document.querySelector('.product__slider_track');
const btnPrevProduct = document.querySelector('.product__btn_prev');
const btnNextProduct = document.querySelector('.product__btn_next');
let itemsProduct = document.querySelectorAll('.product__slider_item');
let itemsCountProduct = itemsProduct.length;
const itemWidthProduct = containerProduct.clientWidth / slidesToShowProduct;
const movePositionProduct = slidesToScrollProduct * itemWidthProduct;


let counterProduct = 0;

itemsProduct.forEach((itemProduct) => {
	itemProduct.style.miinWidth = `${itemWidthProduct}px`;
});

btnNextProduct.addEventListener('click', () => {
	const itemsLeftProduct = itemsCountProduct - (Math.abs(positionProduct) + slidesToShowProduct * itemWidthProduct) / itemWidthProduct;

	positionProduct -= itemsLeftProduct >= slidesToScrollProduct ? movePositionProduct : itemsLeftProduct * itemWidthProduct;
	counterProduct += 1;

	if (counterProduct >= itemsCountProduct - (slidesToShowProduct - 1)) {
		positionProduct = 0;
		counterProduct = 0;
	}
	console.log(counterProduct);
	console.log(slidesToShowProduct);
	console.log(itemWidthProduct);
	setPositionProduct();

});

btnPrevProduct.addEventListener('click', () => {
	const itemsLeftProduct = Math.abs(positionProduct) / itemWidthProduct;

	positionProduct += itemsLeftProduct >= slidesToScrollProduct ? movePositionProduct : itemsLeftProduct * itemWidthProduct;

	counterProduct -= 1;


	if (counterProduct < 0) {
		positionProduct = -(itemsCountProduct * itemWidthProduct - itemWidthProduct * slidesToShowProduct);
		counterProduct = itemsCountProduct - slidesToShowProduct;
	}
	console.log(itemWidthProduct);
	console.log(slidesToShowProduct);
	setPositionProduct();

});


const setPositionProduct = () => {
	trackProduct.style.transform = `translateX(${positionProduct}px)`;
};


const menuNutri = document.querySelector('.product__menu_item-1');
const menuMeri = document.querySelector('.product__menu_item-2');
const advan = document.querySelector('.advan');



const toggleContentSlider = className => {
	document.querySelectorAll('.product__menu_item').forEach(item => item.classList.remove('product__menu_item-active'));
	itemsProduct.forEach(el => {
		el.style.display = 'none';
		el.style.opacity = 0;
		advan.style.display = 'none';

	});
	itemsProduct = document.querySelectorAll(className);
	itemsProduct.forEach(el => {
		el.style.display = 'flex';
		advan.style.display = 'flex';

		setOpacity(el);
		setOpacity(advan);
	});
};


menuMeri.addEventListener('click', () => {

	toggleContentSlider('.product__slider_item-meristem');
	itemsCountProduct = document.querySelectorAll('.product__slider_item-meristem').length;
	menuMeri.classList.add('product__menu_item-active');
	advan.style.display = 'flex';
});

menuNutri.addEventListener('click', () => {

	toggleContentSlider('.product__slider_item');
	itemsCountProduct = document.querySelectorAll('.product__slider_item').length;
	menuNutri.classList.add('product__menu_item-active');
	advan.style.display = 'none';
});
