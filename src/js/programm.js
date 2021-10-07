
//******СЛАЙДЕР*******/

let positionProgramm = 0;
let slidesToShowProgramm;
let differenceProgramm;

if (window.matchMedia('(min-width: 1121px)').matches) {
	slidesToShowProgramm = 3;
	differenceProgramm = 930;
} else if (window.matchMedia('(min-width: 785px)').matches) {
	slidesToShowProgramm = 2;
	differenceProgramm = 563;
} else if (window.matchMedia('(min-width: 577px)').matches) {
	slidesToShowProgramm = 1;
	differenceProgramm = 190;
} else if (window.matchMedia('(min-width: 1px)').matches) {
	slidesToShowProgramm = 1;
	differenceProgramm = 636;
}




const slidesToScrollProgramm = 1;
const containerProgramm = document.querySelector('.programm__slider_container');
const trackProgramm = document.querySelector('.programm__slider_track');
const btnPrevProgramm = document.querySelector('.programm__btn_prev');
const btnNextProgramm = document.querySelector('.programm__btn_next');
const itemsProgramm = document.querySelectorAll('.programm__slider_item');
const itemsCountProgramm = itemsProgramm.length;
const itemWidthProgramm = containerProgramm.clientWidth / slidesToShowProgramm;
const movePositionProgramm = slidesToScrollProgramm * itemWidthProgramm;

let counterProgramm = 0;

itemsProgramm.forEach((itemProgramm) => {
	itemProgramm.style.miinWidth = `${itemWidthProgramm}px`;
});

btnNextProgramm.addEventListener('click', () => {
	const itemsLeftProgramm = itemsCountProgramm - (Math.abs(positionProgramm) + slidesToShowProgramm * itemWidthProgramm) / itemWidthProgramm;

	positionProgramm -= itemsLeftProgramm >= slidesToScrollProgramm ? movePositionProgramm : itemsLeftProgramm * itemWidthProgramm;
	counterProgramm += 1;

	if (counterProgramm >= itemsCountProgramm - (slidesToShowProgramm - 1)) {
		positionProgramm = 0;
		counterProgramm = 0;
	}
	console.log(counterProgramm);

	setPositionProgramm();

});

btnPrevProgramm.addEventListener('click', () => {
	const itemsLeftProgramm = Math.abs(positionProgramm) / itemWidthProgramm;

	positionProgramm += itemsLeftProgramm >= slidesToScrollProgramm ? movePositionProgramm : itemsLeftProgramm * itemWidthProgramm;

	counterProgramm -= 1;


	if (counterProgramm < 0) {
		positionProgramm = -(itemsCountProgramm * 346 - differenceProgramm);
		counterProgramm = itemsCountProgramm - slidesToShowProgramm;
	}
	console.log(counterProgramm);

	setPositionProgramm();

});


const setPositionProgramm = () => {
	trackProgramm.style.transform = `translateX(${positionProgramm}px)`;
};

