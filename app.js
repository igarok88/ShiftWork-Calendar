const body = document.querySelector("body");
const calendar = document.querySelector(".calendar");
const calendarBody = document.querySelector(".calendar-body");

const languageApp = [
	{
		name: "Українська",
		key: "uk",
		dayNames: ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		monthNames: [
			"Січень",
			"Лютий",
			"Березень",
			"Квітень",
			"Травень",
			"Червень",
			"Липень",
			"Серпень",
			"Вересень",
			"Жовтень",
			"Листопад",
			"Грудень",
		],
		otherWords: {
			add: "Додати",
			remove: "Прибрати",
			reserveShift: "резервну зміну",
			addShift: "Додати зміну",
			editShift: "Замінити зміну",
			deleteShift: "Видалити зміну",
			deleteShedule: "Видалити графік",
			setNameShift: "Вкажіть назву зміни",
			myShift: "Моя зміна",
			whatShiftRemove: "Яку зміну бажаєте видалити?",
			whatShiftEdit: "Яку зміну бажаєте замінити?",
			myCompany: "Моє підприємство",
			tasksDay: "Завдання на день",
			newTask: "Новий пункт",
			shift: "Зміна",
			shiftFrom: "Зміна з",
			shiftName: "Назва зміни (коротко)",
			example: "Приклад",
			shiftDescription: "Опис зміни",
			fillField: "Заповніть це поле",
			dayOff: "Вихідний",
			selectSchedule: "Обрати графік",
			createSchedule: "Створити графік",
			enterCompanyName: "Вкажіть назву підприємства",
			enterShiftName: "Вкажіть назву зміни",
			exampleNPP: "приклад: 'Запорізька АЕС'",
			exampleShift: "приклад: 'зм. А'",
			selectLanguage: "Обрати мову",
			colorThemes: "Кольорові теми",
			resetUserSettings: "Скинути налаштування",
			total: "Усього:",
			feedback: "Зворотній зв'язок",
			feedbackDescription:
				"Спасибі за користування цією програмою. Пишіть ваші пропозиції:",
			reset: "Скинути",
		},
	},
	{
		name: "English",
		key: "en",
		dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		monthNames: [
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
		],
		otherWords: {
			add: "Add",
			remove: "Remove",
			reserveShift: "reserve shift",
			addShift: "Add shift",
			editShift: "Edit shift",
			deleteShift: "Delete shift",
			deleteShedule: "Delete shedule",
			setNameShift: "Set name shift",
			myShift: "My shift",
			whatShiftRemove: "What shift do you want to remove?",
			whatShiftEdit: "What shift to change?",
			myCompany: "My company",
			tasksDay: "Tasks for the day",
			newTask: "New task",
			shift: "Shift",
			shiftFrom: "Shift from",
			shiftName: "Shift name (short)",
			example: "Example",
			shiftDescription: "Shift description",
			fillField: "Fill in this field",
			dayOff: "Day off",
			selectSchedule: "Select shedule",
			createSchedule: "Сreate a schedule",
			enterCompanyName: "Enter company name",
			enterShiftName: "Enter shift name",
			exampleNPP: "example: 'Heysham nuclear power station'",
			exampleShift: "example: 'А'",
			selectLanguage: "Select language",
			colorThemes: "Color themes",
			resetUserSettings: "Reset user settings",
			total: "Total:",
			feedback: "Feedback",
			feedbackDescription:
				"Thank you for using this program. Write your suggestions:",
			reset: "Reset",
		},
	},
	{
		name: "Русский",
		key: "ru",
		dayNames: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
		monthNames: [
			"Январь",
			"Февраль",
			"Март",
			"Апрель",
			"Май",
			"Июнь",
			"Июль",
			"Август",
			"Сентябрь",
			"Октябрь",
			"Ноябрь",
			"Декабрь",
		],
		otherWords: {
			add: "Добавить",
			remove: "Убрать",
			reserveShift: "резервную смену",
			addShift: "Добавить смену",
			editShift: "Изменить смену",
			deleteShift: "Удалить смену",
			deleteShedule: "Удалить график",
			setNameShift: "Укажите название смены",
			myShift: "Моя смена",
			whatShiftRemove: "Какую смену хотите удалить?",
			whatShiftEdit: "Какую смену хотите изменить?",
			myCompany: "Мое предприятие",
			tasksDay: "Задачи на день",
			newTask: "Новый пункт",
			shift: "Смена",
			shiftFrom: "Смена с",
			shiftName: "Название смены (коротко)",
			example: "Пример",
			shiftDescription: "Описание смены",
			fillField: "Заполните это поле",
			dayOff: "Выходной",
			selectSchedule: "Выбрать график",
			createSchedule: "Создать график",
			enterCompanyName: "Укажите название предприятия",
			enterShiftName: "Укажите название смены",
			exampleNPP: "пример: 'Запорожская АЭС'",
			exampleShift: "пример: 'см. А'",
			selectLanguage: "Выбрать язык",
			colorThemes: "Цветовые темы",
			resetUserSettings: "Сбросить настройки",
			total: "Всего:",
			feedback: "Обратная связь",
			feedbackDescription:
				"Спасибо за пользование этой программы. Пишите ваши предложения:",
			reset: "Сброс",
		},
	},
];

const burgerSubmenuLanguage = document.querySelector(
	".burger__submenu-language"
);
let currentLanguage;
languageApp.forEach((obj, index) => {
	burgerSubmenuLanguage.innerHTML += `
		<div class="burger__menu-btn burger__submenu-language-item">
			${obj.name}
		</div>
	`;
});

let userSettings = {};

if (localStorage.userSettings) {
	userSettings = JSON.parse(localStorage.getItem("userSettings"));
}

if (userSettings.theme) {
	body.className = "";
	body.classList.add(userSettings.theme);
}

if (userSettings.language) {
	languageApp.forEach((obj, index) => {
		if (obj.name == userSettings.language) {
			currentLanguage = languageApp[index];
		}
	});
} else {
	let language = window.navigator
		? window.navigator.language ||
		  window.navigator.systemLanguage ||
		  window.navigator.userLanguage
		: "en";
	language = language.substr(0, 2).toLowerCase();

	languageApp.forEach((obj, index) => {
		if (obj.key == language) {
			currentLanguage = languageApp[index];
		}
	});
}

if (currentLanguage) {
} else {
	currentLanguage = languageApp[1];
}

const { dayNames, monthNames, otherWords } = currentLanguage;

const removeLocalStorage = document.querySelector(".remove-local-storage");

if (currentLanguage == languageApp[1]) {
} else {
	removeLocalStorage.innerHTML = `<h2>${otherWords.resetUserSettings}</h2>`;

	const burgerMenuSelectSheduleTitle = document.querySelector(
		".burger__menu-select-shedule h2"
	);
	burgerMenuSelectSheduleTitle.innerHTML = otherWords.selectSchedule;
	const burgerMenuCreateScheduleTitle = document.querySelector(
		".burger__menu-create-shift h2"
	);
	burgerMenuCreateScheduleTitle.innerHTML = otherWords.createSchedule;
	const burgerMenuAddShiftTitles = document.querySelectorAll(
		".burger__menu-add-shift h2"
	);
	burgerMenuAddShiftTitles[0].innerHTML = otherWords.enterCompanyName;
	burgerMenuAddShiftTitles[1].innerHTML = otherWords.enterShiftName;

	const burgerMenuAddShiftInputs = document.querySelectorAll(
		".burger__menu-add-shift input"
	);
	burgerMenuAddShiftInputs[0].setAttribute(
		"placeholder",
		otherWords.exampleNPP
	);
	burgerMenuAddShiftInputs[1].setAttribute(
		"placeholder",
		otherWords.exampleShift
	);
	const burgerMenuAddSheduleBtn = document.querySelector(
		".burger__menu-add-shedule-btn"
	);
	burgerMenuAddSheduleBtn.innerHTML = otherWords.createSchedule;
	const burgerMenuThemeTitle = document.querySelector(".burger__menu-theme h2");
	burgerMenuThemeTitle.innerHTML = otherWords.colorThemes;
	const burgerMenuSelectLanguageTitle = document.querySelector(
		".burger__menu-select-language h2"
	);
	burgerMenuSelectLanguageTitle.innerHTML = otherWords.selectLanguage;

	const calendarCountTotal = document.querySelector(".calendar-count-total");
	calendarCountTotal.innerHTML = otherWords.total;
	const popupContentBodyTitle = document.querySelector(
		".popup__content-body h2"
	);
	popupContentBodyTitle.innerHTML = `${otherWords.tasksDay}:`;
	const popupContentBodyInput = document.querySelector(
		".popup__content-body input"
	);
	popupContentBodyInput.setAttribute("placeholder", otherWords.newTask);
	const burgerMenuFeedbackTitle = document.querySelector(
		".burger__menu-feedback h2"
	);
	burgerMenuFeedbackTitle.innerHTML = otherWords.feedback;
	const burgerDescription = document.querySelector(".burger__description");
	burgerDescription.innerHTML = otherWords.feedbackDescription;
}
removeLocalStorage.addEventListener("click", () => {
	localStorage.removeItem("userShift");
	localStorage.removeItem("choiceShifts");
	localStorage.removeItem("userSettings");

	location.reload();
});

