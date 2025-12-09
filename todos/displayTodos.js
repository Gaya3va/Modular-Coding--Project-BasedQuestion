export function displayTodos(data, container){
container.innerHTML = '';
if(!Array.isArray(data)){
container.textContent = 'No todos to display.';
return;
}


data.forEach(todo => {
const div = document.createElement('div');
div.className = 'todo' + (todo.completed ? ' completed' : '');


const left = document.createElement('div');
left.style.display = 'flex';
left.style.alignItems = 'center';


const checkbox = document.createElement('input');
checkbox.type = 'checkbox';
checkbox.checked = !!todo.completed;
checkbox.disabled = true;


const title = document.createElement('div');
title.className = 'title';
title.textContent = todo.title;


left.appendChild(checkbox);
left.appendChild(title);


const meta = document.createElement('div');
meta.textContent = `#${todo.id} user:${todo.userId}`;
meta.style.marginLeft = '12px';
meta.style.fontSize = '12px';
meta.style.color = '#666';


div.appendChild(left);
div.appendChild(meta);


container.appendChild(div);
});
}