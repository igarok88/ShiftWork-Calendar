const body = document.querySelector("body");
let calendar = document.querySelector(".calendar");

const day_names = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const calendar_name = [" ", "День", "А", "Б", "В", "Г", "Д", "Е"];

const month_names = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
let calendar_a = calendar.querySelector(".calendar-a");
let calendar_b = calendar.querySelector(".calendar-b");
let calendar_v = calendar.querySelector(".calendar-v");
let calendar_g = calendar.querySelector(".calendar-g");
let calendar_d = calendar.querySelector(".calendar-d");
let calendar_e = calendar.querySelector(".calendar-e");
let calendar_column = calendar.querySelectorAll(".calendar-column");
let arrForCount = [];
const root = [
	"23",
	"23",
	"23",
	"-",
	"-",
	"15",
	"15",
	"15",
	"-",
	"-",
	"7",
	"7",
	"7",
	"-",
	"-",
	"23",
	"23",
	"23",
	"-",
	"-",
	"15",
	"15",
	"15",
	"-",
	"-",
	"7",
	"7",
	"7",
	"-",
	"-",
	"23",
	"23",
	"23",
	"-",
	"-",
	"15",
	"15",
	"15",
	"-",
	"-",
	"7",
	"7",
	"7",
	"-",
	"-",
	"23",
	"23",
	"23",
	"-",
	"-",
	"15",
	"15",
	"15",
	"-",
	"-",
	"7",
	"7",
	"7",
	"-",
	"-",
	"23",
	"23",
	"23",
	"-",
	"-",
	"15",
	"15",
	"15",
	"-",
	"-",
	"7",
	"7",
	"7",
	"-",
	"-",
];

