function onReady() {
  let storedToDo = localStorage.getItem("complete");
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  // if (storedToDo != null) {
  //   toDos = JSON.parse(storedToDo);
  // }

  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    newToDoText.value = '';
    id++;

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');


    toDoList.textContent = '';

    toDos.forEach(function (toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      const deleteBtn = document.createElement('button');


      checkbox.type = "checkbox";
      checkbox.checked = toDo.complete;

      newLi.textContent = toDo.title;
      deleteBtn.textContent = 'delete';

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);

      deleteBtn.addEventListener('click', event => {
        event.preventDefault();

        var delToDos = toDos.filter(item => {
          toDos.id !== item.id;
          toDos.length = 0;
          [].push.apply(toDos, delToDos);
        })
        renderTheUI();
        // localStorage.setItem("complete", JSON.stringify(toDos));
      })
    });


    // checkbox.addEventListener('change', () => {
    //   if (checkbox.checked) {
    //     toDos.complete = true;
    //   } else {
    //     toDos.complete = false;
    //   }
    //   localStorage.setItem("complete", JSON.stringify(toDos));
    // })

  }


  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();
}

window.onload = function () {
  onReady();
}