let calendarCountShift = calendar.querySelector(".calendar-count");
let arrForUserNotes;
let firstElemIndex;
let startDay;
let differenceDays;

const updateLocalStorage = (name, data) => {
	localStorage.setItem(name, JSON.stringify(data));
};
const createEndCicleBtn = () => {
	let endCicleBtn = document.querySelector(".end-cicle-btn");
	if (endCicleBtn) {
	} else {
		let endCicleBtnHTML = `
			<div class="end-cicle-btn">
				<div class="wrapper-check">
					<div id="check-part-1" class="check-sign"></div>
					<div id="check-part-2" class="check-sign"></div>
				</div>
			</div>
		`;
		calendarBody.insertAdjacentHTML("afterbegin", endCicleBtnHTML);
	}
};

const replaceShiftObjInChoiceShifts = () => {
	choiceShifts.forEach((obj, index) => {
		if (obj.name == shiftObj.name) {
			choiceShifts[index] = shiftObj;
		}
	});
};

let shiftTemplate = {
	namesContextMenu: [{ key: "", title: otherWords.dayOff }],
	root: [[]],
	template: true,
	endCicle: false,
	options: {
		addShift: true,
		editShift: true,
		deleteShift: true,
		deleteSchedule: true,
	},
	arrDifferenceDays: [0],
};

let choiceShifts = [
	{
		name: "Запорожская АЭС",
		shiftsName: ["А", "Б", "В", "Г", "Д"],
		options: {
			reserveShift: { name: "E", status: false },
		},
		namesContextMenu: [
			{ key: "7", title: "Смена с 07-00", color: "", count: true },
			{ key: "15", title: "Смена с 15-00", color: "", count: true },
			{ key: "23", title: "Смена с 23-00", color: "", count: true },
			{ key: "Д", title: "Доработка", color: "#00b4d880", count: true },
			{ key: "У", title: "Учеба/Тренировка", color: "#e76f51", count: true },
			{ key: "Э", title: "Экзамен", color: "#d62828" },
			{ key: "О", title: "Отгулы", color: "#2a9d8f" },
			{ key: "&nbsp;", title: "Выходной", color: "" },
			{ key: "З", title: "Заметка", color: "#e9c46a" },
		],
		root: [
			[
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
			],
			[
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
			],
			[
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
			],
			[
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
			],
			[
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
			],
		],
		startDate: "2022-01-01",
	},
	{
		name: "Запорожская ТЭС",
		shiftsName: ["А", "Б", "В", "Г"],
		options: {
			reserveShift: { name: "Д", status: false },
		},
		namesContextMenu: [
			{ key: "8", title: "Смена с 08-00", color: "", count: true },
			{ key: "16", title: "Смена с 16-00", color: "", count: true },
			{ key: "0", title: "Смена с 00-00", color: "", count: true },
			{ key: "Д", title: "Доработка", color: "#00b4d880", count: true },
			{ key: "У", title: "Учеба/Тренировка", color: "#e76f51", count: true },
			{ key: "Э", title: "Экзамен", color: "#d62828" },
			{ key: "О", title: "Отгулы", color: "#2a9d8f" },
			{ key: "&nbsp;", title: "Выходной", color: "" },
			{ key: "З", title: "Заметка", color: "#e9c46a" },
		],
		root: [
			["0", "0", "", "16", "16", "", "8", "8"],
			["16", "", "8", "8", "0", "0", "", "16"],
			["8", "8", "0", "0", "", "16", "16", ""],
			["", "16", "16", "", "8", "8", "0", "0"],
		],
		startDate: "2022-01-01",
	},
	{
		name: "Ровенская АЭС",
		shiftsName: ["А", "Б", "В", "Г", "Д"],
		options: {
			reserveShift: { name: "E", status: false },
		},
		namesContextMenu: [
			{ key: "8", title: "Смена с 08-00", color: "", count: true },
			{ key: "16", title: "Смена с 16-00", color: "", count: true },
			{ key: "0", title: "Смена с 00-00", color: "", count: true },
			{ key: "Д", title: "Доработка", color: "#00b4d880", count: true },
			{ key: "У", title: "Учеба/Тренировка", color: "#e76f51", count: true },
			{ key: "Э", title: "Экзамен", color: "#d62828" },
			{ key: "О", title: "Отгулы", color: "#2a9d8f" },
			{ key: "&nbsp;", title: "Выходной", color: "" },
			{ key: "З", title: "Заметка", color: "#e9c46a" },
		],
		root: [
			["8", "8", "", "", "0", "0", "0", "", "", "16", "16", "16", "", "", "8"],
			["0", "", "", "16", "16", "16", "", "", "8", "8", "8", "", "", "0", "0"],
			["", "", "8", "8", "8", "", "", "0", "0", "0", "", "", "16", "16", "16"],
			["", "0", "0", "0", "", "", "16", "16", "16", "", "", "8", "8", "8", ""],
			["16", "16", "16", "", "", "8", "8", "8", "", "", "0", "0", "0", "", ""],
		],
		startDate: "2022-01-01",
	},
	{
		name: "Хмельницкая АЭС",
		shiftsName: ["А", "Б", "В", "Г", "Д"],
		options: {
			reserveShift: { name: "E", status: false },
		},
		namesContextMenu: [
			{ key: "7", title: "Смена с 07-00", color: "", count: true },
			{ key: "15", title: "Смена с 15-00", color: "", count: true },
			{ key: "23", title: "Смена с 23-00", color: "", count: true },
			{ key: "Д", title: "Доработка", color: "#00b4d880", count: true },
			{ key: "У", title: "Учеба/Тренировка", color: "#e76f51", count: true },
			{ key: "Э", title: "Экзамен", color: "#d62828" },
			{ key: "О", title: "Отгулы", color: "#2a9d8f" },
			{ key: "&nbsp;", title: "Выходной", color: "" },
			{ key: "З", title: "Заметка", color: "#e9c46a" },
		],
		root: [
			[
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
			],
			[
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
			],
			[
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
			],
			[
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
			],
			[
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
			],
		],
		startDate: "2022-01-01",
	},
	{
		name: "Южно-Украинская АЭС",
		shiftsName: ["А", "Б", "В", "Г", "Д"],
		options: {
			reserveShift: { name: "E", status: false },
		},
		namesContextMenu: [
			{ key: "8", title: "Смена с 08-00", color: "", count: true },
			{ key: "16", title: "Смена с 16-00", color: "", count: true },
			{ key: "0", title: "Смена с 00-00", color: "", count: true },
			{ key: "Д", title: "Доработка", color: "#00b4d880", count: true },
			{ key: "У", title: "Учеба/Тренировка", color: "#e76f51", count: true },
			{ key: "Э", title: "Экзамен", color: "#d62828" },
			{ key: "О", title: "Отгулы", color: "#2a9d8f" },
			{ key: "&nbsp;", title: "Выходной", color: "" },
			{ key: "З", title: "Заметка", color: "#e9c46a" },
		],
		root: [
			["8", "8", "", "", "0", "0", "0", "", "", "16", "16", "16", "", "", "8"],
			["16", "16", "16", "", "", "8", "8", "8", "", "", "0", "0", "0", "", ""],
			["0", "", "", "16", "16", "16", "", "", "8", "8", "8", "", "", "0", "0"],
			["", "0", "0", "0", "", "", "16", "16", "16", "", "", "8", "8", "8", ""],
			["", "", "8", "8", "8", "", "", "0", "0", "0", "", "", "16", "16", "16"],
		],
		startDate: "2022-01-01",
	},
];
//шаблон объекта смен
let shiftObj = choiceShifts[0];

if (localStorage.userShift) {
	shiftObj = JSON.parse(localStorage.getItem("userShift"));
}

if (localStorage.choiceShifts) {
	choiceShifts = JSON.parse(localStorage.getItem("choiceShifts"));
}

if (shiftObj.userNotes) {
	arrForUserNotes = shiftObj.userNotes;
} else {
	arrForUserNotes = [];
}

choiceShifts.forEach((obj, index) => {
	let burgerMenuChoiceShifts = document.querySelector(
		".burger__menu-choice-shift"
	);

	if (obj.name == shiftObj.name && obj.options) {
		burgerMenuChoiceShifts.innerHTML += `
			<div class="burger__submenu-item burger__menu-shift">
				<div class="burger__submenu-title">
					<div class='burger__submenu-name'>${obj.name}</div>
					<div class="burger__menu-item-cross">
						<span class="cross"></span>
					</div>
				</div>
				<div class="burger__menu-item-more"></div>
			</div>
		`;
	} else {
		burgerMenuChoiceShifts.innerHTML += `
			<div class="burger__submenu-item burger__menu-shift">
				<div class="burger__submenu-title">
					<div class='burger__submenu-name'>${obj.name}</div>
				</div>
				<div class="burger__menu-item-more"></div>
			</div>
		`;
	}
});
// let burgerMenuShifts = document.querySelectorAll(".burger__menu-shift");
// burgerMenuShifts.forEach((menuShift, index) => {
// 	menuShift.addEventListener("click", (e) => {
// 		let currentShift = e.target.closest(".burger__menu-shift");
// 		if (currentShift == menuShift) {
// 			if (
// 				e.target.closest(".burger__menu-item-cross") ||
// 				e.target.closest(".burger__menu-add-new-shift-btn") ||
// 				e.target.closest(".burger__menu-delete-shift-btn") ||
// 				e.target.closest(".burger__menu-edit-shift-btn")
// 				// ||
// 				// e.target.closest(".burger__menu-reserve-shift-btn")
// 			) {
// 			} else {
// 				shiftObj = choiceShifts[index];
// 				updateLocalStorage("userShift", shiftObj);
// 				location.hash = "";
// 				location.reload();
// 			}
// 		}
// 	});
// });
let { shiftsName, namesContextMenu, root } = shiftObj;

