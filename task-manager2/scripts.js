const taskName = document.querySelector('.task-name');
const ul = document.querySelector('ul');
const form = document.querySelector('#add');
const lineThroughButton = document.querySelector('.main_button_line-through');
const save = document.querySelector('.main_button_save');
const restore = document.querySelector('.main_button_restore')
const tasks = [];

form.addEventListener('submit', (event) => {
  event.preventDefault();
  let li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.type = 'checkbox';
  li.innerText = taskName.value;
  li.prepend(checkBox);
  ul.appendChild(li);
  checkBox.addEventListener('click', () => {
    li.classList.toggle('throughed');
    if (checkBox.checked) {
      ul.append(li);
    } else {
      ul.prepend(li);
    }
  });
  taskName.value = '';
});

lineThroughButton.addEventListener('click', () => {
  let lis = document.querySelectorAll('li');
  lis.forEach(li => {
    li.style.textDecoration = 'line-through';
  });
})

save.addEventListener('click', () => {
  let lis = document.querySelectorAll('li');
  console.log(lis)
  lis.forEach(item => {
    tasks.push(item.innerText);
  })
  console.log(tasks)
  console.log(JSON.stringify(tasks));
  console.log(localStorage.tasks = JSON.stringify(tasks));
})

restore.addEventListener('click', () => {
  let savedTasks = JSON.parse(localStorage.tasks);
  savedTasks.forEach(element => {
    let li = document.createElement('li');
    li.innerText = element;
    ul.appendChild(li);
  })
})