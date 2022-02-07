const body = document.querySelector("body");
const calendar = document.querySelector(".calendar");

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const calendarName = ["", "", "А", "Б", "В", "Г", "Д", "Е"];

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
let calendarA = calendar.querySelector(".calendar-a");
let calendarB = calendar.querySelector(".calendar-b");
let calendarV = calendar.querySelector(".calendar-v");
let calendarG = calendar.querySelector(".calendar-g");
let calendarD = calendar.querySelector(".calendar-d");
let calendarE = calendar.querySelector(".calendar-e");

let calendarCountA = document.querySelector(".calendar-count-a");
let calendarCountB = document.querySelector(".calendar-count-b");
let calendarCountV = document.querySelector(".calendar-count-v");
let calendarCountG = document.querySelector(".calendar-count-g");
let calendarCountD = document.querySelector(".calendar-count-d");

let calendarColumn = calendar.querySelectorAll(".calendar-column");

let arrForUserNotes;

if (!localStorage.userNotes) {
	arrForUserNotes = [];
} else {
	arrForUserNotes = JSON.parse(localStorage.getItem("userNotes"));
}

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
	let calendarWeekDay = calendar.querySelector(".calendar-week-day");
	let calendarDays = calendar.querySelector(".calendar-days");
	let calendarHeaderYear = calendar.querySelector("#year");

	let arrForCountA = [];
	let arrForCountB = [];
	let arrForCountV = [];
	let arrForCountG = [];
	let arrForCountD = [];

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

	calendarColumn.forEach((column, index) => {
		column.innerHTML = "";
		let day = document.createElement("div");
		day.classList.add("calendar-header-day");
		day.innerHTML = calendarName[index];
		column.appendChild(day);
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
	calendarHeaderYear.innerHTML = year;

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

		const fillDay = (shift, key, calendarCount, arrForCount, nameShift) => {
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

			if (i == daysOfMonth[month] - 1) {
				let headerDay = shift.querySelector(".calendar-header-day");
				headerDay.style.width = headerDay.offsetWidth + "px";
				headerDay.style.position = "fixed";
				// setWidthHeaderDay();

				if (calendarCount) {
					calendarCount.innerHTML = arrForCount.length;
				}
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
						if (item.desc) {
							day.setAttribute("data-desc", JSON.stringify(item.desc));
							day.classList.add("desc");
						}

						day.style.backgroundColor = item.color;
					}
				});
			}
		};

		fillDay(calendarA, 15, calendarCountA, arrForCountA, calendarName[2]);
		fillDay(calendarB, 21, calendarCountB, arrForCountB, calendarName[3]);
		fillDay(calendarV, 27, calendarCountV, arrForCountV, calendarName[4]);
		fillDay(calendarG, 18, calendarCountG, arrForCountG, calendarName[5]);
		fillDay(calendarD, 24, calendarCountD, arrForCountD, calendarName[6]);
		fillDay(calendarE);

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

let darkModeToggle = document.querySelector(".dark-mode-switch");

darkModeToggle.onclick = () => {
	body.classList.toggle("light");
	body.classList.toggle("dark");
};

//Burger menu
const burger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__menu");
const burgerWrapper = document.querySelector(".header__burger-wrapper");

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

const getZero = (num) => {
	if (num >= 0 && num < 10) {
		return `0${num}`;
	} else {
		return num;
	}
};
let targetItemInContextMenu;
let selectedDate;
let selectedShift;
let selectedItemInContextMenu;
let selectedColorInContextMenu;
let selectedTodo;

calendarBody.addEventListener("contextmenu", (e) => {
	targetItemInContextMenu = e.target;
	let shift;
	if (targetItemInContextMenu.closest(".calendar-context-menu")) {
		e.preventDefault();
		rightClickMenu.classList.add("active");
		body.classList.add("lock");
		//заполняем даты
		//Объяснение :
		// element.parentNode.children→ Возвращает братьев element, включая этот элемент.
		// Array.from→ Приводит конструктор children к Array объекту
		// indexOf→ Вы можете подать заявку indexOf, потому что теперь у вас есть Array объект.
		let day = Array.from(targetItemInContextMenu.parentNode.children).indexOf(
			targetItemInContextMenu
		);
		rightClickMenuHeaderDay.innerHTML = getZero(day);

		let month = currMonth.value + 1;
		rightClickMenuHeaderMonth.innerHTML = getZero(month);

		rightClickMenuHeaderYear.innerHTML = currYear.value;

		//заполняем название смены в контекстном меню
		shift = targetItemInContextMenu.parentElement.firstChild.innerText;
		rightClickMenuHeaderShift.innerHTML = `"${shift}"`;

		//заполняем поле дней недели
		let dayWeek = new Date(currYear.value, currMonth.value, day).getDay();
		rightClickMenuHeaderDayWeek.innerHTML = dayNames[dayWeek];

		selectedDate = JSON.stringify(
			new Date(currYear.value, currMonth.value, day + 1)
		);
		selectedShift = shift;
	}
});
function UserNotes(date, shift, color, desc, key) {
	(this.date = date),
		(this.shift = shift),
		(this.color = color),
		(this.desc = desc),
		(this.keyNote = key);
}

