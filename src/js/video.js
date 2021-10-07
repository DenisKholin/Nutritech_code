
//******СЛАЙДЕР*******/

let position = 0;
let slidesToShow;

if (window.matchMedia('(min-width: 1137px)').matches) {
	slidesToShow = 2;
} else if (window.matchMedia('(max-width: 1136px)').matches) {
	slidesToShow = 1;
}



const slidesToScroll = 1;
const container = document.querySelector('.video__slider_container');
const track = document.querySelector('.video__slider_track');
const btnPrev = document.querySelector('.video__btn_prev');
const btnNext = document.querySelector('.video__btn_next');
const items = document.querySelectorAll('.video__slider_item');
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;

let counter = 0;

items.forEach((item) => {
	item.style.miinWidth = `${itemWidth}px`;
});

btnNext.addEventListener('click', () => {
	const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

	position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
	counter += 1;

	if (counter >= itemsCount - (slidesToShow - 1)) {
		position = 0;
		counter = 0;
	}
	console.log(counter);

	setPosition();

});

btnPrev.addEventListener('click', () => {
	const itemsLeft = Math.abs(position) / itemWidth;

	position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

	counter -= 1;


	if (counter < 0) {
		position = -(itemsCount * itemWidth - itemWidth * slidesToShow);
		counter = itemsCount - slidesToShow;
	}
	console.log(counter);

	setPosition();

});


const setPosition = () => {
	track.style.transform = `translateX(${position}px)`;
};

