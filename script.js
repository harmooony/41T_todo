let todo_label = document.getElementById('todo');
let done_label = document.getElementById('done');
let num = 0;
let num_done = 0;

function notes_add() {
    var notetext = document.querySelector(".add_txt").value;

    var todo = document.createElement('div');
    todo.classList.add('todo');

    var wrapper = document.createElement('div');
    wrapper.classList.add('todo_wrapper');

    var btns_cont = document.createElement('div');
    btns_cont.classList.add('todo_btns')

    var notetext_cont = document.createElement('p');
    notetext_cont.classList.add('todo_txt');
    notetext_cont.textContent = notetext;

    var check = document.createElement('img');
    check.src = 'images/Check.png';
    check.classList.add('todo_photo')

    var trash = document.createElement('img');
    trash.src = 'images/TrashSimple.png';
    trash.classList.add('todo_photo')

    btns_cont.appendChild(check);
    btns_cont.appendChild(trash);

    wrapper.appendChild(notetext_cont);
    wrapper.appendChild(btns_cont);

    todo.appendChild(wrapper);

    check.addEventListener('click', function() {
        var done_cont = document.querySelector('.todo_container_done');

        var done_task_cont = document.createElement("div");
        done_task_cont.classList.add('todo')

        var done_task = document.createElement("div");
        done_task.classList.add('todo_wrapper_done');

        var done_task_txt = document.createElement("s");
        done_task_txt.textContent = notetext;
        done_task_txt.classList.add('todo_txt_done');

        done_task.appendChild(done_task_txt)

        done_task_cont.appendChild(done_task)

        done_cont.appendChild(done_task_cont);

        todo.remove();
        num -= 1;
        num_done += 1;
        todo_label.innerText = "Tasks to do - " + num;
        done_label.innerText = "Done - " + num_done;
    })

    var todo_cont = document.querySelector('.todo_container');
    todo_cont.appendChild(todo);

    trash.addEventListener('click', function() {
        todo.remove();
        num -= 1;
        todo_label.innerText = "Tasks to do - " + num;
    })
    num += 1;
    todo_label.innerText = "Tasks to do - " + num;
    done_label.innerText = "Done - " + num_done;
    console.log(num);
}