const updateLocalStorage = (name, data) => {
	localStorage.setItem(name, JSON.stringify(data));
};

rightClickMenuItems.addEventListener("click", (e) => {
	let target = e.target;

	if (target.closest(".right-click-menu-item__btn")) {
		//получаем букву и вставляем в таблицу
		targetItemInContextMenu.innerHTML = target.getAttribute("data-value");

		selectedItemInContextMenu = target.getAttribute("data-value");

		//получаем цвет и устанавливаем в таблицу
		let sibling = target.closest(".right-click-menu-item__btn").nextSibling;

		let input = sibling.querySelector("input");

		targetItemInContextMenu.style.backgroundColor = input.value;
		// targetItemInContextMenu.style.borderRadius = "4px";
		// targetItemInContextMenu.style.marginRight = "3px";
		// targetItemInContextMenu.style.marginLeft = "3px";
		// targetItemInContextMenu.style.marginTop = "1px";
		// targetItemInContextMenu.style.marginBottom = "1px";

		selectedColorInContextMenu = input.value;

		//убираем классы active и очищаем формы  textarea

		let arrows = rightClickMenuItems.querySelectorAll(
			".right-click-menu-item__desc-arrow"
		);
		arrows.forEach((item) => {
			item.classList.remove("active");
		});

		//создание объекта с выбранными данными из контекстного меню и сохраняем в массив
		arrForUserNotes.push(
			new UserNotes(
				selectedDate,
				selectedShift,
				selectedColorInContextMenu,
				selectedTodo,
				selectedItemInContextMenu
			)
		);
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
		filterArr(arrForUserNotes);

		updateLocalStorage("userNotes", arrForUserNotes);
		//при клике на btn добавить атрибут с данными из textarea к ячейке в таблице
	}

	if (target.closest(".right-click-menu-item__color input")) {
		target.addEventListener("change", () => {
			let color = target.value;
			target.setAttribute("value", color);
		});
	}

	//открываем todo в контекстном меню
	if (target.closest(".right-click-menu-item__desc")) {
		let rightClickMenuItem = target.closest(".right-click-menu-item");
		let desc = target.closest(".right-click-menu-item__desc");
		let arrow = desc.querySelector(".right-click-menu-item__desc-arrow");

		arrow.classList.toggle("active");

		let divTodo = rightClickMenuItem.nextSibling;
		divTodo.classList.toggle("active");

		let addTaskBtn = divTodo.querySelector(".add-task-btn");
		let inputTodo = divTodo.querySelector(".new-description-task");
		let todosWrapper = divTodo.querySelector(
			".right-click-menu__todos-wrapper"
		);
		let tasks = [];
		let todoItemElems = [];

		// находим куда надо вставить todo из localstorage
		if (arrForUserNotes.length > 0) {
			arrForUserNotes.forEach((item) => {
				if (selectedDate == item.date && selectedShift == item.shift) {
					let rightClickMenuItemValue = rightClickMenuItems.querySelectorAll(
						".right-click-menu-item__value"
					);

					rightClickMenuItemValue.forEach((menuItem) => {
						if (menuItem.getAttribute("data-value") == item.keyNote) {
							let rightClickMenuItem = menuItem.parentNode.parentNode;
							let todo = rightClickMenuItem.nextSibling;
							let target = todo.querySelector(
								".right-click-menu__todos-wrapper"
							);
							todosWrapper = target;
							console.log(todosWrapper);
						}
					});

					if (item.desc) {
						tasks = item.desc.slice();
					}
				}
			});
		}

		function Task(description) {
			this.description = description;
			this.completed = false;
		}

		const filterTasks = () => {
			const activeTasks =
				tasks.length && tasks.filter((item) => item.completed == false);
			const completedTasks =
				tasks.length && tasks.filter((item) => item.completed == true);
			tasks = [...activeTasks, ...completedTasks];
		};

		const fillHtmlList = () => {
			todosWrapper.innerHTML = "";
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
				todoItemElems = divTodo.querySelectorAll(".todo-item");
				todoItemElems.forEach((item, index) => {
					let checkbox = item.querySelector(".custom-checkbox label");

					checkbox.addEventListener("click", () => {
						tasks[index].completed = !tasks[index].completed;
						if (tasks[index].completed) {
							todoItemElems[index].classList.add("checked");
						} else {
							todoItemElems[index].classList.remove("checked");
						}
						fillHtmlList();
					});

					let btnDel = item.querySelector(".btn-delete");
					btnDel.addEventListener("click", () => {
						tasks.splice(index, 1);
						fillHtmlList();
					});
				});
			}
		};

		fillHtmlList();

		addTaskBtn.addEventListener("click", () => {
			if (inputTodo.value) {
				tasks.push(new Task(inputTodo.value));
				selectedTodo = tasks;
			}
			fillHtmlList();
			inputTodo.value = "";
		});
	}
});