isLeapYear = (year) => {
	return (
		(year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
		(year % 100 === 0 && year % 400 === 0)
	);
};

getFebDays = (year) => {
	return isLeapYear(year) ? 29 : 28;
};

generateCalendar = (month, year) => {
	let calendar_week_day = calendar.querySelector(".calendar-week-day");
	let calendar_days = calendar.querySelector(".calendar-days");
	let calendar_header_year = calendar.querySelector("#year");

	let days_of_month = [
		31,
		getFebDays(year),
		31,
		30,
		31,
		30,
		31,
		31,
		30,
		31,
		30,
		31,
	];

	calendar_column.forEach((column, index) => {
		column.innerHTML = "";
		let day = document.createElement("div");
		day.classList.add("calendar-header-day");
		day.innerHTML = calendar_name[index];
		column.appendChild(day);
	});

	// если аргумент не задан, то получаем текущий месяц
	if (!month) month = currDate.getMonth();

	// если аргумент не задан, то получаем текущий год
	if (!year) year = currDate.getFullYear();

	//получаем первый день месяца
	let first_day = new Date(year, month, 1);

	/////////////////////////////

	var dayNewYear = new Date(2022, 0, 1);

	var diff = first_day - dayNewYear;

	var dayOne = 86400000;
	//  1000 * 60 * 60 * 24;

	// количество дней с начала года
	var dayYear = Math.round(diff / dayOne);
	var lenShift = 15;

	var residual = dayYear % lenShift;

	//получаем имя текущего месяца
	let curr_month = `${month_names[month]}`;
	month_picker.innerHTML = curr_month;
	calendar_header_year.innerHTML = year;

	for (let i = 0; i <= days_of_month[month]; i++) {
		let i_day = new Date(year, month, i);

		//заполняем поля с датой
		let day = document.createElement("div");
		day.classList.add("calendar-day");
		day.innerHTML = i + 1;
		if (
			day_names[i_day.getDay()] == day_names[5] ||
			day_names[i_day.getDay()] == day_names[6]
		) {
			day.classList.add("calendar-day-off");
		}
		calendar_days.appendChild(day);

		if (i == days_of_month[month] - 1) {
			let header_day = calendar_days.querySelector(".calendar-header-day");
			header_day.style.width = header_day.offsetWidth + "px";
			header_day.style.position = "fixed";

			let calendar_nav = calendar.querySelector(".calendar-nav");
			calendar_nav.style.width = calendar_nav.offsetWidth + "px";
			calendar_nav.style.position = "fixed";
		}

		//заполняем поля для дней недели

		let day_week = document.createElement("div");
		day_week.classList.add("calendar-day");
		if (
			day_names[i_day.getDay()] == day_names[5] ||
			day_names[i_day.getDay()] == day_names[6]
		) {
			day_week.classList.add("calendar-day-off");
		}
		day_week.innerHTML = day_names[i_day.getDay()];
		calendar_week_day.appendChild(day_week);

		//заполняем поля смен
		const fillDay = (shift, key) => {
			let day = document.createElement("div");
			day.classList.add("calendar-day");
			//вешаем класс curr-date на сегодняшнюю дату
			if (
				i + 1 === currDate.getDate() &&
				year === currDate.getFullYear() &&
				month === currDate.getMonth()
			) {
				day.classList.add("curr-date");
			}
			//вешаем класс calendar-day-off на выходной
			if (
				day_names[i_day.getDay()] == day_names[5] ||
				day_names[i_day.getDay()] == day_names[6]
			) {
				day.classList.add("calendar-day-off");
			}
			if (key) {
				day.innerHTML = root[residual + i + key];
				shift.appendChild(day);
			} else {
				day.innerHTML = "";
				shift.appendChild(day);
			}

			// if (root[i] == "23" || root[i] == "15" || root[i] == "7") {
			// 	arrForCount.push(root[i]);
			// } else {
			// 	console.log("не ок");
			// }
			// console.log(arrForCount);
			if (i == days_of_month[month] - 1) {
				let header_day = shift.querySelector(".calendar-header-day");
				header_day.style.width = header_day.offsetWidth + "px";
				header_day.style.position = "fixed";

				// day.innerHTML = arrForCount.length;
				// shift.appendChild(day);
			}
		};
		fillDay(calendar_a, 15);
		fillDay(calendar_b, 21);
		fillDay(calendar_v, 27);
		fillDay(calendar_g, 18);
		fillDay(calendar_d, 24);
		fillDay(calendar_e);

		//вешаем класс curr-date на сегодняшнюю дату
		if (
			i + 1 === currDate.getDate() &&
			year === currDate.getFullYear() &&
			month === currDate.getMonth()
		) {
			day.classList.add("curr-date");
			day_week.classList.add("curr-date");
		}
	}
};

let month_list = calendar.querySelector(".month-list");

month_names.forEach((e, index) => {
	let month = document.createElement("div");
	month.innerHTML = `<div data-month="${index}">${e}</div>`;
	month.querySelector("div").onclick = () => {
		month_list.classList.remove("show");
		body.classList.remove("lock");
		body.style.paddingRight = 0;
		curr_month.value = index;
		generateCalendar(index, curr_year.value);
	};
	month_list.appendChild(month);
});

let month_picker = calendar.querySelector("#month-picker");

month_picker.onclick = () => {
	month_list.classList.add("show");
	body.classList.add("lock");

	let header_day = calendar.querySelectorAll(".calendar-header-day");
	header_day.forEach((item) => {
		item.style.position = "static";
	});

	//получаем ширину скроллбара
	let div = document.createElement("div");
	div.style.overflowY = "scroll";
	div.style.width = "50px";
	div.style.height = "50px";
	// мы должны вставить элемент в документ, иначе размеры будут равны 0
	document.body.append(div);
	let scrollWidth = div.offsetWidth - div.clientWidth;
	div.remove();
	const docHeight = document.documentElement.scrollHeight;
	const winHeight = document.documentElement.clientHeight;
	if (docHeight > winHeight && month_list.className.includes("show")) {
		body.style.paddingRight = scrollWidth + "px";
	} else {
		body.style.paddingRight = 0;
	}
};

let currDate = new Date();
let curr_month = { value: currDate.getMonth() };
let curr_year = { value: currDate.getFullYear() };
generateCalendar(curr_month.value, curr_year.value);

document.querySelector("#prev-month").onclick = () => {
	console.log(curr_month.value);
	if (curr_month.value == 0) {
		curr_month.value = 11;
	} else {
		--curr_month.value;
	}
	generateCalendar(curr_month.value, curr_year.value);
};
document.querySelector("#next-month").onclick = () => {
	if (curr_month.value == 11) {
		curr_month.value = 0;
	} else {
		++curr_month.value;
	}
	generateCalendar(curr_month.value, curr_year.value);
};

document.querySelector("#prev-year").onclick = () => {
	--curr_year.value;
	generateCalendar(curr_month.value, curr_year.value);
};
document.querySelector("#next-year").onclick = () => {
	++curr_year.value;
	generateCalendar(curr_month.value, curr_year.value);
};

let dark_mode_toggle = document.querySelector(".dark-mode-switch");

dark_mode_toggle.onclick = () => {
	body.classList.toggle("light");
	body.classList.toggle("dark");
};
