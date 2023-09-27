const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const todoo = document.querySelector(".todoo");
const inprogress = document.querySelector(".inprogres");
const done = document.querySelector(".done");
const droppables = document.querySelectorAll(".todo"); // katta divlar
const draggables = document.querySelectorAll(".task"); // kichik divlar

draggables.forEach((task) => {
	task.addEventListener("dragstart", () => {
		task.classList.add("is-dragging");
		console.log("drag start");
	});
	task.addEventListener("dragend", () => {
		task.classList.remove("is-dragging");
		console.log("drag end");
	});
});

droppables.forEach((zone) => {
	zone.addEventListener("dragover", (e) => {
		e.preventDefault();

		const bottomTask = insertAboveTask(zone, e.clientY);
		const curTask = document.querySelector(".is-dragging");

		if (!bottomTask) {
			zone.appendChild(curTask);
		} else {
			zone.insertBefore(curTask, bottomTask);
		}
	});
});

const insertAboveTask = (zone, mouseY) => {
	const els = zone.querySelectorAll(".task:not(.is-dragging)");

	let closestTask = null;
	let closestOffset = Number.NEGATIVE_INFINITY;

	els.forEach((task) => {
		const { top } = task.getBoundingClientRect();

		const offset = mouseY - top;

		if (offset < 0 && offset > closestOffset) {
			closestOffset = offset;
			closestTask = task;
		}
	});

	return closestTask;
};

let i = 4;

btn1.addEventListener("click", (e) => {
	e.preventDefault();

	i++;
	let a = `<p class="task" draggable="true">Todo# ${i}</di>`;

	console.log(a);
	todoo.appendChild(a);
});
let ii = 4;

btn2.addEventListener("click", (e) => {
	e.preventDefault();

	ii++;
	let a = `<p class="task" draggable="true">IP#${ii}</di>`;

	console.log(a);
	todoo.appendChild(a);
});
let iii = 4;

btn3.addEventListener("click", (e) => {
	e.preventDefault();

	iii++;
	let a = `<p class="task" draggable="true">Done#${iii}</di>`;

	console.log(a);
	todoo.appendChild(a);
});
