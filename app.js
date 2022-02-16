const body = document.querySelector("body");
const calendar = document.querySelector(".calendar");
const calendarBody = document.querySelector(".calendar-body");
const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let calendarCountShift = calendar.querySelector(".calendar-count");
let arrForUserNotes;

//шаблон объекта смен
const shiftObj = {
	shiftsName: ["А", "Б", "В", "Г", "Д", "Е"],
	/////////
	namesContextMenu: {
		key: ["7", "15", "23", "У", "Э", "Д", "О", "&nbsp", "З"],
		name: [
			"Смена с 07-00",
			"Смена с 15-00",
			"Смена с 23-00",
			"Учеба/Тренировка",
			"Экзамен",
			"Доработка",
			"Отгулы",
			"Выходной",
			"Заметка",
		],
	},
	root: [
		["23", "23", "23", "", "", "15", "15", "15", "", "", "7", "7", "7", "", ""],
		["15", "15", "", "", "7", "7", "7", "", "", "23", "23", "23", "", "", "15"],
		["7", "", "", "23", "23", "23", "", "", "15", "15", "15", "", "", "7", "7"],
		["", "", "15", "15", "15", "", "", "7", "7", "7", "", "", "23", "23", "23"],
		["", "7", "7", "7", "", "", "23", "23", "23", "", "", "15", "15", "15", ""],
		[],
	],
};
const shiftObj1 = {
	shiftsName: ["А", "Б", "В", "Г", "Д"],
	root: [
		["0", "0", "", "16", "16", "", "8", "8"],
		["16", "", "8", "8", "0", "0", "", "16"],
		["8", "8", "0", "0", "", "16", "16", ""],
		["", "16", "16", "", "8", "8", "0", "0"],
		[],
	],
};
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
const monthNames = [
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

let removeLocalStorage = document.querySelector(".remove-local-storage");
removeLocalStorage.addEventListener("click", () => {
	localStorage.removeItem("userNotes");
	generateCalendar(currMonth.value, currYear.value);
	location.href = location.href;
});
const toggleFocusBurgerMenu = () => {
	let burgerSubmenuItems = document.querySelectorAll(".burger__submenu-item");
	burgerSubmenuItems.forEach((item) => {
		if (item.closest(`#${body.className}`)) {
			item.classList.add("focus");
		} else {
			item.classList.remove("focus");
		}
	});
};
if (localStorage.userSettings) {
	let userSettings = JSON.parse(localStorage.getItem("userSettings"));
	body.className = "";
	body.classList.add(userSettings.theme);

	toggleFocusBurgerMenu();
}

if (!localStorage.userNotes) {
	arrForUserNotes = [];
} else {
	arrForUserNotes = JSON.parse(localStorage.getItem("userNotes"));
}

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

	//получаем первый день месяца
	let firstDay = new Date(year, month, 1);

	/////////////////////////////

	var dayNewYear = new Date(2022, 0, 1);

	var diff = firstDay - dayNewYear;

	var dayOne = 86400000;
	//  1000 * 60 * 60 * 24;

	// количество дней с начала года
	var dayYear = Math.round(diff / dayOne);
	var lenShift = 15;

	var residual = dayYear % lenShift;

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
		// headerDay.style.width = headerDay.offsetWidth + "px";
	};

	window.addEventListener(`resize`, () => {
		setWidthFooter();
		setWidthHeaderDay();
	});

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

		//заполняем поля смен

		const fillDay = (shift, calendarCount, arrForCount, nameShift, root) => {
			const multiplyRoot = () => {
				let arr = root.concat(root);
				root = arr.slice();
			};
			if (root.length == 0) {
			} else {
				while (root.length < 50) {
					multiplyRoot();
				}
			}

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
				dayNames[iDay.getDay()] == dayNames[0] ||
				dayNames[iDay.getDay()] == dayNames[6]
			) {
				day.classList.add("calendar-day-off");
			}

			//заполняем колонку смен
			day.innerHTML = root[residual + i + 15];
			shift.appendChild(day);
			if (root[residual + i] == undefined) {
				day.innerHTML = "";
				shift.appendChild(day);
			}

			if (i == daysOfMonth[month] - 1) {
				let headerDay = shift.querySelector(".calendar-header-day");
				headerDay.style.width = headerDay.offsetWidth + "px";
				headerDay.style.position = "fixed";
				// setWidthHeaderDay();

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

			// сразу не пересчитывает смены, надо обновлять
			const countShifts = () => {
				if (
					day.innerHTML == "23" ||
					day.innerHTML == "15" ||
					day.innerHTML == "7" ||
					day.innerHTML == "Д" ||
					day.innerHTML == "У"
				) {
					arrForCount.push(day.innerHTML);
					// console.log(arrForCount);
				}
				if (calendarCount) {
					calendarCount.innerHTML = arrForCount.length;
				}
			};
			countShifts();
		};

		let calendarShifts = document.querySelectorAll(".calendar-shift");
		let calendarCountShifts = document.querySelectorAll(
			".calendar-count-shift"
		);

		shiftsName.forEach((item, index) => {
			fillDay(
				calendarShifts[index],
				calendarCountShifts[index],
				arrForCount[index],
				shiftsName[index],
				root[index]
			);
		});

		//вешаем класс curr-date на сегодняшнюю дату
		if (
			i + 1 === currDate.getDate() &&
			year === currDate.getFullYear() &&
			month === currDate.getMonth()
		) {
			day.classList.add("curr-date");
			dayWeek.classList.add("curr-date");
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
const burger = document.querySelector(".burger__btn");
const headerMenu = document.querySelector(".burger__menu");
const burgerWrapper = document.querySelector(".burger-wrapper");

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

	if (burger.className.includes("active")) {
		location.hash = "menu";
	} else {
		location.hash = "";
	}
});
headerMenu.addEventListener("click", (e) => {
	let target = e.target;
	let burgerMenuItem;

	if (target.closest(".burger__menu-item")) {
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

		if (localStorage.userSettings) {
			let userSettings = JSON.parse(localStorage.getItem("userSettings"));
			body.className = "";
			body.classList.add(userSettings.theme);

			toggleFocusBurgerMenu();
		}
	}

	const selectTheme = (target, nameTheme) => {
		if (target.closest(`#${nameTheme}`)) {
			// let currTheme = target.closest(".burger__menu-color");
			body.className = "";
			body.classList.add(nameTheme);
			body.classList.toggle("lock");

			// currTheme.classList.add("focus");

			updateLocalStorage("userSettings", new UserSettings(nameTheme));
		}
	};

	selectTheme(target, "dark");
	selectTheme(target, "light");
	selectTheme(target, "dark-2");
});

