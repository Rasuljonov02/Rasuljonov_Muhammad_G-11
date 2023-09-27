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
	const z = document.createElement("p");
	i++;
	z.className = "task is-dragging";
	z.draggable = "true";
	z.innerText = `Todo# ${i}`;
	todoo.appendChild(z);

	console.log(z);
});
let ii = 4;

btn2.addEventListener("click", (e) => {
	e.preventDefault();
	const zz = document.createElement("p");

	ii++;

	zz.className = "task is-dragging";
	zz.draggable = "true";
	zz.innerText = `Id# ${ii}`;
	inprogress.appendChild(zz);
	console.log(zz);
});
let iii = 4;

btn3.addEventListener("click", (e) => {
	e.preventDefault();
	const zzz = document.createElement("p");

	iii++;

	zzz.className = "task is-dragging";
	zzz.draggable = "true";
	zzz.innerText = `Done# ${iii}`;
	done.appendChild(zzz);
	console.log(zzz);
});

