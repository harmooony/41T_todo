let todo_label = document.getElementById('todo');
let done_label = document.getElementById('done');
let num = 0;
let num_done = 0;

let itemsList = document.querySelector("ul");
let DoneItemsList = document.getElementById("done_ul")

let notes_list;

function notes_add() {
    var notetext = document.querySelector(".add_txt").value;

    if (notetext === "") {
        return;
    }

    const li = document.createElement('li');
        li.innerHTML = `
                <p class="todo_txt">${notetext}</p>
                <div class="todo_btns">
                    <img src="images/Check.png" class="todo_photo" id="complete">
                    <img src="images/TrashSimple.png" class="todo_photo" id="delete">
                </div>
        `;
    itemsList.appendChild(li);

    li.querySelector('#complete').addEventListener('click', () => completeTask(li));
    li.querySelector('#delete').addEventListener('click', () => deleteTask(li));

    save_tasks();
    count_tasks();
}

function completeTask(task) {
    let text = task.querySelector("p").innerText;
    task.remove();

    const li = document.createElement('li');
        li.innerHTML = `
            <s class="todo_txt_done">${text}</s>
        `
    DoneItemsList.appendChild(li);
    save_tasks();
    count_tasks();
}

function deleteTask(task) {
    task.remove();
    save_tasks();
    count_tasks();
}

function save_tasks() {
    const tasks = [];
    itemsList.querySelectorAll("li").forEach(li => {
        tasks.push({text: li.querySelector("p").innerText, completed: false})
    })
    DoneItemsList.querySelectorAll("li").forEach(li => {
        tasks.push({text: li.querySelector("s").innerText, completed: true})
    })
    localStorage.setItem("tasks_list", JSON.stringify(tasks));
}

function load_all_tasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks_list')) || [];

    tasks.forEach(task => {
        if (task.completed) {
            const li = document.createElement('li');
                li.innerHTML = `
                    <s class="todo_txt_done">${task.text}</s>
                `
            DoneItemsList.appendChild(li);
        }

        else {
            const li = document.createElement('li');
            li.innerHTML = `
                <p class="todo_txt">${task.text}</p>
                <div class="todo_btns">
                    <img src="images/Check.png" class="todo_photo" id="complete">
                    <img src="images/TrashSimple.png" class="todo_photo" id="delete">
                </div>
                `;
                itemsList.appendChild(li);
                li.querySelector('#complete').addEventListener('click', () => completeTask(li));
                li.querySelector('#delete').addEventListener('click', () => deleteTask(li));
        }

    })

    count_tasks();

}


function count_tasks() {
    todo_label.innerText = `Tasks to do - ${itemsList.children.length}`
    done_label.innerText = `Done - ${DoneItemsList.children.length}`
}