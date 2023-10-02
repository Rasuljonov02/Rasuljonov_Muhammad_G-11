const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const todoo = document.querySelector(".todoo");
const inprogress = document.querySelector(".inprogres");
const done = document.querySelector(".done");
const droppables = document.querySelectorAll(".todo");
const draggables = document.querySelectorAll(".task");

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
let ii = 4;
let iii = 4;

btn1.addEventListener("click", (e) => {
	i++;
	let create = document.createElement("p");
	create.className = "task";
	create.draggable = true;
	create.innerText = `todo #${i}`;
	todoo.appendChild(create);
	console.log(create);
	create.addEventListener("dragstart", () => {
		create.classList.add("is-dragging");
		console.log(start);
	});
	create.addEventListener("dragend", () => {
		create.classList.remove("is-dragging");
		console.log(finisg);
	});
});

btn2.addEventListener("click", (e) => {
	ii++;
	let create = document.createElement("p");
	create.className = "task";
	create.draggable = true;
	create.innerText = `IP #${ii}`;
	inprogress.appendChild(create);
	console.log(create);
	create.addEventListener("dragstart", () => {
		create.classList.add("is-dragging");
		console.log(start);
	});
	create.addEventListener("dragend", () => {
		create.classList.remove("is-dragging");
		console.log(finisg);
	});
});

btn3.addEventListener("click", (e) => {
	iii++;
	let create = document.createElement("p");
	create.className = "task";
	create.draggable = true;
	create.innerText = `Done #${iii}`;
	done.appendChild(create);
	console.log(create);
	create.addEventListener("dragstart", () => {
		create.classList.add("is-dragging");
		console.log(start);
	});
	create.addEventListener("dragend", () => {
		create.classList.remove("is-dragging");
		console.log(finisg);
	});
});
