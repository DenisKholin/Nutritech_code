$(document).ready(function () {


	$(function () {
		$('a[href*="#"]:not([href="#"])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: target.offset().top
					}, 1000);
					return false;
				}
			}
		});
	});

	$('.header__product_main').click(function () {
		var nav = $('.header__product_list');
		nav.slideToggle(200);
	});

});

const setOpacity = el => {
	let op = 0;
	while (op <= 1) {
		(function (_op) {
			setTimeout(function () { el.style.opacity = _op; }, 60 + op * 600);
		})(op);
		op += 0.1;
	}
};
//******СЛАЙДЕР*******/

let positionCatalog = 0;
let slidesToShowCatalog;
let leftCounterCatalog;
let differenceCatalog;


if (window.matchMedia('(min-width: 785px)').matches) {
	slidesToShowCatalog = 2.36;
	leftCounterCatalog = 1;
	differenceCatalog = 380;
} else if (window.matchMedia('(min-width: 577px)').matches) {
	slidesToShowCatalog = 1.94;
	leftCounterCatalog = 1;
	differenceCatalog = 255;
} else if (window.matchMedia('(min-width: 1px)').matches) {
	slidesToShowCatalog = 0.97;
	leftCounterCatalog = 0;
	differenceCatalog = 645;
}



const slidesToScrollCatalog = 1;
const containerCatalog = document.querySelector('.catalog__slider_container');
const trackCatalog = document.querySelector('.catalog__slider_track');
const btnPrevCatalog = document.querySelector('.catalog__btn_prev');
const btnNextCatalog = document.querySelector('.catalog__btn_next');
const itemsCatalog = document.querySelectorAll('.catalog__slider_item');
const itemsCountCatalog = itemsCatalog.length;
const itemWidthCatalog = containerCatalog.clientWidth / slidesToShowCatalog;
const movePositionCatalog = slidesToScrollCatalog * itemWidthCatalog;

let counterCatalog = 0;

const buttons = document.querySelector('.catalog__buttons');

if (window.matchMedia('(max-width: 1120px)').matches) {
	buttons.before(containerCatalog);
}




itemsCatalog.forEach((itemCatalog) => {
	itemCatalog.style.miinWidth = `${itemWidthCatalog}px`;
});

btnNextCatalog.addEventListener('click', () => {
	const itemsLeftCatalog = itemsCountCatalog - (Math.abs(positionCatalog) + slidesToShowCatalog * itemWidthCatalog) / itemWidthCatalog;

	positionCatalog -= itemsLeftCatalog >= slidesToScrollCatalog ? movePositionCatalog : itemsLeftCatalog * itemWidthCatalog;
	counterCatalog += 1;

	if (counterCatalog >= itemsCountCatalog - leftCounterCatalog) {
		positionCatalog = 0;
		counterCatalog = 0;
	}
	console.log(counterCatalog);

	setPositionCatalog();

});

btnPrevCatalog.addEventListener('click', () => {
	const itemsLeftCatalog = Math.abs(positionCatalog) / itemWidthCatalog;

	positionCatalog += itemsLeftCatalog >= slidesToScrollCatalog ? movePositionCatalog : itemsLeftCatalog * itemWidthCatalog;

	counterCatalog -= 1;


	if (counterCatalog < 0) {
		positionCatalog = -(itemsCountCatalog * 280 - differenceCatalog);
		counterCatalog = itemsCountCatalog - (leftCounterCatalog + 1);
	}
	console.log(counterCatalog);

	setPositionCatalog();

});


const setPositionCatalog = () => {
	trackCatalog.style.transform = `translateX(${positionCatalog}px)`;
};

