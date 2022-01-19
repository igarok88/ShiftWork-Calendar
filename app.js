const body = document.querySelector("body");
const calendar = document.querySelector(".calendar");

const day_names = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const calendar_name = ["", "", "А", "Б", "В", "Г", "Д", "Е"];

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

let calendar_count_a = document.querySelector(".calendar-count-a");
let calendar_count_b = document.querySelector(".calendar-count-b");
let calendar_count_v = document.querySelector(".calendar-count-v");
let calendar_count_g = document.querySelector(".calendar-count-g");
let calendar_count_d = document.querySelector(".calendar-count-d");

let calendar_column = calendar.querySelectorAll(".calendar-column");

const root = [
	"23",
	"23",
	"23",
	"",
	"",
	"15",
	"15",
	"15",
	"",
	"",
	"7",
	"7",
	"7",
	"",
	"",
	"23",
	"23",
	"23",
	"",
	"",
	"15",
	"15",
	"15",
	"",
	"",
	"7",
	"7",
	"7",
	"",
	"",
	"23",
	"23",
	"23",
	"",
	"",
	"15",
	"15",
	"15",
	"",
	"",
	"7",
	"7",
	"7",
	"",
	"",
	"23",
	"23",
	"23",
	"",
	"",
	"15",
	"15",
	"15",
	"",
	"",
	"7",
	"7",
	"7",
	"",
	"",
	"23",
	"23",
	"23",
	"",
	"",
	"15",
	"15",
	"15",
	"",
	"",
	"7",
	"7",
	"7",
	"",
	"",
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

	let arrForCount_a = [];
	let arrForCount_b = [];
	let arrForCount_v = [];
	let arrForCount_g = [];
	let arrForCount_d = [];

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

	const setWidthFooter = () => {
		let calendar_nav = calendar.querySelector(".calendar-nav");
		calendar_nav.style.width = body.offsetWidth + "px";
		calendar_nav.style.position = "fixed";
	};

	window.addEventListener(`resize`, () => {
		setWidthFooter();
	});

	for (let i = 0; i < days_of_month[month]; i++) {
		let i_day = new Date(year, month, i + 1);

		//заполняем поля с датой
		let day = document.createElement("div");
		day.classList.add("calendar-day");
		day.innerHTML = i + 1;
		if (
			day_names[i_day.getDay()] == day_names[0] ||
			day_names[i_day.getDay()] == day_names[6]
		) {
			day.classList.add("calendar-day-off");
		}
		calendar_days.appendChild(day);

		if (i == days_of_month[month] - 1) {
			let header_day = calendar_days.querySelector(".calendar-header-day");
			header_day.style.width = header_day.offsetWidth + "px";
			header_day.style.position = "fixed";
		}

		//заполняем поля для дней недели

		let day_week = document.createElement("div");
		day_week.classList.add("calendar-day");
		if (
			day_names[i_day.getDay()] == day_names[0] ||
			day_names[i_day.getDay()] == day_names[6]
		) {
			day_week.classList.add("calendar-day-off");
		}
		day_week.innerHTML = day_names[i_day.getDay()];
		calendar_week_day.appendChild(day_week);

		//заполняем поля смен

		const fillDay = (shift, key, calendar_count, arrForCount) => {
			let day = document.createElement("div");
			day.classList.add("calendar-day");
			day.classList.add("calendar-context-menu");
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
				day_names[i_day.getDay()] == day_names[0] ||
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

			let indexForDay = residual + i + key;

			//считаем количество смен в месяце
			if (
				root[indexForDay] == "23" ||
				root[indexForDay] == "15" ||
				root[indexForDay] == "7"
			) {
				arrForCount.push(root[residual + i + key]);
			}

			if (i == days_of_month[month] - 1) {
				let header_day = shift.querySelector(".calendar-header-day");
				header_day.style.width = header_day.offsetWidth + "px";
				header_day.style.position = "fixed";
				if (calendar_count) {
					calendar_count.innerHTML = arrForCount.length;
				}
				setWidthFooter();
			}
		};

		fillDay(calendar_a, 15, calendar_count_a, arrForCount_a);
		fillDay(calendar_b, 21, calendar_count_b, arrForCount_b);
		fillDay(calendar_v, 27, calendar_count_v, arrForCount_v);
		fillDay(calendar_g, 18, calendar_count_g, arrForCount_g);
		fillDay(calendar_d, 24, calendar_count_d, arrForCount_d);
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
	if (curr_month.value == 0) {
		curr_month.value = 11;
		--curr_year.value;
	} else {
		--curr_month.value;
	}
	generateCalendar(curr_month.value, curr_year.value);
};
document.querySelector("#next-month").onclick = () => {
	if (curr_month.value == 11) {
		curr_month.value = 0;
		++curr_year.value;
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

//Burger menu
const burger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const burgerWrapper = document.querySelector(".header__burger-wrapper");

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

burger.addEventListener("click", () => {
	burger.classList.toggle("active");
	headerMenu.classList.toggle("active");
	body.classList.toggle("lock");
	if (docHeight > winHeight && burger.className.includes("active")) {
		body.style.paddingRight = scrollWidth + "px";
	} else {
		body.style.paddingRight = 0;
	}
});

//Контекстное меню
const calendarBody = document.querySelector(".calendar-body");
const rightClickMenu = document.querySelector(".right-click-menu");
const rightClickMenuHeaderShift = rightClickMenu.querySelector(
	".right-click-menu-header__shift"
);
const rightClickMenuHeaderDay = rightClickMenu.querySelector(
	".right-click-menu-header__day"
);
const rightClickMenuHeaderMonth = rightClickMenu.querySelector(
	".right-click-menu-header__month"
);
const rightClickMenuHeaderYear = rightClickMenu.querySelector(
	".right-click-menu-header__year"
);
const rightClickMenuHeaderDayWeek = rightClickMenu.querySelector(
	".right-click-menu-header__day-week"
);

let rightClickMenuItemNames = {
	23: {
		title: "Смена с 23-00",
		desc: "",
		color: "",
	},
	7: {
		title: "Смена с 07-00",
		desc: "",
		color: "",
	},
	15: {
		title: "Смена с 15-00",
		desc: "",
		color: "",
	},
	У: {
		title: "Учеба/Тренировка",
		desc: "",
		color: "#e76f51",
	},
	Э: {
		title: "Экзамен",
		desc: "",
		color: "#d62828",
	},
	Д: {
		title: "Доработка",
		desc: "",
		color: "#00b4d880",
	},
	О: {
		title: "Отгулы",
		desc: "",
		color: "#2a9d8f",
	},
	"&nbsp": {
		title: "Выходной",
		desc: "",
		color: "",
	},
	З: {
		title: "Заметка",
		desc: "",
		color: "#e9c46a",
	},
};

const rightClickMenuItems = calendar.querySelector(".right-click-menu ul");

//верстка элементов контекстного меню
const entries = Object.entries(rightClickMenuItemNames);

for (const [key, val] of entries) {
	let li = document.createElement("li");
	li.classList.add("right-click-menu-item");

	let desc = document.createElement("div");
	desc.classList.add("right-click-menu-item__desc");
	desc.innerHTML =
		'<div class="right-click-menu-item__desc-arrow"><pre>&gt;</pre></div>';
	li.appendChild(desc);

	let btn = document.createElement("div");
	btn.classList.add("close-menu");
	btn.classList.add("right-click-menu-item__btn");
	li.appendChild(btn);

	let btnValue = document.createElement("div");
	btnValue.classList.add("right-click-menu-item__value");
	btnValue.setAttribute("data-value", key);
	btnValue.innerHTML = `"${key}"`;
	btn.appendChild(btnValue);

	let btnName = document.createElement("div");
	btnName.classList.add("right-click-menu-item__name");
	btnName.setAttribute("data-value", key);
	btnName.innerHTML = val.title;
	btn.appendChild(btnName);

	let color = document.createElement("div");
	color.classList.add("right-click-menu-item__color");
	color.innerHTML = `<input type="text" data-coloris value='${val.color}'/>`;
	li.appendChild(color);

	rightClickMenuItems.appendChild(li);
}

const getZero = (num) => {
	if (num >= 0 && num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
};
let targetItemInContextMenu;
calendarBody.addEventListener("contextmenu", (e) => {
	targetItemInContextMenu = e.target;
	if (targetItemInContextMenu.closest(".calendar-context-menu")) {
		e.preventDefault();
		// console.log(targetItemInContextMenu);
		rightClickMenu.classList.add("active");
		body.classList.add("lock");
		//заполняем даты
		//Объяснение :
		// element.parentNode.children→ Возвращает братьев element, включая этот элемент.
		// Array.from→ Приводит конструктор childrenк Arrayобъекту
		// indexOf→ Вы можете подать заявку indexOf, потому что теперь у вас есть Arrayобъект.
		let day = Array.from(targetItemInContextMenu.parentNode.children).indexOf(
			targetItemInContextMenu
		);
		rightClickMenuHeaderDay.innerHTML = getZero(day);

		let month = curr_month.value + 1;
		rightClickMenuHeaderMonth.innerHTML = getZero(month);

		rightClickMenuHeaderYear.innerHTML = curr_year.value;

		//заполняем название смены в контекстном меню
		let shift = targetItemInContextMenu.parentElement.firstChild.innerText;
		rightClickMenuHeaderShift.innerHTML = `"${shift}"`;

		//заполняем поле дней недели
		let dayWeek = new Date(curr_year.value, curr_month.value, day).getDay();
		rightClickMenuHeaderDayWeek.innerHTML = day_names[dayWeek];
	}
});

let targetInRightClickMenuItems;
rightClickMenuItems.addEventListener("click", (e) => {
	let target = e.target;
	targetInRightClickMenuItems = target;
	if (target.closest(".right-click-menu-item__btn")) {
		//получаем букву и всставляем в таблицу
		targetItemInContextMenu.innerHTML = target.getAttribute("data-value");

		//получаем цвет и устанавливаем в таблицу
		let sibling = target.closest(".right-click-menu-item__btn").nextSibling;

		let input = sibling.querySelector("input");

		targetItemInContextMenu.style.backgroundColor = input.value;
		targetItemInContextMenu.style.borderRadius = "4px";
		targetItemInContextMenu.style.margin = "3px";
	}
	if (target.closest(".right-click-menu-item__color input")) {
		target.addEventListener("change", () => {
			let color = target.value;
			target.setAttribute("value", color);
		});
	}

	//Описание в контекстном меню
	if (target.closest(".right-click-menu-item__desc")) {
		let desc = target.closest(".right-click-menu-item__desc");
		let arrow = desc.querySelector(".right-click-menu-item__desc-arrow");
		arrow.classList.toggle("active");

		if (arrow.closest(".right-click-menu-item__desc-arrow.active")) {
			let div = document.createElement("div");
			div.classList.add("right-click-menu-item__desc-text-area");
			let textarea = document.createElement("textarea");
			textarea.setAttribute("name", "text");
			div.appendChild(textarea);
			desc.appendChild(div);
		} else {
			arrow.nextSibling.remove();
		}
	}
});

rightClickMenu.addEventListener("click", (e) => {
	let targetItem = e.target;
	// console.log(targetItem);
	if (targetItem.closest(".close-menu")) {
		rightClickMenu.classList.remove("active");
		body.classList.remove("lock");
	}
});