rightClickMenu.addEventListener("click", (e) => {
	let targetItem = e.target;
	if (targetItem.closest(".close-menu")) {
		rightClickMenu.classList.remove("active");
		body.classList.remove("lock");
	}
});

//popup
const btns = document.querySelectorAll(".desc");
const popup = document.querySelector(".popup");
const popupCloseBtn = document.querySelector(".popup__close");

function popupOpen(e) {
	let descValue = e.target.getAttribute("data-desc");
	let popupDesc = popup.querySelector(".popup__desc");
	popupDesc.innerHTML = descValue;

	console.log(popupDesc);
	console.log(descValue);
	popup.classList.remove("hide");
	popup.classList.add("show");
	document.body.style.overflow = "hidden";
	body.style.paddingRight = scrollWidth + "px";
}

btns.forEach((btn) => {
	btn.addEventListener("click", popupOpen);
});

function popupClose() {
	popup.classList.remove("show");
	popup.classList.add("hide");
	document.body.style.overflow = "";
	body.style.paddingRight = 0;
}

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

//todo

// let addTaskBtn;
// let deskTaskInput;
// let todosWrapper;

// let tasks ;
// !localStorage.tasks
// 	? (tasks = [])
// 	: (tasks = JSON.parse(localStorage.getItem("tasks")));

// let todoItemElems = [];
// function Task(description) {
// 	this.description = description;
// 	this.completed = false;
// }

// const createTemplate = (task, index) => {
// return `
// 		<li class="todo-item right-click-menu-item ${task.completed ? "checked" : ""}">
//     		<div class="custom-checkbox">
//           		<input onclick="completeTask(${index})"
// 				   class="btn-complete" type="checkbox" id="${index}" ${
// 	task.completed ? "checked" : ""
// }/>
//         		<label for="${index}"></label>
//     		</div>
//       		<div class="description" contenteditable="true">${
// 							task.description
// 						}</div>
// 			<div onclick="deleteTask(${index})" class="btn-delete"><span class="cross"></span></div>
//     	</li>
// 		`;
// };

// const filterTasks = () => {
// 	const activeTasks =
// 		tasks.length && tasks.filter((item) => item.completed == false);
// 	const completedTasks =
// 		tasks.length && tasks.filter((item) => item.completed == true);
// 	tasks = [...activeTasks, ...completedTasks];
// };

// const fillHtmlList = () => {
// 	todosWrapper.innerHTML = "";
// 	if (tasks.length > 0) {
// 		filterTasks();
// 		tasks.forEach((item, index) => {
// 			todosWrapper.innerHTML += createTemplate(item, index);
// 		});
// 		todoItemElems = document.querySelectorAll(".todo-item");
// 	}
// };

// fillHtmlList();

// const updateLocal = () => {
// 	localStorage.setItem("tasks", JSON.stringify(tasks));
// };

// const completeTask = (index) => {
// 	tasks[index].completed = !tasks[index].completed;
// 	if (tasks[index].completed) {
// 		todoItemElems[index].classList.add("checked");
// 	} else {
// 		todoItemElems[index].classList.remove("checked");
// 	}
// 	updateLocal();
// 	fillHtmlList();
// };

// const deleteTask = (index) => {
// 	tasks.splice(index, 1);
// 	updateLocal();
// 	fillHtmlList();
// };

// addTaskBtn.addEventListener("click", () => {
// 	if (deskTaskInput.value) {
// 		tasks.push(new Task(deskTaskInput.value));
// 	}

// 	updateLocal();
// 	fillHtmlList();
// 	deskTaskInput.value = "";
// });

// document.addEventListener("keydown", (e) => {
// 	if (e.keyCode == 13 && deskTaskInput.value) {
// 		tasks.push(new Task(deskTaskInput.value));

// 		updateLocal();
// 		fillHtmlList();
// 		deskTaskInput.value = "";
// 	}
// });

// document.addEventListener("click", (e) => {
// 	if (!e.target.closest(".input-wrapper") && deskTaskInput.value) {
// 		tasks.push(new Task(deskTaskInput.value));

// 		updateLocal();
// 		fillHtmlList();
// 		deskTaskInput.value = "";
// 	}
// });