let countGridColumns = [];
shiftsName.forEach((item, index) => {
	let div = document.createElement("div");
	div.classList.add("calendar-column");
	div.classList.add("calendar-shift");
	calendarBody.appendChild(div);
	calendarBody.style.gridTemplateColumns = `repeat(${
		shiftsName.length + 2
	}, 1fr)`;

	div = document.createElement("div");
	div.classList.add("calendar-day");
	div.classList.add("calendar-count-shift");
	calendarCountShift.appendChild(div);

	countGridColumns[index] = "1fr";
	let countGridColumnsStr = countGridColumns.join(" ");
	calendarCountShift.style.gridTemplateColumns = `2fr ${countGridColumnsStr}`;
});

const getZero = (num) => {
	if (num >= 0 && num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
};

const isLeapYear = (year) => {
	return (
		(year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
		(year % 100 === 0 && year % 400 === 0)
	);
};

const getFebDays = (year) => {
	return isLeapYear(year) ? 29 : 28;
};

//получаем ширину скроллбара
let div = document.createElement("div");
div.style.overflowY = "scroll";
div.style.width = "50px";
div.style.height = "50px";
// мы должны вставить элемент в документ, иначе размеры будут равны 0
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

const generateCalendar = (month, year) => {
	let arrForCount = [];
	shiftsName.forEach((item, index) => {
		arrForCount[index] = [];
	});

	let calendarWeekDay = calendar.querySelector(".calendar-week-day");
	let calendarDays = calendar.querySelector(".calendar-days");
	let calendarFooterYear = calendar.querySelector("#year");
	let daysOfMonth = [
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

	let calendarColumns = calendar.querySelectorAll(".calendar-column");

	let calendarShiftsName;

	calendarColumns.forEach((column, index) => {
		column.innerHTML = "";
		let day = document.createElement("div");
		column.appendChild(day);
		day.classList.add("calendar-header-day");
		if (index > 1) {
			day.classList.add("calendar-shift-name");
			column.appendChild(day);
		}
		calendarShiftsName = document.querySelectorAll(".calendar-shift-name");
	});
	calendarShiftsName.forEach((item, index) => {
		item.innerHTML = shiftsName[index];
	});

	//получаем имя текущего месяца
	let currMonth = `${monthNames[month]}`;
	monthPicker.innerHTML = currMonth;
	calendarFooterYear.innerHTML = year;

	const setWidthFooter = () => {
		let calendarNav = calendar.querySelector(".calendar-nav");
		calendarNav.style.width = body.offsetWidth + "px";
		calendarNav.style.position = "fixed";
	};
	const setWidthHeaderDay = () => {
		let calendarShiftName = document.querySelectorAll(".calendar-header-day");
		let calendarDay = document.querySelector(".calendar-day");
		calendarShiftName.forEach((item) => {
			item.style.width = calendarDay.offsetWidth + 3 + "px";
		});
	};

	window.addEventListener(`resize`, () => {
		setWidthFooter();
		setWidthHeaderDay();
	});
	if (shiftObj.template) {
		calendarCountShift.style.display = "none";
	}

	for (let i = 0; i < daysOfMonth[month]; i++) {
		let iDay = new Date(year, month, i + 1);

		//заполняем поля с датой
		let day = document.createElement("div");
		day.classList.add("calendar-day");
		day.innerHTML = i + 1;
		if (
			dayNames[iDay.getDay()] == dayNames[0] ||
			dayNames[iDay.getDay()] == dayNames[6]
		) {
			day.classList.add("calendar-day-off");
		}
		calendarDays.appendChild(day);

		if (i == daysOfMonth[month] - 1) {
			let headerDay = calendarDays.querySelector(".calendar-header-day");
			headerDay.style.width = headerDay.offsetWidth + "px";
			headerDay.style.position = "fixed";
		}

		//заполняем поля для дней недели

		let dayWeek = document.createElement("div");
		dayWeek.classList.add("calendar-day");
		if (
			dayNames[iDay.getDay()] == dayNames[0] ||
			dayNames[iDay.getDay()] == dayNames[6]
		) {
			dayWeek.classList.add("calendar-day-off");
		}
		dayWeek.innerHTML = dayNames[iDay.getDay()];
		calendarWeekDay.appendChild(dayWeek);

		//получаем первый день месяца
		let firstDay = new Date(year, month, 1);

		//получаем 1 января 2022 года, от этой даты привязываем готовые графики
		startDay = new Date(shiftObj.startDate);

		let diff = firstDay - startDay;

		//количество милисекунд в сутках
		//  86400000 = 1000 * 60 * 60 * 24;

		// количество дней с начала года до первого дня текущего месяца
		let dayYear = Math.round(diff / 86400000);
		// console.log(`dayYear ${dayYear}`);
		//заполняем поля смен

		const fillDay = (
			shift,
			calendarCount,
			arrForCount,
			nameShift,
			root,
			activeTemplate,
			differenceDays
		) => {
			let lenShift = root.length;

			let residual = dayYear % lenShift;
			let day = document.createElement("div");
			day.classList.add("calendar-day");
			day.classList.add("calendar-context-menu");

			if (shiftObj.template && activeTemplate) {
				day.classList.add("calendar-day-create-shift");
				shift.classList.add("calendar-column-create-shift");
			}

			const multiplyRoot = () => {
				let arr = root.concat(root);
				root = arr.slice();
			};
			if (root) {
				if (root.length == 0) {
				} else {
					while (root.length < 80) {
						multiplyRoot();
					}
				}

				differenceDays = differenceDays % lenShift;
				//заполняем колонку смен
				let index;
				if (differenceDays) {
					index = residual + i + lenShift + differenceDays;
				} else {
					index = residual + i + lenShift;
				}
				day.innerHTML = root[index];

				shift.appendChild(day);
				if (root[index] == undefined) {
					day.innerHTML = "";
					shift.appendChild(day);
				}
			}

			//вешаем класс curr-date на сегодняшнюю дату
			if (shiftObj.template) {
			} else {
				if (
					i + 1 === currDate.getDate() &&
					year === currDate.getFullYear() &&
					month === currDate.getMonth()
				) {
					day.classList.add("curr-date");
					dayWeek.classList.add("curr-date");
				}
			}

			//вешаем класс calendar-day-off на выходной
			if (
				dayNames[iDay.getDay()] == dayNames[0] ||
				dayNames[iDay.getDay()] == dayNames[6]
			) {
				day.classList.add("calendar-day-off");
			}

			if (i == daysOfMonth[month] - 1) {
				let headerDay = shift.querySelector(".calendar-header-day");
				headerDay.style.width = headerDay.offsetWidth + "px";
				headerDay.style.position = "fixed";

				setWidthFooter();
			}

			// ищем совпадение в localStorage и заполняем соответствующие ячейки
			if (arrForUserNotes.length > 0) {
				arrForUserNotes.forEach((item) => {
					let date = JSON.parse(item.date);
					let d = new Date(date);
					if (
						i + 2 === d.getDate() &&
						year === d.getFullYear() &&
						month === d.getMonth() &&
						item.shift == nameShift
					) {
						day.innerHTML = item.keyNote;
						if (item.desc && item.desc.length > 0) {
							day.setAttribute("data-desc", JSON.stringify(item.desc));
							day.classList.add("desc");
						}

						day.setAttribute("data-key-note", item.keyNote);
						day.setAttribute("data-shift", item.shift);
						day.setAttribute("data-color", item.color);
						day.style.backgroundColor = item.color;
					}
				});
			}

			//считаем количество смен в месяце
			namesContextMenu.forEach((obj) => {
				if (obj.count) {
					if (day.innerHTML.trim() == obj.key.trim()) {
						arrForCount.push(day.innerHTML);
					}
				}
			});

			if (calendarCount) {
				calendarCount.innerHTML = arrForCount.length;
			}
		};

		let calendarShifts = document.querySelectorAll(".calendar-shift");
		let calendarCountShifts = document.querySelectorAll(
			".calendar-count-shift"
		);

		shiftsName.forEach((item, index) => {
			if (shiftObj.arrDifferenceDays) {
			} else {
				shiftObj.arrDifferenceDays = [0];
			}
			if (shiftObj.activeTemplate) {
			} else {
				shiftObj.activeTemplate = [false];
			}
			fillDay(
				calendarShifts[index],
				calendarCountShifts[index],
				arrForCount[index],
				shiftsName[index],
				root[index],
				shiftObj.activeTemplate[index],
				shiftObj.arrDifferenceDays[index]
			);
		});

		//вешаем класс curr-date на сегодняшнюю дату
		if (shiftObj.template) {
		} else {
			if (
				i + 1 === currDate.getDate() &&
				year === currDate.getFullYear() &&
				month === currDate.getMonth()
			) {
				day.classList.add("curr-date");
				dayWeek.classList.add("curr-date");
			}
		}
	}
};

let monthList = calendar.querySelector(".month-list");

monthNames.forEach((e, index) => {
	let month = document.createElement("div");
	month.innerHTML = `<div data-month="${index}">${e}</div>`;
	month.querySelector("div").onclick = () => {
		monthList.classList.remove("show");
		body.classList.remove("lock");
		body.style.paddingRight = 0;
		currMonth.value = index;
		generateCalendar(index, currYear.value);
		location.hash = "";
	};
	monthList.appendChild(month);
});

let monthPicker = calendar.querySelector("#month-picker");

monthPicker.onclick = () => {
	monthList.classList.add("show");
	body.classList.add("lock");

	let headerDay = calendar.querySelectorAll(".calendar-header-day");
	headerDay.forEach((item) => {
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
	if (docHeight > winHeight && monthList.className.includes("show")) {
		body.style.paddingRight = scrollWidth + "px";
	} else {
		body.style.paddingRight = 0;
	}
	location.hash = "monthlist";
};

let currDate = new Date();
let currMonth = { value: currDate.getMonth() };
let currYear = { value: currDate.getFullYear() };
generateCalendar(currMonth.value, currYear.value);

document.querySelector("#prev-month").onclick = () => {
	if (currMonth.value == 0) {
		currMonth.value = 11;
		--currYear.value;
	} else {
		--currMonth.value;
	}
	generateCalendar(currMonth.value, currYear.value);
};
document.querySelector("#next-month").onclick = () => {
	if (currMonth.value == 11) {
		currMonth.value = 0;
		++currYear.value;
	} else {
		++currMonth.value;
	}
	generateCalendar(currMonth.value, currYear.value);
};

document.querySelector("#prev-year").onclick = () => {
	--currYear.value;
	generateCalendar(currMonth.value, currYear.value);
};
document.querySelector("#next-year").onclick = () => {
	++currYear.value;
	generateCalendar(currMonth.value, currYear.value);
};

//Burger menu
const burgerBtn = document.querySelector(".burger__btn");
const burgerMenu = document.querySelector(".burger__menu");
const burgerWrapper = document.querySelector(".burger-wrapper");

const docHeight = document.documentElement.scrollHeight;
const winHeight = document.documentElement.clientHeight;

calendar.addEventListener("click", (e) => {
	if (e.target.closest(".burger__btn") || e.target.closest(".burger-wrapper")) {
		burgerBtn.classList.toggle("active");
		burgerMenu.classList.toggle("active");
		body.classList.toggle("lock");
		// if (docHeight > winHeight && burgerBtn.className.includes("active")) {
		// 	body.style.paddingRight = scrollWidth + "px";
		// } else {
		// 	body.style.paddingRight = 0;
		// }

		if (burgerBtn.className.includes("active")) {
			location.hash = "menu";
		} else {
			location.hash = "";
		}
	}
});

burgerMenu.addEventListener("click", (e) => {
	let target = e.target;
	let burgerMenuItem;
	let burgerSubMenuItem;

	if (target.closest(".burger__menu-item-title")) {
		burgerMenuItem = target.closest(".burger__menu-item");
		let cross = burgerMenuItem.querySelector(".burger__menu-item-cross");
		if (cross) {
			cross.classList.toggle("active");
		}

		let burgerMenuItemMore = burgerMenuItem.querySelector(
			".burger__menu-item-more"
		);
		if (burgerMenuItemMore) {
			burgerMenuItemMore.classList.toggle("active");
		}

		if (localStorage.userShift) {
			shiftObj = JSON.parse(localStorage.getItem("userShift"));
			let burgerSubmenuItems = document.querySelectorAll(
				".burger__submenu-item"
			);
			burgerSubmenuItems.forEach((item, index) => {
				if (item.textContent.trim() == shiftObj.name) {
					burgerSubmenuItems[index].classList.add("focus");
				}
			});
		}
	}

	if (target.closest(".burger__menu-item-cross")) {
		burgerSubMenuItem = target.closest(".burger__submenu-item");
		if (burgerSubMenuItem) {
			let cross = burgerSubMenuItem.querySelector(".burger__menu-item-cross");
			//
			//
			if (cross) {
				cross.classList.toggle("active");
			}
			let burgerMenuItemMore = burgerSubMenuItem.querySelector(
				".burger__menu-item-more"
			);

			if (shiftObj.options.reserveShift) {
				burgerMenuItemMore.innerHTML = `
			<div class='burger__menu-btn burger__menu-reserve-shift-btn'>${
				shiftObj.options.reserveShift.status
					? `${otherWords.remove}`
					: `${otherWords.add}`
			} ${otherWords.reserveShift}</div>
		`;
			}

			if (shiftObj.options.addShift) {
				burgerMenuItemMore.innerHTML = `
			<div class='burger__menu-btn burger__menu-add-new-shift-btn'>${otherWords.addShift}</div>
		`;
			}

			if (shiftObj.options.editShift) {
				burgerMenuItemMore.innerHTML += `
			<div class='burger__menu-btn burger__menu-edit-shift-btn'>${otherWords.editShift}</div>
		`;
			}

			if (shiftObj.options.deleteShift && shiftObj.shiftsName.length > 1) {
				burgerMenuItemMore.innerHTML += `
			<div class='burger__menu-btn burger__menu-delete-shift-btn'>${otherWords.deleteShift}</div>
		`;
			}

			if (shiftObj.options.deleteSchedule) {
				burgerMenuItemMore.innerHTML += `
			<div class='burger__menu-btn burger__menu-delete-shedule-btn'>
				${otherWords.deleteShedule}
			</div>
		`;
			}

			if (burgerMenuItemMore) {
				burgerMenuItemMore.classList.toggle("active");
			}
		}
	}

	if (target.closest(".burger__menu-reserve-shift-btn")) {
		if (shiftObj.options.reserveShift.status) {
			shiftObj.shiftsName.pop();
			shiftObj.root.pop();
			shiftObj.options.reserveShift.status = false;
		} else {
			shiftObj.shiftsName.push(shiftObj.options.reserveShift.name);
			shiftObj.root.push([]);
			shiftObj.options.reserveShift.status = true;
		}

		replaceShiftObjInChoiceShifts();

		updateLocalStorage("userShift", shiftObj);
		updateLocalStorage("choiceShifts", choiceShifts);
		// location.reload();
	}

	if (target.closest(".burger__menu-color")) {
		if (localStorage.userSettings) {
			userSettings = JSON.parse(localStorage.getItem("userSettings"));
			if (userSettings.theme) {
				body.className = "";
				body.classList.add(userSettings.theme);
				body.classList.add("lock");
				let selectedBurgerSubmenuItem = document.querySelector(
					`.burger__submenu-item#${userSettings.theme}`
				);
				selectedBurgerSubmenuItem.classList.add("focus");
			}
		}

		let currentBurgerSubmenuItem = target.closest(".burger__menu-color");
		let burgerMenuColors = document.querySelectorAll(".burger__menu-color");
		burgerMenuColors.forEach((item) => {
			if (item == currentBurgerSubmenuItem) {
				item.classList.add("focus");
			} else {
				item.classList.remove("focus");
			}
		});
	}

	let burgerMenuShifts = document.querySelectorAll(".burger__menu-shift");
	let currentBurgerSubmenuItem = target.closest(".burger__menu-shift");

	if (target.closest(".burger__menu-shift")) {
		if (target.closest(".burger__menu-item-cross")) {
		} else {
			burgerMenuShifts.forEach((item, index) => {
				if (item == currentBurgerSubmenuItem) {
					item.classList.add("focus");

					if (
						e.target.closest(".burger__menu-item-cross") ||
						e.target.closest(".burger__menu-add-new-shift-btn") ||
						e.target.closest(".burger__menu-delete-shift-btn") ||
						e.target.closest(".burger__menu-edit-shift-btn")
						// ||
						// e.target.closest(".burger__menu-reserve-shift-btn")
					) {
					} else {
						shiftObj = choiceShifts[index];
						updateLocalStorage("userShift", shiftObj);
						location.hash = "";
						location.reload();
					}
				} else {
					item.classList.remove("focus");
				}
			});
		}
	}

	if (target.closest(".burger__menu-add-new-shift-btn")) {
		let burgerMenuAddNewShiftBtn = document.querySelector(
			".burger__menu-add-new-shift-btn"
		);
		// console.log(burgerMenuAddNewShiftBtn);

		let burgerMenuAddNewShiftInput =
			burgerMenuAddNewShiftBtn.querySelector(".input-wrapper");
		// console.log(burgerMenuAddNewShiftInput);

		if (burgerMenuAddNewShiftInput) {
		} else {
			burgerMenuAddNewShiftBtn.innerHTML = `
				<div class='burger__menu-add-new-shift-input'>
					<div class="input-wrapper">
						<input type="text" placeholder="${otherWords.setNameShift}">
					</div>
					<div class="burger__menu-btn burger__menu-add-new-shift-sub-btn">${otherWords.add}</div>
				</div>
			`;
		}
	}

	if (target.closest(".burger__menu-add-new-shift-sub-btn")) {
		let burgerMenuAddNewShiftInput = target.closest(
			".burger__menu-add-new-shift-input"
		);
		let inputValue = burgerMenuAddNewShiftInput.querySelector("input").value;

		if (inputValue == "") {
			inputValue = otherWords.myShift;
		}

		// если название совпадает, то добавляем индекс
		let counter = 1;

		shiftObj.shiftsName.forEach((item, index) => {
			shiftObj.activeTemplate[index] = false;

			if (item == inputValue) {
				counter++;
				inputValue = `${inputValue} ${counter}`;
			}
		});

		shiftObj.template = true;
		shiftObj.activeTemplate.push(true);
		shiftObj.shiftsName.push(inputValue);
		shiftObj.root.push([""]);
		updateLocalStorage("userShift", shiftObj);
		location.hash = "";
		location.reload();
	}

	if (target.closest(".burger__menu-edit-shift-btn")) {
		const burgerMenuEditShiftBtn = document.querySelector(
			".burger__menu-edit-shift-btn"
		);
		burgerMenuEditShiftBtn.innerHTML = `${otherWords.whatShiftEdit}`;
		shiftObj.shiftsName.forEach((item) => {
			burgerMenuEditShiftBtn.innerHTML += `
			<div class='burger__menu-btn burger__menu-edit-select-shift'>${item}</div>
			`;
		});
	}

	if (target.closest(".burger__menu-edit-select-shift")) {
		const burgerMenuSelectShiftName = target.closest(
			".burger__menu-edit-select-shift"
		).textContent;
		if (shiftObj.userNotes) {
			console.log(shiftObj.userNotes);
			const searshUserNotes = () => {
				shiftObj.userNotes.forEach((obj, index) => {
					if (obj.shift == burgerMenuSelectShiftName) {
						shiftObj.userNotes.splice(index, 1);
						searshUserNotes();
					}
				});
			};
			searshUserNotes();
		}
		shiftObj.shiftsName.forEach((item, index) => {
			shiftObj.activeTemplate[index] = false;
			if (item == e.target.textContent) {
				shiftObj.activeTemplate[index] = true;
				shiftObj.root[index] = [];
			}
		});

		shiftObj.editTemplate = true;
		shiftObj.template = true;
		replaceShiftObjInChoiceShifts();
		updateLocalStorage("userShift", shiftObj);
		updateLocalStorage("choiceShifts", choiceShifts);
		location.hash = "";
		location.reload();
	}

	if (target.closest(".burger__menu-delete-shift-btn")) {
		const burgerMenuDeleteShiftBtn = document.querySelector(
			".burger__menu-delete-shift-btn"
		);
		burgerMenuDeleteShiftBtn.innerHTML = otherWords.whatShiftRemove;
		shiftObj.shiftsName.forEach((item) => {
			burgerMenuDeleteShiftBtn.innerHTML += `
			<div class='burger__menu-btn burger__menu-delete-select-shift'>${item}</div>
			`;
		});
	}

	if (target.closest(".burger__menu-delete-select-shift")) {
		shiftObj.shiftsName.forEach((item, index) => {
			if (item == e.target.textContent) {
				shiftObj.activeTemplate = [false];
				shiftObj.template = false;
				shiftObj.shiftsName.splice(index, 1);
				shiftObj.root.splice(index, 1);
				shiftObj.arrDifferenceDays.splice(index, 1);
			}
			replaceShiftObjInChoiceShifts();
			updateLocalStorage("userShift", shiftObj);
			updateLocalStorage("choiceShifts", choiceShifts);
			location.reload();
		});
	}

	if (target.closest(".burger__menu-delete-shedule-btn")) {
		burgerMenuShifts.forEach((item, index) => {
			if (item == currentBurgerSubmenuItem) {
				choiceShifts.splice(index, 1);
				shiftObj = choiceShifts[0];
				updateLocalStorage("userShift", shiftObj);
				updateLocalStorage("choiceShifts", choiceShifts);
			}
		});
	}

	if (target.closest(".burger__menu-add-shedule-btn")) {
		let burgerMenuAddShiftInputs = document.querySelectorAll(
			".burger__menu-add-shift input"
		);

		shiftTemplate.name = burgerMenuAddShiftInputs[0].value;
		shiftTemplate.shiftsName = [burgerMenuAddShiftInputs[1].value];
		shiftTemplate.activeTemplate = [true];

		//присваиваем стандартное имя предприятия
		if (shiftTemplate.name == "") {
			shiftTemplate.name = otherWords.myCompany;
		}
		// если название совпадает, то добавляем индекс
		let counter = 1;
		choiceShifts.forEach((obj) => {
			if (obj.name == shiftTemplate.name) {
				counter++;
				shiftTemplate.name = `${shiftTemplate.name} ${counter}`;
			}
		});
		if (shiftTemplate.shiftsName == "") {
			shiftTemplate.shiftsName = [otherWords.myShift];
		}

		shiftObj = shiftTemplate;
		updateLocalStorage("userShift", shiftObj);
		location.hash = "";
		location.reload();
	}

	if (target.closest(".burger__submenu-language-item")) {
		const currentLanguage = target
			.closest(".burger__submenu-language-item")
			.textContent.trim();
		languageApp.forEach((obj) => {
			if (obj.name == currentLanguage) {
				userSettings.language = currentLanguage;
				updateLocalStorage("userSettings", userSettings);
				location.reload();
			}
		});
	}

	const selectTheme = (target, nameTheme) => {
		if (target.closest(`#${nameTheme}`)) {
			body.className = "";
			body.classList.add(nameTheme);
			body.classList.toggle("lock");
			userSettings.theme = nameTheme;
			updateLocalStorage("userSettings", userSettings);
		}
	};

	selectTheme(target, "dark");
	selectTheme(target, "dark-2");
	selectTheme(target, "light");
	selectTheme(target, "light-2");
});
const fillTheme = (nameTheme) => {
	const burgerMenuChoiceTheme = document.querySelector(
		".burger__menu-choice-theme"
	);
	burgerMenuChoiceTheme.innerHTML += `
		<div id="${nameTheme}" class="burger__submenu-item burger__menu-color">
			<div class="color color-1"></div>
			<div class="color color-2"></div>
			<div class="color color-3"></div>
			<div class="color color-4"></div>
			<div class="color color-5"></div>
			<div class="color color-6"></div>
			<div class="color color-7"></div>
			<div class="color color-8"></div>
			<div class="color color-9"></div>
			<div class="color color-10"></div>
		</div>
	`;
};
fillTheme("dark");
fillTheme("dark-2");
fillTheme("light");
fillTheme("light-2");

//Контекстное меню

const rightClickMenu = document.querySelector(".right-click-menu");

const rightClickMenuItems = calendar.querySelector(".right-click-menu ul");

//верстка элементов контекстного меню

namesContextMenu.forEach((obj) => {
	let li = document.createElement("li");
	li.classList.add("right-click-menu-item");

	let desc = document.createElement("div");
	desc.classList.add("right-click-menu-item__desc");
	desc.innerHTML = `<div class="right-click-menu-item__desc-arrow">
			<div class="arrow-wrapper right">
				<div class="arrow-sign arrow-part-1"></div>
				<div class="arrow-sign arrow-part-2"></div>
			</div>
		</div>`;
	li.appendChild(desc);

	let btn = document.createElement("div");
	btn.classList.add("close-menu");
	btn.classList.add("right-click-menu-item__btn");
	li.appendChild(btn);

	let btnValue = document.createElement("div");
	btnValue.classList.add("right-click-menu-item__value");
	btnValue.setAttribute("data-value", obj.key);
	btnValue.innerHTML = `"${obj.key}"`;
	btn.appendChild(btnValue);

	let btnName = document.createElement("div");
	btnName.classList.add("right-click-menu-item__name");
	btnName.setAttribute("data-value", obj.key);
	btnName.innerHTML = obj.title;
	btn.appendChild(btnName);

	let color = document.createElement("div");
	color.classList.add("right-click-menu-item__color");
	color.innerHTML = `<input readonly type="text" data-coloris value='${obj.color}'/>`;
	li.appendChild(color);

	let liForTodo = document.createElement("li");
	liForTodo.classList.add("right-click-menu-item");
	liForTodo.classList.add("right-click-menu__todo");

	liForTodo.innerHTML = `
			<h2>${otherWords.tasksDay}:</h2>
			
			<ul class="right-click-menu__todos-wrapper">
			</ul>
			
			<div class="right-click-menu__add-todo-wrapper right-click-menu-item">
				<div></div>
				<div class="input-wrapper">
					<input placeholder="${otherWords.newTask}" type="text" class="new-description-task" />
				</div>
				<div class="button-wrapper add-task-btn" >
					<span class="cross"></span>
				</div>
			</div>
		`;

	rightClickMenuItems.appendChild(li);
	rightClickMenuItems.appendChild(liForTodo);

	if (shiftObj.template) {
		li.style.gridTemplateColumns = "none";
		desc.style.display = "none";
		color.style.display = "none";
	}
});

let targetItemInTable;

//for arr in localstorage
let selectedDate;
let selectedShift;
let selectedItemInContextMenu;
let selectedColorInContextMenu;
let selectedTodoValue;

//for todo
let currentTodo;
let addTaskBtn;
let inputTodo;
let todosWrapper;
let tasks = [];
let todoItemElems = [];

//all arrow, todos, todos wrapper
let todosWrappers = document.querySelectorAll(
	".right-click-menu__todos-wrapper"
);
let allTodos = document.querySelectorAll(".right-click-menu__todo");
let arrows = rightClickMenuItems.querySelectorAll(
	".right-click-menu-item__desc-arrow"
);

//убираем классы active и очищаем todos wrapper
const removeActiveArrowsTodos = () => {
	arrows.forEach((item) => {
		item.classList.remove("active");
	});

	allTodos.forEach((item) => {
		item.classList.remove("active");
	});
};
const clearAllTodosWrappers = () => {
	todosWrappers.forEach((item) => {
		item.innerHTML = "";
	});
};

const pushObjInArr = () => {
	arrForUserNotes.push(
		new UserNotes(
			selectedDate,
			selectedShift,
			selectedColorInContextMenu,
			selectedTodoValue,
			selectedItemInContextMenu
		)
	);
};

function Task(description) {
	this.description = description;
	this.completed = false;
}

function UserNotes(date, shift, color, desc, key) {
	this.date = date;
	this.shift = shift;
	this.color = color;
	this.desc = desc;
	this.keyNote = key;
}

// function UserSettings(theme) {
// 	this.theme = theme;
// }

const filterTasks = () => {
	const activeTasks =
		tasks.length && tasks.filter((item) => item.completed == false);
	const completedTasks =
		tasks.length && tasks.filter((item) => item.completed == true);
	tasks = [...activeTasks, ...completedTasks];
};

const setAttrCurCell = (curСell, tasks) => {
	curСell.setAttribute("data-desc", JSON.stringify(tasks));
};

const removeClassDescEventListener = () => {
	if (tasks.length > 0) {
	} else {
		targetItemInTable.classList.remove("desc");
		targetItemInTable.removeEventListener("click", popupOpen);
	}
};

const addTask = (addTaskBtn) => {
	addTaskBtn.addEventListener("click", () => {
		if (inputTodo && inputTodo.value) {
			tasks.push(new Task(inputTodo.value));
			selectedTodoValue = tasks;
			inputTodo.value = "";
		}
		setAttrCurCell(targetItemInTable, tasks);

		pushObjInArr();
		filterArr(arrForUserNotes);
		// updateLocalStorage("userNotes", arrForUserNotes);
		shiftObj.userNotes = arrForUserNotes;
		updateLocalStorage("userShift", shiftObj);
		replaceShiftObjInChoiceShifts();

		updateLocalStorage("choiceShifts", choiceShifts);

		fillHtmlList();
	});
};

const editDescription = () => {
	let descsInTodo = document.querySelectorAll(".description");
	descsInTodo.forEach((item, index) => {
		item.addEventListener("click", () => {
			if (item.closest(".description")) {
				let currDesc = item.closest(".description");
				currDesc.addEventListener("keyup", () => {
					tasks[index] = new Task(currDesc.innerText);
					selectedTodoValue = tasks;
				});
			}
		});
	});
};

const fillHtmlList = () => {
	if (todosWrapper) {
		todosWrapper.innerHTML = "";
	}
	if (tasks.length > 0) {
		filterTasks();
		tasks.forEach((item, index) => {
			if (todosWrapper) {
				todosWrapper.innerHTML += `
			<li class="todo-item right-click-menu-item ${item.completed ? "checked" : ""}">
				<div class="custom-checkbox">
					<input 
						class="btn-complete" 
						type="checkbox" 
						id="${index}" 
						${item.completed ? "checked" : ""}
					/>
					<label for="${index}"></label>
				</div>
				<div class="description" contenteditable="true">${item.description}</div>
				<div class="btn-delete">
						<span class="cross"></span>
				</div>
			</li>
			`;
			}
		});
		todoItemElems = currentTodo.querySelectorAll(".todo-item");
		todoItemElems.forEach((item, index) => {
			let checkbox = item.querySelector(".custom-checkbox label");

			checkbox.addEventListener("click", () => {
				tasks[index].completed = !tasks[index].completed;
				if (tasks[index].completed) {
					todoItemElems[index].classList.add("checked");
				} else {
					todoItemElems[index].classList.remove("checked");
				}
				selectedTodoValue = tasks;

				fillHtmlList();

				pushObjInArr();
				filterArr(arrForUserNotes);
				shiftObj.userNotes = arrForUserNotes;
				updateLocalStorage("userShift", shiftObj);
				replaceShiftObjInChoiceShifts();

				updateLocalStorage("choiceShifts", choiceShifts);
			});

			let btnDel = item.querySelector(".btn-delete");
			btnDel.addEventListener("click", () => {
				tasks.splice(index, 1);
				selectedTodoValue = tasks;
				fillHtmlList();
				setAttrCurCell(targetItemInTable, tasks);

				pushObjInArr();
				filterArr(arrForUserNotes);
				shiftObj.userNotes = arrForUserNotes;
				updateLocalStorage("userShift", shiftObj);
				replaceShiftObjInChoiceShifts();

				updateLocalStorage("choiceShifts", choiceShifts);
			});
		});
		editDescription();
	}
};
//заполняем шапку в контекстном меню и в попапе
const getInfoFromTable = (
	target,
	curShift,
	curDay,
	curMonth,
	curYear,
	curDayWeek
) => {
	//заполняем даты
	//Объяснение :
	// element.parentNode.children→ Возвращает братьев element, включая этот элемент.
	// Array.from→ Приводит конструктор children к Array объекту
	// indexOf→ Вы можете подать заявку indexOf, потому что теперь у вас есть Array объект.
	let day = Array.from(target.parentNode.children).indexOf(target);
	curDay.innerHTML = getZero(day);

	let month = currMonth.value + 1;
	curMonth.innerHTML = getZero(month);

	curYear.innerHTML = currYear.value;

	//заполняем название смены в контекстном меню
	let shift = target.parentElement.firstChild.innerText;
	curShift.innerHTML = `"${shift}"`;

	//заполняем поле дней недели
	let dayWeek = new Date(currYear.value, currMonth.value, day).getDay();
	curDayWeek.innerHTML = dayNames[dayWeek];

	selectedDate = JSON.stringify(
		new Date(currYear.value, currMonth.value, day + 1)
	);
	selectedShift = shift;

	location.hash = `context/${selectedDate}-${shift}`;
};

// если на одной и той же дате и одной и той же смене нажимаем второй раз,
//то старые данные удаляются, новые записываются
const filterArr = (arr) => {
	let arr1 = [],
		arr2 = [],
		repetition = [],
		remainder = [],
		result;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].date == selectedDate && arr[i].shift == selectedShift) {
			repetition.push(arr[i]);
			arr1 = [repetition.shift()];
		} else {
			remainder.push(arr[i]);
			arr2 = remainder;
		}
	}
	result = arr1.concat(arr2);
	arrForUserNotes = result.slice();
};

function UserNameShift(key, title) {
	this.key = key;

	if (title == "") {
		title = `${otherWords.shiftFrom} '${key}'`;
	}

	this.title = title;
	this.count = true;
}

let popupContentBody = document.querySelector(".popup__content-body");

let myShiftsForLocalStorage;
//выделяем текущий день при клике
calendarBody.addEventListener("click", (e) => {
	let target = e.target;
	let allDays = document.querySelectorAll(".calendar-day");
	allDays.forEach((day) => {
		day.classList.remove("selected");
	});

	let index;
	let column = target.closest(".calendar-column");
	let days;
	if (column) {
		days = column.querySelectorAll(".calendar-day");
		days.forEach((day, i) => {
			if (day == target) {
				index = i;
			}
		});
	}

	//для создания нового графика
	if (target.closest(".calendar-day-create-shift")) {
		// popupContentWrapper.style.display = "flex";
		// popupContentEndCicleWrapper.style.display = "none";

		let day = target.closest(".calendar-day-create-shift");
		day.addEventListener("click", popupOpen(e));

		shiftObj.endCicle = false;
		updateLocalStorage("userShift", shiftObj);
	}

	if (target.closest(".end-cicle-btn") && myShiftsForLocalStorage) {
		// shiftObj.root.pop();
		shiftObj.activeTemplate.forEach((item, index) => {
			if (item == true) {
				shiftObj.root[index] = myShiftsForLocalStorage;
			}
		});

		//получаем день с которого начинается отсчет графика

		if (shiftObj.shiftsName.length == 1) {
			startDay = new Date(currYear.value, currMonth.value, firstElemIndex + 1);

			shiftObj.startDate = startDay;
		} else {
			let newStartDay = new Date(
				currYear.value,
				currMonth.value,
				firstElemIndex + 1
			);
			differenceDays = Math.round((startDay - newStartDay) / 86400000);

			shiftObj.activeTemplate.forEach((item, index) => {
				if (item == true) {
					shiftObj.arrDifferenceDays[index] = differenceDays;
				}
			});
		}

		shiftObj.template = false;

		if (shiftObj.shiftsName.length > 1) {
		} else {
			if (shiftObj.editTemplate) {
			} else {
				choiceShifts.unshift(shiftObj);
			}
		}
		shiftObj.editTemplate = false;
		updateLocalStorage("userShift", shiftObj);
		replaceShiftObjInChoiceShifts();

		updateLocalStorage("choiceShifts", choiceShifts);

		location.hash = "";
		location.reload();
	}

	if (shiftObj.template) {
		popupContentBody.innerHTML = "";

		shiftObj.namesContextMenu.forEach((item) => {
			popupContentBody.innerHTML += `
				<div class="popup__content-item">
					<div class="popup__add-shift-btn right-click-menu-item__btn">
						<div class="right-click-menu-item__value">
						"${item.key}"
						</div>
						<div class="right-click-menu-item__name">
						${item.title}
						</div>
					</div>
				</div>
			`;
		});

		let addShiftItem = `
			<div class="popup__content-item add-shift-item">
				<div
					class="
						right-click-menu__add-todo-wrapper
						right-click-menu-item
						popup__create-shift
					"
				>
					<h3>${otherWords.shiftName}*:</h3>
					<div class="input-wrapper">
						<input
							placeholder="${otherWords.example}: '23'
							type="text"
							class="new-description-task"
						/>
					</div>
					<h3>${otherWords.shiftDescription}:</h3>
					<div class="input-wrapper">
						<input
							placeholder="${otherWords.example}: '${otherWords.shiftFrom} 23-00'"
							type="text"
							class="new-description-task"
						/>
					</div>
					<div class="close-menu right-click-menu-item__btn add-task-btn">
						<div class="right-click-menu-item__value">
							<span class="cross"></span>
						</div>
						<div class="right-click-menu-item__name button-wrapper ">
						${otherWords.addShift}
						</div>
					</div>
				</div>
			</div>
		`;
		//
		//
		popupContentBody.insertAdjacentHTML("beforeend", addShiftItem);

		if (e.target.closest("[data-shift]")) {
			const deleteShiftItem = `
				<div class="close-menu right-click-menu-item__btn delete-task-btn">
					<div class="right-click-menu-item__value">
						<span class="cross"></span>
					</div>
					<div class="right-click-menu-item__name button-wrapper ">
						${otherWords.deleteShift}
					</div>
				</div>
			`;

			const popupCreateShift = document.querySelector(".popup__create-shift");
			popupCreateShift.insertAdjacentHTML("beforeend", deleteShiftItem);
		}
	} else {
		let columns = document.querySelectorAll(".calendar-column");
		columns.forEach((column) => {
			days = column.querySelectorAll(".calendar-day");
			if (target.closest(".calendar-day")) {
				days[index].classList.add("selected");
			}
		});
	}
});

if (shiftObj.template) {
} else {
	calendarBody.addEventListener("contextmenu", (e) => {
		const menuHeaderShift = rightClickMenu.querySelector(".menu-header__shift");
		const menuHeaderDay = rightClickMenu.querySelector(".menu-header__day");
		const menuHeaderMonth = rightClickMenu.querySelector(".menu-header__month");
		const menuHeaderYear = rightClickMenu.querySelector(".menu-header__year");
		const menuHeaderDayWeek = rightClickMenu.querySelector(
			".menu-header__day-week"
		);

		//ячейка в таблице
		targetItemInTable = e.target;

		//заполняем шапку в контекстном меню
		if (targetItemInTable.closest(".calendar-context-menu")) {
			e.preventDefault();
			rightClickMenu.classList.add("active");
			body.classList.add("lock");

			getInfoFromTable(
				targetItemInTable,
				menuHeaderShift,
				menuHeaderDay,
				menuHeaderMonth,
				menuHeaderYear,
				menuHeaderDayWeek
			);
		}
		tasks = [];
		// находим куда надо вставить todo из localstorage
		if (arrForUserNotes.length > 0) {
			arrForUserNotes.forEach((item) => {
				if (selectedDate == item.date && selectedShift == item.shift) {
					let rightClickMenuItemValue = rightClickMenuItems.querySelectorAll(
						".right-click-menu-item__value"
					);
					rightClickMenuItemValue.forEach((menuItem) => {
						if (menuItem.getAttribute("data-value") == item.keyNote) {
							if (item.desc && item.desc.length > 0) {
								let rightClickMenuItem = menuItem.parentNode.parentNode;
								currentTodo = rightClickMenuItem.nextSibling;
								todosWrapper = currentTodo.querySelector(
									".right-click-menu__todos-wrapper"
								);
								todosWrapper.innerHTML = "";
								inputTodo = currentTodo.querySelector(".new-description-task");
								addTaskBtn = currentTodo.querySelector(".add-task-btn");
								tasks = item.desc.slice();
								fillHtmlList();
								let arrow = rightClickMenuItem.querySelector(
									".right-click-menu-item__desc-arrow"
								);
								arrow.classList.add("active");
								currentTodo.classList.add("active");
								addTask(addTaskBtn);
							}
						}
					});
				}
			});
		}
	});
}

rightClickMenuItems.addEventListener("click", (e) => {
	let target = e.target;

	let rightClickMenuItemBtn;

	if (target.closest(".right-click-menu-item__btn")) {
		rightClickMenuItemBtn = e.target.closest(".right-click-menu-item__btn");

		//получаем букву и вставляем в таблицу
		targetItemInTable.innerHTML = target.getAttribute("data-value");

		selectedItemInContextMenu = target.getAttribute("data-value");

		//получаем цвет и устанавливаем в таблицу
		let divColor = target.closest(".right-click-menu-item__btn").nextSibling;

		let inputColor = divColor.querySelector("input");

		targetItemInTable.style.backgroundColor = inputColor.value;

		selectedColorInContextMenu = inputColor.value;
		if (tasks.length > 0) {
			targetItemInTable.setAttribute("data-desc", JSON.stringify(tasks));
			targetItemInTable.classList.add("desc");
		}
		targetItemInTable.setAttribute(
			"data-key-note",
			target.getAttribute("data-value")
		);
		targetItemInTable.setAttribute("data-shift", selectedShift);
		targetItemInTable.setAttribute("data-color", inputColor.value);

		//создание объекта с выбранными данными из контекстного меню и сохраняем в массив

		pushObjInArr();

		filterArr(arrForUserNotes);

		// updateLocalStorage("userNotes", arrForUserNotes);
		shiftObj.userNotes = arrForUserNotes;
		updateLocalStorage("userShift", shiftObj);
		replaceShiftObjInChoiceShifts();

		updateLocalStorage("choiceShifts", choiceShifts);

		removeActiveArrowsTodos();
		clearAllTodosWrappers();

		searchBtnsAddFPopupOpen();

		removeClassDescEventListener();

		addTask(rightClickMenuItemBtn);

		location.hash = "";

		//пересчитываем количество смен и вставляем в конец таблицы

		//for count shifts
		let arrForCount = [];
		let currentColumnShift = targetItemInTable.closest(".calendar-shift");
		let calendarCountShifts = document.querySelectorAll(
			".calendar-count-shift"
		);
		let columnShifts = document.querySelectorAll(".calendar-shift");

		let targetItemsInTable =
			currentColumnShift.querySelectorAll(".calendar-day");

		targetItemsInTable.forEach((item) => {
			namesContextMenu.forEach((obj) => {
				if (obj.count) {
					if (item.innerHTML == obj.key) {
						arrForCount.push(item.innerHTML);
					}
				}
			});
		});

		columnShifts.forEach((item, index) => {
			if (item == currentColumnShift) {
				calendarCountShifts[index].innerHTML = arrForCount.length;
			}
		});
	}

	if (target.closest(".right-click-menu-item__color input")) {
		target.addEventListener("change", () => {
			let color = target.value;
			target.setAttribute("value", color);
		});
		const resetBtn = document.querySelector(".clr-clear");
		resetBtn.innerHTML = otherWords.reset;
		console.log(resetBtn);
	}

	//открываем todo в контекстном меню
	if (target.closest(".right-click-menu-item__desc")) {
		removeActiveArrowsTodos();

		let rightClickMenuItem = target.closest(".right-click-menu-item");
		rightClickMenuItemBtn = rightClickMenuItem.querySelector(
			".right-click-menu-item__btn"
		);
		let arrow = rightClickMenuItem.querySelector(
			".right-click-menu-item__desc-arrow"
		);

		arrow.classList.toggle("active");

		currentTodo = rightClickMenuItem.nextSibling;
		currentTodo.classList.toggle("active");

		addTaskBtn = currentTodo.querySelector(".add-task-btn");
		inputTodo = currentTodo.querySelector(".new-description-task");
		todosWrapper = currentTodo.querySelector(
			".right-click-menu__todos-wrapper"
		);
		fillHtmlList();
		inputTodo.value = "";
		addTask(addTaskBtn);
		addTask(rightClickMenuItemBtn);
	}
});

rightClickMenu.addEventListener("click", (e) => {
	let targetItem = e.target;
	if (targetItem.closest(".close-menu")) {
		rightClickMenu.classList.remove("active");
		body.classList.remove("lock");

		removeActiveArrowsTodos();
		clearAllTodosWrappers();

		location.hash = "";
	}
});

// if (shiftObj.template) {
// 	let endCicleBtnHTML = `<div class="end-cicle-btn">&#10004;</div>`;
// 	calendarBody.insertAdjacentHTML("afterbegin", endCicleBtnHTML);
// }

//popup
let btns;
const popup = document.querySelector(".popup");
// const idPopup = document.querySelector("#popup");
const popupCloseBtn = document.querySelector(".popup__close");
// const popupContentWrapper = document.querySelector(".popup__content-wrapper");
// const popupContentEndCicleWrapper = document.querySelector(
// 	".popup__content-end-cicle-wrapper"
// );

// popupContentEndCicleWrapper.innerHTML += `
// 		<div class="popup__content-item">
// 			<div class="popup__add-shift-btn right-click-menu-item__btn" data-end-cicle>
// 				<div class="right-click-menu-item__value">
// 				&#10004;
// 				</div>
// 				<div class="right-click-menu-item__name">
// 				"Закончить построение графика?"
// 				</div>
// 			</div>
// 		</div>
// 	`;

const popupOpen = (e) => {
	popup.classList.remove("hide");
	popup.classList.add("show");
	document.body.style.overflow = "hidden";
	body.style.paddingRight = scrollWidth + "px";

	const menuHeaderShift = popup.querySelector(".menu-header__shift");
	const menuHeaderDay = popup.querySelector(".menu-header__day");
	const menuHeaderMonth = popup.querySelector(".menu-header__month");
	const menuHeaderYear = popup.querySelector(".menu-header__year");
	const menuHeaderDayWeek = popup.querySelector(".menu-header__day-week");

	targetItemInTable = e.target;

	getInfoFromTable(
		targetItemInTable,
		menuHeaderShift,
		menuHeaderDay,
		menuHeaderMonth,
		menuHeaderYear,
		menuHeaderDayWeek
	);

	selectedShift = targetItemInTable.getAttribute("data-shift");
	selectedColorInContextMenu = targetItemInTable.getAttribute("data-color");
	selectedItemInContextMenu = targetItemInTable.getAttribute("data-key-note");

	if (shiftObj.template) {
	} else {
		tasks = JSON.parse(targetItemInTable.getAttribute("data-desc"));
		selectedTodoValue = tasks;

		todosWrapper = popup.querySelector(".right-click-menu__todos-wrapper");

		currentTodo = todosWrapper;
		inputTodo = popup.querySelector(".new-description-task");
		addTaskBtn = popup.querySelector(".add-task-btn");

		fillHtmlList();

		addTask(addTaskBtn);
	}
};

const searchBtnsAddFPopupOpen = () => {
	btns = document.querySelectorAll(".desc");
	btns.forEach((btn) => {
		btn.addEventListener("click", popupOpen);
	});
};

searchBtnsAddFPopupOpen();

const popupClose = () => {
	popup.classList.remove("show");
	popup.classList.add("hide");
	document.body.style.overflow = "";
	body.style.paddingRight = 0;

	if (shiftObj.template) {
	} else {
		if (inputTodo.value) {
			tasks.push(new Task(inputTodo.value));
			selectedTodoValue = tasks;
			inputTodo.value = "";

			setAttrCurCell(targetItemInTable, tasks);
			pushObjInArr();
			filterArr(arrForUserNotes);
			shiftObj.userNotes = arrForUserNotes;
			updateLocalStorage("userShift", shiftObj);
			replaceShiftObjInChoiceShifts();

			updateLocalStorage("choiceShifts", choiceShifts);
			removeClassDescEventListener();
		}
	}
	location.hash = "";
};

popupCloseBtn.addEventListener("click", popupClose);

popup.addEventListener("click", (e) => {
	if (e.target == popup) {
		popupClose();
	}
	//добавляем смену в календарь в режиме создания графика
	if (
		e.target.closest(".popup__add-shift-btn")
		// &&
		// !e.target.closest(".popup__add-shift-btn[data-end-cicle]")
	) {
		let popupContentItem = e.target.closest(".popup__content-item");
		let currentBtnKeyNote = popupContentItem.querySelector(
			".popup__add-shift-btn .right-click-menu-item__value"
		);

		let currentBtnKeyNoteValue = currentBtnKeyNote.textContent
			.trim()
			.replace(/["']/g, "");

		targetItemInTable.innerHTML = currentBtnKeyNoteValue;
		targetItemInTable.setAttribute("data-key-note", currentBtnKeyNoteValue);
		targetItemInTable.setAttribute("data-shift", "");

		popupClose();

		createEndCicleBtn();
	}
	//добавляем новую смену

	let addShiftInputs = document.querySelectorAll(".popup__content-item input");

	if (e.target.closest(".popup__content-item .add-task-btn")) {
		if (addShiftInputs[0].value) {
			shiftObj.namesContextMenu.forEach((obj, index) => {
				if (obj.key == addShiftInputs[0].value) {
					shiftObj.namesContextMenu.splice(index, 1);
				}
			});

			shiftObj.namesContextMenu.unshift(
				new UserNameShift(addShiftInputs[0].value, addShiftInputs[1].value)
			);
			targetItemInTable.innerHTML = addShiftInputs[0].value;
			targetItemInTable.setAttribute("data-key-note", addShiftInputs[0].value);
			targetItemInTable.setAttribute("data-shift", "");

			targetItemInTable.classList.add("create-shift-selected");

			updateLocalStorage("userShift", shiftObj);
			popupClose();

			createEndCicleBtn();
		} else {
			addShiftInputs[0].setAttribute("placeholder", `${otherWords.fillField}`);
			// addShiftInputs[0].style.boxShadow =
			// 	"inset 0 0 8px var(--light-2-focus-in-template)";
			addShiftInputs[0].style.border =
				"2px solid var(--light-2-focus-in-template)";
		}
	}

	if (e.target.closest(".popup__content-item .delete-task-btn")) {
		targetItemInTable.innerHTML = "";
		targetItemInTable.removeAttribute("data-key-note");
		targetItemInTable.removeAttribute("data-shift");
		targetItemInTable.classList.remove("create-shift-selected");

		popupClose();
	}
	if (
		shiftObj.template &&
		((addShiftInputs[0].value && e.target.closest(".add-task-btn")) ||
			e.target.closest(".popup__add-shift-btn"))
	) {
		let myShiftsNodeList = document.querySelectorAll(
			".calendar-day-create-shift"
		);
		let myShiftsArr = Array.prototype.slice.call(myShiftsNodeList);

		firstElemIndex = myShiftsArr.findIndex((item) =>
			item.closest("[data-shift]")
		);
		let myShiftsArrReverse = myShiftsArr.slice().reverse();

		let myShiftsArrReverseIndex = myShiftsArrReverse.findIndex((item) =>
			item.closest("[data-shift]")
		);

		let lastElemIndex = myShiftsArr.length - myShiftsArrReverseIndex;
		let myShiftsFinal = myShiftsArr.slice(firstElemIndex, lastElemIndex);

		console.log(firstElemIndex);
		console.log(lastElemIndex);

		myShiftsForLocalStorage = [];

		myShiftsFinal.forEach((item, index) => {
			let attr;
			item.setAttribute("data-shift", "");
			if (item.closest("[data-key-note]")) {
				attr = item.getAttribute("data-key-note");
				item.classList.add("create-shift-selected");
			} else {
				item.innerHTML = "";

				item.classList.add("create-shift-selected");

				attr = "";
			}

			myShiftsForLocalStorage.push(attr);
		});
	}
});

document.addEventListener("keydown", (e) => {
	if (e.keyCode == 27 && popup.classList.contains("show")) {
		popupClose();
	}
});

//Router
let controller = {
	startRoute() {
		burgerBtn.classList.remove("active");
		burgerBtn.style.display = "block";
		burgerWrapper.style.display = "block";
		burgerMenu.classList.remove("active");
		body.classList.remove("lock");
		rightClickMenu.classList.remove("active");
		popup.classList.remove("show");
		monthList.classList.remove("show");

		let calendarHeaderDays = document.querySelectorAll(".calendar-header-day");
		calendarHeaderDays.forEach((item) => {
			item.style.position = "fixed";
		});
	},
	menuRoute() {
		burgerBtn.classList.add("active");
		burgerMenu.classList.add("active");
		body.classList.add("lock");
	},
	contextRoute() {},
	monthlistRoute() {
		burgerBtn.style.display = "none";
		burgerWrapper.style.display = "none";
	},
};

function getRouteInfo() {
	const hash = location.hash ? location.hash.slice(1) : "";
	const [name, id] = hash.split("/");
	return { name, params: { id } };
}

function handleHash() {
	const { name, params } = getRouteInfo();
	if (name) {
		const routeName = name + "Route";
		controller[routeName](params);
	} else {
		const routeName = "start" + "Route";
		controller[routeName]();
	}
}

window.addEventListener("hashchange", handleHash);

handleHash();

//текущая дата в центр экрана
const currDateForScroll = document.querySelector(".curr-date");
if (currDateForScroll) {
	currDateForScroll.scrollIntoView({ block: "center", behavior: "smooth" });
}
