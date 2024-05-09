"use strict";
const textBox = document.querySelector("#text_box");
const btnAdd = document.querySelector("#btn_add");
const tasksContainer = document.querySelector(".tasks_container");

const tasks = [];

const renderToDoList = function () {
	const task = textBox.value;
	const date = document.querySelector("#date");
	let innerHtml = ``;

	if (task != "" && date.value != "") {
		const listObject = {
			nameOfTask: task,
			dateOfTask: date.value,
		};
		tasks.push(listObject);
	}

	for (let i = 0; i < tasks.length; i++) {
		const html = `
            <div>
                <p>${i + 1}. ${tasks[i].nameOfTask}</p>
                <p>${tasks[i].dateOfTask}</p>
                <button class="btn_delete" onclick="
                tasks.splice(${i}, 1);
                renderToDoList();
                ">Delete
                </button>
            </div>`;

		innerHtml += html;
		textBox.value = "";
	}
    date.value = "";
	tasksContainer.innerHTML = innerHtml;
};

btnAdd.addEventListener("click", renderToDoList.bind(null));