//Контекстное меню

const rightClickMenu = document.querySelector(".right-click-menu");

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
let key, val;
for ([key, val] of entries) {
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
	color.innerHTML = `<input readonly type="text" data-coloris value='${val.color}'/>`;
	li.appendChild(color);

	let liForTodo = document.createElement("li");
	liForTodo.classList.add("right-click-menu-item");
	liForTodo.classList.add("right-click-menu__todo");
	liForTodo.innerHTML = `
		<h2>Задачи на день:</h2>
		
		<ul class="right-click-menu__todos-wrapper">
		</ul>
		
		<div class="right-click-menu__add-todo-wrapper right-click-menu-item">
			<div></div>
			<div class="input-wrapper">
				<input placeholder="Новый пункт" type="text" class="new-description-task" />
			</div>
			<div class="button-wrapper add-task-btn" >
				<span class="cross"></span>
			</div>
		</div>
	`;

	rightClickMenuItems.appendChild(li);
	rightClickMenuItems.appendChild(liForTodo);
}

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
	(this.date = date),
		(this.shift = shift),
		(this.color = color),
		(this.desc = desc),
		(this.keyNote = key);
}

function UserSettings(theme) {
	this.theme = theme;
}

const updateLocalStorage = (name, data) => {
	localStorage.setItem(name, JSON.stringify(data));
};

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
		// console.log(inputTodo);
		if (inputTodo && inputTodo.value) {
			tasks.push(new Task(inputTodo.value));
			selectedTodoValue = tasks;
			inputTodo.value = "";
		}
		setAttrCurCell(targetItemInTable, tasks);

		pushObjInArr();
		filterArr(arrForUserNotes);
		updateLocalStorage("userNotes", arrForUserNotes);

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
	// console.log(todosWrapper);
	if (todosWrapper) {
		todosWrapper.innerHTML = "";
	}
	if (tasks.length > 0) {
		filterTasks();
		tasks.forEach((item, index) => {
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
				selectedTodoValue = tasks; ///////////////////

				fillHtmlList();
			});

			let btnDel = item.querySelector(".btn-delete");
			btnDel.addEventListener("click", () => {
				tasks.splice(index, 1);
				selectedTodoValue = tasks;
				fillHtmlList();
				setAttrCurCell(targetItemInTable, tasks);
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

		updateLocalStorage("userNotes", arrForUserNotes);

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
			if (
				item.innerHTML == "23" ||
				item.innerHTML == "15" ||
				item.innerHTML == "7" ||
				item.innerHTML == "Д" ||
				item.innerHTML == "У"
			) {
				arrForCount.push(item.innerHTML);
				console.log(arrForCount.length);
			}
		});

		columnShifts.forEach((item, index) => {
			if (item == currentColumnShift) {
				console.log(index);
				calendarCountShifts[index].innerHTML = arrForCount.length;
			}
		});
	}

	if (target.closest(".right-click-menu-item__color input")) {
		target.addEventListener("change", () => {
			let color = target.value;
			target.setAttribute("value", color);
		});
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

//popup
let btns;
const popup = document.querySelector(".popup");
// const idPopup = document.querySelector("#popup");
const popupCloseBtn = document.querySelector(".popup__close");

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

	tasks = JSON.parse(targetItemInTable.getAttribute("data-desc"));
	selectedTodoValue = tasks;

	todosWrapper = popup.querySelector(".right-click-menu__todos-wrapper");

	currentTodo = todosWrapper;
	inputTodo = popup.querySelector(".new-description-task");
	addTaskBtn = popup.querySelector(".add-task-btn");

	fillHtmlList();

	addTask(addTaskBtn);
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

	if (inputTodo.value) {
		tasks.push(new Task(inputTodo.value));
		selectedTodoValue = tasks;
		inputTodo.value = "";
	}

	setAttrCurCell(targetItemInTable, tasks);
	pushObjInArr();
	filterArr(arrForUserNotes);
	updateLocalStorage("userNotes", arrForUserNotes);
	removeClassDescEventListener();
	location.hash = "";
};

popupCloseBtn.addEventListener("click", popupClose);

popup.addEventListener("click", (e) => {
	if (e.target == popup) {
		popupClose();
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
		burger.classList.remove("active");
		burger.style.display = "block";
		burgerWrapper.style.display = "block";
		headerMenu.classList.remove("active");
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
		burger.classList.add("active");
		headerMenu.classList.add("active");
		body.classList.add("lock");
	},
	contextRoute() {},
	monthlistRoute() {
		burger.style.display = "none";
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
